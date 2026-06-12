import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight, CheckCircle, Database, Layers, Sparkles } from 'lucide-react';

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const trustTools = [
    { name: 'Zoho CRM', category: 'CRM Gold Standard' },
    { name: 'Zendesk Suite', category: 'Support Architecture' },
    { name: 'HubSpot', category: 'RevOps Engine' },
    { name: 'Make / Zapier', category: 'Serverless Automation' },
    { name: 'ActiveCampaign', category: 'Lead Nurturing' },
    { name: 'GA4 Server-Side', category: 'Data & Analytics' }
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#0D1B2A] flex items-center pt-28 pb-16 overflow-hidden md:py-36 px-4 sm:px-6 lg:px-8"
    >
      {/* Decorative background gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-[#00C9A7]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full bg-[#1B263B]/50 blur-3xl pointer-events-none" />

      {/* Grid Overlay background matching premium tech style */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1b263b22_1px,transparent_1px),linear-gradient(to_bottom,#1b263b22_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Tag Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#1B263B] border border-[#415A77]/30 text-[#00C9A7] font-mono text-xs font-semibold tracking-wider"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#00C9A7] animate-pulse" />
              <span>Singapore-Based • 15+ Years Cross-Border RevOps Experience</span>
            </motion.div>

            {/* Title Headings */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-none tracking-tight"
              >
                Unifying <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C9A7] to-[#64DFDF]">MarTech & CRM</span> to Spark SME Scale.
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-base sm:text-lg text-gray-300 font-sans leading-relaxed max-w-2xl"
              >
                Hi, I'm <strong className="text-white font-medium">Vergilio Jr Gamotan ("Verge")</strong>. I audit fragmented operations and deploy custom CRM setups, server-side data models, and Make.com integrations that lock down leaks and drive sustainable ROI.
              </motion.p>
            </div>

            {/* Quick value props list */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-y-2 gap-x-6 text-sm text-[#415A77] font-mono font-medium"
            >
              <div className="flex items-center text-gray-300">
                <CheckCircle className="w-4 h-4 mr-2 text-[#00C9A7] flex-shrink-0" />
                No Buzzwords, Only Metrics
              </div>
              <div className="flex items-center text-gray-300">
                <Database className="w-4 h-4 mr-2 text-[#00C9A7] flex-shrink-0" />
                Zoho & Zendesk certified
              </div>
              <div className="flex items-center text-gray-300">
                <Layers className="w-4 h-4 mr-2 text-[#00C9A7] flex-shrink-0" />
                Proven Lead Sourcing
              </div>
            </motion.div>

            {/* CTA Buttons - 3 required CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                id="hero-cta-consultant"
                onClick={() => handleScrollTo('#contact')}
                className="group relative inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-bold text-white bg-[#00C9A7] hover:bg-[#00b395] transition-all duration-300 shadow-lg shadow-[#00C9A7]/20 hover:shadow-[#00C9A7]/40 hover:-translate-y-0.5 cursor-pointer"
              >
                Hire me as a consultant
                <ArrowRight className="ml-2 w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-cta-view-work"
                onClick={() => handleScrollTo('#portfolio')}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-[#1B263B] hover:bg-[#1B263B]/80 border border-[#415A77]/40 hover:border-[#00C9A7]/80 hover:text-white transition-all duration-300 cursor-pointer"
              >
                View my work
              </button>

              <button
                id="hero-cta-get-touch"
                onClick={() => handleScrollTo('#contact')}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-semibold text-[#00C9A7] hover:text-white transition-all duration-300 cursor-pointer hover:bg-[#1B263B]/30"
              >
                Get in touch
              </button>
            </motion.div>

          </div>

          {/* Right Visual Badge Display Widget */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto max-w-[380px] sm:max-w-md rounded-2xl border border-[#1B263B]/80 bg-[#1B263B]/30 backdrop-blur-md p-6 sm:p-8 shadow-2xl"
            >
              {/* Corner tech lines */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#00C9A7] rounded-tl-lg" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#00C9A7] rounded-br-lg" />

              <div className="flex items-center space-x-4 border-b border-[#415A77]/20 pb-6 mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#00C9A7] to-[#1B263B] flex items-center justify-center font-display text-xl font-bold text-white shadow-inner">
                  V
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white leading-tight">Vergilio Jr Gamotan</h3>
                  <p className="font-mono text-xs text-[#00C9A7]">"Verge"</p>
                </div>
              </div>

              {/* Mini Interactive Metric Widget */}
              <div className="space-y-4">
                <div className="bg-[#0D1B2A]/80 p-4 rounded-xl border border-[#1B263B]/50 hover:border-[#00C9A7]/30 transition-colors">
                  <span className="block text-2xl font-display font-extrabold text-white">15+ Years</span>
                  <span className="block text-xs font-mono text-[#415A77] uppercase tracking-wider mt-0.5">SME Optimization Experience</span>
                </div>
                <div className="bg-[#0D1B2A]/80 p-4 rounded-xl border border-[#1B263B]/50 hover:border-[#00C9A7]/30 transition-colors">
                  <span className="block text-2xl font-display font-extrabold text-white text-[#00C9A7]">45% YoY</span>
                  <span className="block text-xs font-mono text-[#415A77] uppercase tracking-wider mt-0.5">Average Pipeline Speed Gain</span>
                </div>
                <div className="bg-[#0D1B2A]/80 p-4 rounded-xl border border-[#1B263B]/50 hover:border-[#00C9A7]/30 transition-colors">
                  <span className="block text-2xl font-display font-extrabold text-white">SGD 4.5k - 6.5k</span>
                  <span className="block text-xs font-mono text-[#415A77] uppercase tracking-wider mt-0.5">RevOps Alignment Range</span>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-center space-x-2 text-xs font-mono text-[#415A77]">
                <ShieldCheck className="w-4 h-4 text-[#00C9A7]" />
                <span>NDA Compliant • Data Governed</span>
              </div>
            </motion.div>
          </div>

        </div>

        {/* TRUST BAR - Text references and subtle logos */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 pt-8 border-t border-[#1B263B]/40"
        >
          <div className="text-center lg:text-left">
            <span className="font-mono text-xs uppercase tracking-widest text-[#415A77] font-semibold">
              CORE INFRASTRUCTURE EXCELLED & DEPLOYED DAILY:
            </span>
          </div>
          
          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {trustTools.map((tool) => (
              <div
                key={tool.name}
                className="bg-[#1B263B]/20 hover:bg-[#1B263B]/40 border border-[#1B263B]/50 hover:border-[#00C9A7]/30 rounded-lg py-3 px-4 text-center transition-all duration-300 group"
              >
                <div className="font-display font-medium text-white group-hover:text-[#00C9A7] transition-colors duration-200">
                  {tool.name}
                </div>
                <div className="font-mono text-[9px] uppercase tracking-wider text-gray-500 group-hover:text-gray-400 mt-1">
                  {tool.category}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
