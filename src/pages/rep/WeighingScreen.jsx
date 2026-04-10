import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { 
    HiOutlineScale, 
    HiOutlinePlus, 
    HiOutlineTrash,
    HiOutlineArrowRight,
    HiOutlineCube,
    HiOutlineCamera
} from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';

const WeighingScreen = () => {
    const navigate = useNavigate();
    const { isDark } = useTheme();
    const [currentWeight, setCurrentWeight] = useState("");
    const [currentMaterial, setCurrentMaterial] = useState("Paper_Mixed");
    const [batch, setBatch] = useState([]);

    const materialOptions = [
        { id: "Paper_Mixed", label: "Paper", icon: "📄" },
        { id: "Plastic_LDPE", label: "Plastic", icon: "🧴" },
        { id: "Metal_Iron", label: "Metal", icon: "⚙️" },
        { id: "E_Waste", label: "E-Waste", icon: "💻" }
    ];

    const addToBatch = () => {
        if (!currentWeight || parseFloat(currentWeight) <= 0) return;
        const newItem = {
            id: Date.now(),
            material: currentMaterial,
            weight: parseFloat(currentWeight),
            label: materialOptions.find(m => m.id === currentMaterial).label
        };
        setBatch([...batch, newItem]);
        setCurrentWeight("");
    };

    const removeFromBatch = (id) => {
        setBatch(batch.filter(item => item.id !== id));
    };

    const totalWeight = batch.reduce((acc, item) => acc + item.weight, 0).toFixed(2);

    return (
        <div className={isDark ? 'dark' : ''}>
            <div className="flex min-h-screen bg-[#F8FAF8] dark:bg-[#050505] text-[#121212] dark:text-white transition-colors duration-500 font-sans">
                
                {/* LEFT PANEL: BATCH SUMMARY */}
                <aside className="hidden lg:flex w-96 flex-col border-r border-[#E0E7E0] dark:border-white/5 p-10 space-y-8 bg-white dark:bg-[#080808] shadow-xl">
                    <div>
                        <h2 className="text-3xl font-serif italic mb-2">Current_Batch</h2>
                        <p className="text-[9px] font-mono text-[#2D6A4F] uppercase tracking-[0.4em]">Validation_Queue</p>
                    </div>

                    <div className="flex-1 overflow-y-auto space-y-4 pr-2">
                        <AnimatePresence>
                            {batch.map((item) => (
                                <motion.div 
                                    key={item.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    className="p-5 bg-[#F8FAF8] dark:bg-white/5 border border-[#E0E7E0] dark:border-white/5 rounded-[2rem] flex justify-between items-center group shadow-sm"
                                >
                                    <div>
                                        <p className="text-[8px] font-black text-[#2D6A4F] dark:text-[#52B788] uppercase tracking-widest">{item.label}</p>
                                        <p className="text-xl font-serif italic">{item.weight} <span className="text-[10px] text-gray-400">kg</span></p>
                                    </div>
                                    <button onClick={() => removeFromBatch(item.id)} className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                                        <HiOutlineTrash size={18} />
                                    </button>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    <div className="pt-6 border-t border-[#E0E7E0] dark:border-white/5">
                        <div className="flex justify-between items-end">
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Total_Mass</p>
                            <p className="text-3xl font-mono font-bold text-[#2D6A4F] dark:text-[#52B788]">{totalWeight} <span className="text-sm text-gray-400 uppercase">kg</span></p>
                        </div>
                    </div>
                </aside>

                {/* MAIN CONTENT */}
                <main className="flex-1 p-6 md:p-12 max-w-4xl mx-auto w-full flex flex-col">
                    <header className="mb-12">
                        <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#2D6A4F]">Step_02 // Material_Quantification</h3>
                    </header>

                    <div className="flex-1 space-y-12">
                        {/* MATERIAL SELECTION */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {materialOptions.map((m) => (
                                <button 
                                    key={m.id}
                                    onClick={() => setCurrentMaterial(m.id)}
                                    className={`p-6 rounded-[2rem] border transition-all flex flex-col items-center gap-3 ${
                                        currentMaterial === m.id 
                                        ? 'bg-[#2D6A4F] dark:bg-[#2D6A4F]/20 border-[#2D6A4F] text-white shadow-lg' 
                                        : 'bg-white dark:bg-white/5 border-[#E0E7E0] dark:border-white/5 text-gray-400 hover:border-[#2D6A4F]/30 shadow-sm'
                                    }`}
                                >
                                    <span className="text-2xl">{m.icon}</span>
                                    <span className="text-[9px] font-black uppercase tracking-widest">{m.label}</span>
                                </button>
                            ))}
                        </div>

                        {/* SCALE INTERFACE */}
                        <div className="bg-white dark:bg-[#0D0D0D] border border-[#E0E7E0] dark:border-white/5 rounded-[4rem] p-12 lg:p-20 relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#2D6A4F]/30 to-transparent" />
                            <div className="flex flex-col items-center">
                                <HiOutlineScale className="text-[#2D6A4F]/10 mb-6" size={40} />
                                <div className="flex items-center gap-6">
                                    <input 
                                        type="number" 
                                        placeholder="0.00"
                                        value={currentWeight}
                                        onChange={(e) => setCurrentWeight(e.target.value)}
                                        className="bg-transparent text-8xl font-mono font-bold text-center w-full max-w-[300px] outline-none text-[#2D6A4F] dark:text-[#52B788] placeholder:text-[#E0E7E0] tracking-tighter"
                                    />
                                    <span className="text-2xl font-serif italic text-gray-300">kg</span>
                                </div>
                                <motion.button 
                                    whileTap={{ scale: 0.95 }}
                                    onClick={addToBatch}
                                    className="mt-12 px-12 py-5 bg-[#121212] dark:bg-white text-white dark:text-black rounded-2xl flex items-center gap-3 text-[10px] font-black uppercase tracking-widest hover:bg-[#2D6A4F] dark:hover:bg-[#52B788] transition-all"
                                >
                                    <HiOutlinePlus /> Add_To_Batch
                                </motion.button>
                            </div>
                        </div>

                        {/* PHOTO AREA */}
                        <div className="bg-white dark:bg-white/5 border border-[#E0E7E0] dark:border-white/5 rounded-[3rem] p-8 flex items-center justify-between shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 bg-[#F8FAF8] dark:bg-black rounded-2xl flex items-center justify-center border border-[#E0E7E0] dark:border-white/10 text-[#2D6A4F]">
                                    <HiOutlineCamera size={24} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest">Visual_Verification</p>
                                    <p className="text-[9px] font-mono text-gray-400 uppercase tracking-tighter mt-1">Capture_Scale_Reading</p>
                                </div>
                            </div>
                            <div className="hidden md:flex items-center gap-4 text-gray-300">
                                <HiOutlineCube />
                                <span className="text-[9px] font-bold uppercase tracking-widest">Active_Items: {batch.length}</span>
                            </div>
                        </div>
                    </div>

                    <footer className="mt-12">
                        <button 
                            onClick={() => navigate('/pricediscovery')}
                            disabled={batch.length === 0}
                            className={`w-full py-8 rounded-[2.5rem] flex items-center justify-center gap-4 text-[11px] font-black uppercase tracking-[0.5em] transition-all ${
                                batch.length > 0 
                                ? 'bg-[#2D6A4F] text-white shadow-[0_20px_40px_rgba(45,106,79,0.3)]' 
                                : 'bg-white dark:bg-white/5 text-gray-300 dark:text-white/10 border border-[#E0E7E0] dark:border-white/5'
                            }`}
                        >
                            Proceed_to_Price_Discovery <HiOutlineArrowRight />
                        </button>
                    </footer>
                </main>
            </div>
        </div>
    );
};

export default WeighingScreen;