import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { 
    HiOutlineBanknotes,
    HiOutlinePrinter,
    HiOutlineChevronLeft,
    HiOutlineCheckCircle
} from 'react-icons/hi2';
import { HiOutlineReceiptTax } from 'react-icons/hi';


const PriceDiscoveryScreen = ({ batch = [], onBack }) => {
    const { isDark } = useTheme();

    // Mock Rate Card - In production, this comes from your Django API
    const rates = {
        "Paper_Mixed": 14,
        "Plastic_LDPE": 22,
        "Metal_Iron": 32,
        "E_Waste": 55
    };

    const itemized = batch.map(item => ({
        ...item,
        rate: rates[item.material] || 0,
        total: (item.weight * (rates[item.material] || 0)).toFixed(2)
    }));

    const subtotal = itemized.reduce((acc, item) => acc + parseFloat(item.total), 0);
    const platformFee = 0; // You can add handling charges here
    const grandTotal = subtotal - platformFee;

    return (
        <div className={isDark ? 'dark' : ''}>
            <div className="flex min-h-screen bg-[#F8FAF8] dark:bg-[#050505] text-[#121212] dark:text-white transition-colors duration-500 font-sans">
                
                {/* LEFT: INVOICE BREAKDOWN */}
                <aside className="hidden lg:flex w-[480px] flex-col border-r border-[#E0E7E0] dark:border-white/5 p-12 space-y-8 bg-white dark:bg-[#080808]">
                    <button onClick={onBack} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#2D6A4F] hover:opacity-70">
                        <HiOutlineChevronLeft /> Back_To_Weights
                    </button>

                    <div className="space-y-1">
                        <h2 className="text-4xl font-serif italic tracking-tight">Valuation_Summary</h2>
                        <p className="text-[9px] font-mono text-gray-400 uppercase tracking-[0.4em]">TX_ID: AKRI-{Date.now().toString().slice(-6)}</p>
                    </div>

                    <div className="flex-1 overflow-y-auto space-y-6 custom-scrollbar pr-4">
                        {itemized.map((item) => (
                            <div key={item.id} className="flex justify-between items-end border-b border-[#F0F4F0] dark:border-white/5 pb-4">
                                <div>
                                    <span className="text-[8px] font-black text-[#2D6A4F] dark:text-[#52B788] uppercase tracking-widest">{item.label}</span>
                                    <p className="text-sm font-mono text-gray-500 mt-1">{item.weight}kg × ₹{item.rate}</p>
                                </div>
                                <p className="text-xl font-serif italic">₹{item.total}</p>
                            </div>
                        ))}
                    </div>

                    <div className="pt-8 border-t-2 border-dashed border-[#E0E7E0] dark:border-white/10 text-center">
                        <p className="text-[10px] font-black text-[#2D6A4F] uppercase tracking-[0.5em] mb-2">Total_To_Pay_Customer</p>
                        <h4 className="text-6xl font-mono font-black text-[#121212] dark:text-white tracking-tighter">₹{grandTotal.toFixed(2)}</h4>
                    </div>
                </aside>

                {/* MAIN: SETTLEMENT ACTIONS */}
                <main className="flex-1 p-6 md:p-12 max-w-3xl mx-auto w-full flex flex-col">
                    <header className="mb-12 text-center lg:text-left">
                        <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#2D6A4F]">Step_03 // Financial_Settlement</h3>
                    </header>

                    <div className="space-y-6">
                        {/* PAYMENT METHOD: WALLET */}
                        <motion.button 
                            whileHover={{ scale: 1.01 }}
                            className="w-full p-8 bg-white dark:bg-white/5 border border-[#2D6A4F] rounded-[2.5rem] flex items-center justify-between shadow-xl shadow-[#2D6A4F]/5"
                        >
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 bg-[#2D6A4F] rounded-2xl flex items-center justify-center text-white">
                                    <HiOutlineBanknotes size={32} />
                                </div>
                                <div className="text-left">
                                    <p className="text-[11px] font-black uppercase tracking-widest text-[#121212] dark:text-white">Aakri_Instant_Wallet</p>
                                    <p className="text-[9px] font-mono text-gray-400 uppercase mt-1">Immediate_Digital_Credit</p>
                                </div>
                            </div>
                            <HiOutlineCheckCircle className="text-[#2D6A4F]" size={28} />
                        </motion.button>

                        {/* PAYMENT METHOD: CASH */}
                        <motion.button 
                            whileHover={{ scale: 1.01 }}
                            className="w-full p-8 bg-white dark:bg-white/5 border border-[#E0E7E0] dark:border-white/5 rounded-[2.5rem] flex items-center justify-between opacity-60 hover:opacity-100"
                        >
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 bg-[#F8FAF8] dark:bg-black rounded-2xl flex items-center justify-center text-gray-400">
                                    <HiOutlineReceiptTax size={32} />
                                </div>
                                <div className="text-left">
                                    <p className="text-[11px] font-black uppercase tracking-widest text-[#121212] dark:text-white">Cash_Handover</p>
                                    <p className="text-[9px] font-mono text-gray-400 uppercase mt-1">Manual_Receipt_Required</p>
                                </div>
                            </div>
                        </motion.button>

                        {/* CUSTOMER VERIFICATION AREA */}
                        <div className="mt-12 bg-white dark:bg-[#0D0D0D] border border-[#E0E7E0] dark:border-white/5 rounded-[3rem] p-10 text-center shadow-inner">
                            <p className="text-[10px] font-black text-[#2D6A4F] uppercase tracking-[0.3em] mb-6 italic">Awaiting_Customer_Signature</p>
                            <div className="h-40 w-full bg-[#FBFDFB] dark:bg-black/40 rounded-3xl border border-[#E0E7E0] dark:border-white/5 flex items-center justify-center relative overflow-hidden">
                                <span className="text-[9px] font-mono text-gray-300 uppercase italic">[ Signature_Pad_Active ]</span>
                                {/* Background Watermark */}
                                <HiOutlineReceiptTax className="absolute bottom-[-20px] right-[-20px] text-[#2D6A4F]/5 rotate-12" size={150} />
                            </div>
                        </div>
                    </div>

                    <footer className="mt-12 flex gap-4">
                        <button className="p-6 bg-white dark:bg-white/5 border border-[#E0E7E0] dark:border-white/5 rounded-2xl text-gray-400 hover:text-[#2D6A4F] transition-all">
                            <HiOutlinePrinter size={24} />
                        </button>
                        <motion.button 
                            whileTap={{ scale: 0.98 }}
                            className="flex-1 py-8 bg-[#121212] dark:bg-[#2D6A4F] text-white rounded-[2rem] text-[11px] font-black uppercase tracking-[0.6em] shadow-2xl hover:bg-[#2D6A4F] transition-all"
                        >
                            Confirm_&_Finalize_Order
                        </motion.button>
                    </footer>
                </main>
            </div>
        </div>
    );
};

export default PriceDiscoveryScreen;