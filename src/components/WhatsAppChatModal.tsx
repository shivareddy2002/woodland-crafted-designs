import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Send, MessageCircle } from "lucide-react";

interface WhatsAppChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WhatsAppChatModal = ({ isOpen, onClose }: WhatsAppChatModalProps) => {
  const [message, setMessage] = useState("");

  const quickReplies = [
    "I have a question",
    "Tell me more"
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
      <DialogContent className="max-w-md p-0 bg-background border-none shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-green-500 text-white p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <MessageCircle className="w-6 h-6" />
            <h3 className="font-semibold text-lg">WhatsApp Support</h3>
          </div>
          <button 
            onClick={onClose}
            className="hover:bg-green-600 p-1 rounded-full transition-colors duration-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Content */}
        <div className="p-6 space-y-4">
          {/* Welcome Message */}
          <div className="bg-wood-light p-4 rounded-lg">
            <p className="text-wood-dark">
              👋 <strong>Hi! How can we help?</strong>
            </p>
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

          {/* Info Text */}
          <p className="text-xs text-wood-dark/70 text-center">
            This will redirect you to WhatsApp to continue the conversation.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WhatsAppChatModal;