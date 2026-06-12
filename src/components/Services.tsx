import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { servicesData } from '../data';
import { ServiceItem } from '../types';
import * as Icons from 'lucide-react';

interface ServicesProps {
  onBookService: (serviceName: string) => void;
}

export default function Services({ onBookService }: ServicesProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Helper to dynamically render Lucide Icons
  const renderIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className="w-6 h-6 text-[#00C9A7]" />;
    }
    return <Icons.HelpCircle className="w-6 h-6 text-[#00C9A7]" />;
  };

  const handleLearnMore = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="services" className="py-24 bg-[#0D1B2A] relative overflow-hidden px-4 sm:px-6 lg:px-8">
      
      {/* Background shape */}
      <div className="absolute top-0 right-1/4 w-[350px] h-[350px] rounded-full bg-[#00C9A7]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[300px] h-[300px] rounded-full bg-[#1B263B]/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center space-x-2 text-[#00C9A7] font-mono text-xs uppercase tracking-widest font-semibold bg-[#1B263B]/50 px-3.5 py-1.5 rounded-full border border-[#00C9A7]/10">
            <Icons.Briefcase className="w-3" />
            <span>Consultancy Operations</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive Growth Suites built for Southeast Asian SMEs
          </h2>
          <p className="text-gray-400 font-sans text-base sm:text-lg">
            I don't sell hours. I sell outcomes. Explore structured, strategic offerings designed to scale pipelines, minimize friction, and clean up technical overhead.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const isExpanded = expandedId === service.id;
            return (
              <motion.div
                key={service.id}
                id={`service-card-${service.id}`}
                layout="position"
                className={`bg-[#1B263B]/30 border rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative group overflow-hidden ${
                  isExpanded
                    ? 'border-[#00C9A7] shadow-lg shadow-[#00C9A7]/5 ring-1 ring-[#00C9A7]/30'
                    : 'border-[#1B263B]/80 hover:border-[#415A77]/40 hover:bg-[#1B263B]/40 shadow-xl'
                }`}
              >
                {/* Tech Line Highlights */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#00C9A7]/5 to-transparent pointer-events-none rounded-tr-2xl" />

                {/* Card Info */}
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#1B263B] border border-[#415A77]/30 flex items-center justify-center shadow-inner group-hover:border-[#00C9A7]/40 group-hover:bg-[#1B263B]/80 transition-all duration-300">
                    {renderIcon(service.iconName)}
                  </div>

                  {/* Title & One-Liner */}
                  <div className="space-y-2">
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-[#00C9A7] transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-300 font-sans leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Expandable Extended content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="pt-4 border-t border-[#415A77]/20 space-y-4 overflow-hidden"
                      >
                        <p className="text-xs text-gray-400 font-sans leading-relaxed">
                          {service.fullDescription}
                        </p>
                        
                        <div className="space-y-2">
                          <span className="block font-mono text-[9px] text-[#415A77] uppercase tracking-wider font-bold">
                            KEY ENGAGEMENT BENCHMARKS:
                          </span>
                          <ul className="space-y-1.5 text-xs text-gray-300 font-sans">
                            {service.keyBenefits.map((benefit, i) => (
                              <li key={i} className="flex items-start">
                                <span className="text-[#00C9A7] mr-1.5 select-none font-bold">✓</span>
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* CTA Action Bar */}
                <div className="mt-8 pt-6 border-t border-[#415A77]/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    id={`service-learn-more-btn-${service.id}`}
                    onClick={() => handleLearnMore(service.id)}
                    className="px-4 py-2 text-xs font-semibold text-gray-400 hover:text-white border border-[#415A77]/30 hover:border-[#415A77] rounded-lg transition-colors cursor-pointer text-center"
                  >
                    {isExpanded ? 'Hide details' : 'Learn more'}
                  </button>
                  
                  <button
                    id={`service-book-call-btn-${service.id}`}
                    onClick={() => onBookService(service.title)}
                    className="flex-1 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-[#00C9A7] to-[#1B263B] border border-[#00C9A7]/20 hover:border-[#00C9A7] rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer text-center flex items-center justify-center space-x-1"
                  >
                    <span>Book a slot</span>
                    <Icons.ArrowRight className="w-3.5 h-3.5 text-white/80" />
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
