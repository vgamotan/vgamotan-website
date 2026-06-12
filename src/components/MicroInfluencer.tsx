import { motion } from 'motion/react';
import { Sparkles, Calendar, Share2, Award, Zap, ExternalLink } from 'lucide-react';
import { influencerData } from '../data';

export default function MicroInfluencer() {
  return (
    <section id="influencer" className="py-24 bg-[#0D1B2A] relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Decorative Warm Accent Ambient Shapes */}
      <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-orange-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[#00C9A7]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading with Editorial visual vibe */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 text-orange-400 font-mono text-xs uppercase tracking-widest font-semibold bg-orange-400/10 px-3.5 py-1.5 rounded-full border border-orange-400/20">
            <Sparkles className="w-3 h-3 text-orange-400" />
            <span>Creative Projects & Media</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Micro-Influencer Work & Dev Advocacy
          </h2>
          <p className="text-gray-400 font-sans text-sm sm:text-base">
            Behind the analytics spreadsheets is a human who speaks code, templates, and content. I produce practical guides and lead local conversations regarding no-code tools and automated workflows.
          </p>
        </div>

        {/* Global stats section with an editorial card styling */}
        <div className="bg-gradient-to-r from-orange-500/10 to-[#1B263B]/20 border border-orange-500/20 rounded-2xl p-6 sm:p-8 mb-12 shadow-xl grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
          <div className="text-center md:text-left md:border-r border-[#415A77]/20 w-full md:pr-8 last:border-0 last:pr-0">
            <span className="block font-mono text-[10px] text-[#415A77] uppercase tracking-widest font-bold">TOTAL REACH AUDIENCE</span>
            <span className="block text-3xl sm:text-4xl font-display font-black text-white mt-1">36K+</span>
            <p className="text-xs text-gray-400 mt-2 font-sans">Combined professional audience spanning TikTok, Instagram, Substack, and tech networks.</p>
          </div>
          <div className="text-center md:text-left md:border-r border-[#415A77]/20 w-full md:pr-8 last:border-0 last:pr-0">
            <span className="block font-mono text-[10px] text-[#415A77] uppercase tracking-widest font-bold font-semibold">CONTENT IMPRESSIONS</span>
            <span className="block text-3xl sm:text-4xl font-display font-black text-orange-400 mt-1">45K / mo</span>
            <p className="text-xs text-gray-400 mt-2 font-sans">Organic analytics walkthroughs and productivity hacks published monthly.</p>
          </div>
          <div className="text-center md:text-left w-full">
            <span className="block font-mono text-[10px] text-[#415A77] uppercase tracking-widest font-semibold font-bold">FOUNDER CIRCLE CLOUT</span>
            <span className="block text-3xl sm:text-4xl font-display font-black text-white mt-1">3.2K+</span>
            <p className="text-xs text-gray-400 mt-2 font-sans">Active active SME owners reading regular optimization tips on Substack.</p>
          </div>
        </div>

        {/* Editorial Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {influencerData.map((project, index) => {
            return (
              <motion.article
                key={project.id}
                id={`influencer-project-card-${project.id}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-[#1B263B]/25 border border-[#1B263B]/80 hover:border-orange-500/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative group overflow-hidden ${project.url ? 'hover:bg-[#1B263B]/45 hover:-translate-y-1 cursor-pointer' : ''}`}
              >
                {/* Clickable Overlay for social channels */}
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-10"
                    aria-label={`Visit ${project.title}`}
                  />
                )}

                {/* Tech Line Highlights */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-orange-400/5 to-transparent pointer-events-none rounded-tr-2xl" />

                <div className="space-y-4">
                  {/* Category Pill and Platform info */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-mono font-bold text-orange-400 tracking-wider bg-orange-400/15 px-2.5 py-0.5 rounded-full border border-orange-400/10">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-mono text-[#415A77] flex items-center gap-1.5">
                      {project.platform}
                      {project.url && <ExternalLink className="w-3 h-3 text-orange-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />}
                    </span>
                  </div>

                  {/* Stat highlight styled with warmer colors */}
                  <div className="bg-[#0D1B2A]/70 px-4 py-3 rounded-lg border border-orange-400/10 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-gray-400 font-bold">KEY STATISTIC:</span>
                    <span className="font-display text-sm font-extrabold text-orange-400">
                      {project.reachStat}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-base sm:text-lg font-bold text-white tracking-tight leading-snug group-hover:text-orange-400 transition-colors duration-200">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Footer Brand Info */}
                <div className="mt-8 pt-4 border-t border-[#415A77]/10 flex items-center justify-between text-xs font-mono text-gray-400">
                  <span className="flex items-center text-gray-400 font-semibold text-[11px]">
                    <Award className="w-3.5 h-3.5 mr-1.5 text-orange-400" />
                    {project.brandName}
                  </span>
                  <span className="flex items-center text-[10px]">
                    <Calendar className="w-3 w-3 mr-1" />
                    {project.date}
                  </span>
                </div>

              </motion.article>
            );
          })}
        </div>

        {/* Brand partners snippet */}
        <div className="mt-16 text-center border-t border-[#1B263B]/40 pt-8 max-w-xl mx-auto space-y-2">
          <p className="font-mono text-[9px] uppercase tracking-widest text-[#415A77] font-semibold">
            AVAILABLE FOR CAMPAIGNS, WORKSHOPS AND CONTENT DEPLOYMENTS
          </p>
          <p className="text-xs text-gray-400 font-sans">
            Need a technical creator who can translate complex automations into high-converting stories for regional founders? Let's talk about sponsored videos or newsletter integrations.
          </p>
        </div>

      </div>
    </section>
  );
}
