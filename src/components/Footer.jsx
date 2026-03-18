import React from 'react'
import { RiInstagramLine, RiLinkedinBoxLine } from "react-icons/ri";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <div>
      {/* footer */}
            <section>
                <footer className="bg-black dark:bg-[#050505] pt-24 pb-12 px-6 border-t border-gray-100 dark:border-white/5">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">

                            {/* Left: Brand */}
                            <div className="md:col-span-5 space-y-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-[#2D6A4F] rounded-lg" /> {/* Placeholder for Logo */}
                                    <span className="text-xl font-bold tracking-tighter dark:text-white text-[#2D6A4F]">AakriOnline</span>
                                </div>
                                <p className="text-gray-500 dark:text-gray-400 max-w-xs text-sm leading-relaxed">
                                    Professionalizing doorstep recycling for a cleaner, greener Kerala. Scrap management you can trust.
                                </p>
                                <div className="flex gap-4">
                                    <a href="#" className="w-10 h-10 rounded-full border border-gray-100 dark:border-white/10 flex items-center justify-center text-gray-400 hover:text-[#2D6A4F] transition-colors">
                                        <RiInstagramLine size={20} />
                                    </a>
                                    <a href="#" className="w-10 h-10 rounded-full border border-gray-100 dark:border-white/10 flex items-center justify-center text-gray-400 hover:text-[#2D6A4F] transition-colors">
                                        <RiLinkedinBoxLine size={20} />
                                    </a>
                                </div>
                            </div>

                            {/* Center: Links */}
                            <div className="md:col-span-4 grid grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Company</h4>
                                    <ul className="space-y-2 text-sm font-medium text-gray-600 dark:text-gray-300">
                                        <li className="hover:text-[#2D6A4F] cursor-pointer">Home</li>
                                        <li className="hover:text-[#2D6A4F] cursor-pointer">About Us</li>
                                        <li className="hover:text-[#2D6A4F] cursor-pointer">Contact</li>
                                    </ul>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Service</h4>
                                    <ul className="space-y-2 text-sm font-medium text-gray-600 dark:text-gray-300">
                                        <li className="hover:text-[#2D6A4F] cursor-pointer">How It Works</li>
                                        <li className="hover:text-[#2D6A4F] cursor-pointer flex items-center gap-1">
                                            For Dealers <HiOutlineArrowUpRight size={12} />
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Right: Contact info placeholder */}
                            <div className="md:col-span-3 space-y-4 text-right md:text-left">
                                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Headquarters</h4>
                                <address className="not-italic text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                                    Kochi, Kerala, India<br />
                                    <span className="opacity-50">GST: Pending Registration</span>
                                </address>
                            </div>
                        </div>

                        {/* Bottom Row */}
                        <div className="pt-8 border-t border-gray-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                            <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wider">
                                © {currentYear} AakriOnline Pvt Ltd. All rights reserved.
                            </p>
                            <div className="flex gap-8 text-[11px] text-gray-400 font-medium uppercase tracking-wider">
                                <a href="/terms" className="hover:text-[#2D6A4F]">Terms of Service</a>
                                <a href="/privacy" className="hover:text-[#2D6A4F]">Privacy Policy</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </section>
    </div>
  )
}

export default Footer
