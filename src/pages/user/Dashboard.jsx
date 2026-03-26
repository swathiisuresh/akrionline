import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Sidebar from '../../components/Sidebar';
import { useTheme } from '../../context/ThemeContext';
import {
    HiOutlineSun,
    HiOutlineMoon,
    HiOutlineBolt,
    HiOutlineArrowUpRight,
    HiArrowPath,
    HiBars3BottomRight
} from 'react-icons/hi2';
import { HiOutlineCloudDownload, HiOutlineArchive } from "react-icons/hi";
import { HiOutlineScale } from 'react-icons/hi';
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();
    const { isDark, toggleTheme } = useTheme();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className={isDark ? 'dark' : ''}>
        <div className="flex h-screen overflow-hidden bg-[#F4F7F4] dark:bg-[#0A0C0A]">
            {/* Sidebar*/}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[45] lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            <div className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} 
        lg:translate-x-0 fixed lg:relative z-50 
        w-64 h-screen transition-transform duration-300
        border-r border-[#2D6A4F]/10 dark:border-white/5`}>
                <Sidebar />
            </div>

            <main className="flex-1 h-screen overflow-y-auto relative selection:bg-[#2D6A4F] selection:text-white min-w-0 w-full">
                <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-0" />

                <div className="relative z-10">
                    {/* Header*/}
                    <header className="h-20 md:h-28 px-6 md:px-12 flex items-center justify-between border-b border-[#2D6A4F]/10 dark:border-white/5 sticky top-0 bg-[#F4F7F4]/80 dark:bg-[#0A0C0A]/90 backdrop-blur-2xl z-40">
                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#2D6A4F]/20 to-transparent" />

                        <div className="relative group">
                            <div className="flex items-baseline gap-2 md:gap-3">
                                <h2 className="text-xl md:text-4xl font-serif tracking-tighter text-[#1A1A1A] dark:text-white leading-none">
                                    Morning, <span className="italic font-light text-[#2D6A4F]/60 dark:text-white/40">Alex.</span>
                                </h2>
                                <div className="hidden md:block h-1 w-1 rounded-full bg-green-500 animate-pulse" />
                            </div>
                            <div className="mt-1 md:mt-2 flex items-center gap-4">
                                <div className="flex items-center gap-1.5 bg-[#2D6A4F]/5 dark:bg-white/5 px-2 md:px-3 py-0.5 md:py-1 rounded-full border border-[#2D6A4F]/10 dark:border-white/10">
                                    <span className="text-[7px] md:text-[9px] font-mono font-black text-[#2D6A4F] dark:text-[#52B788] uppercase tracking-[0.2em]">
                                        Kerala_Region // Unit_01
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 md:gap-8">
                            <div className="flex items-center gap-2 md:gap-3">
                                <button
                                    onClick={() => toggleTheme()}
                                    className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-white dark:bg-white/5 border border-black/[0.03] dark:border-white/10 dark:text-white"
                                >
                                    {isDark ? <HiOutlineMoon size={18} /> : <HiOutlineSun size={18} />}
                                </button>

                                <div className="hidden xs:flex items-center gap-3 bg-white dark:bg-white/5 border border-black/[0.03] dark:border-white/10 p-1 md:p-1.5 md:pr-5 rounded-2xl group">
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-[#2D6A4F] to-[#1B4332] flex items-center justify-center text-white font-serif italic text-lg shadow-lg">
                                        A
                                    </div>
                                    <div className="hidden sm:block">
                                        <p className="text-[10px] font-black dark:text-white uppercase leading-none tracking-wider">Account</p>
                                    </div>
                                </div>

                                {/* Mobile Menu Toggle */}
                                <button
                                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                                    className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-[#2D6A4F] text-white"
                                >
                                    <HiBars3BottomRight size={20} />
                                </button>
                            </div>
                        </div>
                    </header>

                    <div className="p-4 md:p-10 space-y-8 md:space-y-12 max-w-7xl mx-auto">

                        {/* Environmental Ledger Section */}
                        <section className="relative w-full overflow-hidden">
                            <div className="flex flex-col xl:flex-row gap-6">
                                {/* LEFT COLUMN*/}
                                <div className="xl:w-3/5 bg-gradient-to-br from-[#1B4332] to-[#0A0C0A] rounded-[2.5rem] md:rounded-[3.5rem] p-[1px] shadow-2xl overflow-hidden relative">
                                    <div className="relative h-full w-full bg-[#0A0C0A]/40 backdrop-blur-3xl rounded-[2.4rem] md:rounded-[3.4rem] p-6 md:p-14 flex flex-col">
                                        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-10">
                                            <div className="space-y-1">
                                                <div className="flex items-center gap-2">
                                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]" />
                                                    <span className="text-[9px] font-mono tracking-[0.4em] text-white/40 uppercase">System_Node_01</span>
                                                </div>
                                                <h2 className="text-2xl md:text-3xl font-serif text-white italic">Environmental Ledger</h2>
                                            </div>
                                            <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-2xl text-left sm:text-right w-full sm:w-auto">
                                                <p className="text-[8px] font-black text-green-500 uppercase tracking-widest">Next_Sync</p>
                                                <p className="text-xs font-mono text-white/60 uppercase">12:00 PM IST</p>
                                            </div>
                                        </div>

                                        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16 flex-1">

                                            <div className="relative w-48 h-48 md:w-72 md:h-72 flex items-center justify-center shrink-0">
                                                <svg className="w-full h-full transform -rotate-90 filter drop-shadow-[0_0_20px_rgba(45,106,79,0.3)]" viewBox="0 0 288 288">
                                                    <circle cx="144" cy="144" r="130" stroke="currentColor" strokeWidth="1" fill="transparent" className="text-white/5" />
                                                    <motion.circle
                                                        cx="144" cy="144" r="130" stroke="#2D6A4F" strokeWidth="10" fill="transparent"
                                                        strokeDasharray="816" strokeDashoffset={816 * (1 - 0.84)} strokeLinecap="round"
                                                        initial={{ strokeDashoffset: 816 }} animate={{ strokeDashoffset: 816 * (1 - 0.84) }} transition={{ duration: 2, ease: "easeOut" }}
                                                    />
                                                </svg>
                                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                                    <span className="text-5xl md:text-8xl font-serif text-white tracking-tighter leading-none">42</span>
                                                    <span className="text-[8px] md:text-[10px] font-black text-green-500 uppercase tracking-[0.3em] mt-2">Kilos_Total</span>
                                                </div>
                                                <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-white text-[#1B4332] px-2 md:px-3 py-1 rounded-full text-[7px] md:text-[9px] font-black shadow-xl">
                                                    +12% TREND
                                                </div>
                                            </div>

                                            <div className="hidden lg:block w-[1px] h-40 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

                                            <div className="flex-1 space-y-6 md:space-y-8 w-full">
                                                <div className="grid grid-cols-2 gap-4 md:gap-6">
                                                    <div className="space-y-1">
                                                        <p className="text-[8px] md:text-[9px] font-black text-white/30 uppercase tracking-widest">Carbon_Offset</p>
                                                        <p className="text-lg md:text-2xl font-serif text-white">120.4 <span className="text-[10px] font-mono opacity-40">KG</span></p>
                                                    </div>
                                                    <div className="space-y-1">
                                                        <p className="text-[8px] md:text-[9px] font-black text-white/30 uppercase tracking-widest">Trees_Equivalent</p>
                                                        <p className="text-lg md:text-2xl font-serif text-white">03.0 <span className="text-[10px] font-mono opacity-40">UNIT</span></p>
                                                    </div>
                                                </div>
                                                <div className="p-4 md:p-6 bg-white/5 border border-white/10 rounded-[1.5rem] md:rounded-[2rem]">
                                                    <p className="text-[9px] md:text-[10px] font-serif italic text-white/70 leading-relaxed">
                                                        "You are 8kg away from achieving <span className="text-green-400 not-italic font-bold">Western Ghats Hero</span> status."
                                                    </p>
                                                </div>
                                                <button onClick={()=>navigate('/dashboard/pickup')} className="w-full py-4 md:py-5 bg-[#2D6A4F] text-white rounded-xl md:rounded-2xl font-black uppercase text-[10px] md:text-[11px] tracking-[0.2em] transition-all active:scale-95">
                                                    Schedule Pickup
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-50 bg-[length:100%_2px,3px_100%] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))]" />
                                </div>

                                {/* RIGHT COLUMN*/}
                                <div className="xl:w-2/5 flex flex-col gap-4 md:gap-5">
                                    {/* 1. */}
                                    <div className="relative overflow-hidden bg-[#121412] rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-8 border border-white/5 shadow-2xl group">
                                        <div className="relative z-10 flex justify-between items-start">
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                                    <span className="text-[8px] font-mono text-white/40 uppercase tracking-[0.2em]">NET_ZERO_PROTOCOL</span>
                                                </div>
                                                <h4 className="text-xs md:text-sm font-serif italic text-white/60">Carbon Sequestration</h4>
                                            </div>
                                            <motion.div
                                                whileHover={{ y: 3 }}
                                                transition={{ repeat: Infinity, duration: 0.6, repeatType: "reverse" }}
                                                className="h-8 w-8 md:h-10 md:w-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10"
                                            >
                                                <HiOutlineCloudDownload size={18} className="text-green-500" />
                                            </motion.div>
                                        </div>

                                        <div className="mt-6 md:mt-8 flex items-end gap-2 md:gap-3">
                                            <h3 className="text-4xl md:text-6xl font-serif text-white tracking-tighter leading-none">150.4</h3>
                                            <span className="text-[8px] md:text-[10px] font-mono text-green-500 uppercase tracking-widest pb-1">kg_saved</span>
                                        </div>

                                        <div className="mt-6 md:mt-8 grid grid-cols-6 gap-1 md:gap-1.5">
                                            {[...Array(18)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0.2 }}
                                                    whileInView={{ opacity: 1 }}
                                                    transition={{ delay: i * 0.05 }}
                                                    className={`h-1 rounded-full ${i < 12 ? 'bg-green-500/60' : 'bg-white/5'}`}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                                        {/* Items Card */}
                                        <div className="bg-white dark:bg-[#1A1C1A] rounded-[2rem] md:rounded-[2.8rem] p-6 md:p-8 border border-black/[0.03] dark:border-white/5 relative overflow-hidden group">
                                            <div className="relative z-10">
                                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-500/10 flex items-center justify-center mb-4 md:mb-6">
                                                    <motion.div
                                                        whileHover={{ rotate: 180 }}
                                                        transition={{ duration: 0.7, ease: "circOut" }}
                                                    >
                                                        <HiArrowPath size={16} className="text-blue-500" />
                                                    </motion.div>
                                                </div>
                                                <p className="text-3xl md:text-4xl font-serif dark:text-white leading-none">25</p>
                                                <p className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 mt-2 md:mt-3">Units_Recycled</p>
                                            </div>
                                            <div className="absolute -right-2 -bottom-2 text-5xl md:text-7xl font-serif italic text-black/[0.02] dark:text-white/[0.02] uppercase pointer-events-none group-hover:scale-110 transition-transform duration-700">Item</div>
                                        </div>

                                        {/* Waste Card */}
                                        <div className="bg-white dark:bg-[#1A1C1A] rounded-[2rem] md:rounded-[2.8rem] p-6 md:p-8 border border-black/[0.03] dark:border-white/10 relative overflow-hidden group">
                                            <div className="relative z-10">
                                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-orange-500/10 flex items-center justify-center mb-4 md:mb-6">
                                                    <motion.div
                                                        whileHover={{ y: -5 }}
                                                        transition={{ type: "spring", stiffness: 300 }}
                                                    >
                                                        <HiOutlineArchive size={16} className="text-orange-500" />
                                                    </motion.div>
                                                </div>
                                                <p className="text-3xl md:text-4xl font-serif dark:text-white leading-none">300</p>
                                                <p className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 mt-2 md:mt-3">Kg_Diversion</p>
                                            </div>
                                            <div className="absolute -right-2 -bottom-2 text-5xl md:text-7xl font-serif italic text-black/[0.02] dark:text-white/[0.02] uppercase pointer-events-none group-hover:scale-110 transition-transform duration-700">Mass</div>
                                        </div>
                                    </div>

                                    {/* Loyalty Card */}
                                    <div className="relative flex-1 min-h-[140px] md:min-h-[160px] bg-[#2D6A4F] rounded-[2.5rem] md:rounded-[3rem] p-1 shadow-2xl overflow-hidden group">
                                        <motion.div
                                            animate={{
                                                scale: [1, 1.1, 1],
                                                opacity: [0.8, 1, 0.8]
                                            }}
                                            transition={{ duration: 4, repeat: Infinity }}
                                            className="absolute inset-0 bg-gradient-to-tr from-[#1B4332] via-[#2D6A4F] to-[#40916C]"
                                        />

                                        <div className="relative h-full w-full bg-white/5 backdrop-blur-sm rounded-[2.4rem] md:rounded-[2.9rem] p-6 md:p-8 flex flex-col justify-between">
                                            <div className="flex justify-between items-center">
                                                <div>
                                                    <p className="text-[8px] md:text-[10px] font-mono text-white/50 uppercase tracking-[0.3em]">Ambassador_Tier</p>
                                                    <h4 className="text-xl md:text-2xl font-serif text-white italic mt-1 leading-none">Green Pioneer</h4>
                                                </div>
                                                <div className="text-right">
                                                    <motion.p
                                                        animate={{ opacity: [1, 0.7, 1] }}
                                                        transition={{ duration: 2, repeat: Infinity }}
                                                        className="text-2xl md:text-3xl font-mono text-amber-400 leading-none"
                                                    >
                                                        120
                                                    </motion.p>
                                                    <p className="text-[8px] md:text-[9px] font-black text-white/40 uppercase tracking-widest mt-1">Points</p>
                                                </div>
                                            </div>
                                            <div className="space-y-2 md:space-y-3 mt-4 md:mt-0">
                                                <div className="flex justify-between items-end">
                                                    <span className="text-[7px] md:text-[9px] font-black text-white/40 uppercase tracking-widest">Next Reward: ₹500 Coupon</span>
                                                    <span className="text-[9px] md:text-[10px] font-mono text-white/80">65%</span>
                                                </div>
                                                <div className="h-1 w-full bg-black/20 rounded-full overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: '65%' }}
                                                        transition={{ duration: 1.5, ease: "circOut" }}
                                                        className="h-full bg-white relative"
                                                    >
                                                        <motion.div
                                                            animate={{ x: ['-100%', '200%'] }}
                                                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-1/2"
                                                        />
                                                    </motion.div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Quick actions & market rates section */}
                        <section className="py-4 md:py-8">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                                <div className="lg:col-span-5 h-full">
                                    <div className="relative h-full min-h-[400px] md:min-h-[450px] bg-[#2D6A4F] rounded-[2.5rem] md:rounded-[3.5rem] p-1 shadow-2xl overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent z-0" />
                                        <div className="relative z-10 h-full bg-white/5 backdrop-blur-sm rounded-[2.4rem] md:rounded-[3.4rem] p-8 md:p-12 flex flex-col justify-between border border-white/10">
                                            <div>
                                                <div className="flex justify-between items-start mb-8 md:mb-12">
                                                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/10 flex items-center justify-center text-white">
                                                        <HiOutlineScale size={28} />
                                                    </div>
                                                    <span className="px-2 md:px-3 py-1 rounded-full bg-green-400/20 border border-green-400/30 text-[7px] md:text-[9px] font-black text-green-300 tracking-[0.2em] uppercase">Priority_Service</span>
                                                </div>
                                                <h5 className="text-3xl md:text-5xl font-serif text-white mb-4 md:mb-6 leading-[1.1]">Instant <br /> <span className="italic opacity-60">Pickup.</span></h5>
                                                <p className="text-white/70 text-sm md:text-lg font-serif italic border-l border-white/20 pl-4 md:pl-6 max-w-xs">Skip the traditional queue. Verified agent arrives within <span className="text-white not-italic font-bold">60m</span>.</p>
                                            </div>
                                            <button onClick={() => navigate('/dashboard/instantpickup')} className="w-full py-5 md:py-6 bg-white text-[#2D6A4F] rounded-xl md:rounded-2xl font-black uppercase text-[10px] md:text-[11px] tracking-[0.3em] active:scale-95 transition-all">
                                                Initialize Pickup <HiOutlineBolt className="inline ml-2" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:col-span-7 flex flex-col gap-6">
                                    <div className="bg-[#F4F7F4] dark:bg-[#0F110F] rounded-[2.5rem] md:rounded-[3.5rem] p-6 md:p-10 border border-black/[0.03] dark:border-white/5 flex-1 relative overflow-hidden">
                                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8 md:mb-10 px-2">
                                            <div className="space-y-1">
                                                <p className="text-[9px] font-black text-[#2D6A4F] dark:text-green-500/50 uppercase tracking-[0.4em]">Live_Market_Index</p>
                                                <h4 className="text-2xl md:text-3xl font-serif italic dark:text-white">Current Bids</h4>
                                            </div>
                                            <div className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-red-500/5 border border-red-500/10 rounded-xl">
                                                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                                                <span className="text-[8px] md:text-[10px] font-mono text-red-500 font-bold tracking-widest">Kochi_Main_Floor</span>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                                            {[
                                                { name: "Paper & Kraft", price: "₹18", change: "+₹2.4", trend: "up" },
                                                { name: "HDPE Plastic", price: "₹14", change: "STABLE", trend: "neutral" },
                                                { name: "Iron / Metal", price: "₹150+", change: "+₹12.0", trend: "up" },
                                                { name: "E-Waste", price: "Market", change: "FIXED", trend: "neutral" }
                                            ].map((item, i) => (
                                                <div key={i} className="bg-white dark:bg-white/[0.03] p-4 md:p-6 rounded-[2rem] border border-black/[0.03] dark:border-white/10 group">
                                                    <div className="flex justify-between items-start mb-2 md:mb-4">
                                                        <span className="text-[8px] md:text-[9px] font-black text-gray-400 uppercase tracking-widest">{item.name}</span>
                                                        <HiOutlineArrowUpRight className="text-gray-300 group-hover:text-[#2D6A4F] transition-colors" />
                                                    </div>
                                                    <div className="flex items-end justify-between">
                                                        <p className="text-2xl md:text-3xl font-serif dark:text-white">{item.price}</p>
                                                        <div className={`text-[7px] md:text-[8px] font-mono px-1.5 md:px-2 py-0.5 md:py-1 rounded-md ${item.trend === 'up' ? 'bg-green-500/10 text-green-600' : 'bg-gray-100 text-gray-500'}`}>
                                                            {item.change}
                                                        </div>
                                                    </div>
                                                    <div className="mt-3 md:mt-4 h-[1px] w-full bg-gradient-to-r from-transparent via-[#2D6A4F]/20 to-transparent" />
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-6 md:mt-8 pt-6 border-t border-black/5 dark:border-white/5 flex flex-col sm:flex-row gap-4 items-center justify-between text-center sm:text-left">
                                            <p className="text-[8px] md:text-[10px] font-serif italic text-gray-400">Rates updated 4 minutes ago based on Kochi industrial standards.</p>
                                            <button className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-[#2D6A4F]">Full Catalog</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Order Section*/}
                        <section className="space-y-4 md:space-y-6 pt-4">
                            <h4 className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 ml-2">Collection_Manifest</h4>
                            <div className="bg-white dark:bg-[#0A0A0A] border border-gray-100 dark:border-white/10 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-sm">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left min-w-[600px]">
                                        <thead>
                                            <tr className="bg-gray-50/50 dark:bg-white/[0.02]">
                                                <th className="p-6 md:p-8 text-[9px] font-black uppercase tracking-widest text-gray-400">Timeline</th>
                                                <th className="p-6 md:p-8 text-[9px] font-black uppercase tracking-widest text-gray-400">Description</th>
                                                <th className="p-6 md:p-8 text-[9px] font-black uppercase tracking-widest text-gray-400">Status</th>
                                                <th className="p-6 md:p-8 text-[9px] font-black uppercase tracking-widest text-gray-400 text-right">Settlement</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-50 dark:divide-white/5">
                                            <tr className="group hover:bg-[#F4F7F4] dark:hover:bg-white/[0.01] transition-colors">
                                                <td className="p-6 md:p-8">
                                                    <p className="text-xs font-bold dark:text-white uppercase tracking-tighter">Oct 24, 2025</p>
                                                    <p className="text-[9px] font-mono text-[#2D6A4F] opacity-60">REF_AKR_9821</p>
                                                </td>
                                                <td className="p-6 md:p-8 text-sm font-serif italic text-gray-600 dark:text-gray-300">12kg Mixed Household Scrap</td>
                                                <td className="p-6 md:p-8">
                                                    <span className="px-3 py-1 bg-[#2D6A4F] text-white text-[9px] font-black uppercase rounded-full tracking-widest">Completed</span>
                                                </td>
                                                <td className="p-6 md:p-8 text-lg font-serif italic text-right dark:text-white">₹245.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </main>
        </div>
        <Footer/>
        </div>
    );
}

export default Dashboard;