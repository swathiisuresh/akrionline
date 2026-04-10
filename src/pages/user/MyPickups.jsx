import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
    HiOutlineTicket, 
    HiOutlineCheckCircle, 
    HiOutlineClock, 
    HiOutlineChevronRight,
    HiOutlineMapPin,
    HiOutlineXMark,
    HiOutlineArrowPath,
    HiOutlineBars3,
    HiOutlineHome,
    HiOutlineTruck,
    HiOutlineCircleStack,
    HiOutlineUser,
    HiOutlineArrowRightOnRectangle
} from 'react-icons/hi2';
import Sidebar from '../../components/Sidebar';

// Mock Data - In a real app, this comes from your backend
const MOCK_PICKUPS = [
    {
        id: "AKRI-9920-X",
        date: "28 MAR 2026",
        time: "12:00 - 15:00",
        address: "Kakkanad, Kochi, Kerala",
        status: "Scheduled",
        items: "Paper, Plastic (Est. 5kg)",
        node: "NODE_KCH_04",
        value: "₹140.00"
    },
    {
        id: "AKRI-8841-Z",
        date: "22 MAR 2026",
        time: "08:00 - 11:00",
        address: "Edappally, Kochi",
        status: "Completed",
        items: "Metal Scrap, E-Waste",
        node: "NODE_KCH_01",
        value: "₹1,250.00"
    }
];

const MyPickups = () => {
    const navigate = useNavigate();
    const [filter, setFilter] = useState('Active'); // Active or Completed
    const [selectedPickup, setSelectedPickup] = useState(null);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const menuItems = [
        { name: 'Terminal Home', icon: <HiOutlineHome />, path: '/dashboard' },
        { name: 'Schedule Pickup', icon: <HiOutlineTruck />, path: '/dashboard/pickup' },
        { name: 'Pickup History', icon: <HiOutlineClock />, path: '/dashboard/history' },
        { name: 'Material Ledger', icon: <HiOutlineCircleStack />, path: '/dashboard/ledger' },
        { name: 'Account Profile', icon: <HiOutlineUser />, path: '/dashboard/profile' },
    ];

    const filteredData = MOCK_PICKUPS.filter(p => 
        filter === 'Active' ? p.status === 'Scheduled' : p.status === 'Completed'
    );

    return (
        <div className="flex min-h-screen bg-[#F8FAF8] dark:bg-[#050505] text-[#1a1a1a] dark:text-white">
            {/* DESKTOP SIDEBAR */}
            <div className="hidden lg:block">
                <Sidebar />
            </div>

            {/* MOBILE HAMBURGER BUTTON */}
            <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden fixed top-6 left-6 z-[200] p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-xl transition-all"
            >
                {sidebarOpen ? <HiOutlineXMark size={24} /> : <HiOutlineBars3 size={24} />}
            </button>

            {/* MOBILE BACKDROP & SIDEBAR */}
            <AnimatePresence>
                {sidebarOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSidebarOpen(false)}
                            className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                        />
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: 'spring', damping: 25, stiffness: 120 }}
                            className="lg:hidden fixed left-0 top-0 w-72 h-screen bg-white dark:bg-[#050505] border-r border-gray-100 dark:border-white/5 z-50 flex flex-col p-8"
                        >
                            <div className="mb-8">
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="w-3 h-3 bg-[#2D6A4F] rounded-full animate-pulse" />
                                    <h1 className="text-xl font-serif italic tracking-tighter dark:text-white">AkriOnline</h1>
                                </div>
                                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400">User_Control_Panel</p>
                            </div>

                            <nav className="flex-1 space-y-2">
                                {menuItems.map((item) => (
                                    <button
                                        key={item.name}
                                        onClick={() => {
                                            navigate(item.path);
                                            setSidebarOpen(false);
                                        }}
                                        className="w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all group text-gray-500 hover:bg-gray-50 dark:hover:bg-white/5"
                                    >
                                        <span className="text-lg text-gray-400 group-hover:text-[#2D6A4F]">
                                            {item.icon}
                                        </span>
                                        {item.name}
                                    </button>
                                ))}
                            </nav>

                            <div className="pt-6 border-t border-gray-100 dark:border-white/5">
                                <button className="w-full flex items-center gap-4 px-4 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-all">
                                    <HiOutlineArrowRightOnRectangle className="text-lg" />
                                    Terminate Session
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <main className="flex-1 w-full px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-12 lg:py-16 pt-16 sm:pt-14 md:pt-16 lg:pt-8">
                <div className="w-full max-w-6xl mx-auto">
                <header className="mb-6 sm:mb-8 md:mb-10">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif italic mb-1 sm:mb-2">My Pickups</h2>
                    <p className="text-[7px] sm:text-[8px] md:text-[9px] font-mono text-gray-400 uppercase tracking-widest">Operational_History // Terminal_Logs</p>
                </header>

                {/* FILTER TOGGLE */}
                <div className="flex gap-2 sm:gap-3 mb-6 sm:mb-8 md:mb-10 p-1.5 bg-white dark:bg-white/5 border border-black/5 w-fit rounded-2xl shadow-sm">
                    {['Active', 'Completed'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setFilter(tab)}
                            className={`px-3 sm:px-5 md:px-8 py-2 sm:py-2.5 rounded-xl text-[7px] sm:text-[8px] md:text-[10px] font-black uppercase tracking-widest transition-all
                                ${filter === tab 
                                    ? 'bg-[#1A1A1A] dark:bg-white text-white dark:text-black shadow-lg' 
                                    : 'text-gray-400 hover:text-[#2D6A4F]'}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* LISTINGS */}
                <div className="space-y-3 sm:space-y-4">
                    <AnimatePresence mode='wait'>
                        {filteredData.length > 0 ? (
                            filteredData.map((pickup) => (
                                <motion.div
                                    key={pickup.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    onClick={() => setSelectedPickup(pickup)}
                                    className="group flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 sm:p-5 md:p-8 bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-white/5 rounded-xl sm:rounded-2xl md:rounded-[2.5rem] cursor-pointer hover:border-[#2D6A4F]/40 transition-all shadow-sm hover:shadow-xl gap-3 sm:gap-4"
                                >
                                    <div className="flex items-center gap-3 sm:gap-4 md:gap-8 flex-1 min-w-0">
                                        <div className={`w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 flex-shrink-0 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center text-lg sm:text-xl md:text-2xl
                                            ${pickup.status === 'Completed' ? 'bg-gray-100 text-gray-400' : 'bg-[#2D6A4F]/10 text-[#2D6A4F]'}`}>
                                            {pickup.status === 'Completed' ? <HiOutlineCheckCircle /> : <HiOutlineClock className="animate-pulse" />}
                                        </div>
                                        
                                        <div className="min-w-0 flex-1">
                                            <p className="text-[7px] sm:text-[8px] md:text-[9px] font-mono text-[#2D6A4F] mb-0.5 sm:mb-1 font-bold">{pickup.id}</p>
                                            <h4 className="text-sm sm:text-base md:text-lg font-serif italic truncate">{pickup.date}</h4>
                                            <p className="text-[7px] sm:text-[8px] md:text-[10px] text-gray-400 uppercase tracking-widest mt-0.5 sm:mt-1 truncate">{pickup.address.split(',')[0]}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 sm:gap-3 md:gap-10 ml-auto sm:ml-0">
                                        <div className="hidden md:block text-right">
                                            <p className="text-[7px] sm:text-[8px] md:text-[9px] font-black text-gray-300 uppercase tracking-widest mb-0.5 sm:mb-1">Estimated_Value</p>
                                            <p className="font-mono font-bold text-[#2D6A4F] text-xs md:text-sm">{pickup.value}</p>
                                        </div>
                                        <HiOutlineChevronRight className="text-gray-300 group-hover:text-[#2D6A4F] group-hover:translate-x-1 transition-all flex-shrink-0 text-lg md:text-xl" />
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <div className="py-8 sm:py-12 md:py-16 text-center border-2 border-dashed border-black/5 rounded-lg sm:rounded-xl md:rounded-2xl">
                                <HiOutlineTicket className="mx-auto text-2xl sm:text-3xl md:text-4xl text-gray-200 mb-3 sm:mb-4" />
                                <p className="text-[7px] sm:text-[8px] md:text-[10px] font-black uppercase tracking-widest text-gray-400">No {filter} sequences found.</p>
                            </div>
                        )}
                    </AnimatePresence>
                </div>
                </div>
            </main>

            {/* DETAIL MODAL */}
            <AnimatePresence>
                {selectedPickup && (
                    <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center sm:justify-end p-3 sm:p-4 md:p-6"
                        onClick={() => setSelectedPickup(null)}
                    >
                        <motion.div 
                            initial={{ y: "100%", x: 0 }} animate={{ y: 0, x: 0 }} exit={{ y: "100%", x: 0 }}
                            className="bg-white dark:bg-[#0D0D0D] w-full sm:max-w-md md:max-w-lg h-5/6 sm:h-full sm:rounded-t-3xl md:rounded-[3rem] overflow-hidden shadow-2xl flex flex-col"
                            onClick={e => e.stopPropagation()}
                        >
                            <div className="p-4 sm:p-6 md:p-10 border-b border-black/5 flex justify-between items-center">
                                <div>
                                    <h3 className="text-[8px] sm:text-[9px] md:text-[10px] font-black uppercase tracking-widest text-[#2D6A4F]">Pickup_Manifest</h3>
                                    <p className="text-base sm:text-lg md:text-xl font-serif italic mt-1">{selectedPickup.id}</p>
                                </div>
                                <button onClick={() => setSelectedPickup(null)} className="p-1.5 sm:p-2 md:p-3 bg-gray-50 dark:bg-white/5 rounded-lg sm:rounded-xl md:rounded-2xl flex-shrink-0">
                                    <HiOutlineXMark size={18} className="sm:size-20 md:size-24"/>
                                </button>
                            </div>

                            <div className="flex-1 p-4 sm:p-6 md:p-10 space-y-4 sm:space-y-6 md:space-y-10 overflow-y-auto">
                                {/* STATUS SECTION */}
                                <div className="p-4 sm:p-5 md:p-8 bg-[#2D6A4F]/5 border border-[#2D6A4F]/20 rounded-lg sm:rounded-xl md:rounded-[2.5rem] flex items-center justify-between gap-3">
                                    <div>
                                        <p className="text-[7px] sm:text-[8px] md:text-[9px] font-black uppercase tracking-widest text-[#2D6A4F]/60">Current_Status</p>
                                        <p className="text-sm sm:text-base md:text-lg font-serif italic mt-1">{selectedPickup.status}</p>
                                    </div>
                                    <HiOutlineArrowPath className={`text-base sm:text-lg md:text-xl flex-shrink-0 ${selectedPickup.status !== 'Completed' ? 'animate-spin text-[#2D6A4F]' : 'text-gray-300'}`} />
                                </div>

                                {/* LOGISTICS INFO */}
                                <div className="space-y-3 sm:space-y-4 md:space-y-6">
                                    <div className="flex gap-2 sm:gap-3 md:gap-4">
                                        <div className="w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 flex-shrink-0 rounded-lg sm:rounded-lg md:rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-400 text-base md:text-lg"><HiOutlineMapPin /></div>
                                        <div className="min-w-0 flex-1">
                                            <p className="text-[6px] sm:text-[7px] md:text-[8px] font-black text-gray-400 uppercase tracking-widest mb-0.5 sm:mb-1">Terminal_Point</p>
                                            <p className="text-xs sm:text-xs md:text-sm leading-relaxed break-words">{selectedPickup.address}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 sm:gap-3 md:gap-4">
                                        <div className="w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 flex-shrink-0 rounded-lg sm:rounded-lg md:rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-400 text-base md:text-lg"><HiOutlineClock /></div>
                                        <div className="min-w-0 flex-1">
                                            <p className="text-[6px] sm:text-[7px] md:text-[8px] font-black text-gray-400 uppercase tracking-widest mb-0.5 sm:mb-1">Temporal_Window</p>
                                            <p className="text-xs sm:text-xs md:text-sm leading-relaxed break-words">{selectedPickup.date} // {selectedPickup.time}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* ITEM BREAKDOWN */}
                                <div className="pt-4 sm:pt-5 md:pt-10 border-t border-black/5 dark:border-white/5">
                                    <p className="text-[7px] sm:text-[8px] md:text-[9px] font-black text-gray-400 uppercase tracking-widest mb-2 sm:mb-3 md:mb-4">Inventory_Details</p>
                                    <div className="p-3 sm:p-4 md:p-6 bg-gray-50 dark:bg-white/5 rounded-lg sm:rounded-lg md:rounded-2xl font-mono text-[9px] sm:text-[9px] md:text-xs leading-relaxed">
                                        {selectedPickup.items}
                                    </div>
                                </div>
                            </div>

                            {/* FOOTER ACTION */}
                            <div className="p-4 sm:p-6 md:p-10 bg-gray-50 dark:bg-black/20 space-y-3 sm:space-y-4">
                                {selectedPickup.status === 'Scheduled' && (
                                    <button 
                                        className="w-full py-3 sm:py-4 md:py-6 bg-red-500 hover:bg-red-600 text-white rounded-lg sm:rounded-lg md:rounded-[2rem] font-black text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-widest transition-all"
                                        onClick={() => {
                                            alert('Pickup cancelled successfully');
                                            setSelectedPickup(null);
                                        }}
                                    >
                                        Cancel_Pickup
                                    </button>
                                )}
                                <button 
                                    className="w-full py-3 sm:py-4 md:py-6 bg-[#1A1A1A] dark:bg-white text-white dark:text-black rounded-lg sm:rounded-lg md:rounded-[2rem] font-black text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-widest"
                                    onClick={() => setSelectedPickup(null)}
                                >
                                    Close_Terminal
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MyPickups;