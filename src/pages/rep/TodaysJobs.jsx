import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { 
    HiOutlineMapPin, 
    HiOutlineCube, 
    HiOutlineClock, 
    HiOutlineFingerPrint,
    HiOutlineMap,
    HiOutlineArrowPath,
    HiOutlineChevronRight
} from 'react-icons/hi2';

const TodaysJobs = () => {
    const navigate = useNavigate();
    const { isDark } = useTheme();
    // MOCK DATA: Structured for Django Serializer compatibility
    const [jobs] = useState([
        {
            id: "AKR-NODE-7721",
            customer_name: "Adithya Varma",
            location_area: "Kakkanad, Kochi",
            estimated_weight: "12.5",
            scheduled_time: "09:30 AM",
            material_category: "Mixed_Paper",
            urgency: "HIGH"
        },
        {
            id: "AKR-NODE-7728",
            customer_name: "ABC",
            location_area: "Infopark Phase 1",
            estimated_weight: "45.0",
            scheduled_time: "11:45 AM",
            material_category: "E-Waste",
            urgency: "NORMAL"
        },
        {
            id: "AKR-NODE-7735",
            customer_name: "Mariyam John",
            location_area: "Edappally, Bypass",
            estimated_weight: "3.2",
            scheduled_time: "02:15 PM",
            material_category: "Plastic_LDPE",
            urgency: "NORMAL"
        }
    ]);

    return (
        <div className={isDark ? 'dark' : ''}>
        <div className="flex min-h-screen bg-[#F4F7F4] dark:bg-[#050505] text-[#1A1A1A] dark:text-white selection:bg-[#2D6A4F] font-sans">
            
            {/* LEFT SIDEBAR: MISSION STATS */}
            <aside className="hidden lg:flex w-80 flex-col border-r border-[#2D6A4F]/10 dark:border-white/5 p-10 space-y-12 bg-white dark:bg-[#080808]">
                <div className="space-y-2">
                    <div className="w-12 h-12 rounded-2xl bg-[#2D6A4F]/20 flex items-center justify-center border border-[#2D6A4F]/30 shadow-[0_0_20px_rgba(45,106,79,0.2)]">
                        <HiOutlineFingerPrint size={24} className="text-[#52B788]" />
                    </div>
                    <h2 className="text-3xl font-serif italic pt-4 text-[#1A1A1A] dark:text-white">Field_Ops</h2>
                    <p className="text-[9px] font-mono text-[#666]/60 dark:text-gray-500 uppercase tracking-[0.4em]">Node_ID: REP_KCH_04</p>
                </div>

                <div className="space-y-6 pt-10 border-t border-[#2D6A4F]/10 dark:border-white/5">
                    <div className="p-8 bg-[#F4F7F4] dark:bg-white/5 rounded-[2.5rem] border border-[#2D6A4F]/10 dark:border-white/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10"><HiOutlineArrowPath size={40}/></div>
                        <p className="text-[8px] font-black text-[#2D6A4F]/30 dark:text-white/30 uppercase tracking-[0.3em] mb-2">Pending_Syncs</p>
                        <p className="text-4xl font-serif italic text-[#52B788]">{jobs.length}</p>
                    </div>
                    
                    <div className="p-8 bg-[#F9F9F9] dark:bg-[#1A1A1A] rounded-[2.5rem] border border-[#2D6A4F]/20 shadow-xl">
                        <p className="text-[8px] font-black text-[#2D6A4F] dark:text-[#52B788] uppercase tracking-[0.4em] mb-4">Route_Active</p>
                        <button className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A] dark:text-white/80 hover:text-[#2D6A4F] dark:hover:text-white transition-colors">
                            <HiOutlineMap /> Open_Field_Map
                        </button>
                    </div>
                </div>
            </aside>

            {/* MAIN CONTENT: JOB FEED */}
            <main className="flex-1 p-6 md:p-12 overflow-y-auto bg-white dark:bg-transparent">
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16">
                    <div>
                        <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#2D6A4F] mb-2">Operational_Queue</h3>
                        <p className="text-xs text-[#666] dark:text-gray-500 font-mono tracking-tighter">TIMESTAMP // {new Date().toLocaleDateString()}</p>
                    </div>
                    <div className="h-[1px] flex-1 mx-8 bg-gradient-to-r from-[#2D6A4F]/40 to-transparent hidden xl:block" />
                    <button className="px-8 py-4 bg-[#F4F7F4] dark:bg-white/5 rounded-2xl border border-[#2D6A4F]/10 dark:border-white/10 text-[9px] font-black uppercase tracking-[0.3em] text-[#1A1A1A] dark:text-white hover:bg-[#2D6A4F] hover:text-white transition-all shadow-sm">
                        Refresh_Node
                    </button>
                </header>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                    <AnimatePresence>
                        {jobs.map((job, i) => (
                            <motion.div 
                                key={job.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative bg-white dark:bg-[#0D0D0D] border border-[#2D6A4F]/10 dark:border-white/5 rounded-[3.5rem] p-10 hover:border-[#2D6A4F]/30 transition-all shadow-2xl overflow-hidden"
                            >
                                {/* Subtle Hover Glow */}
                                <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#2D6A4F] blur-[120px] opacity-0 group-hover:opacity-[0.07] transition-opacity duration-500" />

                                <div className="flex justify-between items-start relative z-10 mb-10">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <span className="text-[8px] font-mono text-[#52B788] bg-[#2D6A4F]/10 px-3 py-1 rounded-full border border-[#2D6A4F]/20">
                                                {job.id}
                                            </span>
                                            {job.urgency === "HIGH" && (
                                                <span className="text-[8px] font-black text-[#FF4D4D] animate-pulse uppercase tracking-widest">● Priority_Task</span>
                                            )}
                                        </div>
                                        <h4 className="text-3xl font-serif italic tracking-tight text-[#1A1A1A] dark:text-white">{job.customer_name}</h4>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[9px] font-black text-[#999] dark:text-white/20 uppercase tracking-[0.2em] mb-1">Time_Slot</p>
                                        <p className="text-xs font-mono text-[#2D6A4F] dark:text-[#52B788] flex items-center justify-end gap-2 leading-none uppercase">
                                            <HiOutlineClock /> {job.scheduled_time}
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-6 relative z-10">
                                    <div className="p-6 bg-[#F4F7F4] dark:bg-white/5 rounded-[2rem] border border-[#2D6A4F]/10 dark:border-white/5 group-hover:bg-[#E8EEE8] dark:group-hover:bg-white/[0.07] transition-colors">
                                        <p className="text-[8px] font-black text-[#999] dark:text-white/20 uppercase tracking-[0.3em] mb-3">Zone_ID</p>
                                        <p className="text-xs font-bold text-[#333] dark:text-gray-300 flex items-center gap-2 leading-none uppercase">
                                            <HiOutlineMapPin className="text-[#2D6A4F]" /> {job.location_area}
                                        </p>
                                    </div>
                                    <div className="p-6 bg-[#F4F7F4] dark:bg-white/5 rounded-[2rem] border border-[#2D6A4F]/10 dark:border-white/5 group-hover:bg-[#E8EEE8] dark:group-hover:bg-white/[0.07] transition-colors">
                                        <p className="text-[8px] font-black text-[#999] dark:text-white/20 uppercase tracking-[0.3em] mb-3">Payload_Target</p>
                                        <p className="text-xs font-bold text-[#333] dark:text-gray-300 flex items-center gap-2 leading-none uppercase">
                                            <HiOutlineCube className="text-[#2D6A4F]" /> {job.estimated_weight} KG
                                        </p>
                                    </div>
                                </div>

                                <motion.button 
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => navigate('/weighing-screen')}
                                    className="w-full mt-10 py-6 bg-[#F4F7F4] dark:bg-white/5 group-hover:bg-[#2D6A4F] border border-[#2D6A4F]/10 dark:border-white/10 group-hover:border-transparent rounded-[1.5rem] text-[10px] font-black uppercase tracking-[0.5em] text-[#1A1A1A] dark:text-white group-hover:text-white transition-all flex items-center justify-center gap-3"
                                >
                                    Start <HiOutlineChevronRight className="group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </main>

            {/* PHYGITAL SCANLINE ACCENT */}
            <div className="fixed bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#2D6A4F]/40 to-transparent" />
        </div>
        </div>
    );
};

export default TodaysJobs;