import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
    HiOutlineFingerPrint, 
    HiOutlineIdentification, 
    HiOutlineShieldCheck,
    HiOutlineArrowRight
} from 'react-icons/hi2';

const RepLogin = () => {
    const [empId, setEmpId] = useState("");
    const [pin, setPin] = useState("");

    return (
        <div className="min-h-screen bg-[#F8FAF8] dark:bg-[#050505] text-[#1a1a1a] dark:text-white flex flex-col">
            
            <main className="flex-1 max-w-xl mx-auto w-full px-6 flex flex-col justify-center py-16">
                
                {/* 1. HERO SECTION (Consistent with User Login) */}
                <section className="relative mb-12 text-center">
                    {/* Decorative Background Gradient */}
                    <div className="h-40 w-full rounded-[3rem] bg-gradient-to-br from-[#2D6A4F] to-[#1B4332] opacity-10 absolute top-0 left-0 -z-10" />
                    
                    <div className="pt-12 flex flex-col items-center">
                        <div className="w-20 h-20 rounded-[2rem] bg-white dark:bg-[#0A0A0A] border-4 border-[#F8FAF8] dark:border-[#050505] shadow-2xl flex items-center justify-center mb-6">
                            <HiOutlineFingerPrint size={32} className="text-[#2D6A4F]" />
                        </div>
                        
                        <h2 className="text-3xl font-serif italic tracking-tight">Agent_Terminal</h2>
                        <p className="text-[10px] font-mono text-[#2D6A4F] uppercase tracking-[0.4em] mt-2">
                            Aakri_Operations // Secure_Entry
                        </p>
                    </div>
                </section>

                {/* 2. AUTHENTICATION FORM */}
                <section className="bg-white dark:bg-[#0A0A0A] rounded-[3rem] border border-black/5 dark:border-white/5 p-10 shadow-sm space-y-8">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-2">Initialize_Credentials</h3>
                    
                    <div className="space-y-6">
                        {/* Employee ID Input */}
                        <div className="space-y-2">
                            <label className="flex items-center gap-2 text-[9px] font-black text-gray-400 uppercase tracking-widest ml-2">
                                <HiOutlineIdentification className="text-[#2D6A4F]" /> Employee_ID
                            </label>
                            <input 
                                type="text" 
                                placeholder="REP_KCH_2026"
                                value={empId}
                                onChange={(e) => setEmpId(e.target.value)}
                                className="w-full p-5 bg-gray-50 dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/10 outline-none focus:border-[#2D6A4F] transition-all font-mono text-sm tracking-widest"
                            />
                        </div>

                        {/* PIN Input */}
                        <div className="space-y-2">
                            <label className="flex items-center gap-2 text-[9px] font-black text-gray-400 uppercase tracking-widest ml-2">
                                <HiOutlineShieldCheck className="text-[#2D6A4F]" /> Secure_Access_PIN
                            </label>
                            <input 
                                type="password" 
                                maxLength="4"
                                placeholder="••••"
                                value={pin}
                                onChange={(e) => setPin(e.target.value)}
                                className="w-full p-5 bg-gray-50 dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/10 outline-none focus:border-[#2D6A4F] transition-all font-mono text-2xl text-center tracking-[1em]"
                            />
                        </div>
                    </div>

                    <motion.button 
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-6 bg-[#2D6A4F] text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] shadow-lg shadow-[#2D6A4F]/20 flex items-center justify-center gap-3 group"
                    >
                        Begin_Session
                        <HiOutlineArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                </section>

                {/* 3. SYSTEM FOOTER */}
                <footer className="mt-12 text-center space-y-4">
                    <p className="text-[8px] font-mono text-gray-400 uppercase tracking-[0.5em]">
                        Encryption_Level: AES_256 // System_v3.2
                    </p>
                    <button className="text-[9px] font-bold text-[#2D6A4F] uppercase tracking-widest border-b border-[#2D6A4F]/20 pb-1 hover:border-[#2D6A4F] transition-all">
                        Forgot_Access_Credentials?
                    </button>
                </footer>
            </main>

            {/* Bottom Accent Decor */}
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#2D6A4F]/30 to-transparent absolute bottom-0" />
        </div>
    );
};

export default RepLogin;