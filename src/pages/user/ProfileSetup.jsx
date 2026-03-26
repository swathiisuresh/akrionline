import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { HiOutlineShieldCheck, HiOutlineIdentification, HiOutlineMapPin, HiOutlineArrowRight } from 'react-icons/hi2';

function ProfileSetup({ onNext }) {
    const { isDark } = useTheme();
    const [profile, setProfile] = useState({ fullName: '', email: '', pincode: '', address: '' });
    const [focused, setFocused] = useState(null);

    return (
        <div className={`min-h-screen md:min-h-[700px] grid grid-cols-1 md:grid-cols-12 ${isDark ? 'bg-[#050505]' : 'bg-white'} rounded-none md:rounded-[3rem] overflow-hidden border-0 md:border ${isDark ? 'border-white/5' : 'border-gray-100'} shadow-0 md:shadow-2xl ${isDark ? 'text-white' : 'text-gray-900'}`}>
            
            {/* LEFT PANEL: THE STATUS LOG */}
            <div className={`col-span-1 md:col-span-4 ${isDark ? 'bg-gradient-to-b from-[#0A0A0A] to-[#0F1F1C]' : 'bg-gradient-to-b from-gray-50 to-blue-50'} p-6 md:p-8 lg:p-12 border-b md:border-b-0 md:border-r ${isDark ? 'border-[#2D6A4F]/30' : 'border-[#2D6A4F]/20'} flex flex-col justify-between`}>
                <div className="space-y-8 md:space-y-12">
                    <div>
                        <div className="w-10 md:w-12 h-10 md:h-12 rounded-xl md:rounded-2xl bg-[#2D6A4F]/20 flex items-center justify-center text-[#2D6A4F] mb-4 md:mb-6">
                            <HiOutlineShieldCheck size={20} className="md:w-7 md:h-7" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-serif italic leading-tight">Identity<br/><span className="text-[#2D6A4F]">Protocol</span></h2>
                    </div>

                    <div className="space-y-4 md:space-y-8">
                        <div className={`flex items-center gap-3 md:gap-4 opacity-40 px-3 py-2 rounded-lg ${isDark ? 'bg-white/5' : 'bg-[#2D6A4F]/5'}`}>
                            <div className="w-2 h-2 rounded-full bg-[#2D6A4F]" />
                            <span className="text-[8px] md:text-[10px] font-black tracking-[0.3em] uppercase">01_Auth_Verified</span>
                        </div>
                        <div className={`flex items-center gap-3 md:gap-4 px-3 py-2 rounded-lg ${isDark ? 'bg-[#2D6A4F]/10' : 'bg-[#2D6A4F]/10'}`}>
                            <div className="w-2 h-2 rounded-full bg-[#2D6A4F] shadow-[0_0_10px_#2D6A4F] animate-pulse" />
                            <span className="text-[8px] md:text-[10px] font-black tracking-[0.3em] uppercase text-[#2D6A4F]">02_Profile_Init</span>
                        </div>
                        
                    </div>
                </div>

                <div className={`p-4 md:p-6 rounded-xl md:rounded-2xl border-2 transition-all ${isDark ? 'bg-[#2D6A4F]/10 border-[#2D6A4F]/40' : 'bg-[#2D6A4F]/10 border-[#2D6A4F]/40'}`}>
                    <p className={`text-[8px] md:text-[9px] font-mono leading-relaxed uppercase tracking-tighter ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        ✓ Verification Successful. <br/> 
                        Awaiting User_Data entry for node synchronization.
                    </p>
                </div>
            </div>

            {/* RIGHT PANEL: THE NEON FORM */}
            <div className={`col-span-1 md:col-span-8 p-6 md:p-8 lg:p-20 space-y-8 md:space-y-12 lg:space-y-16 ${isDark ? 'bg-gradient-to-br from-[#050505] to-[#0F1F1C]/30' : 'bg-gradient-to-br from-white to-blue-50/50'}`}>
                <header>
                    <h1 className={`text-3xl md:text-4xl lg:text-5xl font-serif italic tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>Final_Step.</h1>
                    <p className={`mt-2 md:mt-4 text-xs md:text-sm font-medium ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>Please enter your details to complete the registration.</p>
                </header>

                <div className="space-y-8 md:space-y-10 lg:space-y-12">
                    {/* INPUT: FULL NAME */}
                    <div className="relative group">
                        <p className={`absolute -top-5 md:-top-6 left-0 text-[8px] md:text-[9px] font-black uppercase tracking-widest transition-all duration-500 ${focused === 'name' ? 'text-[#2D6A4F] opacity-100' : isDark ? 'opacity-0' : 'opacity-40'} ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Subject_Name</p>
                        <input 
                            onFocus={() => setFocused('name')}
                            onBlur={() => setFocused(null)}
                            type="text"
                            placeholder="Full Name*"
                            className={`w-full bg-transparent py-3 md:py-4 text-lg md:text-2xl font-bold outline-none transition-all px-3 rounded-lg ${isDark ? 'border-2 border-white/10 text-white placeholder:text-white/40 focus:border-[#2D6A4F] focus:bg-[#2D6A4F]/5' : 'border-2 border-blue-100 text-gray-900 placeholder:text-gray-500 focus:border-[#2D6A4F] focus:bg-[#2D6A4F]/5'}`}
                            onChange={(e) => setProfile({...profile, fullName: e.target.value})}
                        />
                    </div>

                    {/* GRID: EMAIL & PINCODE */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
                        <div className="relative group">
                            <p className={`absolute -top-5 md:-top-6 left-0 text-[8px] md:text-[9px] font-black uppercase tracking-widest transition-all duration-500 ${focused === 'email' ? 'text-[#2D6A4F] opacity-100' : isDark ? 'opacity-0' : 'opacity-40'} ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Email_Ref</p>
                            <input 
                                onFocus={() => setFocused('email')}
                                onBlur={() => setFocused(null)}
                                type="email"
                                placeholder="Email_Ref (Optional)"
                                className={`w-full bg-transparent py-3 text-base md:text-lg font-bold outline-none transition-all px-3 rounded-lg ${isDark ? 'border-2 border-white/10 text-white placeholder:text-white/40 focus:border-[#52B788] focus:bg-[#52B788]/5' : 'border-2 border-green-100 text-gray-900 placeholder:text-gray-500 focus:border-[#52B788] focus:bg-[#52B788]/5'}`}
                                onChange={(e) => setProfile({...profile, email: e.target.value})}
                            />
                        </div>
                        <div className="relative group">
                            <p className={`absolute -top-5 md:-top-6 left-0 text-[8px] md:text-[9px] font-black uppercase tracking-widest transition-all duration-500 ${focused === 'pin' ? 'text-[#2D6A4F] opacity-100' : isDark ? 'opacity-0' : 'opacity-40'} ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Pincode</p>
                            <input 
                                onFocus={() => setFocused('pin')}
                                onBlur={() => setFocused(null)}
                                type="text"
                                placeholder="Pincode*"
                                className={`w-full bg-transparent py-3 text-base md:text-lg font-bold outline-none transition-all px-3 rounded-lg ${isDark ? 'border-2 border-white/10 text-white placeholder:text-white/40 focus:border-orange-400 focus:bg-orange-400/5' : 'border-2 border-orange-100 text-gray-900 placeholder:text-gray-500 focus:border-orange-400 focus:bg-orange-400/5'}`}
                                onChange={(e) => setProfile({...profile, pincode: e.target.value})}
                            />
                        </div>
                    </div>

                    {/* BOX: ADDRESS */}
                    <div className={`relative p-4 md:p-6 lg:p-8 rounded-lg md:rounded-xl lg:rounded-[2rem] transition-all border-2 ${isDark ? 'bg-gradient-to-br from-[#2D6A4F]/10 to-[#2D6A4F]/5 border-[#2D6A4F]/30' : 'bg-gradient-to-br from-[#2D6A4F]/10 to-[#2D6A4F]/5 border-[#2D6A4F]/30'}`}>
                        <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6 text-[#2D6A4F] bg-[#2D6A4F]/10 px-3 py-1.5 rounded-lg w-fit">
                            <HiOutlineMapPin size={18} className="md:w-5 md:h-5" />
                            <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em]">Dispatch_Coordinates</span>
                        </div>
                        <textarea 
                            rows={3}
                            placeholder="Enter your street name, house number and landmark..."
                            className={`w-full bg-transparent outline-none text-base md:text-lg font-medium resize-none leading-relaxed ${isDark ? 'text-white placeholder:text-white/40' : 'text-gray-900 placeholder:text-gray-500'}`}
                            onChange={(e) => setProfile({...profile, address: e.target.value})}
                        />
                    </div>
                </div>

                {/* THE ACTION BUTTON */}
                <motion.button 
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onNext}
                    disabled={!profile.fullName || !profile.address}
                    className="w-full py-4 md:py-5 lg:py-6 rounded-lg md:rounded-xl lg:rounded-[2rem] bg-[#2D6A4F] text-white font-black text-[8px] md:text-[9px] lg:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em] flex items-center justify-center gap-2 md:gap-4 shadow-[0_20px_40px_rgba(45,106,79,0.2)] hover:shadow-[#2D6A4F]/40 transition-all disabled:opacity-20"
                >
                    Authorize <HiOutlineArrowRight className="text-sm md:text-base" />
                </motion.button>
            </div>
        </div>
    );
}

export default ProfileSetup;