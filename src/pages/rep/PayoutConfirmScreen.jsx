import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { 
    HiOutlineCheckCircle, 
    HiOutlineShare, 
    HiOutlineHome,
    HiOutlineArrowPath,
    HiOutlineShieldCheck,
    HiOutlineQrCode
} from 'react-icons/hi2';
import { useNavigate, useLocation } from 'react-router-dom';

const PayoutConfirmScreen = () => {
    const { isDark } = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    
    // Get total from router state or default to zero
    const totalAmount = location.state?.totalAmount || "0.00";

    return (
        <div className={isDark ? 'dark' : ''}>
            <div className="flex flex-col lg:flex-row min-h-screen bg-[#F8FAF8] dark:bg-[#050505] text-[#121212] dark:text-white transition-colors duration-500 font-sans">
                
                {/* LEFT SIDE: THE SIGNAL (Success & Brand) */}
                <section className="relative flex-1 flex flex-col items-center justify-center p-12 overflow-hidden border-b lg:border-b-0 lg:border-r border-[#E0E7E0] dark:border-white/5">
                    {/* Background Watermark */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
                        <h1 className="text-[25vw] font-black uppercase tracking-tighter">AKRI</h1>
                    </div>

                    <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-center z-10"
                    >
                        <div className="mb-8 inline-flex items-center gap-3 px-4 py-2 bg-[#2D6A4F]/10 dark:bg-[#2D6A4F]/20 rounded-full border border-[#2D6A4F]/20">
                            <HiOutlineShieldCheck className="text-[#2D6A4F]" size={16} />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2D6A4F]">Blockchain_Verified_Tx</span>
                        </div>
                        
                        <h2 className="text-7xl lg:text-8xl font-serif italic tracking-tighter mb-4">Payout_Done</h2>
                        <p className="text-sm font-mono text-gray-400 uppercase tracking-[0.4em] max-w-md mx-auto">
                            The customer has been credited successfully.
                        </p>
                    </motion.div>

                    <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mt-16 relative"
                    >
                        <HiOutlineCheckCircle className="text-[#2D6A4F] animate-pulse" size={180} strokeWidth={1} />
                    </motion.div>
                </section>

                {/* RIGHT SIDE: THE DATA (Receipt & Actions) */}
                <section className="w-full lg:w-[500px] bg-white dark:bg-[#080808] p-8 md:p-16 flex flex-col justify-between">
                    <div className="space-y-12">
                        {/* Digital Receipt Header */}
                        <div>
                            <p className="text-[10px] font-black text-[#2D6A4F] uppercase tracking-[0.5em] mb-8">Proof_Of_Payment</p>
                            
                            <div className="space-y-6">
                                <div className="flex justify-between items-baseline border-b border-[#F0F4F0] dark:border-white/5 pb-4">
                                    <span className="text-[10px] font-black uppercase text-gray-400">Total_Disbursed</span>
                                    <span className="text-4xl font-mono font-bold tracking-tighter">₹{totalAmount}</span>
                                </div>
                                
                                <div className="flex justify-between items-baseline border-b border-[#F0F4F0] dark:border-white/5 pb-4">
                                    <span className="text-[10px] font-black uppercase text-gray-400">Transaction_ID</span>
                                    <span className="text-sm font-mono uppercase">AK-{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
                                </div>

                                <div className="flex justify-between items-baseline border-b border-[#F0F4F0] dark:border-white/5 pb-4">
                                    <span className="text-[10px] font-black uppercase text-gray-400">Timestamp</span>
                                    <span className="text-sm font-mono uppercase">{new Date().toLocaleTimeString()}</span>
                                </div>
                            </div>
                        </div>

                        {/* Interactive QR (For Customer to Scan) */}
                        <div className="p-6 bg-[#F8FAF8] dark:bg-white/5 rounded-[2rem] border border-dashed border-[#2D6A4F]/30 flex items-center gap-6">
                            <div className="bg-white p-2 rounded-xl">
                                <HiOutlineQrCode size={64} className="text-[#121212]" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-widest leading-tight">Customer_Scan</p>
                                <p className="text-[9px] font-mono text-gray-400 uppercase mt-1">Scan to download e-receipt on Aakri User App</p>
                            </div>
                        </div>
                    </div>

                    {/* Actions Terminal */}
                    <div className="mt-12 space-y-4">
                        <button 
                            onClick={() => navigate('/todaysjob')}
                            className="w-full group relative py-8 bg-[#121212] dark:bg-white text-white dark:text-black rounded-2xl overflow-hidden transition-all hover:bg-[#2D6A4F] dark:hover:bg-[#2D6A4F] dark:hover:text-white"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-4 text-[11px] font-black uppercase tracking-[0.5em]">
                                <HiOutlineArrowPath className="group-hover:rotate-180 transition-transform duration-500" size={18}/> 
                                Start_Next_Pickup
                            </span>
                        </button>

                        <div className="grid grid-cols-2 gap-4">
                            <button className="flex flex-col items-center justify-center gap-2 py-6 border border-[#E0E7E0] dark:border-white/5 rounded-2xl hover:bg-[#F8FAF8] dark:hover:bg-white/5 transition-all">
                                <HiOutlineShare size={20} className="text-[#2D6A4F]" />
                                <span className="text-[8px] font-black uppercase tracking-widest">Send_WhatsApp</span>
                            </button>
                            <button 
                                onClick={() => navigate('/home')}
                                className="flex flex-col items-center justify-center gap-2 py-6 border border-[#E0E7E0] dark:border-white/5 rounded-2xl hover:bg-[#F8FAF8] dark:hover:bg-white/5 transition-all"
                            >
                                <HiOutlineHome size={20} />
                                <span className="text-[8px] font-black uppercase tracking-widest">Dashboard</span>
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default PayoutConfirmScreen;