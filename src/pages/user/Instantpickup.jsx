import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
    HiOutlineClock,
    HiOutlineBolt,
    HiOutlineChevronLeft,
    HiOutlineShieldCheck,
    HiOutlineCheckCircle,
    HiBars3 
} from 'react-icons/hi2';
import Footer from '../../components/Footer';
import Sidebar from '../../components/Sidebar';

const InstantPickup = () => {
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const getNextDays = (numberOfDays) => {
        const days = [];
        const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        for (let i = 0; i < numberOfDays; i++) {
            const d = new Date();
            d.setDate(d.getDate() + i);
            days.push({ day: dayNames[d.getDay()], date: d.getDate().toString(), month: monthNames[d.getMonth()] });
        }
        return days;
    };

    const slots = ['09:00 AM - 12:00 PM', '12:00 PM - 03:00 PM', '03:00 PM - 06:00 PM', '06:00 PM - 09:00 PM'];
    const dates = getNextDays(4);
    const [selectedDate, setSelectedDate] = useState(dates[0].date);
    const [selectedSlot, setSelectedSlot] = useState(slots[0]);

    return (
        <div>
        <div className="flex h-screen bg-[#F8FAF8] dark:bg-[#050505] text-[#1a1a1a] dark:text-white overflow-hidden">
            
            {/*SIDEBAR*/}
            <div className={`fixed inset-y-0 left-0 z-50 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out bg-white dark:bg-[#0A0A0A]`}>
                <Sidebar isOpen={true} />
            </div>

            <AnimatePresence>
                {isSidebarOpen && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsSidebarOpen(false)}
                        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-md lg:hidden"
                    />
                )}
            </AnimatePresence>

            <main className="flex-1 relative flex flex-col min-w-0 w-full overflow-y-auto overflow-x-hidden">
                
                {/* Mobile Header Bar */}
                <div className="lg:hidden flex items-center px-4 md:px-8 py-4 bg-white/50 dark:bg-black/50 backdrop-blur-sm sticky top-0 z-30 border-b border-black/5">
                    <button 
                        onClick={() => setIsSidebarOpen(true)}
                        className="p-2 rounded-xl bg-white dark:bg-white/5 border border-black/5 shadow-sm"
                    >
                        <HiBars3 size={24} />
                    </button>
                    <span className="ml-4 font-serif italic text-lg">Akri</span>
                </div>

                {/* Decorative Blur */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2D6A4F]/5 blur-[120px] pointer-events-none" />

                <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-12 w-full">
                    {/* Header */}
                    <header className="flex items-center gap-4 md:gap-6 mb-8 md:mb-16">
                        <motion.button
                            whileHover={{ x: -4 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => navigate('/dashboard')}
                            className="p-3 rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 hover:bg-[#2D6A4F] hover:text-white transition-all shadow-sm"
                        >
                            <HiOutlineChevronLeft size={20} />
                        </motion.button>
                        <h2 className="text-2xl md:text-3xl font-serif italic tracking-tight">Instant Pickup</h2>
                    </header>

                    {/* MAIN GRID */}
                    <div className="grid lg:grid-cols-12 gap-8 md:gap-10">
                        
                        {/* LEFT COLUMN */}
                        <div className="lg:col-span-7 space-y-10 md:space-y-12">
                            {/* Banner */}
                            <motion.div className="bg-[#2D6A4F]/5 dark:bg-[#1B4332]/20 border border-[#2D6A4F]/30 rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-6 relative overflow-hidden group">
                                <HiOutlineBolt className="absolute -right-4 -top-4 text-[#2D6A4F] opacity-10 rotate-12" size={120} />
                                <div className="relative z-10 flex gap-4 md:gap-5">
                                    <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#2D6A4F] flex items-center justify-center text-white shadow-lg">
                                        <HiOutlineBolt size={22} />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-[11px] md:text-sm font-black uppercase tracking-widest text-[#2D6A4F]">Instant_Pickup_Mode</h4>
                                        <p className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400 leading-relaxed max-w-md">Our representative will call you before arrival.</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Dispatch Node */}
                            <section className="space-y-4">
                                <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-[#2D6A4F] ml-1">Dispatch_Node</label>
                                <div className="bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-white/5 rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-8 relative overflow-hidden group">
                                    <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                                        <div className="min-w-0">
                                            <h3 className="text-xl md:text-2xl font-serif italic mb-1 truncate">123 Sunshine Ave, Kochi</h3>
                                            <p className="text-[9px] md:text-[10px] font-mono text-gray-400 uppercase tracking-widest">Region_Unit_04</p>
                                        </div>
                                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-[1.5rem] md:rounded-[2rem] bg-gray-200 dark:bg-white/5 overflow-hidden relative border border-black/5 shrink-0">
                                            <div className="absolute inset-0 bg-black/10 grayscale" />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-3 h-3 bg-[#2D6A4F] rounded-full animate-ping" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Dates */}
                            <section className="space-y-6">
                                <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-[#2D6A4F] ml-1">Temporal_Sequence</label>
                                <div className="flex gap-3 md:gap-4 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4 lg:mx-0 lg:px-0">
                                    {dates.map((item) => (
                                        <button
                                            key={item.date}
                                            onClick={() => setSelectedDate(item.date)}
                                            className={`shrink-0 w-28 md:w-32 h-36 md:h-44 rounded-[1.8rem] md:rounded-[2.2rem] flex flex-col items-center justify-center transition-all duration-500 border ${selectedDate === item.date ? 'bg-[#1a1a1a] dark:bg-[#2D6A4F] text-white shadow-2xl scale-105' : 'bg-white dark:bg-white/5 text-gray-400'}`}
                                        >
                                            <span className="text-[8px] md:text-[10px] font-black uppercase mb-2 md:mb-3 opacity-60">{item.day}</span>
                                            <span className="text-2xl md:text-4xl font-serif italic mb-1 md:mb-2">{item.date}</span>
                                            <span className="text-[8px] md:text-[10px] font-mono tracking-widest">{item.month}</span>
                                        </button>
                                    ))}
                                </div>
                            </section>

                            {/* Slots */}
                            <section className="space-y-6">
                                <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-[#2D6A4F] ml-1">Shift_Matrix</label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                                    {slots.map((slot) => (
                                        <button
                                            key={slot}
                                            onClick={() => setSelectedSlot(slot)}
                                            className={`p-5 md:p-6 rounded-2xl md:rounded-3xl border transition-all flex items-center justify-between ${selectedSlot === slot ? 'bg-[#F4F7F4] dark:bg-[#1B4332]/30 border-[#2D6A4F]' : 'bg-white dark:bg-[#0A0A0A] border-black/5 text-gray-500'}`}
                                        >
                                            <div className="flex items-center gap-3 md:gap-4">
                                                <HiOutlineClock className={selectedSlot === slot ? 'text-[#2D6A4F]' : 'text-gray-400'} />
                                                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest">{slot}</span>
                                            </div>
                                            {selectedSlot === slot && <HiOutlineCheckCircle size={18} className="text-[#2D6A4F]" />}
                                        </button>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* RIGHT COLUMN */}
                        <div className="lg:col-span-5 pb-12 lg:pb-0">
                            <div className="bg-[#0D0D0D] dark:bg-[#0F110F] rounded-[2rem] md:rounded-[3rem] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden flex flex-col lg:sticky lg:top-4">
                                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#2D6A4F] to-transparent animate-scan" />

                                <div className="flex-1 space-y-8 md:space-y-10 relative z-10">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#2D6A4F]/20 flex items-center justify-center text-[#52B788] border border-[#2D6A4F]/30">
                                            <HiOutlineBolt size={20} className="animate-pulse" />
                                        </div>
                                        <div>
                                            <h4 className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-[#52B788]">Priority_Request</h4>
                                            <p className="text-[9px] text-white/40 uppercase font-mono tracking-tighter">Instant_Verification</p>
                                        </div>
                                    </div>

                                    <div className="p-6 md:p-8 rounded-[1.8rem] md:rounded-[2.5rem] bg-white/5 border border-white/5 relative overflow-hidden">
                                        <p className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-white/30 mb-4">Confirmed_Dispatch</p>
                                        <div className="flex justify-between items-end">
                                            <div>
                                                <p className="text-2xl md:text-3xl font-serif italic leading-none">{dates.find(d => d.date === selectedDate)?.month} {selectedDate}</p>
                                                <p className="text-[10px] md:text-xs font-mono text-[#52B788] uppercase tracking-[0.2em] mt-3">{selectedSlot}</p>
                                            </div>
                                            <HiOutlineShieldCheck size={28} className="text-[#2D6A4F] opacity-50" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4 mt-8 md:mt-auto">
                                    <button className="relative group w-full mt-10 bg-[#2D6A4F] py-5 md:py-7 rounded-2xl transition-all overflow-hidden active:scale-95">
                                        <span className="relative z-10 text-[10px] md:text-[11px] font-black uppercase tracking-[0.6em] text-white">Execute_Pickup</span>
                                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                    </button>
                                    <p className="text-[7px] font-mono text-center text-white/20 tracking-[0.4em] uppercase">Deployment_ID: AKRI_0092_X</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </main>

            <style>{`
                @keyframes scan { 0% { transform: translateY(0); opacity: 0; } 50% { opacity: 1; } 100% { transform: translateY(400px); opacity: 0; } }
                .animate-scan { animation: scan 4s linear infinite; }
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </div>
        <Footer/>
        </div>
        
    );
};

export default InstantPickup;