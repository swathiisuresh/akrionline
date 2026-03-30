import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    HiOutlineMapPin, 
    HiOutlineChevronLeft, 
    HiOutlineUserPlus,
    HiOutlineCheckCircle
} from 'react-icons/hi2';
import { useTheme } from '../../context/ThemeContext';

const Waitlist = () => {
    const { isDark } = useTheme();
    const [pincode, setPincode] = useState("682001");
    const [isJoined, setIsJoined] = useState(false);

    const handleJoin = () => {
        // Here you would eventually call your Node.js API
        setIsJoined(true);
    };

    return (
        <div className={`min-h-screen flex flex-col items-center p-4 md:p-6 font-sans transition-colors ${isDark ? 'bg-[#0A0A0A] text-white' : 'bg-[#F8FAF8] text-[#1a1a1a]'}`}>
            
            {/* TERMINAL HEADER */}
            <header className="w-full max-w-md flex items-center justify-between py-4 md:py-6">
                <button className={`p-2 rounded-full transition-colors ${isDark ? 'hover:bg-white/5 text-gray-400' : 'hover:bg-gray-200 text-gray-600'}`}>
                    <HiOutlineChevronLeft size={24} />
                </button>
                <h1 className={`text-[9px] md:text-[10px] font-black uppercase tracking-[0.5em] ${isDark ? 'text-[#2D6A4F]' : 'text-green-700'}`}>Access_Queue</h1>
                <div className="w-10" /> 
            </header>

            <main className="flex-1 w-full max-w-md flex flex-col items-center justify-center space-y-8 md:space-y-12">
                
                <AnimatePresence mode="wait">
                    {!isJoined ? (
                        <motion.div 
                            key="form"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="w-full flex flex-col items-center space-y-12"
                        >
                            {/* RADAR CORE */}
                            <div className="relative flex items-center justify-center">
                                {/* Pulse Rings */}
                                {[1, 2].map((i) => (
                                    <motion.div 
                                        key={i}
                                        animate={{ scale: [1, 2], opacity: [0.3, 0] }}
                                        transition={{ duration: 3, repeat: Infinity, delay: i }}
                                        className={`absolute w-24 md:w-32 h-24 md:h-32 border rounded-full ${isDark ? 'border-[#2D6A4F]' : 'border-green-400'}`}
                                    />
                                ))}
                                
                                <div className={`w-20 md:w-24 h-20 md:h-24 rounded-full flex items-center justify-center relative z-10 border-4 ${isDark ? 'bg-[#2D6A4F] shadow-[0_0_60px_rgba(45,106,79,0.5)] border-[#0A0A0A]' : 'bg-green-500 shadow-[0_0_60px_rgba(45,106,79,0.3)] border-[#F8FAF8]'}`}>
                                    <HiOutlineMapPin size={isDark ? 40 : 32} className="text-white" />
                                </div>

                                <div className={`absolute -bottom-4 border px-4 md:px-5 py-1.5 rounded-full z-20 text-[7px] md:text-[8px] font-black uppercase tracking-widest ${isDark ? 'bg-[#111] border-[#2D6A4F]/30 text-[#52B788]' : 'bg-green-50 border-green-200 text-green-700'}`}>
                                    Area_Offline
                                </div>
                            </div>

                            {/* CONTENT */}
                            <div className="text-center space-y-3 md:space-y-4">
                                <h2 className={`text-3xl md:text-4xl font-serif italic tracking-tight leading-tight ${isDark ? '' : 'text-gray-900'}`}>
                                    We're not in your <br /> area yet
                                </h2>
                                <p className={`text-xs md:text-sm font-medium leading-relaxed max-w-[280px] mx-auto uppercase tracking-wide ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
                                    Sync your coordinates to be notified when <span className={`font-bold italic ${isDark ? 'text-white' : 'text-gray-900'}`}>Aakri</span> deploys in your zone.
                                </p>
                            </div>

                            {/* PINCODE TERMINAL */}
                            <div className="w-full px-2 md:px-0">
                                <div className="text-center">
                                    <p className={`text-[7px] md:text-[8px] font-black uppercase tracking-[0.4em] mb-3 md:mb-4 ${isDark ? 'text-[#52B788]' : 'text-green-600'}`}>Location_ID</p>
                                    <div className={`border rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 shadow-inner group focus-within:transition-all ${isDark ? 'bg-[#111] border-white/5 focus-within:border-[#2D6A4F]' : 'bg-white border-gray-200 focus-within:border-green-500'}`}>
                                        <input 
                                            type="text" 
                                            maxLength="6"
                                            value={pincode}
                                            onChange={(e) => setPincode(e.target.value)}
                                            className={`w-full bg-transparent text-4xl md:text-5xl font-mono font-bold text-center outline-none tracking-[0.2em] ${isDark ? 'text-white selection:bg-[#2D6A4F]' : 'text-gray-900 selection:bg-green-200'}`}
                                        />
                                    </div>
                                    <button className={`mt-4 md:mt-6 text-[8px] md:text-[9px] font-bold uppercase tracking-widest transition-colors ${isDark ? 'text-gray-500 hover:text-[#52B788]' : 'text-gray-600 hover:text-green-600'}`}>
                                        Change_Location
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        /* SUCCESS STATE */
                        <motion.div 
                            key="success"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center space-y-6 px-4 md:px-0"
                        >
                            <div className={`w-20 md:w-24 h-20 md:h-24 rounded-[1.5rem] md:rounded-[2rem] border flex items-center justify-center mx-auto mb-6 md:mb-8 ${isDark ? 'bg-white/5 border-[#2D6A4F] text-[#52B788]' : 'bg-green-50 border-green-300 text-green-600'}`}>
                                <HiOutlineCheckCircle size={40} />
                            </div>
                            <h2 className={`text-2xl md:text-3xl font-serif italic ${isDark ? '' : 'text-gray-900'}`}>Queue_Joined</h2>
                            <p className={`text-xs font-mono uppercase tracking-widest ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>Confirmation_Sent // {pincode}</p>
                            <button 
                                onClick={() => setIsJoined(false)}
                                className={`mt-6 md:mt-10 text-[8px] md:text-[9px] font-black border-b pb-1 uppercase tracking-[0.3em] transition-colors ${isDark ? 'text-[#2D6A4F] border-[#2D6A4F]' : 'text-green-700 border-green-700'}`}
                            >
                                Return_to_Terminal
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>

            {/* ACTION FOOTER */}
            {!isJoined && (
                <footer className="w-full max-w-md pb-8 md:pb-12 px-2 md:px-0">
                    <motion.button 
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={handleJoin}
                        className={`w-full py-5 md:py-7 rounded-[2rem] md:rounded-[2.5rem] flex items-center justify-center gap-3 md:gap-4 group overflow-hidden relative font-black text-white text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] ${isDark ? 'bg-[#2D6A4F] shadow-[0_20px_40px_rgba(45,106,79,0.3)]' : 'bg-green-600 shadow-[0_20px_40px_rgba(45,106,79,0.2)]'}`}
                    >
                        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        <HiOutlineUserPlus size={18} className="relative z-10" />
                        <span className="relative z-10">Initialize_Join</span>
                    </motion.button>
                </footer>
            )}

            {/* BACKGROUND DETAIL */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#2D6A4F] blur-[150px] ${isDark ? 'opacity-[0.05]' : 'opacity-[0.03]'}`} />
            </div>
        </div>
    );
};

export default Waitlist;