import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { HiOutlineShieldCheck, HiOutlineArrowRight, HiOutlineArrowLeft } from 'react-icons/hi2';
import Navbar from '../../components/Navbar';

function OtpVerification() {
    const navigate = useNavigate();
    const { isDark } = useTheme();
    const [otp, setOtp] = useState(['', '', '', '', '']);
    const [timer, setTimer] = useState(30);

    // Handle Countdown
    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => setTimer(prev => prev - 1), 1000);
            return () => clearInterval(interval);
        }
    }, [timer]);

    // Handle OTP Input Logic
    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        // Focus next input
        if (element.nextSibling && element.value !== "") {
            element.nextSibling.focus();
        }
    };

    return (
        <div className={isDark ? 'dark' : ''}>
        <div className="h-screen bg-white dark:bg-[#080808] selection:bg-[#2D6A4F] overflow-hidden transition-colors duration-500">
            <div className="absolute top-0 left-0 w-full z-50">
                <Navbar />
            </div>

            <section className="flex flex-col md:flex-row h-screen">
                {/* LEFT PANEL - Branding (Matches Login) */}
                <div className="hidden md:flex md:w-1/2 h-full relative bg-[#0a1f16] overflow-hidden flex-col justify-end p-20">
                    <div className="absolute inset-0 z-0 opacity-[0.07] dark:opacity-[0.12]"
                        style={{ backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`, backgroundSize: '80px 80px' }} />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f16] via-transparent to-transparent opacity-60" />

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="relative z-10"
                    >
                        <div className="w-12 h-1 bg-[#52B788] mb-8" />
                        <h1 className="text-6xl font-serif text-white leading-[1.1] tracking-tighter mb-6">
                            Secure <br />
                            <span className="italic font-light text-gray-400">Handshake.</span>
                        </h1>
                        <p className="text-sm text-green-50/40 font-medium tracking-wide max-w-xs leading-relaxed">
                            Verification complete. Establishing an encrypted session with the Aakri network.
                        </p>
                    </motion.div>
                </div>

                {/* RIGHT PANEL - OTP Logic */}
                <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-12 bg-white dark:bg-[#080808] relative">
                    <div className="absolute top-0 left-0 w-80 h-80 bg-[#2D6A4F]/5 dark:bg-[#2D6A4F]/10 rounded-full blur-[100px] pointer-events-none" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="w-full max-w-sm relative z-10"
                    >
                        <button 
                            onClick={() => navigate('/login')}
                            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-[#2D6A4F] transition-colors mb-12"
                        >
                            <HiOutlineArrowLeft /> Edit Number
                        </button>

                        <header className="mb-10 space-y-2">
                            <div className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#2D6A4F] shadow-[0_0_10px_#2D6A4F]" />
                                <h2 className="text-[9px] font-black uppercase tracking-[0.4em] text-[#2D6A4F]">Identity Verification</h2>
                            </div>
                            <h1 className="italic font-light text-gray-400 dark:text-gray-500 text-3xl md:text-5xl block mt-6">Confirm.</h1>
                            <p className="text-[10px] text-gray-400 font-mono tracking-tight mt-2">Enter the 5-digit code sent to your device.</p>
                        </header>

                        <form className="space-y-10">
                            {/* OTP Box Inputs */}
                            <div className="flex justify-between gap-2">
                                {otp.map((data, index) => (
                                    <input
                                        key={index}
                                        type="text"
                                        maxLength="1"
                                        value={data}
                                        onChange={e => handleChange(e.target, index)}
                                        onFocus={e => e.target.select()}
                                        className="w-12 h-16 md:w-14 md:h-20 bg-transparent border-b-2 border-gray-500 dark:border-white/10 text-center text-2xl font-serif italic outline-none focus:border-[#2D6A4F] focus:text-[#2D6A4F] transition-all dark:text-white"
                                    />
                                ))}
                            </div>

                            <div className="space-y-6">
                                <button className="group relative w-full overflow-hidden bg-[#1A1A1A] dark:bg-white py-5 rounded-lg transition-all duration-500 hover:bg-[#2D6A4F] dark:hover:bg-[#2D6A4F] active:scale-[0.98]">
                                    <div className="relative z-10 flex items-center justify-center gap-3 text-[9px] font-black uppercase tracking-[0.3em] text-white dark:text-[#080808] group-hover:text-white transition-colors">
                                        Verify OTP
                                        <HiOutlineShieldCheck className="text-base group-hover:rotate-12 transition-transform" />
                                    </div>
                                </button>

                                <div className="flex flex-col items-center gap-4">
                                    <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">
                                        {timer > 0 ? (
                                            `Resend available in ${timer}s`
                                        ) : (
                                            <button 
                                                type="button"
                                                onClick={() => setTimer(30)}
                                                className="text-[#2D6A4F] hover:underline"
                                            >
                                                Resend Code
                                            </button>
                                        )}
                                    </p>
                                </div>
                            </div>
                        </form>

                        <div className="mt-16 pt-6 border-t border-gray-50 dark:border-white/5 opacity-20">
                            <p className="font-mono text-[8px] text-center uppercase tracking-[0.5em]">Auth_Session_Active</p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
        </div>
    );
}

export default OtpVerification;