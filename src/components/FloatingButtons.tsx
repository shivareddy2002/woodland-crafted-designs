import { Phone, MessageCircle, Calculator } from "lucide-react";
import { useState } from "react";
import WhatsAppChatModal from "@/components/WhatsAppChatModal";

const FloatingButtons = () => {
  const [showTooltips, setShowTooltips] = useState(false);
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);

  const scrollToQuote = () => {
    const quoteSection = document.getElementById('quote-generator');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-50">
      {/* WhatsApp Button */}
      <div className="relative group">
        {/* Notification Badge */}
        <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold z-10">
          1
        </div>
        
        {/* Main Button */}
        <button
          onClick={() => setIsWhatsAppModalOpen(true)}
          className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
        >
          <MessageCircle className="w-7 h-7" />
          
        </button>
        
        {/* Enhanced Tooltip */}
        <div className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
          <div className="font-semibold">💬 Chat with us!</div>
          <div className="text-xs opacity-90">Get instant support</div>
          {/* Arrow */}
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-l-8 border-l-primary border-t-4 border-b-4 border-t-transparent border-b-transparent"></div>
        </div>
      </div>

      {/* Phone Button */}
      <div className="relative group">
        <a
          href="tel:+919346493592"
          className="flex items-center justify-center w-14 h-14 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <Phone className="w-6 h-6" />
        </a>
        <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Call Now
        </div>
      </div>

      {/* Get Quote Button */}
      <div className="relative group">
        <button
          onClick={scrollToQuote}
          className="flex items-center justify-center w-14 h-14 bg-wood-accent hover:bg-wood-accent/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <Calculator className="w-6 h-6" />
        </button>
        <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Get Quote
        </div>
      </div>

      {/* WhatsApp Chat Modal */}
      <WhatsAppChatModal
        isOpen={isWhatsAppModalOpen}
        onClose={() => setIsWhatsAppModalOpen(false)}
      />
    </div>
  );
};

export default FloatingButtons;