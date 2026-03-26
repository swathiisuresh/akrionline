import React, { useState } from 'react';
import { HiOutlineBars3 } from 'react-icons/hi2';
import Sidebar from '../Sidebar'; 
import PickupPage from '../../pages/user/PickupPage';
import { useTheme } from '../../context/ThemeContext';

function PickupLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { isDark } = useTheme();

    return (
        <div className={`flex min-h-screen bg-[#F8F9FA] dark:bg-[#080808] transition-colors duration-500 ${isDark ? 'dark' : ''}`}>
            {/* DESKTOP SIDEBAR */}
            <aside className="w-64 fixed inset-y-0 left-0 z-50 border-r border-gray-100 dark:border-white/5 hidden lg:block">
                <Sidebar activePage="pickup" />
            </aside>

            {/* MOBILE SIDEBAR OVERLAY */}
            {sidebarOpen && (
                <>
                    {/* BLUR BACKGROUND */}
                    <div 
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
                        onClick={() => setSidebarOpen(false)}
                    />
                    {/* MOBILE SIDEBAR */}
                    <aside className="w-64 fixed inset-y-0 left-0 z-50 border-r border-gray-100 dark:border-white/5 lg:hidden">
                        <Sidebar activePage="pickup" />
                    </aside>
                </>
            )}

            {/* MAIN CONTENT AREA */}
            <main className="flex-1 lg:ml-64 w-full p-4 md:p-6 lg:p-8 pt-20 lg:pt-8 flex justify-center items-start">
                {/* MOBILE HAMBURGER MENU */}
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="fixed top-4 left-4 z-40 lg:hidden bg-white dark:bg-[#111111] p-3 rounded-lg shadow-lg border border-gray-100 dark:border-white/5"
                >
                    <HiOutlineBars3 className="text-2xl text-slate-900 dark:text-white" />
                </button>

                <div className="w-full max-w-4xl bg-white dark:bg-[#111111] rounded-[2.5rem] shadow-xl shadow-black/5 border border-gray-100 dark:border-white/5 overflow-hidden">
                    <PickupPage />
                </div>
            </main>
        </div>
    );
}

export default PickupLayout;