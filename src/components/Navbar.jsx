import React, { useState, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { HiSun, HiMoon } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

function Navbar({
    ctaLabel = 'Join Waitlist',
    ctaColor = '#2D6A4F',
    ctaHoverColor = '#52B788',
    navLinks = [
        { name: 'How it Works', href: '#how-it-works' },
        { name: 'Prices', href: '#prices' },
        { name: 'For Dealers', href: '/partners', isSpecial: true }
    ],
    showLeftLink = false,
    leftLinkLabel = 'For Households',
    leftLinkHref = '/',
    leftLinkColor = '#2D6A4F'
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [hoverData, setHoverData] = useState({ width: 0, left: 0, opacity: 0 });
    const containerRef = useRef(null);
    const { isDark, toggleTheme } = useTheme();

    const handleMouseEnter = (e) => {
        const element = e.currentTarget;
        const container = containerRef.current;
        if (element && container) {
            const rect = element.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            setHoverData({
                width: rect.width - 16, 
                left: (rect.left - containerRect.left) + 8, 
                opacity: 1
            });
        }
    };

    const handleMouseLeave = () => {
        setHoverData(prev => ({ ...prev, opacity: 0 }));
    };

    return (
        <div className="fixed top-4 left-0 w-full z-[100] px-4">

            <nav className="max-w-4xl mx-auto bg-white/70 dark:bg-slate-900 backdrop-blur-md border border-white/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] rounded-full h-12 px-5 flex items-center justify-between relative">

                <div className="flex-shrink-0">
                    {showLeftLink ? (
                        <Link to={leftLinkHref} style={{ color: leftLinkColor }} className="text-lg font-bold tracking-tighter hover:opacity-80 transition-opacity">
                            {leftLinkLabel}
                        </Link>
                    ) : (
                        <Link to="/" className="text-lg font-bold text-[#2D6A4F] tracking-tighter hover:opacity-80 transition-opacity">
                            AkriOnline
                        </Link>
                    )}
                </div>

                <div
                    ref={containerRef}
                    className="hidden md:flex items-center relative h-full"
                    onMouseLeave={handleMouseLeave}
                >
                    <motion.div
                        className="absolute bottom-2 h-[2.5px] bg-black rounded-full pointer-events-none"
                        animate={{
                            width: hoverData.width,
                            left: hoverData.left,
                            opacity: hoverData.opacity
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />

                    {navLinks.map((link) => (
                        link.href.startsWith('/') ? (
                            <Link
                                key={link.name}
                                to={link.href}
                                onMouseEnter={handleMouseEnter}
                                className={`px-4 py-1 text-[13px] font-semibold transition-colors duration-300 ${link.isSpecial ? 'text-[#0D3B66]' : 'text-gray-500'
                                    } hover:text-black`}
                            >
                                {link.name}
                            </Link>
                        ) : (
                            <a
                                key={link.name}
                                href={link.href}
                                onMouseEnter={handleMouseEnter}
                                className={`px-4 py-1 text-[13px] font-semibold transition-colors duration-300 ${link.isSpecial ? 'text-[#0D3B66]' : 'text-gray-500'
                                    } hover:text-black`}
                            >
                                {link.name}
                            </a>
                        )
                    ))}
                </div>

                {/* Right */}
                <div className="flex items-center space-x-2">
                    <Link
                        to="/login"
                        style={{
                            backgroundColor: ctaColor,
                        }}
                        onMouseEnter={(e) => (e.target.style.backgroundColor = ctaHoverColor)}
                        onMouseLeave={(e) => (e.target.style.backgroundColor = ctaColor)}
                        className="text-white px-4 py-1.5 rounded-full text-[12px] font-bold transition-all active:scale-95 shadow-sm inline-block text-center"
                    >
                        {ctaLabel}
                    </Link>

                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-500 p-1">
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>

                    <button
                        onClick={toggleTheme}
                        className="flex h-9 w-16 items-center rounded-full bg-gray-200 p-1 transition-colors duration-300 dark:bg-[#2D6A4F]/30"
                    >
                        <motion.div
                            animate={{ x: isDark ? 28 : 0 }}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            className="flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-sm"
                        >
                            {isDark ? (
                                <HiMoon className="h-4 w-4 text-[#2D6A4F]" />
                            ) : (
                                <HiSun className="h-4 w-4 text-amber-500" />
                            )}
                        </motion.div>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu - Minimalist Popover */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden mt-2 max-w-[280px] mx-auto bg-white/90 backdrop-blur-xl border border-gray-100 shadow-xl rounded-2xl p-3 flex flex-col items-center space-y-3"
                >
                    {navLinks.map(link => (
                        link.href.startsWith('/') ? (
                            <Link key={link.name} to={link.href} onClick={() => setIsOpen(false)}
                                className={`text-sm font-medium ${link.isSpecial ? 'text-[#0D3B66]' : 'text-gray-600'}`}>
                                {link.name}
                            </Link>
                        ) : (
                            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)}
                                className={`text-sm font-medium ${link.isSpecial ? 'text-[#0D3B66]' : 'text-gray-600'}`}>
                                {link.name}
                            </a>
                        )
                    ))}
                </motion.div>
            )}
        </div>
    );
}

export default Navbar;