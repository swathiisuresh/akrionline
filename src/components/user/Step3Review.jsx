import React from 'react';
import { HiOutlineCheckCircle, HiOutlineArrowLeft, HiOutlineShieldCheck } from 'react-icons/hi2';

function Step3Review({ data, onBack }) {
    return (
        <div className="space-y-6 md:space-y-8 lg:space-y-10">
            {/* PAYOUT SUMMARY NODE */}
            <section>
                <h3 className="text-[8px] md:text-[9px] lg:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-gray-400 mb-4 md:mb-6">Economic_Estimate</h3>
                <div className="p-6 md:p-8 lg:p-10 bg-[#2D6A4F] rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] text-white relative overflow-hidden shadow-2xl shadow-green-900/30">
                    <div className="relative z-10">
                        <p className="text-[8px] md:text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] opacity-60 mb-2">Estimated_Payout</p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif italic">₹45.00 — ₹62.50</h2>
                        <p className="text-[8px] md:text-[9px] lg:text-[10px] mt-4 md:mt-6 font-mono opacity-80 max-w-[280px]">
                            Final pricing is subject to physical verification of weight by our field agent.
                        </p>
                    </div>
                    {/* Decorative Geometric Element */}
                    <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
                </div>
            </section>

            {/* CONFIGURATION SUMMARY */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 lg:gap-6">
                <section>
                    <h3 className="text-[8px] md:text-[9px] lg:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-gray-400 mb-3 md:mb-4">Address_Details</h3>
                    <div className="p-4 md:p-5 lg:p-6 bg-gray-50 dark:bg-white/5 rounded-2xl md:rounded-2.5xl lg:rounded-3xl border border-gray-100 dark:border-white/5">
                        <p className="text-[8px] md:text-[9px] lg:text-xs font-bold text-slate-800 dark:text-white mb-1">Address_Ref</p>
                        <p className="text-[10px] md:text-[10px] lg:text-[11px] text-gray-500 leading-relaxed truncate">{data.address}</p>
                    </div>
                </section>
                <section>
                    <h3 className="text-[8px] md:text-[9px] lg:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-gray-400 mb-3 md:mb-4">Time_Slot</h3>
                    <div className="p-4 md:p-5 lg:p-6 bg-gray-50 dark:bg-white/5 rounded-2xl md:rounded-2.5xl lg:rounded-3xl border border-gray-100 dark:border-white/5">
                        <p className="text-[8px] md:text-[9px] lg:text-xs font-bold text-slate-800 dark:text-white mb-1">Sequence_Window</p>
                        <p className="text-[10px] md:text-[10px] lg:text-[11px] text-gray-500 uppercase font-mono">{data.date} {data.month} // {data.slot}</p>
                    </div>
                </section>
            </div>

            {/* ACTION FOOTER */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4 md:pt-6">
                <button 
                    onClick={onBack}
                    className="flex-1 py-4 md:py-5 lg:py-6 rounded-[1.5rem] md:rounded-[1.75rem] lg:rounded-[2rem] border border-gray-100 dark:border-white/5 text-[8px] md:text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-widest text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                >
                    Reconfigure
                </button>
                <button 
                    onClick={() => alert("Booking Finalized!")}
                    className="flex-[1.5] sm:flex-[2] bg-[#1A1A1A] text-white py-4 md:py-5 lg:py-6 rounded-[1.5rem] md:rounded-[1.75rem] lg:rounded-[2rem] font-black text-[8px] md:text-[9px] lg:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] flex items-center justify-center gap-2 md:gap-3 shadow-2xl hover:bg-black transition-all active:scale-95"
                >
                    Confirm_Booking <HiOutlineShieldCheck className="text-base md:text-lg" />
                </button>
            </div>
        </div>
    );
}

export default Step3Review;