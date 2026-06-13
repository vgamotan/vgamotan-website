import { MessageSquare, PhoneCall } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappUrl = 'https://wa.me/6590286434?text=Hi%20Verge%2C%20I%20saw%20your%20MarTech%20%26%20RevOps%20portfolio%20and%20would%20love%20to%20discuss%20a%20CRM%20system%20audit%20for%20my%20SME.';

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-2 pointer-events-none">
      
      {/* Alert bubble prompt */}
      <div className="bg-[#1B263B] text-white text-[11px] font-medium font-sans px-3.5 py-1.5 rounded-full shadow-2xl border border-[#00C9A7]/30 transition-all duration-300 transform translate-y-0 opacity-90 animate-infinite pointer-events-auto hover:opacity-100 flex items-center space-x-1.5 self-end">
        <span className="w-1.5 h-1.5 rounded-full bg-[#00C9A7] animate-ping" />
        <span className="text-gray-300">Singapore SME Support Online</span>
      </div>

      {/* Floating Emerald WhatsApp Icon button */}
      <a
        id="floating-whatsapp-trigger"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba56] text-white rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/40 border border-white/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 pointer-events-auto group relative cursor-pointer"
        title="Chat with Verge on WhatsApp"
      >
        <span className="sr-only">Chat on WhatsApp</span>
        <MessageSquare className="w-6 h-6 text-white group-hover:scale-95 transition-transform" />
        
        {/* Pulsing ring animation */}
        <span className="absolute -inset-1 rounded-full border-2 border-[#25D366]/40 animate-ping opacity-60 pointer-events-none" />
      </a>
    </div>
  );
}
