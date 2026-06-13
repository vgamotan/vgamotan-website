import React from 'react';
import { ShieldCheck, Mail, Linkedin, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="portfolio-footer" className="bg-[#0D1B2A] border-t border-[#1B263B] py-12 px-4 sm:px-6 lg:px-8 relative z-10 print:hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Column: Brand name and description */}
        <div className="space-y-3 text-center md:text-left">
          <div className="flex items-baseline justify-center md:justify-start">
            <span className="font-display text-xl font-bold text-white">Verge</span>
            <span className="text-[#00C9A7] text-xl font-black">.</span>
          </div>
          <p className="text-xs text-gray-400 font-sans max-w-sm leading-relaxed">
            High-performance MarTech stack audits, CRM system governance configurations, and low-code integrations engineered strictly for regional expansion metrics.
          </p>
        </div>

        {/* Right Column: Dynamic info lists */}
        <div className="flex flex-col sm:flex-row items-center gap-6 text-xs text-gray-400 font-mono">
          <div className="flex items-center">
            <MapPin className="w-3.5 h-3.5 mr-1.5 text-[#00C9A7]" />
            <span>Singapore & Southeast Asia</span>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href="mailto:verge.gamotan@gmail.com"
              className="hover:text-white transition-colors"
            >
              verge.gamotan@gmail.com
            </a>
            <span className="text-[#1B263B]">•</span>
            <a
              href="https://linkedin.com/in/vergegamotan"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-[#1B263B]">•</span>
            <a
              href="https://www.tiktok.com/@pappiverge"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              TikTok
            </a>
            <span className="text-[#1B263B]">•</span>
            <a
              href="https://www.instagram.com/vergetalks"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Scroll back to top button floating */}
        <div>
          <button
            onClick={handleScrollToTop}
            className="p-3 bg-[#1B263B] hover:bg-[#00C9A7] text-gray-400 hover:text-white border border-[#415A77]/20 hover:border-transparent rounded-lg transition-all transform hover:-translate-y-0.5 cursor-pointer shadow-lg"
            title="Scroll To Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-[#1B263B]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-gray-500 font-mono">
        <div className="flex items-center space-x-2">
          <ShieldCheck className="w-3.5 h-3.5 text-[#00C9A7]" />
          <span>PDPA Compliant • Corporate NDA Regulated</span>
        </div>
        
        <div>
          <span>© 2026 Verge. Made for RevOps Excellence. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
