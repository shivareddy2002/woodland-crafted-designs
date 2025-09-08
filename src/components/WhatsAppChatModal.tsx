import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Send, MessageCircle, User, Clock, Star, Phone } from "lucide-react";

interface WhatsAppChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WhatsAppChatModal = ({ isOpen, onClose }: WhatsAppChatModalProps) => {
  const [message, setMessage] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const quickReplies = [
    "🏠 I'm interested in apartment designs",
    "🪵 Tell me about wood furniture",
    "💰 I need a price estimate",
    "📞 I want to schedule a consultation",
    "📋 I have a specific requirement"
  ];

  const sendToWhatsApp = (text: string) => {
    const phoneNumber = "919346493592";
    const encodedMessage = encodeURIComponent(text || "Hi, I am interested in your services.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  const handleQuickReply = (reply: string) => {
    sendToWhatsApp(reply);
  };

  const handleSendMessage = () => {
    sendToWhatsApp(message);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md p-0 bg-background border-none shadow-2xl overflow-hidden rounded-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Customer Support</h3>
              <div className="flex items-center space-x-1 text-xs opacity-90">
                <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                <span>Online now</span>
              </div>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="hover:bg-white/20 p-2 rounded-full transition-colors duration-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Content */}
        <div className="p-6 space-y-4 max-h-[500px] overflow-y-auto">
          {/* Support Agent Info */}
          <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-wood-light to-wood-light/50 rounded-lg">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <p className="font-semibold text-wood-dark">IDL Support Team</p>
              <div className="flex items-center space-x-2 text-xs text-wood-dark/70">
                <Clock className="w-3 h-3" />
                <span>Typically replies in a few minutes</span>
              </div>
            </div>
          </div>

          {/* Welcome Message */}
          <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg border-l-4 border-green-500">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-wood-dark font-medium">
                  👋 <strong>Hi! How can we help you today?</strong>
                </p>
                <p className="text-sm text-wood-dark/80 mt-1">
                  We're here to assist with your wood interior needs!
                </p>
              </div>
            </div>
          </div>

          {/* Service Highlights */}
          <div className="bg-wood-light/30 p-4 rounded-lg">
            <h4 className="font-semibold text-wood-dark mb-2 flex items-center">
              <Star className="w-4 h-4 text-yellow-500 mr-2" />
              What we offer:
            </h4>
            <ul className="text-sm text-wood-dark/80 space-y-1">
              <li>• Premium wood interiors & furniture</li>
              <li>• Custom apartment designs</li>
              <li>• Free consultation & quotes</li>
              <li>• Expert installation service</li>
            </ul>
          </div>

          {/* Quick Reply Buttons */}
          <div className="space-y-2">
            <p className="text-sm text-wood-dark font-medium">Quick replies:</p>
            {quickReplies.map((reply, index) => (
              <Button
                key={index}
                onClick={() => handleQuickReply(reply)}
                variant="outline"
                className="w-full justify-start border-wood-medium hover:border-primary hover:bg-primary/5 text-wood-dark hover:text-primary"
              >
                {reply}
              </Button>
            ))}
          </div>

          {/* Message Input */}
          <div className="space-y-3 pt-4 border-t border-wood-light">
            <p className="text-sm text-wood-dark font-medium">Or type your message:</p>
            <div className="flex space-x-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message here..."
                className="flex-1 border-wood-medium focus:border-primary"
              />
              <Button
                onClick={handleSendMessage}
                className="bg-green-500 hover:bg-green-600 text-white px-4"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-4 rounded-lg border border-primary/20">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-wood-dark">Direct Call</span>
                </div>
                <p className="text-xs text-wood-dark/70">+91 93464 93592</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-wood-dark/70">Business Hours</p>
                <p className="text-xs font-medium text-wood-dark">9 AM - 7 PM</p>
              </div>
            </div>
          </div>

          {/* Info Text */}
          <p className="text-xs text-wood-dark/70 text-center">
            💬 Click any option above to start chatting on WhatsApp instantly!
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WhatsAppChatModal;