import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMapPin, HiOutlineClock, HiOutlineChevronRight, HiOutlineGlobeAsiaAustralia, HiOutlineXMark } from 'react-icons/hi2';
import { GoogleMap, useJsApiLoader, Marker, Autocomplete } from '@react-google-maps/api';

const libraries = ['places'];
const mapContainerStyle = { width: '100%', height: '300px', borderRadius: '1.5rem' };
function Step2Schedule({ data, setData, onNext, onBack }) {
    const [isMapOpen, setIsMapOpen] = useState(false);
    const [tempLocation, setTempLocation] = useState({ 
        address: data.address, 
        lat: data.lat || 9.9312, 
        lng: data.lng || 76.2673 
    });

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY", // Replace with your key
        libraries
    });

    const [autocomplete, setAutocomplete] = useState(null);

const onPlaceChanged = () => {
    if (autocomplete) {
        const place = autocomplete.getPlace();
        if (place.geometry) {
            const lat = place.geometry.location.lat();
            const lng = place.geometry.location.lng();
            setTempLocation({ 
                address: place.formatted_address, 
                lat, 
                lng 
            });
        }
    }
};
    // DATE GENERATION (Next 7 Days)
    const realtimeDates = useMemo(() => {
        const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
        const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        return Array.from({ length: 7 }, (_, i) => {
            const d = new Date();
            d.setDate(d.getDate() + i);
            return {
                day: days[d.getDay()],
                date: d.getDate(),
                month: months[d.getMonth()],
                raw: d.toDateString() // Used for unique selection
            };
        });
    }, []);


    const timeSlots = useMemo(() => {
        const slots = [
            { id: 'Morning', time: '08:00 - 11:00', start: 8 },
            { id: 'Afternoon', time: '12:00 - 15:00', start: 12 },
            { id: 'Evening', time: '16:00 - 19:00', start: 16 },
            { id: 'Night', time: '19:00 - 21:00', start: 19 },
        ];

        const isToday = data.selectedRawDate === new Date().toDateString();
        const currentHour = new Date().getHours();

        // if today is selected only todays remaining time will be shown
        return isToday ? slots.filter(s => s.start > currentHour) : slots;
    }, [data.selectedRawDate]);

    return (
        <div className="space-y-6 md:space-y-8 lg:space-y-10">
            {/* LIVE GEOLOCATION NODE */}
            <section className="group">
                <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-4 md:mb-6">
                    <div>
                        <h3 className="text-[8px] md:text-[9px] lg:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-gray-400">Dispatch_Location_Node</h3>
                        <p className="text-[7px] md:text-[8px] lg:text-[9px] font-mono text-[#2D6A4F] mt-1">
                            LAT_{data.lat?.toFixed(4) || '9.9312'} // LONG_{data.lng?.toFixed(4) || '76.2673'}
                        </p>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3 bg-gray-50 dark:bg-white/5 px-3 md:px-4 py-2 rounded-full border border-gray-100 dark:border-white/5">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2D6A4F]"></span>
                        </span>
                        <span className="text-[7px] md:text-[8px] lg:text-[9px] font-mono font-black text-slate-800 dark:text-white tracking-widest">SIGNAL_STABLE</span>
                    </div>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-12 h-auto md:h-80 w-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-gray-200 dark:border-white/5 bg-white dark:bg-[#080808] shadow-2xl gap-4 md:gap-0">
                    <div className="relative md:col-span-8 bg-slate-50 dark:bg-[#0c0c0c] md:border-r border-gray-100 dark:border-white/5 overflow-hidden h-48 md:h-auto">
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#2D6A4F 1px, transparent 1px), linear-gradient(90deg, #2D6A4F 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                        <motion.div initial={{ top: "-10%" }} animate={{ top: "110%" }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="absolute left-0 w-full h-[2px] bg-[#2D6A4F] blur-sm z-10 shadow-[0_0_15px_#2D6A4F]" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <HiOutlineMapPin className="text-3xl md:text-4xl text-[#2D6A4F] relative z-20 drop-shadow-[0_0_10px_rgba(45,106,79,0.5)]" />
                        </div>
                    </div>

                    <div className="md:col-span-4 p-4 md:p-6 lg:p-8 flex flex-col justify-between">
                        <div className="space-y-4 md:space-y-6">
                            <div>
                                <p className="text-[7px] md:text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1 md:mb-2">Primary_Ref</p>
                                <h4 className="text-base md:text-lg font-bold text-slate-900 dark:text-white font-serif italic leading-tight truncate">
                                    {data.address?.split(',')[0] || "Select Location"}
                                </h4>
                                <p className="text-[8px] md:text-[9px] lg:text-[10px] text-gray-500 mt-1 line-clamp-2 leading-relaxed">{data.address}</p>
                            </div>
                            <div className="pt-4 md:pt-6 border-t border-gray-100 dark:border-white/5">
                                <p className="text-[7px] md:text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1 md:mb-2">Network_Entry</p>
                                <p className="text-xs md:text-xs font-mono font-bold text-[#2D6A4F]">{data.node}</p>
                            </div>
                        </div>
                        <button 
                            onClick={() => setIsMapOpen(true)}
                            className="w-full py-3 md:py-4 bg-[#1A1A1A] dark:bg-white text-white dark:text-black rounded-lg md:rounded-xl text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] hover:bg-[#2D6A4F] hover:text-white transition-all shadow-lg"
                        >
                            Relocate
                        </button>
                    </div>
                </div>
            </section>

            {/* map modal */}
            <AnimatePresence>
                {isMapOpen && isLoaded && (
                    <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-3 md:p-6"
                    >
                        <motion.div 
                            initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }}
                            className="bg-white dark:bg-[#111] w-full max-w-2xl rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-white/10"
                        >
                            <div className="p-4 md:p-8 border-b border-gray-100 dark:border-white/5 flex justify-between items-center">
                                <h3 className="text-[8px] md:text-[10px] font-black uppercase tracking-widest">Geolocation_Terminal</h3>
                                <button onClick={() => setIsMapOpen(false)} className="text-gray-400 hover:text-white"><HiOutlineXMark size={20} className="md:w-6 md:h-6"/></button>
                            </div>

                            <div className="p-4 md:p-8 space-y-4 md:space-y-6">
                                <Autocomplete onLoad={setAutocomplete} onPlaceChanged={onPlaceChanged}>
                                    <input 
                                        type="text" placeholder="Search Kochi regions..." 
                                        className="w-full p-3 md:p-5 bg-gray-50 dark:bg-white/5 rounded-lg md:rounded-2xl border border-gray-100 dark:border-white/10 outline-none focus:border-[#2D6A4F] text-sm"
                                    />
                                </Autocomplete>

                                <GoogleMap
                                    mapContainerStyle={mapContainerStyle}
                                    center={{ lat: tempLocation.lat, lng: tempLocation.lng }}
                                    zoom={15}
                                    options={{ disableDefaultUI: true }}
                                >
                                    <Marker position={{ lat: tempLocation.lat, lng: tempLocation.lng }} draggable={true} />
                                </GoogleMap>

                                <button 
                                    onClick={() => {
                                        setData({ ...data, address: tempLocation.address, lat: tempLocation.lat, lng: tempLocation.lng });
                                        setIsMapOpen(false);
                                    }}
                                    className="w-full py-4 md:py-6 bg-[#2D6A4F] text-white rounded-lg md:rounded-[2rem] font-black text-[8px] md:text-[10px] uppercase tracking-widest shadow-xl shadow-green-900/20"
                                >
                                    Confirm_Location_Update
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <section>
                <h3 className="text-[8px] md:text-[9px] lg:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-gray-400 mb-4 md:mb-6">Temporal_Sequence // 7_Day_Window</h3>
                <div className="flex gap-2 md:gap-4 overflow-hidden pb-4 no-scrollbar snap-x ">
                    {realtimeDates.map((d) => (
                        <button
                            key={d.raw}
                            onClick={() => setData({ ...data, date: d.date, month: d.month, day: d.day, selectedRawDate: d.raw })}
                            className={`min-w-[100px] md:min-w-[125px] p-5 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] border-2 transition-all duration-500 flex flex-col items-center gap-2 md:gap-3 snap-center
                                ${data.selectedRawDate === d.raw
                                    ? 'bg-[#1A1A1A] border-[#1A1A1A] text-white shadow-2xl scale-105'
                                    : 'bg-white dark:bg-[#111] border-gray-100 dark:border-white/5 text-gray-900 dark:text-white hover:border-[#2D6A4F]/40'}`}
                        >
                            <span className="text-[7px] md:text-[9px] font-black tracking-widest uppercase">{d.day}</span>
                            <span className="text-2xl md:text-4xl font-serif italic leading-none">{d.date}</span>
                            <span className="text-[7px] md:text-[9px] font-bold opacity-60 tracking-widest">{d.month}</span>
                        </button>
                    ))}
                </div>
            </section>

            <section>
                <h3 className="text-[8px] md:text-[9px] lg:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-gray-400 mb-4 md:mb-6">Execution_Window // Availablity_Matrix</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    {timeSlots.length > 0 ? timeSlots.map((s) => (
                        <div
                            key={s.id}
                            onClick={() => setData({ ...data, slot: s.id })}
                            className={`p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] border-2 cursor-pointer transition-all flex items-center gap-3 md:gap-5
                                ${data.slot === s.id
                                    ? 'border-[#2D6A4F] bg-[#2D6A4F]/5 shadow-lg shadow-green-900/5'
                                    : 'border-gray-50 dark:border-white/5 bg-gray-50/50 hover:bg-white dark:hover:bg-white/5'}`}
                        >
                            <div className={`w-8 md:w-10 h-8 md:h-10 rounded-lg md:rounded-xl flex items-center justify-center text-lg md:text-xl transition-all
                                ${data.slot === s.id ? 'bg-[#2D6A4F] text-white shadow-lg' : 'bg-white dark:bg-white/5 text-gray-900'}`}>
                                <HiOutlineClock />
                            </div>
                            <div>
                                <h5 className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-slate-800 dark:text-white">{s.id}</h5>
                                <p className="text-[7px] md:text-[10px] font-mono text-gray-400 mt-1 uppercase tracking-tighter">{s.time}</p>
                            </div>
                        </div>
                    )) : (
                        <div className="col-span-1 md:col-span-2 p-6 md:p-10 text-center bg-gray-50 dark:bg-white/5 rounded-[1.5rem] md:rounded-[2rem] border border-dashed border-gray-200 dark:border-white/10">
                            <p className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-gray-400">Terminal offline for today. Please select a future date.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* NAVIGATION ACTIONS */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-6 md:pt-10">
                <button onClick={onBack} className="flex-1 py-4 md:py-6 rounded-[1.5rem] md:rounded-[2rem] border border-gray-100 dark:border-white/5 text-[8px] md:text-[10px] font-black uppercase tracking-widest text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 transition-all">Re-evaluate</button>
                <button
                    onClick={onNext}
                    disabled={!data.slot || !data.selectedRawDate}
                    className="flex-[1.5] sm:flex-[2] bg-[#2D6A4F] text-white py-4 md:py-6 rounded-[1.5rem] md:rounded-[2rem] font-black text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.4em] flex items-center justify-center gap-2 md:gap-3 shadow-xl shadow-green-900/20 active:scale-[0.98] disabled:opacity-20 transition-all"
                >
                    Validate_Session <HiOutlineChevronRight className="text-sm md:text-lg" />
                </button>
            </div>
        </div>
    );
}

export default Step2Schedule;