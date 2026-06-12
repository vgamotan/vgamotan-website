import { Download, Award, GraduationCap, CheckCircle2 } from 'lucide-react';
import { careerData, skillsData } from '../data';

export default function Resume() {
  const handlePrint = () => {
    // Elegant fallback simulation - but better, let's open prompt or trigger print of window.
    window.print();
  };

  const certifications = [
    'Zoho CRM Certified Administrator',
    'Zendesk Support Solutions Specialist',
    'HubSpot Certified Inbound Architect',
    'ActiveCampaign Advanced Partner Certification',
    'Google Analytics 4 (GA4) Advanced Individual Qualification',
    'Meta Certified Lead Capture Operations'
  ];

  return (
    <section id="resume" className="py-24 bg-[#1B263B]/10 relative overflow-hidden px-4 sm:px-6 lg:px-8 border-y border-[#1B263B]/20">
      
      {/* Background shape */}
      <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] bg-teal-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center space-x-2 text-[#00C9A7] font-mono text-xs uppercase tracking-widest font-semibold bg-[#1B263B]/50 px-3.5 py-1.5 rounded-full border border-[#00C9A7]/10">
              <Award className="w-3.5 h-3.5" />
              <span>Full Professional CV</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Interactive Resume Model
            </h2>
            <p className="text-gray-400 font-sans text-sm sm:text-base">
              A comprehensive view of my technical competencies, work history, and industry leadership certified credentials.
            </p>
          </div>

          <div>
            <button
              id="resume-download-pdf-btn"
              onClick={handlePrint}
              className="inline-flex items-center px-5 py-3 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-[#00C9A7] to-[#1B263B] border border-[#00C9A7]/40 hover:border-[#00C9A7] hover:shadow-lg hover:shadow-[#00C9A7]/10 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Download className="mr-2 w-4 h-4 text-[#00C9A7]" />
              Download / Print CV PDF
            </button>
          </div>
        </div>

        {/* Printable/Print-Optimized CV Sheet Layout */}
        <div id="printable-resume-box" className="bg-[#1B263B]/25 border border-[#1B263B]/80 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden print:bg-white print:text-black print:border-none print:p-0">
          
          {/* Accent decoration inside digital resume */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#00C9A7]/5 to-transparent pointer-events-none" />

          {/* Resume Header */}
          <div className="border-b border-[#415A77]/20 pb-8 mb-8 flex flex-col md:flex-row md:justify-between md:items-start gap-6 print:border-black/10">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white print:text-black">
                Vergilio Jr Gamotan
              </h3>
              <p className="font-mono text-sm text-[#00C9A7] uppercase tracking-wider font-semibold mt-1 print:text-[#00C9A7]">
                Senior RevOps Architect & MarTech Consultant ("Verge")
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-400 mt-3 font-mono print:text-black/70">
                <span>📍 Singapore & Malaysia operations</span>
                <span>✉️ verge.gamotan@gmail.com</span>
                <span>💼 SGD 4,500 – 6,500 / month Target Role Span</span>
              </div>
            </div>

            <div className="text-left md:text-right font-mono text-[10px] uppercase text-[#415A77] border-l-2 md:border-l-0 md:border-r-2 border-[#00C9A7] pl-3 md:pl-0 md:pr-3 py-1 print:border-black">
              <span className="block font-bold">15+ Years Domain Experience</span>
              <span className="block text-gray-500 mt-1">Specialized in SME Automations</span>
            </div>
          </div>

          {/* Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 print:grid-cols-1 print:gap-6">
            
            {/* Left Main Column: Work History & Timeline */}
            <div className="lg:col-span-8 space-y-8">
              <div>
                <h4 className="font-display text-lg font-bold text-white mb-6 border-b border-[#415A77]/15 pb-2 print:text-black print:border-black/10 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-[#00C9A7]" />
                  Work Experience
                </h4>

                <div className="space-y-8 relative before:absolute before:top-4 before:bottom-4 before:left-3 before:w-0.5 before:bg-[#1B263B]/60 print:before:bg-black/10">
                  {careerData.map((job) => (
                    <div key={job.id} className="relative pl-8 group">
                      {/* Timeline dot */}
                      <span className="absolute left-1.5 top-2.5 w-3.5 h-3.5 rounded-full border-2 border-[#00C9A7] bg-[#0D1B2A] group-hover:bg-[#00C9A7] transition-all duration-300" />
                      
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-0.5">
                          <h5 className="font-display text-base font-bold text-white print:text-black group-hover:text-[#00C9A7] transition-colors">
                            {job.role}
                          </h5>
                          <span className="text-xs font-mono text-[#00C9A7] font-semibold">
                            {job.period}
                          </span>
                        </div>

                        <div className="flex items-center justify-between text-xs text-gray-500 font-mono">
                          <span className="text-gray-300 font-medium print:text-black/80">{job.company}</span>
                          <span className="text-gray-500">{job.location}</span>
                        </div>

                        <ul className="list-disc pl-4 space-y-1 text-xs text-gray-400 font-sans leading-relaxed print:text-black/70">
                          {job.descriptionPoints.map((pt, index) => (
                            <li key={index}>{pt}</li>
                          ))}
                        </ul>

                        <div className="pt-2">
                          <span className="block font-mono text-[9px] text-[#415A77] uppercase tracking-wider font-bold mb-1.5">
                            KEY CRITICAL METRICS HIT:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {job.keyAchievements.map((ach, index) => (
                              <span
                                key={index}
                                className="text-[10px] font-sans text-gray-400 bg-[#0D1B2A]/90 px-2.5 py-1 rounded border border-[#1B263B]/60 print:bg-black/5 print:text-black print:border-black/10"
                              >
                                {ach}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side Column: Technical Skills Matrix & Certs */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Skills Matrix */}
              <div>
                <h4 className="font-display text-lg font-bold text-white mb-6 border-b border-[#415A77]/15 pb-2 print:text-black print:border-black/10 flex items-center">
                  <span className="text-[#00C9A7] mr-1.5">•</span>
                  Skills Matrix
                </h4>

                <div className="space-y-6">
                  {skillsData.map((category) => (
                    <div key={category.category} className="space-y-2.5">
                      <span className="block font-mono text-[10px] text-[#415A77] uppercase tracking-wider font-bold">
                        {category.category}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {category.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-xs bg-[#1B263B]/60 hover:bg-[#1B263B] border border-[#1B263B] hover:border-[#00C9A7]/40 text-gray-300 px-3 py-1.5 rounded-lg font-medium transition-all duration-300 print:bg-black/5 print:text-black print:border-none"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications and achievements list */}
              <div className="pt-2">
                <h4 className="font-display text-lg font-bold text-white mb-6 border-b border-[#415A77]/15 pb-2 print:text-black print:border-black/10 flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2 text-[#00C9A7]" />
                  Industry Credentials
                </h4>

                <div className="space-y-3 font-sans text-xs">
                  {certifications.map((cert) => (
                    <div key={cert} className="flex items-start bg-[#0D1B2A]/70 p-3 rounded-lg border border-[#1B263B]/60 print:bg-black/5 print:border-black/10">
                      <CheckCircle2 className="w-4 h-4 text-[#00C9A7] mr-2.5 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 font-medium leading-tight print:text-black">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
