import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi2';
import Step1Materials from '../../components/user/Step1Materials';
import Step2Schedule from '../../components/user/Step2Schedule';
import Step3Review from '../../components/user/Step3Review';

function PickupPage() {
    const [step, setStep] = useState(1);
    const [bookingData, setBookingData] = useState({
        materials: ['Paper', 'Metal'],
        address: "123 Sunshine Ave, Kochi",
        node: "REGION_UNIT_04",
        date: 20,
        month: "MAR",
        slot: "Morning"
    });

    const nextStep = () => setStep(s => s + 1);
    const prevStep = () => setStep(s => s - 1);

    return (
        <div className="relative">
            {/* INTERNAL HEADER */}
            <header className="p-4 md:p-6 lg:p-10 border-b border-gray-50 dark:border-white/5 flex flex-col gap-4 md:flex-row md:justify-between md:items-end">
                <div className="flex-1">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif italic text-slate-900 dark:text-white">
                        {step === 1 && "Material Selection"}
                        {step === 2 && "Temporal Sequence"}
                        {step === 3 && "Final Validation"}
                    </h1>
                    <p className="text-[8px] md:text-[9px] lg:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-[#2D6A4F] mt-2 md:mt-3">
                        Booking_Session_Active // Step {step} of 3
                    </p>
                </div>
                <div className="flex flex-col items-start md:items-end gap-2">
                    <span className="text-[8px] md:text-[9px] lg:text-[10px] font-mono text-gray-400">Progress: {Math.round((step/3)*100)}%</span>
                    <div className="w-28 md:w-32 h-1 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                            animate={{ width: `${(step/3)*100}%` }}
                            className="h-full bg-[#2D6A4F]"
                        />
                    </div>
                </div>
            </header>

            <main className="p-4 md:p-6 lg:p-10">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={step}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, ease: "circOut" }}
                    >
                        {step === 1 && <Step1Materials data={bookingData} setData={setBookingData} onNext={nextStep} />}
                        {step === 2 && <Step2Schedule data={bookingData} setData={setBookingData} onNext={nextStep} onBack={prevStep} />}
                        {step === 3 && <Step3Review data={bookingData} onBack={prevStep} />}
                    </motion.div>
                </AnimatePresence>
            </main>
        </div>
    );
}

export default PickupPage;