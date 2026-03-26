import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  HiOutlineHome, 
  HiOutlineTruck, 
  HiOutlineClock, 
  HiOutlineCircleStack, 
  HiOutlineUser, 
  HiOutlineArrowRightOnRectangle 
} from 'react-icons/hi2';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: 'Terminal Home', icon: <HiOutlineHome />, path: '/dashboard' },
    { name: 'Schedule Pickup', icon: <HiOutlineTruck />, path: '/dashboard/pickup' },
    { name: 'Pickup History', icon: <HiOutlineClock />, path: '/dashboard/history' },
    { name: 'Material Ledger', icon: <HiOutlineCircleStack />, path: '/dashboard/ledger' },
    { name: 'Account Profile', icon: <HiOutlineUser />, path: '/dashboard/profile' },
  ];

  return (
    <aside className="w-72 h-screen sticky top-0 bg-white dark:bg-[#050505] border-r border-gray-100 dark:border-white/5 flex flex-col p-8 z-50">
      {/* Brand */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-3 h-3 bg-[#2D6A4F] rounded-full animate-pulse" />
          <h1 className="text-xl font-serif italic tracking-tighter dark:text-white">AkriOnline</h1>
        </div>
        <p className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400">User_Control_Panel</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path || (item.path === '/dashboard' && location.pathname === '/dashboard');
          return (
            <button
              key={item.name}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all group ${
                isActive 
                ? 'bg-[#2D6A4F] text-white shadow-lg shadow-[#2D6A4F]/20' 
                : 'text-gray-500 hover:bg-gray-50 dark:hover:bg-white/5'
              }`}
            >
              <span className={`text-lg ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-[#2D6A4F]'}`}>
                {item.icon}
              </span>
              {item.name}
            </button>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="pt-6 border-t border-gray-100 dark:border-white/5">
        <button className="w-full flex items-center gap-4 px-4 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-all">
          <HiOutlineArrowRightOnRectangle className="text-lg" />
          Terminate Session
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;