import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
    HiOutlineMapPin, 
    HiOutlineClock, 
    HiOutlineChevronLeft, 
    HiOutlineBolt, 
    HiOutlineShieldCheck, 
    HiOutlineXMark,
    HiBars3,
    HiOutlineChevronRight
} from 'react-icons/hi2';
import { GoogleMap, useJsApiLoader, Marker, Autocomplete } from '@react-google-maps/api';
import Footer from '../../components/Footer';
import Sidebar from '../../components/Sidebar';

const libraries = ['places'];
const mapContainerStyle = { width: '100%', height: '300px', borderRadius: '1.5rem' };

const InstantPickup = () => {
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isMapOpen, setIsMapOpen] = useState(false);

    // --- LOGIC FROM STEP 2 ---
    const [data, setData] = useState({
        address: "Select Pickup Location",
        lat: 9.9312,
        lng: 76.2673,
        date: null,
        month: null,
        day: null,
        selectedRawDate: new Date().toDateString(), // Default to today
        slot: null,
        node: "NODE_KCH_04"
    });

    const [tempLocation, setTempLocation] = useState({ 
        address: data.address, 
        lat: data.lat, 
        lng: data.lng 
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
                setTempLocation({ address: place.formatted_address, lat, lng });
            }
        }
    };

    // 7-Day Window Generation
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
                raw: d.toDateString()
            };
        });
    }, []);

    // Availability Matrix Logic
    const timeSlots = useMemo(() => {
        const slots = [
            { id: 'Morning', time: '08:00 - 11:00', start: 8 },
            { id: 'Afternoon', time: '12:00 - 15:00', start: 12 },
            { id: 'Evening', time: '16:00 - 19:00', start: 16 },
            { id: 'Night', time: '19:00 - 21:00', start: 19 },
        ];
        const isToday = data.selectedRawDate === new Date().toDateString();
        const currentHour = new Date().getHours();
        return isToday ? slots.filter(s => s.start > currentHour) : slots;
    }, [data.selectedRawDate]);

    return (
        <div className="flex flex-col min-h-screen bg-[#F8FAF8] dark:bg-[#050505] text-[#1a1a1a] dark:text-white">
            <div className="flex flex-1 overflow-hidden">
                
                {/* SIDEBAR */}
                <div className={`fixed inset-y-0 left-0 z-50 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out bg-white dark:bg-[#0A0A0A]`}>
                    <Sidebar isOpen={true} />
                </div>

                <main className="flex-1 relative flex flex-col min-w-0 w-full overflow-y-auto overflow-x-hidden">
                    
                    {/* Header bar for mobile */}
                    <div className="lg:hidden flex items-center px-6 py-4 bg-white/50 dark:bg-black/50 backdrop-blur-sm sticky top-0 z-30 border-b border-black/5">
                        <button onClick={() => setIsSidebarOpen(true)} className="p-2 rounded-xl bg-white dark:bg-white/5 border border-black/5">
                            <HiBars3 size={24} />
                        </button>
                        <span className="ml-4 font-serif italic text-lg text-[#2D6A4F]">Akri</span>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 md:px-10 py-8 md:py-16 w-full">
                        <header className="flex items-center gap-6 mb-12">
                            <motion.button
                                whileHover={{ x: -4 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => navigate('/dashboard')}
                                className="p-3 rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 hover:bg-[#2D6A4F] hover:text-white transition-all shadow-sm"
                            >
                                <HiOutlineChevronLeft size={20} />
                            </motion.button>
                            <h2 className="text-2xl md:text-4xl font-serif italic tracking-tight">Instant Pickup</h2>
                        </header>

                        <div className="grid lg:grid-cols-12 gap-12">
                            
                            {/* LEFT: SELECTION PANELS (STEP 2 FEATURES) */}
                            <div className="lg:col-span-8 space-y-12">
                                
                                {/* 1. DISPATCH LOCATION NODE */}
                                <section>
                                    <div className="flex justify-between items-end mb-6">
                                        <div>
                                            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Dispatch_Location_Node</h3>
                                            <p className="text-[9px] font-mono text-[#2D6A4F] mt-1 uppercase">SIGNAL_STABLE // LAT_{data.lat.toFixed(2)}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="grid md:grid-cols-12 rounded-[2.5rem] overflow-hidden border border-black/5 dark:border-white/5 bg-white dark:bg-[#0A0A0A] shadow-xl">
                                        <div className="md:col-span-7 h-56 md:h-80 bg-slate-50 dark:bg-[#0c0c0c] relative overflow-hidden">
                                            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#2D6A4F 1px, transparent 1px), linear-gradient(90deg, #2D6A4F 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                                            <motion.div initial={{ top: "-10%" }} animate={{ top: "110%" }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="absolute left-0 w-full h-[1px] bg-[#2D6A4F] z-10" />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <HiOutlineMapPin className="text-4xl text-[#2D6A4F] animate-bounce" />
                                            </div>
                                        </div>
                                        <div className="md:col-span-5 p-8 flex flex-col justify-between">
                                            <div className="space-y-6">
                                                <div>
                                                    <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-2">Primary_Ref</p>
                                                    <h4 className="text-xl font-serif italic leading-tight truncate">{data.address.split(',')[0]}</h4>
                                                    <p className="text-[10px] text-gray-500 mt-2 line-clamp-2 leading-relaxed">{data.address}</p>
                                                </div>
                                                <div className="pt-6 border-t border-black/5 dark:border-white/5">
                                                    <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-2">Network_Entry</p>
                                                    <p className="text-xs font-mono font-bold text-[#2D6A4F]">{data.node}</p>
                                                </div>
                                            </div>
                                            <button 
                                                onClick={() => setIsMapOpen(true)}
                                                className="mt-8 w-full py-4 bg-[#1A1A1A] dark:bg-white text-white dark:text-black rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#2D6A4F] hover:text-white transition-all"
                                            >
                                                Relocate
                                            </button>
                                        </div>
                                    </div>
                                </section>

                                {/* 2. TEMPORAL SEQUENCE */}
                                <section className="space-y-6">
                                    <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Temporal_Sequence // 7_Day_Window</h3>
                                    <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                                        {realtimeDates.map((d) => (
                                            <button
                                                key={d.raw}
                                                onClick={() => setData({ ...data, date: d.date, month: d.month, day: d.day, selectedRawDate: d.raw, slot: null })}
                                                className={`min-w-[120px] p-8 rounded-[2.2rem] border-2 transition-all duration-500 flex flex-col items-center gap-3
                                                    ${data.selectedRawDate === d.raw
                                                        ? 'bg-[#1A1A1A] border-[#1A1A1A] text-white shadow-2xl scale-105'
                                                        : 'bg-white dark:bg-white/5 border-black/5 text-gray-400'}`}
                                            >
                                                <span className="text-[9px] font-black tracking-widest uppercase opacity-60">{d.day}</span>
                                                <span className="text-3xl font-serif italic">{d.date}</span>
                                                <span className="text-[9px] font-bold tracking-widest">{d.month}</span>
                                            </button>
                                        ))}
                                    </div>
                                </section>

                                {/* 3. AVAILABILITY MATRIX */}
                                <section className="space-y-6">
                                    <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Execution_Window // Availablity_Matrix</h3>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {timeSlots.length > 0 ? timeSlots.map((s) => (
                                            <div
                                                key={s.id}
                                                onClick={() => setData({ ...data, slot: s.id, timeLabel: s.time })}
                                                className={`p-6 rounded-[2rem] border-2 cursor-pointer transition-all flex items-center gap-5
                                                    ${data.slot === s.id
                                                        ? 'border-[#2D6A4F] bg-[#2D6A4F]/5'
                                                        : 'border-black/5 bg-white dark:bg-[#0A0A0A] hover:border-[#2D6A4F]/30'}`}
                                            >
                                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl transition-all
                                                    ${data.slot === s.id ? 'bg-[#2D6A4F] text-white' : 'bg-gray-100 dark:bg-white/5 text-gray-400'}`}>
                                                    <HiOutlineClock />
                                                </div>
                                                <div>
                                                    <h5 className="text-[10px] font-black uppercase tracking-widest">{s.id}</h5>
                                                    <p className="text-[10px] font-mono text-gray-400 mt-1 uppercase">{s.time}</p>
                                                </div>
                                            </div>
                                        )) : (
                                            <div className="col-span-full p-10 text-center bg-red-500/5 rounded-[2rem] border border-dashed border-red-500/20">
                                                <p className="text-[9px] font-black uppercase tracking-widest text-red-500/60">Terminal Offline for today. Select tomorrow's sequence.</p>
                                            </div>
                                        )}
                                    </div>
                                </section>
                            </div>

                            {/* RIGHT: SUMMARY CARD */}
                            <div className="lg:col-span-4 lg:sticky lg:top-8 h-fit">
                                <div className="bg-[#0D0D0D] dark:bg-[#0F110F] rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#2D6A4F] to-transparent animate-scan" />
                                    
                                    <div className="space-y-10 relative z-10">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-[#2D6A4F]/20 flex items-center justify-center text-[#52B788] border border-[#2D6A4F]/30">
                                                <HiOutlineBolt size={24} className="animate-pulse" />
                                            </div>
                                            <div>
                                                <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-[#52B788]">Priority_Request</h4>
                                                <p className="text-[9px] text-white/40 uppercase font-mono tracking-tighter">Instant_Verification_Ready</p>
                                            </div>
                                        </div>

                                        <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/5 space-y-6">
                                            <div>
                                                <p className="text-[9px] font-black uppercase tracking-widest text-white/30 mb-2">Selected_Node</p>
                                                <p className="text-xl font-serif italic">{data.month || '---'} {data.date || '--'}</p>
                                                <p className="text-[10px] font-mono text-[#52B788] mt-2">{data.timeLabel || 'Waiting for Slot...'}</p>
                                            </div>
                                            <div className="pt-6 border-t border-white/5">
                                                <p className="text-[9px] font-black uppercase tracking-widest text-white/30 mb-2">Terminal_Point</p>
                                                <p className="text-[10px] font-mono leading-relaxed truncate">{data.address}</p>
                                            </div>
                                        </div>

                                        <button 
                                            disabled={!data.slot || data.address === "Select Pickup Location"}
                                            className="w-full bg-[#2D6A4F] py-7 rounded-2xl text-[11px] font-black uppercase tracking-[0.4em] transition-all   flex items-center justify-center gap-3"
                                        >
                                            Execute_Pickup <HiOutlineChevronRight />
                                        </button>
                                        <p className="text-[8px] font-mono text-center text-white/20 tracking-[0.4em] uppercase">Deployment_ID: AKRI_0092_X</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            {/* MAP MODAL */}
            <AnimatePresence>
                {isMapOpen && isLoaded && (
                    <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-6"
                    >
                        <motion.div 
                            initial={{ scale: 0.9 }} animate={{ scale: 1 }}
                            className="bg-white dark:bg-[#111] w-full max-w-2xl rounded-[3rem] overflow-hidden shadow-2xl"
                        >
                            <div className="p-8 border-b border-black/5 flex justify-between items-center">
                                <h3 className="text-[10px] font-black uppercase tracking-widest">Geolocation_Terminal</h3>
                                <button onClick={() => setIsMapOpen(false)}><HiOutlineXMark size={24}/></button>
                            </div>
                            <div className="p-8 space-y-6">
                                <Autocomplete onLoad={setAutocomplete} onPlaceChanged={onPlaceChanged}>
                                    <input type="text" placeholder="Search Kochi regions..." className="w-full p-5 bg-gray-50 dark:bg-white/5 rounded-2xl border border-black/5 outline-none focus:border-[#2D6A4F] text-sm" />
                                </Autocomplete>
                                <GoogleMap mapContainerStyle={mapContainerStyle} center={{ lat: tempLocation.lat, lng: tempLocation.lng }} zoom={15} options={{ disableDefaultUI: true }}>
                                    <Marker position={{ lat: tempLocation.lat, lng: tempLocation.lng }} draggable />
                                </GoogleMap>
                                <button 
                                    onClick={() => {
                                        setData({ ...data, address: tempLocation.address, lat: tempLocation.lat, lng: tempLocation.lng });
                                        setIsMapOpen(false);
                                    }}
                                    className="w-full py-6 bg-[#2D6A4F] text-white rounded-[2rem] font-black text-[10px] uppercase tracking-widest"
                                >
                                    Confirm_Location_Update
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
            <style>{`
                @keyframes scan { 0% { transform: translateY(0); opacity: 0; } 50% { opacity: 1; } 100% { transform: translateY(400px); opacity: 0; } }
                .animate-scan { animation: scan 4s linear infinite; }
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </div>
    );
};

export default InstantPickup;