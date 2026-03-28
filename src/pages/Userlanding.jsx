import React, { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useSpring, useInView, animate } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { HiArrowRight, HiOutlineDeviceMobile, HiOutlineUserGroup, HiOutlineScale, HiOutlineCash, HiOutlineTrash, HiOutlineDocumentText, HiOutlineArchive, HiOutlineCube, HiOutlineLightningBolt, HiOutlineSparkles, HiOutlineDesktopComputer, HiOutlineBookOpen, HiOutlineShieldCheck, HiOutlineCurrencyRupee, HiOutlineCloudDownload, HiOutlineChartBar } from 'react-icons/hi';
import { MdOutlineHandshake } from "react-icons/md";
import { HiArrowPath } from "react-icons/hi2";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import { Link } from 'react-router-dom'

function Userlanding() {
    const { isDark } = useTheme();
    const [submitted, setSubmitted] = useState(false);
    
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    

    const steps = [
        {
            number: "01",
            icon: <HiOutlineDeviceMobile />,
            title: "Quick Book",
            desc: "Choose your slot in 2 minutes on our app. No download needed.",
            tag: "Digital First"
        },
        {
            number: "02",
            icon: <HiOutlineUserGroup />,
            title: "We Arrive",
            desc: "A uniformed, verified AakriOnline Rep comes to your door at the chosen time.",
            tag: "Verified Safety"
        },
        {
            number: "03",
            icon: <HiOutlineScale />,
            title: "Sort & Weigh",
            desc: "Materials are weighed live on our digital scale. No guesswork, no cheating.",
            tag: "Digital Precision"
        },
        {
            number: "04",
            icon: <HiOutlineCash />,
            title: "You Get Paid",
            desc: "The dealer’s live market rate goes directly to your UPI instantly. 100% yours.",
            tag: "Instant Liquidity"
        }
    ];
    const trustSignals = [
        {
            icon: <HiOutlineShieldCheck />,
            title: "Verified Reps",
            desc: "Background-checked, uniformed, and ID-carrying professionals.",
            highlight: false
        },
        {
            icon: <HiOutlineCurrencyRupee />,
            title: "Live Pricing",
            desc: "See the actual dealer bid on the tablet. Zero hidden markups.",
            highlight: false
        },
        {
            icon: <HiOutlineLightningBolt />,
            title: "Instant UPI Payout",
            desc: "Money hits your account before our Rep leaves your doorstep.",
            highlight: false
        },
        {
            icon: <HiOutlineCloudDownload />,
            title: "No App Download",
            desc: "Works instantly in your browser. No phone storage wasted.",
            highlight: false
        },
        {
            icon: <HiOutlineChartBar />,
            title: "EcoPoints",
            desc: "Earn rewards on every pickup and track your carbon offset.",
            highlight: false
        },
        {
            icon: <HiOutlineChartBar />,
            title: "GST Compliant",
            desc: "Legal, documented transactions with digital WhatsApp receipts.",
            highlight: false
        },
        {
            icon: <MdOutlineHandshake />,
            title: "Works with HKS",
            desc: "The premium layer for high-value scrap that HKS doesn't individually weigh.",
            highlight: true,
            type: "HKS"
        },
        {
            icon: <HiArrowPath />,
            title: "Re-Store: Reuse First",
            desc: "Working items go to a second home, not the shredder. (Coming Soon)",
            highlight: true,
            type: "ReStore"
        }
    ];

    const scrollToWaitlist = () => {
        const section = document.getElementById('waitlist-section');
        if (section) section.scrollIntoView({ behavior: 'smooth' });
    };

    const riseUp = {
        initial: { y: "100%" },
        animate: { y: 0 },
    };

    const containerTransition = {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
    };
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    // States for our three numbers
    const [kg, setKg] = useState(0);
    const [households, setHouseholds] = useState(0);
    const [dealers, setDealers] = useState(0);

    useEffect(() => {
        if (isInView) {
            // Animate KG
            animate(0, 10000, { duration: 2, onUpdate: (v) => setKg(Math.floor(v)) });
            // Animate Households
            animate(0, 500, { duration: 2.5, onUpdate: (v) => setHouseholds(Math.floor(v)) });
            // Animate Dealers
            animate(0, 50, { duration: 1.5, onUpdate: (v) => setDealers(Math.floor(v)) });
        }
    }, [isInView]);
    const stats = [
        { value: kg, suffix: "kg", label: "Year 1 Goal", sub: "Recycled" },
        { value: households, suffix: "+", label: "Pioneer", sub: "Households" },
        { value: dealers, suffix: "+", label: "Verified", sub: "Dealers" },
    ];

    return (
        <div className={isDark ? 'dark' : ''}>
        <div className="transition-colors duration-500 bg-[#F4F7F4] dark:bg-[#0A0C0A]">
            <Navbar />
            {/* Hero Section */}
            <section className="relative flex flex-col justify-center px-6 pt-24 pb-20 transition-colors duration-500 bg-[#F4F7F4] dark:bg-[#0A0C0A]">
                <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <div>
                        <div className="overflow-hidden">
                            <motion.span
                                variants={riseUp}
                                initial="initial"
                                animate="animate"
                                transition={containerTransition}
                                className="text-[10px] tracking-[0.3em] text-[#2D6A4F] dark:text-[#52B788] uppercase font-bold block"
                            >
                                Launching in Kerala First
                            </motion.span>
                        </div>

                        <h1 className="mt-8 text-6xl md:text-[5.5rem] font-serif leading-[0.9] tracking-tighter text-[#1A1A1A] dark:text-white transition-colors duration-500">
                            <div className="overflow-hidden">
                                <motion.span
                                    variants={riseUp}
                                    initial="initial"
                                    animate="animate"
                                    transition={{ ...containerTransition, delay: 0.1 }}
                                    className="block"
                                >
                                    Your Dry Waste.
                                </motion.span>
                            </div>
                            <div className="overflow-hidden">
                                <motion.span
                                    variants={riseUp}
                                    initial="initial"
                                    animate="animate"
                                    transition={{ ...containerTransition, delay: 0.2 }}
                                    className="italic font-light text-gray-400 dark:text-gray-500 text-5xl md:text-7xl block mt-6"
                                >
                                    Weighed Fairly. Paid Instantly.
                                </motion.span>
                            </div>
                        </h1>

                        <div className="overflow-hidden">
                            <motion.p
                                variants={riseUp}
                                initial="initial"
                                animate="animate"
                                transition={{ ...containerTransition, delay: 0.3 }}
                                className="mt-10 text-lg text-gray-600 dark:text-gray-400 max-w-md leading-relaxed"
                            >
                                AakriOnline sends a verified Rep to your doorstep, sorts your recyclables,
                                and pays you the live market rate on the spot — via UPI.
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 1 }}
                            className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-8"
                        >
                            <button
                                onClick={scrollToWaitlist}
                                className="px-10 py-4 bg-[#2D6A4F] text-white text-xs uppercase tracking-widest hover:bg-[#1b4332] dark:hover:bg-[#52B788] transition-colors duration-500 font-bold"
                            >
                                Join the Waitlist — It's Free
                            </button>
                            <Link
                                to="/partners"
                                className="group flex items-center gap-3 text-xs uppercase tracking-widest font-bold text-[#0D3B66] dark:text-[#52B788]"
                            >
                                For Dealers & Recyclers <HiArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Image section */}
                    <div className="flex gap-4 h-[600px] w-full items-center">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative h-full flex-[3] hover:flex-[4] transition-all duration-700 ease-in-out group rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-800"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=2070"
                                alt="Sustainable Recycling"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute bottom-6 left-6 bg-white/90 dark:bg-[#1A1A1A]/90 backdrop-blur-md p-5 max-w-[240px] shadow-xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                <p className="text-[9px] uppercase tracking-widest text-[#2D6A4F] dark:text-[#52B788] mb-2 font-bold">Transparency</p>
                                <p className="text-xs font-serif italic text-gray-800 dark:text-white leading-relaxed">
                                    "Real-time market rates and digital weighing ensure you never lose a single rupee."
                                </p>
                            </div>
                        </motion.div>

                        <div className="relative h-full flex-[0.6] hover:flex-[1.5] transition-all duration-700 rounded-full overflow-hidden bg-[#2D6A4F]">
                            <p className="vertical-text absolute inset-0 flex items-center justify-center text-[10px] text-white font-bold uppercase tracking-[0.3em] rotate-180" style={{ writingMode: 'vertical-rl' }}>
                                Verified Reps
                            </p>
                        </div>

                        <div className="relative h-full flex-[0.6] hover:flex-[1.5] transition-all duration-700 rounded-full overflow-hidden bg-black dark:bg-[#1A1A1A]">
                            <p className="vertical-text absolute inset-0 flex items-center justify-center text-[10px] text-white font-bold uppercase tracking-[0.3em] rotate-180" style={{ writingMode: 'vertical-rl' }}>
                                Digital Weighing
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem Statement Section */}
            <section className="py-24 px-6 relative z-10 transition-colors duration-500 
    bg-[#E9EFE9]/50 dark:bg-[#111612] 
    rounded-[4rem] mx-5 md:mx-10 overflow-hidden  border border-transparent dark:border-white/5">

                {/* grain overlay */}
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Section Headerr */}
                    <div className="text-center mb-20">
                        <div className="overflow-hidden">
                            <motion.h2
                                initial={{ y: "100%" }}
                                whileInView={{ y: 0 }}
                                viewport={{ once: true }}
                                transition={containerTransition}
                                className="text-4xl md:text-6xl font-serif text-[#1A1A1A] dark:text-white tracking-tight"
                            >
                                Sound familiar?
                            </motion.h2>
                        </div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="text-lg md:text-xl italic text-gray-500 dark:text-gray-400 font-light mt-4 max-w-2xl mx-auto"
                        >
                            We know the struggle of disposing dry waste in Kerala. It’s time for a change.
                        </motion.p>
                    </div>

                    {/* grid*/}
                    <div className="grid md:grid-cols-3 gap-6 lg:gap-10">

                        {/* Card 1*/}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{ y: -12, transition: { duration: 0.3 } }}
                            className="group relative p-10 rounded-[3rem] transition-all duration-500
                    bg-white/70 dark:bg-white/[0.03] backdrop-blur-md 
                    border border-white dark:border-white/10 hover:border-[#2D6A4F]/20 dark:hover:border-[#52B788]/20
                    shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none"
                        >
                            <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#52B788]/20 blur-3xl rounded-full group-hover:bg-[#52B788]/40 transition-colors"></div>

                            <div className="mb-8 w-14 h-14 rounded-full bg-[#2D6A4F]/10 dark:bg-[#52B788]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                <svg className="w-6 h-6 text-[#2D6A4F] dark:text-[#52B788]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-[#1A1A1A] dark:text-white mb-4 tracking-tight leading-tight">Identity <br /> Uncertainty</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-medium italic border-l-2 border-[#2D6A4F]/10 pl-4">
                                "Who is this person at my door?" Zero verification makes it hard to trust strangers with your home's privacy.
                            </p>
                        </motion.div>

                        {/* Card 2*/}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{ y: -20, transition: { duration: 0.3 } }}
                            className="group relative p-10 rounded-[3rem] bg-[#1A1A1A] dark:bg-[#1F2621] text-white transition-all duration-500 shadow-2xl md:-translate-y-6 overflow-hidden border border-white/5"
                        >
                            <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#52B788]/20 blur-3xl rounded-full group-hover:bg-[#52B788]/40 transition-colors"></div>

                            <div className="mb-8 w-14 h-14 rounded-full bg-white/10 flex items-center justify-center group-hover:rotate-[360deg] transition-transform duration-1000">
                                <svg className="w-6 h-6 text-[#52B788]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 tracking-tight leading-tight">Market <br /> Exploitation</h3>
                            <p className="text-gray-400 text-sm leading-relaxed font-medium italic border-l-2 border-[#52B788]/30 pl-4">
                                "Am I being cheated?" Without live market rates and digital scales, you're likely losing money on every sale.
                            </p>
                        </motion.div>

                        {/* Card 3*/}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{ y: -12, transition: { duration: 0.3 } }}
                            className="group relative p-10 rounded-[3rem] transition-all duration-500
                    bg-white/70 dark:bg-white/[0.03] backdrop-blur-md 
                    border border-white dark:border-white/10 hover:border-[#2D6A4F]/20 dark:hover:border-[#52B788]/20
                    shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none"
                        >
                            <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#52B788]/20 blur-3xl rounded-full group-hover:bg-[#52B788]/40 transition-colors"></div>
                            <div className="mb-8 w-14 h-14 rounded-full bg-[#2D6A4F]/10 dark:bg-[#52B788]/10 flex items-center justify-center group-hover:-rotate-12 transition-transform duration-500">
                                <svg className="w-6 h-6 text-[#2D6A4F] dark:text-[#52B788]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-[#1A1A1A] dark:text-white mb-4 tracking-tight leading-tight">Reliability <br /> Vacuum</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-medium italic border-l-2 border-[#2D6A4F]/10 pl-4">
                                "Will they show up today?" Unreliable schedules mean your dry waste piles up for weeks with no end in sight.
                            </p>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* how it works */}
            <section className="py-32 px-6 bg-[#F4F7F4] dark:bg-[#0A0C0A] transition-colors duration-500">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">

                    {/* Left side*/}
                    <div className="lg:sticky lg:top-32 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[10px] tracking-[0.4em] text-[#2D6A4F] dark:text-[#52B788] font-bold uppercase">The Experience</span>
                            <h2 className="text-5xl md:text-7xl font-serif text-[#1A1A1A] dark:text-white mt-4 leading-tight">
                                Effortless <br />
                                <span className="italic font-light text-gray-400">Doorstep Recovery.</span>
                            </h2>
                        </motion.div>

                        {/* Transparency Note */}
                        <div className="p-8 rounded-[2rem] bg-white dark:bg-white/[0.03] border border-[#2D6A4F]/10 dark:border-white/5 shadow-sm max-w-sm">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-8 h-8 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center text-[#2D6A4F]">💡</span>
                                <span className="text-xs font-bold tracking-widest uppercase dark:text-gray-300">Fee Transparency</span>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed italic">
                                "A small logistics fee is charged separately. You always see the dealer's full bid—no hidden cuts."
                            </p>
                        </div>
                    </div>

                    {/* Right side*/}
                    <div className="relative pt-10">

                        {/* timeline  */}
                        <div className="relative space-y-24 pb-16">
                            <motion.div
                                style={{ scaleY }}
                                className="absolute left-6 md:left-10 top-0 w-[2px] h-[calc(100%-20px)] bg-[#2D6A4F] dark:bg-[#52B788] origin-top opacity-20"
                            />

                            {steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ margin: "-100px" }}
                                    className="relative pl-16 md:pl-24 group"
                                >
                                    <div className="absolute left-[1.15rem] md:left-[2.15rem] top-2 w-3 h-3 rounded-full bg-[#2D6A4F] dark:bg-[#52B788] shadow-[0_0_15px_rgba(45,106,79,0.5)] z-10 transition-transform group-hover:scale-150" />
                                    <span className="text-xs font-bold text-[#2D6A4F] dark:text-[#52B788] tracking-widest uppercase mb-2 block">{step.tag}</span>
                                    <h3 className="text-3xl font-serif text-[#1A1A1A] dark:text-white mb-4">
                                        <span className="text-gray-300 dark:text-white/10 mr-4">{step.number}</span>
                                        {step.title}
                                    </h3>
                                    <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-md">
                                        {step.desc}
                                    </p>
                                    <div className="mt-6 text-3xl text-[#2D6A4F]/20 dark:text-white/5 transition-colors group-hover:text-[#2D6A4F]/60">
                                        {step.icon}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* material categories*/}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="pl-6 md:pl-10 border-t border-gray-200 dark:border-white/10 pt-12 mt-4"
                        >
                            <div className="max-w-4xl">
                                <h3 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] dark:text-white mb-10">
                                    What can you <span className="italic text-gray-400">hand over?</span>
                                </h3>

                                <div className="space-y-12">
                                    {/* ROW 1m */}
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-3">
                                            <HiOutlineTrash className="text-xl text-[#2D6A4F] dark:text-[#52B788]" />
                                            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#2D6A4F] dark:text-[#52B788]">
                                                Recyclables (paid by weight)
                                            </h4>
                                        </div>

                                        <div className="flex flex-wrap gap-3">
                                            {[
                                                { name: "Paper", icon: <HiOutlineDocumentText /> },
                                                { name: "Cardboard", icon: <HiOutlineArchive /> },
                                                { name: "Plastic", icon: <HiOutlineCube /> },
                                                { name: "Metal", icon: <HiOutlineLightningBolt /> },
                                                { name: "Glass", icon: <HiOutlineSparkles /> },
                                                { name: "E-Waste", icon: <HiOutlineDesktopComputer /> },
                                            ].map((item) => (
                                                <motion.div
                                                    key={item.name}
                                                    whileHover={{ scale: 1.05 }}
                                                    className="px-5 py-3 rounded-2xl bg-white dark:bg-white/5 border border-[#2D6A4F]/10 dark:border-[#52B788]/10 shadow-sm flex items-center gap-3 group transition-all"
                                                >
                                                    <span className="text-lg text-[#2D6A4F] dark:text-[#52B788] opacity-70">
                                                        {item.icon}
                                                    </span>
                                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.name}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* ROW 2 */}
                                    <div className="space-y-6 relative">
                                        <div className="flex flex-wrap items-center gap-4">
                                            <div className="flex items-center gap-3">
                                                <HiOutlineSparkles className="text-xl text-amber-600 dark:text-amber-400" />
                                                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400">
                                                    Too good to scrap? It gets a second life.
                                                </h4>
                                            </div>
                                            <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] font-black text-amber-600 dark:text-amber-400 tracking-tighter uppercase">
                                                Re-Store — Coming Soon
                                            </span>
                                        </div>

                                        <div className="flex flex-wrap gap-3">
                                            {[
                                                { name: "Working Electronics", icon: <HiOutlineDesktopComputer /> },
                                                { name: "Furniture", icon: <HiOutlineArchive /> },
                                                { name: "Appliances", icon: <HiOutlineLightningBolt /> },
                                                { name: "Books", icon: <HiOutlineBookOpen /> },
                                                { name: "Clothing", icon: <HiOutlineSparkles /> },
                                            ].map((item) => (
                                                <motion.div
                                                    key={item.name}
                                                    whileHover={{ scale: 1.05 }}
                                                    className="px-5 py-3 rounded-2xl bg-amber-50/50 dark:bg-amber-900/5 border border-amber-200/50 dark:border-amber-700/30 shadow-sm flex items-center gap-3 group transition-all"
                                                >
                                                    <span className="text-lg text-amber-600 dark:text-amber-400 opacity-70">
                                                        {item.icon}
                                                    </span>
                                                    <span className="text-sm font-medium text-amber-900 dark:text-amber-200">{item.name}</span>
                                                </motion.div>
                                            ))}
                                        </div>

                                        <p className="text-sm text-gray-500 dark:text-gray-400 italic max-w-xl leading-relaxed mt-4">
                                            "Don’t throw away that old mixer or study table. If it still works, we’ll connect it with someone who needs it — not the shredder."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* why akrionline */}
            <section className="py-24 px-6 bg-white dark:bg-[#050505]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20 space-y-4">
                        <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] dark:text-white">
                            Designed for <span className="italic text-gray-400">Total Peace of Mind.</span>
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Professionalism you'd expect from a bank, applied to your doorstep recycling.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 dark:bg-white/10 border border-gray-100 dark:border-white/10 rounded-[2rem] overflow-hidden">
                        {trustSignals.map((signal, index) => (
                            <div
                                key={index}
                                className={`p-8 bg-white dark:bg-[#0A0A0A] transition-colors hover:bg-gray-50 dark:hover:bg-white/[0.02] flex flex-col justify-between ${signal.type === 'HKS' ? 'bg-green-50/30 dark:bg-green-900/5' : ''}`}
                            >
                                <div>
                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-6 
                                    ${signal.type === 'HKS' ? 'bg-[#2D6A4F] text-white' :
                                            signal.type === 'ReStore' ? 'bg-amber-500 text-white' :
                                                'bg-gray-100 dark:bg-white/5 text-[#2D6A4F] dark:text-[#52B788]'}`}>
                                        {signal.icon}
                                    </div>
                                    <h4 className="text-lg font-bold text-[#1A1A1A] dark:text-white mb-2">
                                        {signal.title}
                                    </h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                                        {signal.desc}
                                    </p>
                                </div>

                                {signal.type === 'HKS' && (
                                    <div className="mt-6 pt-4 border-t border-green-100 dark:border-green-900/30">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-[#2D6A4F] dark:text-[#52B788]">
                                            Complementary to Govt. Schemes
                                        </span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* social proof */}
            <section ref={containerRef} className="py-10 px-6 bg-[#E9EFE9]/50 dark:bg-[#111612] border-y border-gray-100 dark:border-white/5">
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                        
                    {/* Left: Heading */}
                    <div className="max-w-xs text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] dark:text-white leading-tight">
                            Our Mission <br />
                            <span className="italic text-gray-400 font-light">In Numbers.</span>
                        </h2>
                    </div>

                    {/* Right side*/}
                    <div className="flex flex-wrap justify-center md:justify-end gap-12 md:gap-24">
                        {stats.map((stat, i) => (
                            <div key={i} className="flex flex-col items-center md:items-start">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-5xl md:text-6xl font-serif text-[#1A1A1A] dark:text-white tracking-tighter">
                                        {stat.value.toLocaleString()}
                                    </span>
                                    <span className="text-lg text-[#2D6A4F] font-bold">{stat.suffix}</span>
                                </div>
                                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mt-2">
                                    {stat.label} <span className="text-[#2D6A4F]/40">— {stat.sub}</span>
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* waitlist signup */}
            <section className="py-10 px-6 bg-white dark:bg-[#050505]">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">

                    {/* Left Side: Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-green-50 dark:bg-green-900/20 text-[#2D6A4F] text-[10px] font-black uppercase tracking-widest">
                            Limited Early Access
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] dark:text-white mb-6">
                            Claim your spot in <span className="italic text-gray-400">the queue.</span>
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 text-lg">
                            We're rolling out city by city. Be the first to know when AakriOnline goes live in your neighborhood.
                        </p>
                    </div>

                    {/* Right Side */}
                    <div className="w-full max-w-md">
                        {!submitted ? (
                            <form
                                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                                className="p-8 bg-gray-50 dark:bg-white/5 rounded-[2.5rem] border border-gray-100 dark:border-white/10 space-y-4 shadow-2xl shadow-green-900/5"
                            >
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2 dark:text-white">Phone</label>
                                    <input required type="tel" placeholder="+91 00000 00000" className="w-full h-14 px-6 rounded-2xl bg-white dark:bg-black border-none ring-1 ring-gray-200 dark:ring-white/10 focus:ring-2 focus:ring-[#2D6A4F] outline-none" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2 dark:text-white">Pincode</label>
                                    <input required type="text" placeholder="682001" className="w-full h-14 px-6 rounded-2xl bg-white dark:bg-black border-none ring-1 ring-gray-200 dark:ring-white/10 focus:ring-2 focus:ring-[#2D6A4F] outline-none" />
                                </div>
                                <button type="submit" className="w-full h-14 rounded-2xl bg-[#2D6A4F] text-white font-bold hover:bg-[#1B4332] transition-all transform active:scale-95 shadow-lg shadow-green-900/20">
                                    Join the Waitlist
                                </button>
                                <p className="text-center text-[10px] text-gray-400 font-bold uppercase tracking-tighter mt-4">🔒 No spam. Only launch updates.</p>
                            </form>
                        ) : (
                            <div className="p-12 bg-[#2D6A4F] rounded-[2.5rem] text-white text-center">
                                <h3 className="text-2xl font-serif mb-2">You're in!</h3>
                                <p className="opacity-80 text-sm">We'll WhatsApp you as soon as we reach your area.</p>
                            </div>
                        )}
                    </div>

                </div>
            </section>

            <Footer/>

        </div>
        </div>
    )
}

export default Userlanding;