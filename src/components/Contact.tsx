import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Calendar, CheckSquare, Clock, Globe, ArrowRight, CheckCircle2, Instagram, Copy, Check, ExternalLink, CalendarPlus, Download } from 'lucide-react';

interface ContactProps {
  preFilledService: string;
  clearPreFill: () => void;
}

export default function Contact({ preFilledService, clearPreFill }: ContactProps) {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: 'SGD 4,500 - 6,500',
    projectType: 'MarTech Audit',
    brief: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedStatus, setCopiedStatus] = useState(false);

  // Calendar Booking Mock State
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);

  // Pre-fill effect
  useEffect(() => {
    if (preFilledService) {
      // Find matching type
      let typeValue = 'MarTech Audit';
      const norm = preFilledService.toLowerCase();
      if (norm.includes('crm') || norm.includes('governance')) {
        typeValue = 'CRM Governance';
      } else if (norm.includes('lead') || norm.includes('automation')) {
        typeValue = 'AI Lead Automation';
      } else if (norm.includes('roadmap') || norm.includes('transformation')) {
        typeValue = 'Digital Roadmap';
      } else if (norm.includes('commerce') || norm.includes('shopify')) {
        typeValue = 'E-commerce Architecture';
      } else if (norm.includes('case') || norm.includes('real estate')) {
        typeValue = 'Case Setup Inquiry';
      }
      setFormData((prev) => ({ ...prev, projectType: typeValue }));
    }
  }, [preFilledService]);

  const generateMailtoLink = () => {
    const emailTo = 'verge.gamotan@gmail.com';
    const emailSubject = `Strategy Briefing Inquiry - ${formData.name} [${formData.projectType}]`;
    const emailBody = `Hi Verge,

I would like to schedule a strategy briefing with you. Here are my project parameter details:

- Name: ${formData.name}
- Email: ${formData.email}
- Targeted Area: ${formData.projectType}
- Monthly Budget: ${formData.budget}

Brief & System Painpoints:
${formData.brief}

Best regards,
${formData.name}`;
    return `mailto:${emailTo}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
  };

  const getGmailWebLink = () => {
    const emailTo = 'verge.gamotan@gmail.com';
    const emailSubject = `Strategy Briefing Inquiry - ${formData.name} [${formData.projectType}]`;
    const emailBody = `Hi Verge,

I would like to schedule a strategy briefing with you. Here are my project parameter details:

- Name: ${formData.name}
- Email: ${formData.email}
- Targeted Area: ${formData.projectType}
- Monthly Budget: ${formData.budget}

Brief & System Painpoints:
${formData.brief}

Best regards,
${formData.name}`;
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${emailTo}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
  };

  const handleCopyText = () => {
    const emailText = `Hi Verge,

I would like to schedule a strategy briefing with you. Here are my project parameter details:

- Name: ${formData.name}
- Email: ${formData.email}
- Targeted Area: ${formData.projectType}
- Monthly Budget: ${formData.budget}

Brief & System Painpoints:
${formData.brief}

Best regards,
${formData.name}`;
    navigator.clipboard.writeText(emailText);
    setCopiedStatus(true);
    setTimeout(() => setCopiedStatus(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name.trim() && formData.email.trim()) {
      setIsSubmitted(true);
      clearPreFill();
      // Instantly trigger default mail client popup
      window.location.href = generateMailtoLink();
    }
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      budget: 'SGD 4,500 - 6,500',
      projectType: 'MarTech Audit',
      brief: ''
    });
    setIsSubmitted(false);
  };

  // Calendar dates mock computation
  const baseDays = [
    { day: 15, name: 'Mon', label: 'June 15' },
    { day: 16, name: 'Tue', label: 'June 16' },
    { day: 17, name: 'Wed', label: 'June 17' },
    { day: 18, name: 'Thu', label: 'June 18' },
    { day: 19, name: 'Fri', label: 'June 19' }
  ];

  const availableHours = ['10:00 AM SGT', '11:30 AM SGT', '02:00 PM SGT', '03:30 PM SGT', '05:00 PM SGT'];

  const getGoogleCalendarLink = () => {
    if (selectedDay === null || !selectedTime) return '';
    
    const dayStr = `202606${selectedDay.toString().padStart(2, '0')}`;
    let hourStartStr = '100000';
    let hourEndStr = '101500';
    
    if (selectedTime.includes('10:00 AM')) {
      hourStartStr = '100000';
      hourEndStr = '101500';
    } else if (selectedTime.includes('11:30 AM')) {
      hourStartStr = '113000';
      hourEndStr = '114500';
    } else if (selectedTime.includes('02:00 PM')) {
      hourStartStr = '140000';
      hourEndStr = '141500';
    } else if (selectedTime.includes('03:30 PM')) {
      hourStartStr = '153000';
      hourEndStr = '154500';
    } else if (selectedTime.includes('05:00 PM')) {
      hourStartStr = '170000';
      hourEndStr = '171500';
    }
    
    const datesParam = `${dayStr}T${hourStartStr}/${dayStr}T${hourEndStr}`;
    const title = encodeURIComponent('MarTech & RevOps Strategy Briefing | Verge Gamotan');
    const details = encodeURIComponent('Introductory 15-minute briefing session to discuss customer engagement, CRM workflows, and MarTech optimization pipeline with Vergilio Jr Gamotan. Scheduled via Interactive Direct Scheduler on portfolio website.');
    const location = encodeURIComponent('Google Meet (Link will be updated in confirmation email)');
    
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${datesParam}&details=${details}&location=${location}&ctz=Asia/Singapore`;
  };

  const handleDownloadICS = () => {
    if (selectedDay === null || !selectedTime) return;
    
    const dayStr = `202606${selectedDay.toString().padStart(2, '0')}`;
    let hourStartStr = '100000';
    let hourEndStr = '101500';
    
    if (selectedTime.includes('10:00 AM')) {
      hourStartStr = '100000';
      hourEndStr = '101500';
    } else if (selectedTime.includes('11:30 AM')) {
      hourStartStr = '113000';
      hourEndStr = '114500';
    } else if (selectedTime.includes('02:00 PM')) {
      hourStartStr = '140000';
      hourEndStr = '141500';
    } else if (selectedTime.includes('03:30 PM')) {
      hourStartStr = '153000';
      hourEndStr = '154500';
    } else if (selectedTime.includes('05:00 PM')) {
      hourStartStr = '170000';
      hourEndStr = '171500';
    }
    
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Verge Gamotan//MarTech Consultant//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
SUMMARY:MarTech & RevOps Strategy Briefing | Verge Gamotan
DTSTART;TZID=Asia/Singapore:${dayStr}T${hourStartStr}
DTEND;TZID=Asia/Singapore:${dayStr}T${hourEndStr}
DESCRIPTION:Introductory 15-minute briefing session to discuss customer engagement, CRM workflows, and MarTech optimization pipeline with Vergilio Jr Gamotan.
LOCATION:Google Meet
STATUS:CONFIRMED
SEQUENCE:0
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `Verge_Gamotan_Strategy_Briefing_June_${selectedDay}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleConfirmReservation = () => {
    if (selectedDay !== null && selectedTime) {
      setIsBookingConfirmed(true);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0D1B2A] relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background shape */}
      <div className="absolute bottom-0 right-10 w-[450px] h-[450px] rounded-full bg-[#00C9A7]/5 blur-3xl pointer-events-none" />
      <div className="absolute top-10 left-10 w-[350px] h-[350px] rounded-full bg-[#1B263B]/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 text-[#00C9A7] font-mono text-xs uppercase tracking-widest font-semibold bg-[#1B263B]/50 px-3.5 py-1.5 rounded-full border border-[#00C9A7]/10">
            <Calendar className="w-3.5 h-3.5" />
            <span>Connect & Launch</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Schedule a Strategy Briefing
          </h2>
          <p className="text-gray-400 font-sans text-sm sm:text-base">
            No endless sales reps calls. Discuss your software bottlenecks directly with Vergilio Jr Gamotan. Choose a booking block or submit your business parameters below.
          </p>
        </div>

        {/* Dual Layout Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Form Card */}
          <div className="lg:col-span-6 bg-[#1B263B]/25 border border-[#1B263B]/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            
            {!isSubmitted ? (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <h3 className="font-display text-lg font-bold text-white mb-2">Project Parameter Intake</h3>
                  <p className="text-xs text-gray-400 font-sans">Submit your project details to formulate a custom solution proposal.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 font-bold">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      id="contact-form-name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Vergilio Jr Gamotan"
                      className="w-full bg-[#0D1B2A] border border-[#1B263B] focus:border-[#00C9A7] rounded-lg px-4 py-3 text-sm text-white focus:outline-none transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 font-bold">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      id="contact-form-email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@company.com"
                      className="w-full bg-[#0D1B2A] border border-[#1B263B] focus:border-[#00C9A7] rounded-lg px-4 py-3 text-sm text-white focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Budget Dropdown */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 font-bold">
                      Expected Monthly Budget
                    </label>
                    <select
                      id="contact-form-budget-select"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-[#0D1B2A] border border-[#1B263B] focus:border-[#00C9A7] rounded-lg px-4 py-3 text-sm text-white focus:outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option value="Under SGD 4,500">Under SGD 4,500 / mo</option>
                      <option value="SGD 4,500 - 6,500">SGD 4,500 - 6,500 / mo</option>
                      <option value="SGD 6,500 - 10,000">SGD 6,500 - 10,000 / mo</option>
                      <option value="Above SGD 10,000">Above SGD 10,000 / mo</option>
                    </select>
                  </div>

                  {/* Project Type Dropdown */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 font-bold">
                      Primary Target Area
                    </label>
                    <select
                      id="contact-form-project-type-select"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-[#0D1B2A] border border-[#1B263B] focus:border-[#00C9A7] rounded-lg px-4 py-3 text-sm text-white focus:outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option value="MarTech Audit">MarTech Stack Audit</option>
                      <option value="CRM Governance">CRM Implementation / Governance</option>
                      <option value="AI Lead Automation">AI Lead Automation</option>
                      <option value="Digital Roadmap">SME Digital Roadmap</option>
                      <option value="E-commerce Architecture">E-commerce Architecture</option>
                      <option value="Case Setup Inquiry">Case Study Blueprint Inquiry</option>
                    </select>
                  </div>
                </div>

                {/* Project Brief */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 font-bold">
                    Project Brief & System Painpoints
                  </label>
                  <textarea
                    rows={4}
                    id="contact-form-brief"
                    value={formData.brief}
                    onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                    placeholder="Describe your current CRM tools, workflow bottlenecks, and core target timeline..."
                    className="w-full bg-[#0D1B2A] border border-[#1B263B] focus:border-[#00C9A7] rounded-lg px-4 py-3 text-sm text-white focus:outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  id="contact-form-submit-btn"
                  className="w-full inline-flex items-center justify-center px-6 py-4 rounded-lg text-sm font-bold text-white bg-[#00C9A7] hover:bg-[#00b395] shadow-lg shadow-[#00C9A7]/10 hover:shadow-[#00C9A7]/30 transition-all cursor-pointer"
                >
                  Submit Inquiry Parameters
                  <ArrowRight className="ml-2 w-4 h-4 text-white" />
                </button>
              </form>
            ) : (
              /* Success intake block */
              <div className="space-y-6 text-center my-auto py-6">
                <div className="w-16 h-16 rounded-full bg-[#00C9A7]/15 flex items-center justify-center mx-auto border border-[#00C9A7]/30">
                  <CheckCircle2 className="w-8 h-8 text-[#00C9A7]" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-display text-xl font-bold text-white">Strategy Briefing Request Prepared</h3>
                  <p className="text-xs text-gray-300 font-sans max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Your briefing parameters regarding <strong className="text-white">{formData.projectType}</strong> (Budget: <strong className="text-[#00C9A7]">{formData.budget}</strong>) are ready.
                  </p>
                  <div className="bg-[#0D1B2A]/70 text-left p-4 rounded-xl border border-[#1B263B] text-xs font-mono text-gray-400 max-w-md mx-auto space-y-1">
                    <p className="text-[#00C9A7] text-[10px] font-bold uppercase tracking-wider">Email Subject Target:</p>
                    <p className="text-white truncate">Strategy Briefing Inquiry - {formData.name}</p>
                    <p className="text-[#00C9A7] text-[10px] font-bold uppercase tracking-wider mt-2">Brief Snippet:</p>
                    <p className="line-clamp-2 italic">"{formData.brief || 'No custom brief provided.'}"</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto pt-2">
                  {/* Option 1: Mailto client */}
                  <a
                    href={generateMailtoLink()}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold text-white bg-[#00C9A7] hover:bg-[#00b395] shadow-md transition-all cursor-pointer"
                  >
                    <Mail className="w-4 h-4" />
                    Launch Mail Client
                  </a>

                  {/* Option 2: Gmail Web */}
                  <a
                    href={getGmailWebLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold text-white bg-[#1B263B] hover:bg-[#1B263B]/80 border border-[#00C9A7]/30 hover:border-[#00C9A7] transition-all cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4 text-[#00C9A7]" />
                    Open in Gmail Web
                  </a>
                </div>

                {/* Option 3: Copy details */}
                <div className="flex flex-col items-center space-y-3 pt-1">
                  <button
                    type="button"
                    onClick={handleCopyText}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-white transition-colors cursor-pointer bg-[#0D1B2A] border border-[#1B263B] px-4 py-2 rounded-lg"
                  >
                    {copiedStatus ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#00C9A7]" />
                        <span className="text-[#00C9A7]">Parameters Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Email Text Outline</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={handleResetForm}
                    className="text-xs text-[#00C9A7] hover:underline font-mono"
                  >
                    ← Edit or submit parameters again
                  </button>
                </div>
              </div>
            )}

            {/* Quick Contact metadata links */}
            <div className="border-t border-[#415A77]/20 pt-6 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-2 text-xs font-mono text-gray-400">
                <Globe className="w-4 h-4 text-[#00C9A7]" />
                <span>Operating SGT (Singapore Local Time)</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <a
                  href="mailto:verge.gamotan@gmail.com"
                  className="p-2 bg-[#0D1B2A] border border-[#1B263B] text-gray-400 hover:text-[#00C9A7] hover:border-[#00C9A7]/40 rounded-lg transition-all shadow-md"
                  title="Direct Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com/in/vergegamotan"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-[#0D1B2A] border border-[#1B263B] text-gray-400 hover:text-[#00C9A7] hover:border-[#00C9A7]/40 rounded-lg transition-all shadow-md"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://www.tiktok.com/@pappiverge"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-[#0D1B2A] border border-[#1B263B] text-gray-400 hover:text-[#00C9A7] hover:border-[#00C9A7]/40 rounded-lg transition-all shadow-md group"
                  title="TikTok Channel"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 transition-transform group-hover:scale-110"
                  >
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/vergetalks"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-[#0D1B2A] border border-[#1B263B] text-gray-400 hover:text-[#00C9A7] hover:border-[#00C9A7]/40 rounded-lg transition-all shadow-md"
                  title="Instagram Profile"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Calendar Booking Container */}
          <div className="lg:col-span-6 bg-[#1B263B]/30 border border-[#1B263B]/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
            
            {!isBookingConfirmed ? (
              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-lg font-bold text-white flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-[#00C9A7]" />
                    Interactive Direct Scheduler
                  </h3>
                  <p className="text-xs text-gray-400 font-sans mt-1">Select a comfortable day and timeframe for an introductory briefing session.</p>
                </div>

                {/* SGT Timezone Notice Indicator */}
                <div className="bg-[#0D1B2A]/70 px-4 py-2.5 rounded-lg border border-[#1B263B]/60 text-xs font-mono text-gray-300 flex items-center">
                  <Globe className="w-4 h-4 text-[#00C9A7] mr-2 flex-shrink-0" />
                  <span>Times configured are aligned in Asia/Singapore (SGT)</span>
                </div>

                {/* Day selector grids */}
                <div className="space-y-2">
                  <span className="block text-[10px] font-mono text-gray-500 uppercase tracking-wider font-bold">1. CHOOSE WORK DAY (JUNE 2026)</span>
                  <div className="grid grid-cols-5 gap-2">
                    {baseDays.map((dayItem) => {
                      const isSelected = selectedDay === dayItem.day;
                      return (
                        <button
                          key={dayItem.day}
                          type="button"
                          id={`scheduler-day-${dayItem.day}`}
                          onClick={() => {
                            setSelectedDay(dayItem.day);
                            setSelectedTime(null); // Reset time when changing days
                          }}
                          className={`py-3.5 px-1 rounded-xl text-center border transition-all duration-300 cursor-pointer ${
                            isSelected
                              ? 'bg-[#00C9A7] text-white border-[#00C9A7] font-bold shadow-md shadow-[#00C9A7]/10'
                              : 'bg-[#0D1B2A] text-gray-400 border-[#1B263B] hover:border-[#415A77]/50 hover:text-white'
                          }`}
                        >
                          <span className="block text-xs font-mono uppercase tracking-wider opacity-60">{dayItem.name}</span>
                          <span className="block text-sm font-display font-black mt-1">{dayItem.day}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Hours selection grids */}
                <div className="space-y-2">
                  <span className="block text-[10px] font-mono text-gray-500 uppercase tracking-wider font-bold">2. CHOOSE AVAILABLE TIMECRONT *</span>
                  {selectedDay !== null ? (
                    <div className="grid grid-cols-2 gap-2">
                      {availableHours.map((hour) => {
                        const isSelected = selectedTime === hour;
                        return (
                          <button
                            key={hour}
                            type="button"
                            id={`scheduler-slot-${hour.replace(/SGT|\s+/g, '')}`}
                            onClick={() => setSelectedTime(hour)}
                            className={`py-2 rounded-lg text-xs font-mono transition-all duration-300 cursor-pointer text-center ${
                              isSelected
                                ? 'bg-[#00C9A7]/15 text-[#00C9A7] border-2 border-[#00C9A7]/90 font-bold'
                                : 'bg-[#0D1B2A] text-gray-300 border border-[#1B263B] hover:border-[#415A77]/40'
                            }`}
                          >
                            {hour}
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="bg-[#0D1B2A]/40 text-center py-6 text-xs text-gray-500 font-sans border border-[#1B263B] rounded-lg">
                      Please select a workday first to populate slots.
                    </div>
                  )}
                </div>

                {/* Booking confirmation execution button */}
                <button
                  type="button"
                  id="scheduler-confirm-booking-btn"
                  onClick={handleConfirmReservation}
                  disabled={selectedDay === null || !selectedTime}
                  className={`w-full inline-flex items-center justify-center px-5 py-3 rounded-lg text-sm font-bold shadow-md transition-all ${
                    selectedDay !== null && selectedTime
                      ? 'bg-gradient-to-r from-[#00C9A7] to-[#1B263B] text-white border border-[#00C9A7]/40 hover:border-[#00C9A7] cursor-pointer hover:shadow-lg'
                      : 'bg-[#1B263B]/20 text-gray-500 border border-transparent cursor-not-allowed'
                  }`}
                >
                  <CheckSquare className="mr-2 w-4 h-4 text-[#00C9A7]" />
                  <span>Confirm Selected Slot</span>
                </button>
              </div>
            ) : (
              /* Success verified scheduler panel */
              <div className="space-y-6 text-center my-auto py-8">
                <div className="w-16 h-16 rounded-full bg-[#00C9A7]/15 flex items-center justify-center mx-auto border border-[#00C9A7]/30">
                  <Clock className="w-8 h-8 text-[#00C9A7]" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-display text-xl font-bold text-white">Briefing Block Selected</h3>
                  <div className="bg-[#0D1B2A]/90 p-4 rounded-xl border border-[#1B263B] inline-block text-left space-y-1 mx-auto max-w-sm">
                    <p className="text-xs text-gray-400 font-mono">CONFIRMED MEETING BLOCK:</p>
                    <p className="text-sm font-display font-extrabold text-white">
                      {baseDays.find(d => d.day === selectedDay)?.name === 'Mon' ? 'Monday' : 
                       baseDays.find(d => d.day === selectedDay)?.name === 'Tue' ? 'Tuesday' : 
                       baseDays.find(d => d.day === selectedDay)?.name === 'Wed' ? 'Wednesday' : 
                       baseDays.find(d => d.day === selectedDay)?.name === 'Thu' ? 'Thursday' : 'Friday'}, June {selectedDay}, 2026 @ {selectedTime}
                    </p>
                    <p className="text-[10px] text-[#00C9A7] font-mono font-medium">Auto-synced SGT Singapore timezone ✓</p>
                  </div>
                  <p className="text-xs text-gray-400 font-sans max-w-sm mx-auto leading-relaxed mt-4">
                    Your interactive briefing is configured. Now create your calendar invite block using the direct sync shortcuts below:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto pt-2">
                  {/* Option 1: Google Calendar templates */}
                  <a
                    href={getGoogleCalendarLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold text-white bg-[#00C9A7] hover:bg-[#00b395] shadow-md transition-all cursor-pointer"
                  >
                    <CalendarPlus className="w-4 h-4" />
                    Add to Google Calendar
                  </a>

                  {/* Option 2: ICS Calendar file downloader */}
                  <button
                    type="button"
                    onClick={handleDownloadICS}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold text-white bg-[#1B263B] hover:bg-[#1B263B]/80 border border-[#00C9A7]/30 hover:border-[#00C9A7] transition-all cursor-pointer"
                  >
                    <Download className="w-4 h-4 text-[#00C9A7]" />
                    Download invite (.ics)
                  </button>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSelectedDay(null);
                      setSelectedTime(null);
                      setIsBookingConfirmed(false);
                    }}
                    className="text-xs text-[#00C9A7] hover:underline font-mono"
                  >
                    ← Book another time instead
                  </button>
                </div>
              </div>
            )}

            {/* Quick trust metrics panel */}
            <div className="border-t border-[#415A77]/20 pt-6 mt-8">
              <p className="text-[10px] font-mono text-gray-500 text-center uppercase tracking-wider font-semibold">
                ✓ Video briefs capped to 15 mins to maximize focus
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
