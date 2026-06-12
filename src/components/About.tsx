import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Calendar, Award, CheckCircle2, User, HelpCircle, Briefcase } from 'lucide-react';
import { careerData } from '../data';

export default function About() {
  const [selectedWorkId, setSelectedWorkId] = useState(careerData[0].id);

  const activeWork = careerData.find((w) => w.id === selectedWorkId) || careerData[0];

  return (
    <section id="about" className="py-24 bg-[#1B263B]/10 border-y border-[#1B263B]/20 relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background shape */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-[#00C9A7]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center md:text-left mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 text-[#00C9A7] font-mono text-xs uppercase tracking-widest font-semibold bg-[#1B263B]/50 px-3.5 py-1.5 rounded-full border border-[#00C9A7]/10">
            <User className="w-3 h-3 text-[#00C9A7]" />
            <span>The Professional Story</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Meet Vergilio Jr Gamotan ("Verge")
          </h2>
          <p className="text-gray-400 font-sans max-w-2xl text-base sm:text-lg">
            A battle-tested RevOps Solutions Architect bridging the gap between high-tech software promises and actual brick-and-mortar SME business realities.
          </p>
        </div>

        {/* Narrative / Intro grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Narrative Column */}
          <div className="lg:col-span-6 space-y-6 text-gray-300">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
              A No-Nonsense Guide to Cutting Out the "SaaS Excess."
            </h3>
            
            <p className="leading-relaxed font-sans text-sm sm:text-base">
              Over the last 15+ years, I've watched SMEs across Singapore, Malaysia, and the Philippines waste hundreds of thousands of dollars on expensive CRM licenses like HubSpot, Salesforce, or Zoho because a salesperson claimed it would "magically grow lead generation."
            </p>
            
            <p className="leading-relaxed font-sans text-sm sm:text-base">
              The reality? Software is only as effective as the real-world operational rules built into it. Without proper workflow governance, clean event webhooks, automated lead scoring, and automated reminders, software turns into an expensive, disorganized Excel spreadsheet.
            </p>

            <blockquote className="border-l-4 border-[#00C9A7] bg-[#1B263B]/20 p-4 rounded-r-lg">
              <p className="italic font-sans text-sm text-[#00C9A7] font-medium leading-relaxed">
                "I do not build systems just to look fancy. I configure tools so that when a prospective client submits an inquiry, an agent has all enriched context on their screen and responds in 90 seconds. That is what impacts the balance sheet."
              </p>
            </blockquote>

            <p className="leading-relaxed font-sans text-sm sm:text-base">
              With deep operational roots across three borders (Singapore, Malaysia, and Philippines), I design, govern, and integrate MarTech tools so sales channels talk seamlessly to support desks, operations, and leadership dashboards. No jargon. Only speed and clarity.
            </p>
          </div>

          {/* Quick Context Column */}
          <div className="lg:col-span-6">
            <div className="bg-[#1B263B]/30 border border-[#415A77]/20 rounded-xl p-6 sm:p-8 space-y-6 shadow-xl relative">
              <h3 className="font-display text-lg font-bold text-white border-b border-[#415A77]/20 pb-4 flex items-center">
                <HelpCircle className="w-5 h-5 mr-2 text-[#00C9A7]" />
                Why regional SMEs work with Verge:
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-lg bg-[#00C9A7]/10 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#00C9A7]" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-semibold text-white">Cross-Border Domain Authority</h4>
                    <p className="text-xs text-gray-400 mt-0.5">Navigating localized databases, payment structures, and workflows distinct to SG, MY, and PH operations.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-lg bg-[#00C9A7]/10 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#00C9A7]" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-semibold text-white">Strict NDA & Lead Compliance</h4>
                    <p className="text-xs text-gray-400 mt-0.5">Protecting proprietary enterprise client lists, sales figures, and technical workflows with certified governance.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-lg bg-[#00C9A7]/10 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#00C9A7]" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-semibold text-white">Multi-Suite Platform Polymath</h4>
                    <p className="text-xs text-gray-400 mt-0.5">Deep, practical developer fluency across Zoho Creator, Zendesk Macro Logic, HubSpot scoring, Twilio APIs, and Make.com backend scripting.</p>
                  </div>
                </div>
              </div>

              {/* Stat Highlight Panel */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#415A77]/20">
                <div className="text-left bg-[#0D1B2A]/50 p-4 rounded-lg">
                  <span className="block text-xl font-display font-extrabold text-[#00C9A7]">SGD 120K+</span>
                  <span className="block text-[10px] font-mono text-[#415A77] uppercase tracking-wider mt-0.5">SaaS Cost Saved Yearly</span>
                </div>
                <div className="text-left bg-[#0D1B2A]/50 p-4 rounded-lg">
                  <span className="block text-xl font-display font-extrabold text-white">15+ Years</span>
                  <span className="block text-[10px] font-mono text-[#415A77] uppercase tracking-wider mt-0.5">Perfect Performance Record</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* INTERACTIVE TIMELINE / CAREER TABS */}
        <div className="border border-[#1B263B]/50 bg-[#1B263B]/10 rounded-xl p-6 sm:p-8">
          <div className="flex items-center justify-between border-b border-[#415A77]/20 pb-4 mb-6">
            <div className="flex items-center space-x-2">
              <Briefcase className="w-5 h-5 text-[#00C9A7]" />
              <h3 className="font-display text-lg font-bold text-white">Career Evolution & Timeline</h3>
            </div>
            <span className="font-mono text-xs text-[#415A77]">Click to explore milestones</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Timeline Tab buttons (Left column) */}
            <div className="lg:col-span-5 space-y-2 border-r border-[#415A77]/10 lg:pr-8">
              {careerData.map((item) => {
                const isSelected = item.id === selectedWorkId;
                return (
                  <button
                    key={item.id}
                    id={`about-timeline-tab-${item.id}`}
                    onClick={() => setSelectedWorkId(item.id)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 relative group cursor-pointer ${
                      isSelected
                        ? 'bg-[#1B263B] border-l-4 border-[#00C9A7] text-white shadow-md'
                        : 'bg-transparent border-l-4 border-transparent text-gray-500 hover:text-white hover:bg-[#1B263B]/10'
                    }`}
                  >
                    <div className="font-display text-sm font-bold text-white group-hover:text-[#00C9A7] transition-colors">
                      {item.role}
                    </div>
                    <div className="flex items-center justify-between mt-1 text-xs text-[#415A77] font-mono">
                      <span>{item.company}</span>
                      <span className="flex items-center text-gray-400 font-semibold">
                        <Calendar className="w-3 h-3 mr-1" />
                        {item.period.split('—')[0].trim()}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Milestone Detail (Right column) */}
            <div className="lg:col-span-7">
              <motion.div
                key={activeWork.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h4 className="font-display text-xl font-bold text-white">{activeWork.role}</h4>
                    <span className="text-[#00C9A7] px-2.5 py-0.5 rounded-full bg-[#00C9A7]/10 text-xs font-mono">
                      {activeWork.period}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-xs text-[#415A77] font-mono mt-2 space-x-4">
                    <span className="font-semibold text-gray-300">{activeWork.company}</span>
                    <span className="flex items-center">
                      <MapPin className="w-3 w-3 mr-1 text-[#00C9A7]" />
                      {activeWork.location}
                    </span>
                  </div>
                </div>

                {/* Scope points */}
                <div className="space-y-3">
                  <h5 className="font-mono text-[10px] text-gray-500 uppercase tracking-widest font-bold">CORE SCOPE OF WORK</h5>
                  <ul className="space-y-2 text-sm text-gray-400 font-sans">
                    {activeWork.descriptionPoints.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#00C9A7] mr-2 text-base select-none leading-none">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key measurable outcomes */}
                <div className="space-y-3 pt-2">
                  <h5 className="font-mono text-[10px] text-gray-500 uppercase tracking-widest font-bold flex items-center">
                    <Award className="w-3.5 h-3.5 text-[#00C9A7] mr-1" />
                    MEASURABLE OUTCOMES & REVENUE GAINS
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {activeWork.keyAchievements.map((achievement, index) => (
                      <div key={index} className="bg-[#0D1B2A]/80 border border-[#1B263B]/60 p-3 rounded-lg flex flex-col justify-between">
                        <p className="text-xs text-gray-300 font-sans leading-relaxed">
                          {achievement}
                        </p>
                        <span className="text-[9px] font-mono text-[#00C9A7] uppercase tracking-wider font-semibold mt-2 block border-t border-[#1B263B]/40 pt-1">
                          Verified Metric ✓
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
