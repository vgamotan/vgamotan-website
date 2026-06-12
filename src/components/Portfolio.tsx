import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { caseStudiesData } from '../data';
import { ProjectCategory } from '../types';
import { Briefcase, Layers, ArrowRight, Eye, TrendingUp, HelpCircle } from 'lucide-react';

interface PortfolioProps {
  onQuoteRequested: (caseTitle: string) => void;
}

export default function Portfolio({ onQuoteRequested }: PortfolioProps) {
  const [selectedFilter, setSelectedFilter] = useState<ProjectCategory | 'All'>('All');

  const categories: (ProjectCategory | 'All')[] = [
    'All',
    'MarTech',
    'CRM',
    'Automation',
    'E-commerce',
    'Real Estate'
  ];

  const filteredProjects = selectedFilter === 'All'
    ? caseStudiesData
    : caseStudiesData.filter((project) => project.category === selectedFilter);

  return (
    <section id="portfolio" className="py-24 bg-[#1B263B]/10 relative overflow-hidden px-4 sm:px-6 lg:px-8 border-y border-[#1B263B]/20">
      
      {/* Background visual element */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-[#00C9A7]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center space-x-2 text-[#00C9A7] font-mono text-xs uppercase tracking-widest font-semibold bg-[#1B263B]/50 px-3.5 py-1.5 rounded-full border border-[#00C9A7]/10">
              <Layers className="w-3 h-3 text-[#00C9A7]" />
              <span>Real outcomes & Metrics</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Measurable Case Studies
            </h2>
            <p className="text-gray-400 font-sans text-base">
              Hiring managers aren't interested in configurations; they're interested in performance. Explore how I engineer data streams and CRM systems to generate tangible sales wins.
            </p>
          </div>

          {/* Categories Horizontal Scrolling Filter bar */}
          <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`portfolio-filter-btn-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedFilter(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg font-mono tracking-wider transition-all duration-300 cursor-pointer ${
                  selectedFilter === cat
                    ? 'bg-[#00C9A7] text-white shadow-md shadow-[#00C9A7]/20 font-bold'
                    : 'bg-[#1B263B]/55 text-gray-400 hover:text-white border border-[#415A77]/20 hover:border-[#415A77]/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Cards Grid */}
        <motion.div
          id="portfolio-case-studies-grid"
          layout
          className="grid grid-cols-1 xl:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                id={`case-card-${project.id}`}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="bg-[#1B263B]/20 border border-[#1B263B]/80 hover:border-[#00C9A7]/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative group overflow-hidden"
              >
                {/* Visual accent background gradient */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#00C9A7] to-[#1B263B]" />
                
                <div className="space-y-6">
                  {/* Category and Client */}
                  <div className="flex flex-wrap items-center justify-between gap-y-2 border-b border-[#415A77]/10 pb-4">
                    <div>
                      <span className="text-xs uppercase font-mono font-bold text-[#00C9A7] tracking-wider bg-[#00C9A7]/10 px-2.5 py-0.5 rounded-full">
                        {project.category}
                      </span>
                      <span className="text-xs font-mono text-gray-500 ml-3">
                        Client Case
                      </span>
                    </div>
                    <span className="font-display font-medium text-xs text-gray-300">
                      {project.client}
                    </span>
                  </div>

                  {/* Big visual metric header */}
                  <div className="flex items-center space-x-4 bg-[#0D1B2A]/70 p-4 rounded-xl border border-[#1B263B]/50">
                    <div className="bg-[#00C9A7]/10 p-3 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-5 h-5 text-[#00C9A7]" />
                    </div>
                    <div>
                      <span className="block text-2xl font-display font-black text-white tracking-tight leading-none">
                        {project.metric}
                      </span>
                      <span className="block text-[10px] uppercase font-mono text-gray-400 tracking-wider mt-1 font-medium">
                        {project.metricLabel}
                      </span>
                    </div>
                  </div>

                  {/* Title of Case study */}
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight leading-tight group-hover:text-[#00C9A7] transition-colors duration-200">
                    {project.title}
                  </h3>

                  {/* Problem / Approach / Result breakdown */}
                  <div className="space-y-4 font-sans text-xs sm:text-sm">
                    {/* Problem statement */}
                    <div className="space-y-1">
                      <span className="block text-[10px] uppercase font-mono text-gray-500 tracking-wider font-bold">
                        THE SATELLITE BOTTLENECK (PROBLEM)
                      </span>
                      <p className="text-gray-400 leading-relaxed font-sans">
                        {project.problem}
                      </p>
                    </div>

                    {/* Approach statement */}
                    <div className="space-y-1">
                      <span className="block text-[10px] uppercase font-mono text-gray-500 tracking-wider font-bold">
                        THE DEPLOYMENT ARCHITECTURE (APPROACH)
                      </span>
                      <p className="text-gray-300 leading-relaxed font-sans font-light">
                        {project.approach}
                      </p>
                    </div>

                    {/* Result statement */}
                    <div className="space-y-1">
                      <span className="block text-[10px] uppercase font-mono text-gray-500 tracking-wider font-bold">
                        MEASURABLE FINANCIAL OUTCOME (RESULT)
                      </span>
                      <p className="text-[#00C9A7] leading-relaxed font-sans font-medium">
                        {project.result}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card CTA Footer */}
                <div className="mt-8 pt-6 border-t border-[#415A77]/10 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#415A77] flex items-center">
                    <Briefcase className="w-3.5 h-3.5 mr-1" />
                    Verified Outcomes
                  </span>
                  
                  <button
                    id={`case-quote-btn-${project.id}`}
                    onClick={() => onQuoteRequested(project.title)}
                    className="inline-flex items-center text-xs font-bold text-[#00C9A7] hover:text-white transition-colors duration-200 cursor-pointer group"
                  >
                    <span>Request similar setup</span>
                    <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state when filter matches nothing */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-[#1B263B]/20 border border-[#1B263B]/60 rounded-2xl max-w-xl mx-auto space-y-4">
            <HelpCircle className="w-12 h-12 text-[#415A77] mx-auto" />
            <h3 className="font-display text-lg font-bold text-white">No custom cases available yet</h3>
            <p className="text-xs text-gray-400 font-sans">
              I have unpublished work under NDA in this category. Connect with me directly to discuss custom setups!
            </p>
            <button
              onClick={() => setSelectedFilter('All')}
              className="px-4 py-2 text-xs font-bold text-[#00C9A7] border border-[#00C9A7]/40 rounded-lg hover:border-[#00C9A7] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
