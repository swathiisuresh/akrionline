import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import {
  HiOutlineExclamationTriangle, HiOutlineScale, HiOutlineEyeSlash, HiOutlineShieldCheck, HiOutlineDocumentCheck, HiOutlineAdjustmentsHorizontal,
  HiOutlineChartBar, HiOutlineCheckBadge, HiOutlineCurrencyRupee, HiOutlineMapPin, HiOutlineCheckCircle, HiOutlineBuildingOffice2
} from 'react-icons/hi2';
import { motion, useScroll, useTransform } from 'framer-motion';
import Footer from '../components/Footer';

function Dealerpage() {
  const { scrollY } = useScroll();
  // parallax
  const y1 = useTransform(scrollY, [0, 500], [0, -50]);
  const y2 = useTransform(scrollY, [0, 500], [0, 50]);

  const [submitted, setSubmitted] = useState(false);
  const materials = ["Paper", "Plastic", "Metal", "E-Waste", "Glass", "Other"];

  const problems = [
    {
      icon: <HiOutlineExclamationTriangle className="text-amber-500" />,
      title: "Unpredictable Supply",
      desc: "Relying on informal collectors leads to inconsistent volume and fluctuating material quality that disrupts your operations."
    },
    {
      icon: <HiOutlineScale className="text-red-500" />,
      title: "Contamination Waste",
      desc: "Mixed, unsorted loads mean high processing costs and heavy labor overhead, eating directly into your profit margins."
    },
    {
      icon: <HiOutlineEyeSlash className="text-gray-400" />,
      title: "No Demand Visibility",
      desc: "Operating in the dark with no way to forecast what inventory is coming, when it arrives, or in what specific quantity."
    }
  ];

  const steps = [
    {
      id: "01",
      title: "Price Configuration",
      desc: "Define your acquisition rates per material. Real-time dashboard updates allow you to respond to market fluctuations instantly.",
      stat: "MARKET_SYNC"
    },
    {
      id: "02",
      title: "Availability Toggle",
      desc: "Signal your yard's readiness. Activate 'Accepting Loads' to enter the live queue, or pause when reaching capacity.",
      stat: "CAPACITY_MGMT"
    },
    {
      id: "03",
      title: "Logistics & Sorting",
      desc: "Our field team aggregates and pre-sorts inventory. You receive a digital manifest verifying load quality before it leaves the source.",
      stat: "QC_VERIFIED"
    },
    {
      id: "04",
      title: "Automated Fulfillment",
      desc: "Material arrives at your facility gate. Each load is accompanied by a digital weight certificate for immediate inventory entry.",
      stat: "EPR_TRACEABLE"
    }
  ];

  const features = [
    { icon: <HiOutlineCheckBadge />, title: "Quality Control", desc: "Every load sorted by trained Reps. Zero contamination guarantee." },
    { icon: <HiOutlineAdjustmentsHorizontal />, title: "Dynamic Pricing", desc: "Set your own rates. Our algorithm routes only what fits your margin." },
    { icon: <HiOutlineDocumentCheck />, title: "Digital Manifest", desc: "Audit-ready weight certificates for GST and PCB compliance." },
    { icon: <HiOutlineShieldCheck />, title: "GST-Clean", desc: "100% compliant documentation for seamless business accounting." },
    { icon: <HiOutlineCurrencyRupee />, title: "Zero Capital", desc: "No upfront fees. Pay a transparent logistics fee only on delivery." },
    { icon: <HiOutlineChartBar />, title: "Supply Scale", desc: "One agreement. Access city-wide sourcing as our network expands." }
  ];


  return (
    <div>
      <Navbar
        ctaLabel="Register as Partner"
        ctaColor="#0D3B66"
        ctaHoverColor="#1e5a96"
        showLeftLink={true}
        leftLinkLabel="AkriOnline"
        leftLinkHref="/"
        leftLinkColor="#2D6A4F"
      />
      {/* hero section */}
      <section className="relative pt-24 pb-17 px-6 bg-[#FCFCFC] dark:bg-[#050505] overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            {/* Left Side: Content */}
            <div className="flex-1 space-y-10">
              <div className="flex gap-3">
                <span className="px-3 py-1 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded font-mono text-[10px] tracking-widest text-[#2D6A4F] font-bold">
                  KYC_VERIFIED_ONLY
                </span>
                <span className="px-3 py-1 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded font-mono text-[10px] tracking-widest text-gray-400 font-bold">
                  EPR_CHAIN_ACTIVE
                </span>
              </div>

              <h1 className="text-5xl md:text-8xl font-serif text-[#1A1A1A] dark:text-white leading-[1.05] tracking-tight">
                Predictable. <br />
                <span className="italic text-gray-400 font-light text-4xl md:text-6xl">Industrial Flow.</span>
              </h1>

              <p className="text-gray-500 dark:text-gray-400 max-w-xl text-lg leading-relaxed font-medium">
                We aggregate household and office dry waste across Kerala, sort it by material type, and deliver consistent, traceable loads to verified recyclers—on your schedule.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6 pt-6">
                <button className="h-14 w-full sm:w-auto px-10 rounded-2xl bg-[#0D3B66] text-white font-bold hover:bg-[#154a7a] transition-all shadow-xl shadow-blue-900/10 uppercase text-[11px] tracking-widest">
                  Become a Partner
                </button>
                <a href="/" className="text-xs font-bold uppercase tracking-widest text-[#2D6A4F] hover:underline decoration-2 underline-offset-8">
                  For Households →
                </a>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex-1 w-full grid grid-cols-2 gap-4">

              {/* Column 1 */}
              <motion.div style={{ y: y1 }} className="space-y-4">
                <div className="rounded-[2.5rem] overflow-hidden aspect-[4/5] bg-gray-200 relative group">
                  <motion.img
                    src="https://images.pexels.com/photos/3746335/pexels-photo-3746335.jpeg"
                    alt="PAPER_KRAFT_BALE"
                    className="w-full h-full object-cover grayscale brightness-90"
                    whileHover={{ scale: 1.15, x: -10, y: -5 }}
                    transition={{ duration: 8, ease: "linear" }}
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                    <p className="text-white text-[9px] font-mono tracking-widest">REF_AK_992</p>
                  </div>
                </div>
                <div className="rounded-[2.5rem] overflow-hidden aspect-[1/1] bg-gray-200 relative group">
                  <motion.img
                    src="https://images.pexels.com/photos/9324344/pexels-photo-9324344.jpeg"
                    alt="HDPE_PLASTIC"
                    className="w-full h-full object-cover grayscale brightness-90"
                    whileHover={{ scale: 1.2, x: 5, y: -10 }}
                    transition={{ duration: 10, ease: "linear" }}
                  />
                </div>
              </motion.div>

              {/* Column 2 */}
              <motion.div style={{ y: y2 }} className="space-y-4 mt-12">
                <div className="rounded-[2.5rem] overflow-hidden aspect-[1/1] bg-[#0D3B66] flex items-center justify-center p-8 text-white relative">
                  <div className="space-y-2">
                    <p className="text-3xl font-serif leading-tight">Supply <br />Certainty.</p>
                    <div className="h-0.5 w-12 bg-[#52B788]" />
                  </div>
                </div>
                <div className="rounded-[2.5rem] overflow-hidden aspect-[4/5] bg-gray-200 relative group">
                  <motion.img
                    src="https://images.pexels.com/photos/6591429/pexels-photo-6591429.jpeg"
                    alt="E_WASTE_RECOVERY"
                    className="w-full h-full object-cover grayscale brightness-90"
                    whileHover={{ scale: 1.18, x: -5, y: 10 }}
                    transition={{ duration: 9, ease: "linear" }}
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                    <p className="text-white text-[9px] font-mono tracking-widest">BATCH_E_77</p>
                  </div>
                </div>
              </motion.div>

            </div>

          </div>
        </div>
      </section>

      {/* problem we solve for dealers */}
      <section className="py-10 px-6 bg-white dark:bg-[#050505]">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="max-w-3xl mb-12 border-l-4 border-[#0D3B66] pl-8">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-2">Diagnostic</h2>
            <h3 className="text-4xl md:text-6xl font-serif text-[#1A1A1A] dark:text-white leading-tight">
              You run a business. <br />
              <span className="italic text-gray-400 font-light text-3xl md:text-5xl">Your supply chain should too.</span>
            </h3>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3">
            {problems.map((prob, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`relative p-12 border-t border-gray-200 dark:border-white/10 
                ${i !== 2 ? 'md:border-r' : ''} // Vertical dividers for desktop
                group hover:bg-white dark:hover:bg-white/[0.02] transition-all duration-500`}
              >
                {/* Tag */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-mono font-bold text-gray-400">0{i + 1}</span>
                </div>

                <div className="mb-8 text-2xl text-gray-400 group-hover:text-[#0D3B66] transition-colors duration-500">
                  {prob.icon}
                </div>

                <h4 className="text-2xl font-bold text-[#1A1A1A] dark:text-white mb-6 tracking-tight leading-none uppercase">
                  {prob.title}
                </h4>

                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium max-w-[280px]">
                  {prob.desc}
                </p>

                {/*Underline Effect */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#0D3B66] group-hover:w-full transition-all duration-700" />
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Steps Section */}
      <section className="py-15 px-6 bg-[#FCFCFC] dark:bg-[#050505] overflow-hidden">
        <div className="max-w-7xl mx-auto">

          {/* Header*/}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-15 gap-8 border-l-4 border-[#0D3B66] pl-8">
            <div className="max-w-2xl">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-4">The Workflow</h2>
              <h3 className="text-5xl md:text-7xl font-serif text-[#1A1A1A] dark:text-white leading-[1.1]">
                A modernized <br />
                <span className="italic text-gray-400 font-light">procurement cycle.</span>
              </h3>
            </div>
          </div>

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 relative">

            {/* connecting line for Desktop */}
            <div className="hidden md:block absolute top-[26px] left-0 w-full h-[1px] bg-gray-100 dark:bg-white/10 z-0" />

            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="relative pt-16 group px-4 mb-12 md:mb-0"
              >
                {/* node */}
                <div className="absolute top-0 left-4 md:left-1/2 md:-translate-x-1/2 w-14 h-14 bg-white dark:bg-[#050505] border border-gray-200 dark:border-white/10 rounded-full flex items-center justify-center z-10 group-hover:border-[#0D3B66] group-hover:scale-110 transition-all duration-500 shadow-sm">
                  <span className="font-mono text-xs font-bold text-gray-300 group-hover:text-[#0D3B66]">{step.id}</span>
                </div>

                {/* Content Block */}
                <div className="md:text-center mt-4">
                  <p className="font-mono text-[9px] font-black text-[#0D3B66] mb-4 tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
                    {step.stat}
                  </p>

                  <h4 className="text-xl font-bold text-[#1A1A1A] dark:text-white mb-4 uppercase tracking-tighter">
                    {step.title}
                  </h4>

                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium md:px-4">
                    {step.desc}
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <div className="hidden md:block absolute -inset-x-4 top-24 bottom-0 bg-gradient-to-b from-gray-50/50 dark:from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-t-3xl" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* why partner */}
      <section className="py-15 px-6 bg-white dark:bg-[#050505]">
        <div className="max-w-7xl mx-auto">

          <div className="relative border-2 border-[#1A1A1A] dark:border-white/10 rounded-[3rem] overflow-hidden mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2">

              {/* Left: Content Area */}
              <div className="p-10 md:p-16 space-y-8 bg-gray-50/50 dark:bg-white/[0.01]">
                <div className="flex items-center gap-4">
                  <span className="w-8 h-[2px] bg-[#2D6A4F]" />
                  <span className="text-[10px] font-mono font-black uppercase tracking-[0.4em] text-gray-400">Primary Protocol</span>
                </div>
                <h3 className="text-4xl md:text-6xl font-serif leading-[1.1]">
                  EPR-Ready <br />
                  <span className="italic text-gray-400 font-light">Traceability.</span>
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed max-w-lg">
                  The headline feature for large recyclers and mills. We provide the exact <strong>Chain of Custody</strong> data your brand partners require to meet their targets.
                </p>

                <div className="grid grid-cols-2 gap-8 pt-6 border-t border-gray-200 dark:border-white/5">
                  <div>
                    <p className="text-[10px] font-mono text-gray-400 uppercase mb-2">Verification</p>
                    <p className="font-bold text-xl uppercase tracking-tighter">Day 1 Ready</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-gray-400 uppercase mb-2">Compliance</p>
                    <p className="font-bold text-xl uppercase tracking-tighter">FMCG Audit</p>
                  </div>
                </div>
              </div>

              {/* Right side */}
              <div className="bg-[#0D3B66] p-12 flex flex-col justify-center text-white relative">
                <div className="absolute top-8 right-8 text-[60px] opacity-10 font-serif italic text-white">EPR</div>
                <div className="space-y-6 relative z-10">
                  <div className="p-6 border border-white/20 rounded-2xl bg-white/5 backdrop-blur-sm">
                    <p className="text-[10px] font-mono mb-4 text-[#52B788]">DIGITAL_MANIFEST_ACTIVE</p>
                    <ul className="space-y-3 text-xs opacity-80 font-mono">
                      <li className="flex justify-between"><span>[+] Source Pin:</span> <span>682001</span></li>
                      <li className="flex justify-between"><span>[+] Material:</span> <span>Paper/Kraft</span></li>
                      <li className="flex justify-between"><span>[+] Cert:</span> <span>#AKR-889</span></li>
                    </ul>
                  </div>
                  <p className="text-sm font-light leading-relaxed italic opacity-70">
                    "Digitally signed manifests for every gram of material delivered."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-100 dark:border-white/5">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ backgroundColor: "rgba(0,0,0,0.01)" }}
                className={`p-10 border-b border-gray-100 dark:border-white/5 ${i % 3 !== 2 ? 'md:border-r' : ''} group`}
              >
                <div className="flex justify-between items-center mb-8">
                  <div className="text-2xl text-gray-300 group-hover:text-[#0D3B66] transition-colors duration-500">
                    {feature.icon}
                  </div>
                  <span className="text-[10px] font-mono text-gray-300">0{i + 1}</span>
                </div>
                <h4 className="text-lg font-bold uppercase tracking-tighter mb-4 text-[#1A1A1A] dark:text-white">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* form */}
      <section id="register" className="py-15 px-6 bg-[#F8F9FA] dark:bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* Left side */}
            <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-32">
              <div className="space-y-4">
                <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#0D3B66]">Onboarding</h2>
                <h3 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] dark:text-white leading-tight">
                  Join the <br />
                  <span className="italic text-gray-400 font-light">Supply Network.</span>
                </h3>
              </div>

              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                Submit your credentials for review. Our compliance team handles the heavy lifting of KYC so you can focus on processing.
              </p>

              <div className="space-y-6 pt-8 border-t border-gray-200 dark:border-white/10">
                <div className="flex gap-4 items-start">
                  <div className="mt-1 w-5 h-5 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center text-[#2D6A4F]">
                    <HiOutlineShieldCheck />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#1A1A1A] dark:text-white uppercase tracking-wider">Manual Verification</p>
                    <p className="text-[11px] text-gray-400 mt-1">48-hour turnaround for document review and site visit.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl">
                <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-2">Network Status</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <p className="text-xs font-bold text-[#1A1A1A] dark:text-white uppercase">Accepting New Partners</p>
                </div>
              </div>
            </div>

            {/* Right side */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-white/10 rounded-[2.5rem] overflow-hidden shadow-xl shadow-gray-200/50 dark:shadow-none"
              >
                <div className="bg-[#0D3B66] px-8 py-4 flex justify-between items-center">
                  <span className="text-[9px] font-mono text-white/60 tracking-[0.2em] uppercase">Partner_Inbound_Form_v4</span>
                  <HiOutlineBuildingOffice2 className="text-white/40" />
                </div>

                {!submitted ? (
                  <form className="p-8 md:p-12 space-y-8">
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="group space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-focus-within:text-[#2D6A4F] transition-colors">Business Legal Name</label>
                        <input type="text" className="w-full bg-transparent border-b border-gray-200 dark:border-white/10 py-2 focus:border-[#2D6A4F] outline-none transition-all text-sm font-medium" placeholder="Ex: Green Kerala Recyclers" required />
                      </div>
                      <div className="group space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-focus-within:text-[#2D6A4F] transition-colors">GST Number</label>
                        <input type="text" className="w-full bg-transparent border-b border-gray-200 dark:border-white/10 py-2 focus:border-[#2D6A4F] outline-none transition-all text-sm font-medium" placeholder="22AAAAA0000A1Z5" required />
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="group space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-focus-within:text-[#2D6A4F] transition-colors">Contact Person</label>
                        <input type="text" className="w-full bg-transparent border-b border-gray-200 dark:border-white/10 py-2 focus:border-[#2D6A4F] outline-none transition-all text-sm font-medium" placeholder="Name" required />
                      </div>
                      <div className="group space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-focus-within:text-[#2D6A4F] transition-colors">Phone Number</label>
                        <input type="tel" className="w-full bg-transparent border-b border-gray-200 dark:border-white/10 py-2 focus:border-[#2D6A4F] outline-none transition-all text-sm font-medium" placeholder="+91" required />
                      </div>
                    </div>

                    {/* Materials Selection */}
                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Primary Material Categories</label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {materials.map((mat) => (
                          <label key={mat} className="flex items-center gap-3 p-3 border border-gray-100 dark:border-white/5 rounded-xl cursor-pointer hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group">
                            <input type="checkbox" className="w-4 h-4 accent-[#2D6A4F] rounded border-gray-300" />
                            <span className="text-[11px] font-bold text-gray-500 group-hover:text-[#1A1A1A] dark:group-hover:text-white transition-colors uppercase tracking-tight">{mat}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Submission Button */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        className="group w-full md:w-auto px-12 py-4 bg-[#1A1A1A] dark:bg-white text-white dark:text-black rounded-xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-[#0D3B66] dark:hover:bg-[#0D3B66] hover:text-white transition-all duration-500 flex items-center justify-center gap-3"
                      >
                        Initiate Onboarding Protocol
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </button>
                    </div>

                    <p className="text-[9px] text-gray-400 font-mono uppercase tracking-[0.1em]">
                      Notice :: This is a gated application. Submission does not guarantee network activation.
                    </p>
                  </form>
                ) : (
                  <div className="p-20 text-center">
                    <HiOutlineCheckCircle className="text-5xl text-[#2D6A4F] mx-auto mb-6" />
                    <h4 className="text-2xl font-serif mb-2">Protocol Initiated.</h4>
                    <p className="text-sm text-gray-500">Check your phone/email for the verification link.</p>
                  </div>
                )}
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Dealerpage
