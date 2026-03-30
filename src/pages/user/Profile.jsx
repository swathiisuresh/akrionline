import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    HiOutlineUser, 
    HiOutlineEnvelope, 
    HiOutlinePhone, 
    HiOutlineMapPin,
    HiOutlineFingerPrint,
    HiOutlineCamera,
    HiOutlineGlobeAlt,
    HiOutlinePencilSquare,
    HiOutlineCheckBadge
} from 'react-icons/hi2';
import { LuLeaf, LuActivity, LuShieldCheck } from "react-icons/lu";
import { useTheme } from '../../context/ThemeContext';
import Sidebar from '../../components/Sidebar';

const Profile = () => {
    const { isDark } = useTheme();
    const [isEditing, setIsEditing] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [user, setUser] = useState({
        name: "Swathi Suresh",
        email: "swathi.dev@example.com",
        phone: "+91 98765 43210",
        address: "Kakkanad, Kochi, Kerala",
        node: "NODE_KCH_04",
        joined: "JAN_2026",
        rank: "ELITE_RECYCLER",
        credits: "1,240",
        impact: "42.5kg CO2"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className={`flex min-h-screen selection:bg-[#2D6A4F] ${isDark ? 'bg-[#0A0A0A] text-white' : 'bg-[#F8FAF8] text-[#1a1a1a]'}`}>
            {/* Mobile Overlay */}
            {sidebarOpen && (
                <div 
                    className={`fixed inset-0 z-30 lg:hidden ${isDark ? 'bg-black/50' : 'bg-black/30'}`}
                    onClick={() => setSidebarOpen(false)}
                />
            )}
            
            {/* Sidebar */}
            <div className={`fixed left-0 top-0 bottom-0 w-72 z-40 lg:static lg:z-0 transition-transform duration-300 ${
                sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
            }`}>
                <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            </div>

            <main className="flex-1 p-4 md:p-8 lg:p-10 overflow-hidden w-full">
                {/* Mobile Sidebar Toggle */}
                <button 
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className={`lg:hidden mb-6 p-2 rounded-lg transition-all ${isDark ? 'bg-white/5 hover:bg-[#2D6A4F]' : 'bg-gray-100 hover:bg-[#2D6A4F] hover:text-white'}`}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-4 md:gap-6">
                    
                    {/* LEFT COLUMN: IDENTITY CARD */}
                    <div className="lg:col-span-4 col-span-12 space-y-4 md:space-y-6">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className={`border rounded-[2rem] md:rounded-[3rem] p-6 md:p-8 relative overflow-hidden group ${isDark ? 'bg-[#111] border-white/5' : 'bg-white border-gray-200'}`}
                        >
                            {/* Decorative background element */}
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#2D6A4F] blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity" />
                            
                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="relative mb-6">
                                    <div className="w-32 h-32 rounded-full border-2 border-dashed border-[#2D6A4F] p-2 animate-[spin_10s_linear_infinite]"></div>
                                    <div className={`absolute inset-2 rounded-full flex items-center justify-center overflow-hidden border ${isDark ? 'bg-[#1A1A1A] border-white/10' : 'bg-gray-100 border-gray-300'}`}>
                                        <HiOutlineUser size={40} className={isDark ? 'text-gray-500' : 'text-gray-400'} />
                                    </div>
                                    <button className={`absolute bottom-1 right-1 p-2 rounded-full border-4 ${isDark ? 'bg-[#2D6A4F] border-[#111]' : 'bg-[#2D6A4F] border-white'} hover:scale-110 transition-transform`}>
                                        <HiOutlineCamera size={14} />
                                    </button>
                                </div>

                                <h2 className="text-2xl font-serif italic tracking-tight">{user.name}</h2>
                                <div className={`mt-2 px-3 py-1 rounded-full border ${isDark ? 'bg-[#2D6A4F]/10 border-[#2D6A4F]/20' : 'bg-green-50 border-green-200'}`}>
                                    <span className={`text-[8px] font-black uppercase tracking-[0.2em] ${isDark ? 'text-[#52B788]' : 'text-[#2D6A4F]'}`}>{user.rank}</span>
                                </div>

                                <div className="w-full mt-10 space-y-4 text-left">
                                    <div className={`flex justify-between items-center p-4 rounded-2xl border ${isDark ? 'bg-white/5 border-white/5' : 'bg-gray-50 border-gray-200'}`}>
                                        <span className={`text-[9px] font-black uppercase tracking-widest ${isDark ? 'text-white/30' : 'text-gray-500'}`}>Network_Node</span>
                                        <span className="text-[10px] font-mono text-[#52B788]">{user.node}</span>
                                    </div>
                                    <div className={`flex justify-between items-center p-4 rounded-2xl border ${isDark ? 'bg-white/5 border-white/5' : 'bg-gray-50 border-gray-200'}`}>
                                        <span className={`text-[9px] font-black uppercase tracking-widest ${isDark ? 'text-white/30' : 'text-gray-500'}`}>Auth_Status</span>
                                        <HiOutlineCheckBadge className="text-[#52B788]" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <div className={`p-6 md:p-8 border rounded-[2rem] md:rounded-[3rem] ${isDark ? 'bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border-white/5' : 'bg-gray-50 border-gray-200'}`}>
                            <p className={`text-[9px] font-black uppercase tracking-[0.4em] mb-6 ${isDark ? 'text-white/20' : 'text-gray-400'}`}>System_Stats</p>
                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between text-[10px] mb-2 uppercase font-bold tracking-tighter">
                                        <span>Environmental_Impact</span>
                                        <span className="text-[#52B788]">{user.impact}</span>
                                    </div>
                                    <div className={`h-1.5 w-full rounded-full overflow-hidden ${isDark ? 'bg-white/5' : 'bg-gray-300'}`}>
                                        <motion.div initial={{ width: 0 }} animate={{ width: "70%" }} className="h-full bg-[#2D6A4F]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: DATA ENGINE */}
                    <div className="lg:col-span-8 col-span-12 space-y-4 md:space-y-6">
                        {/* TOP STATS BAR */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                            {[
                                { label: "Total_Credits", val: user.credits, icon: <HiOutlineGlobeAlt /> },
                                { label: "Sync_Date", val: user.joined, icon: <LuActivity /> },
                                { label: "Security_Level", val: "L3_ENC", icon: <LuShieldCheck /> }
                            ].map((stat, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className={`p-4 md:p-6 border rounded-[1.5rem] md:rounded-[2rem] flex flex-col justify-between ${isDark ? 'bg-[#111] border-white/5' : 'bg-white border-gray-200'}`}
                                >
                                    <div className="text-[#2D6A4F] mb-4">{stat.icon}</div>
                                    <div>
                                        <p className={`text-[8px] font-black uppercase tracking-widest ${isDark ? 'text-white/20' : 'text-gray-500'}`}>{stat.label}</p>
                                        <p className="text-lg font-serif italic mt-1">{stat.val}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* EDITABLE PARAMETERS SECTION */}
                        <motion.section 
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className={`border rounded-[2.5rem] md:rounded-[3.5rem] p-6 md:p-10 relative ${isDark ? 'bg-[#111] border-white/5' : 'bg-white border-gray-200'}`}
                        >
                            <div className="flex justify-between items-center mb-10">
                                <h3 className={`text-[10px] font-black uppercase tracking-[0.5em] flex items-center gap-3 ${isDark ? 'text-[#2D6A4F]' : 'text-green-600'}`}>
                                    <HiOutlineFingerPrint size={18} /> Core_Parameters
                                </h3>
                                <button 
                                    onClick={() => isEditing ? setIsEditing(false) : setIsEditing(true)}
                                    className={`p-3 rounded-2xl transition-all ${isDark ? 'bg-white/5 hover:bg-[#2D6A4F]' : 'bg-gray-100 hover:bg-[#2D6A4F] hover:text-white'}`}
                                >
                                    {isEditing ? <LuShieldCheck size={20}/> : <HiOutlinePencilSquare size={20}/>}
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-6 md:gap-y-8">
                                {[
                                    { id: 'email', label: 'Comm_Link', val: user.email, icon: <HiOutlineEnvelope /> },
                                    { id: 'phone', label: 'Secure_Line', val: user.phone, icon: <HiOutlinePhone /> },
                                    { id: 'address', label: 'Terminal_Coordinates', val: user.address, icon: <HiOutlineMapPin />, full: true },
                                ].map((field) => (
                                    <div key={field.id} className={`${field.full ? 'md:col-span-2' : ''} group`}>
                                        <label className={`text-[8px] font-black uppercase tracking-[0.3em] ml-2 mb-2 block flex items-center gap-2 ${isDark ? 'text-white/20' : 'text-gray-500'}`}>
                                            {field.icon} {field.label}
                                        </label>
                                        <input 
                                            name={field.id}
                                            disabled={!isEditing}
                                            value={user[field.id]}
                                            onChange={handleChange}
                                            className={`w-full p-5 rounded-[1.5rem] border transition-all font-mono text-xs ${isDark ? `bg-white/5 ${isEditing ? 'border-[#2D6A4F] bg-white/10' : 'border-transparent cursor-default'}` : `bg-gray-50 ${isEditing ? 'border-[#2D6A4F] bg-gray-100' : 'border-gray-200 cursor-default'}`}`}
                                        />
                                    </div>
                                ))}
                            </div>

                            <AnimatePresence>
                                {isEditing && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="mt-12 flex justify-end gap-4"
                                    >
                                        <button onClick={() => setIsEditing(false)} className={`px-8 py-4 text-[9px] font-black uppercase tracking-widest ${isDark ? 'text-white/40' : 'text-gray-500'}`}>Abort</button>
                                        <button onClick={() => setIsEditing(false)} className="px-10 py-4 bg-[#2D6A4F] text-white rounded-2xl text-[9px] font-black uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(45,106,79,0.3)]">Overwrite_Data</button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.section>
                    </div>
                </div>
                
                {/* Visual Scanner Line Decor */}
                <div className={`fixed bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent ${isDark ? 'via-[#2D6A4F]/30' : 'via-[#2D6A4F]/60'} to-transparent`} />
            </main>
        </div>
    );
};

export default Profile;