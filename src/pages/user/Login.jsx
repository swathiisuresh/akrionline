import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineArrowRight, HiOutlineGlobeAlt, HiOutlinePhone } from 'react-icons/hi2';
import Navbar from '../../components/Navbar';
import { useNavigate } from 'react-router-dom';


function Login() {
    const navigate=useNavigate();
    return (
        <div className="h-screen bg-white dark:bg-[#080808] selection:bg-[#2D6A4F] selection:text-white overflow-hidden transition-colors duration-500">
            <div className="absolute top-0 left-0 w-full z-50">
                <Navbar />
            </div>

            <section className="flex flex-col md:flex-row h-screen">
                {/* LEFT PANEL */}
                <div className="hidden md:flex md:w-1/2 h-full relative bg-[#0a1f16] overflow-hidden flex-col justify-end p-20">
                    <div className="absolute inset-0 z-0 opacity-[0.07] dark:opacity-[0.12]"
                        style={{ backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`, backgroundSize: '80px 80px' }} />

                    <motion.img
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.25 }}
                        transition={{ duration: 1.5 }}
                        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000"
                        alt="Supply Chain"
                        className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-luminosity"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f16] via-transparent to-transparent opacity-60" />

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="relative z-10 max-w-md"
                    >
                        <div className="w-12 h-1 bg-[#52B788] mb-8" />
                        <h1 className="text-6xl font-serif text-white leading-[1.1] tracking-tighter mb-6">
                            Traceable <br />
                            <span className="italic font-light text-gray-400">Logistics.</span>
                        </h1>
                        <p className="text-sm text-green-50/40 font-medium tracking-wide max-w-xs leading-relaxed">
                            Securing the circular economy through digital infrastructure and real-time material verification.
                        </p>
                    </motion.div>

                    <div className="absolute bottom-10 left-20 opacity-20 hidden lg:block">
                        <p className="font-mono text-[9px] text-white uppercase tracking-[0.5em]">Aakri_Terminal_v2.01</p>
                    </div>
                </div>

                {/* RIGHT PANEL */}
                <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-12 bg-white dark:bg-[#080808] relative transition-colors duration-500">
                    <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#2D6A4F]/5 dark:bg-[#2D6A4F]/10 rounded-full blur-[100px] pointer-events-none" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="w-full max-w-sm relative z-10"
                    >
                        <header className="mb-8 space-y-2">
                            <div className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#2D6A4F] shadow-[0_0_10px_#2D6A4F]" />
                                <h2 className="text-[9px] font-black uppercase tracking-[0.4em] text-[#2D6A4F]">Secure Portal</h2>
                            </div>
                            <h1 className="italic font-light text-gray-400 dark:text-gray-500 text-3xl md:text-5xl block mt-6">Sign In.</h1>
                        </header>

                        <form className="space-y-8">
                            {/* Input: Mobile Number */}
                            <div className="group relative">
                                <label className="text-[8px] font-black uppercase tracking-widest text-gray-400 group-focus-within:text-[#2D6A4F] transition-all duration-300">
                                    Mobile Number
                                </label>
                                <div className="relative flex items-center gap-3">
                                    <span className="text-sm font-mono text-gray-400 dark:text-white/30 border-b border-gray-100 dark:border-white/10 py-3">+91</span>
                                    <div className="relative flex-1">
                                        <input
                                            type="tel"
                                            pattern="[0-9]{10}"
                                            placeholder="00000 00000"
                                            className="w-full bg-transparent border-b border-gray-100 dark:border-white/10 py-3 focus:border-[#2D6A4F] outline-none transition-all text-sm font-medium tracking-[0.2em] text-[#1A1A1A] dark:text-white placeholder:text-gray-200 dark:placeholder:text-white/5"
                                        />
                                        <div className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#2D6A4F] group-focus-within:w-full transition-all duration-500" />
                                    </div>
                                    <HiOutlinePhone className="text-gray-200 dark:text-white/10 group-focus-within:text-[#2D6A4F] transition-colors" />
                                </div>
                            </div>

                            {/* Button Section */}
                            <div className="space-y-4 pt-2">
                                <button 
                                onClick={() => navigate('/verifyotp')}
                                className="group relative w-full overflow-hidden bg-[#1A1A1A] dark:bg-white py-5 px-8 rounded-lg transition-all duration-500 hover:bg-[#2D6A4F] dark:hover:bg-[#2D6A4F] active:scale-[0.98]">
                                    <div className="relative z-10 flex items-center justify-center gap-3 text-[9px] font-black uppercase tracking-[0.3em] text-white dark:text-[#080808] group-hover:text-white transition-colors">
                                        Send OTP
                                        <HiOutlineArrowRight className="text-base group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </button>

                                <div className="flex items-center gap-3 text-gray-200 dark:text-white/5 text-[8px] font-bold tracking-widest">
                                    <div className="h-px w-full bg-gray-100 dark:bg-white/5" />
                                    OR
                                    <div className="h-px w-full bg-gray-100 dark:bg-white/5" />
                                </div>

                                <button className="w-full py-4 border border-gray-100 dark:border-white/5 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-50 dark:hover:bg-white/5 transition-all group">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" alt="Google" />
                                    <span className="text-[9px] font-black uppercase tracking-widest text-gray-400 dark:text-white/30 group-hover:text-gray-700 dark:group-hover:text-white transition-colors">Continue with Google</span>
                                </button>
                            </div>
                        </form>

                        {/* Footer */}
                        <div className="mt-10 pt-6 border-t border-gray-50 dark:border-white/5 flex flex-col items-center gap-4">
                            <p className="text-[9px] text-gray-400 dark:text-white/20 font-bold uppercase tracking-widest text-center">
                                New to Aakri? <a href="#" className="text-[#2D6A4F] underline decoration-1 underline-offset-4">Register Business</a>
                            </p>
                            <HiOutlineGlobeAlt className="text-gray-200 dark:text-white/10 text-lg animate-pulse" />
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

export default Login;