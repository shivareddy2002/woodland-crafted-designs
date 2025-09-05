import { Phone, MessageCircle, Calculator } from "lucide-react";
import { useState } from "react";

const FloatingButtons = () => {
  const [showTooltips, setShowTooltips] = useState(false);

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
        <a
          href="https://wa.me/919346493592"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
        <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Chat on WhatsApp
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
    </div>
  );
};

export default FloatingButtons;