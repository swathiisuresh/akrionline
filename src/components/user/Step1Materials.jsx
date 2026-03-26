import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineDocumentText, HiOutlineCube, HiOutlineSparkles, HiOutlineArrowRight } from 'react-icons/hi2';
import { HiOutlineLightningBolt } from "react-icons/hi";

const materials = [
    { id: 'Paper', range: '₹12–18/kg', icon: <HiOutlineDocumentText />, desc: 'Newspapers, Office Paper, Magazines' },
    { id: 'Plastic', range: '₹10–25/kg', icon: <HiOutlineCube />, desc: 'PET Bottles, LDPE, Hard Plastics' },
    { id: 'Metal', range: '₹20–300/kg', icon: <HiOutlineLightningBolt />, desc: 'Iron, Aluminum, Copper, Brass' },
    { id: 'Glass', range: '₹5–15/kg', icon: <HiOutlineSparkles />, desc: 'Beer Bottles, Jars, Glass Waste' },
];

function Step1Materials({ data, setData, onNext }) {
    const toggleSelection = (id) => {
        const current = data.materials || [];
        const updated = current.includes(id) ? current.filter(m => m !== id) : [...current, id];
        setData({ ...data, materials: updated });
    };

    return (
        <div className="space-y-6 md:space-y-8 lg:space-y-10">
            <section>
                <h3 className="text-[8px] md:text-[9px] lg:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-gray-400 mb-4 md:mb-6">Inventory_Catalog</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 lg:gap-6">
                    {materials.map((m) => {
                        const isSelected = data.materials?.includes(m.id);
                        return (
                            <motion.div 
                                key={m.id}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => toggleSelection(m.id)}
                                className={`p-4 md:p-6 lg:p-8 rounded-[1.5rem] md:rounded-[2rem] lg:rounded-[2.5rem] border-2 cursor-pointer transition-all flex flex-col gap-3 md:gap-4
                                    ${isSelected 
                                        ? 'border-[#2D6A4F] bg-[#2D6A4F]/5 shadow-lg shadow-green-900/5' 
                                        : 'border-gray-100 dark:border-white/5 bg-white dark:bg-transparent'}`}
                            >
                                <div className={`w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-xl md:rounded-2xl flex items-center justify-center text-lg md:text-2xl 
                                    ${isSelected ? 'bg-[#2D6A4F] text-white' : 'bg-gray-50 dark:bg-white/5 text-gray-400'}`}>
                                    {m.icon}
                                </div>
                                <div>
                                    <h4 className="text-base md:text-lg lg:text-xl font-bold text-slate-800 dark:text-white">{m.id}</h4>
                                    <p className="text-[8px] md:text-[9px] lg:text-[10px] text-gray-400 mt-1 uppercase tracking-wider">{m.desc}</p>
                                    <p className="text-xs md:text-sm lg:text-sm font-serif italic text-[#2D6A4F] mt-2 md:mt-3">{m.range}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            <button 
                onClick={onNext}
                disabled={!data.materials?.length}
                className="w-full bg-[#2D6A4F] text-white py-4 md:py-5 lg:py-6 rounded-[1.5rem] md:rounded-[1.75rem] lg:rounded-[2rem] font-black text-[8px] md:text-[9px] lg:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] flex items-center justify-center gap-2 md:gap-3 shadow-xl shadow-green-900/20 disabled:opacity-30 disabled:grayscale transition-all"
            >
                Next <HiOutlineArrowRight className="text-base md:text-lg" />
            </button>
        </div>
    );
}

export default Step1Materials;