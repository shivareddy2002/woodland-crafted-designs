import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Send, MessageCircle, User } from "lucide-react";

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
    const phoneNumber = "919555222567";
    const encodedMessage = encodeURIComponent(text || "Hi, I am interested in your services.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    const a = document.createElement('a');
    a.href = whatsappUrl;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    document.body.appendChild(a);
    a.click();
    a.remove();
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
      <DialogContent className="max-w-md p-0 bg-white border-none shadow-2xl overflow-hidden rounded-2xl">
        <DialogHeader className="sr-only">
          <DialogTitle>WhatsApp Support</DialogTitle>
          <DialogDescription>Chat with us on WhatsApp</DialogDescription>
        </DialogHeader>
        {/* Header */}
        <div className="bg-green-500 text-white p-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="font-medium">WhatsApp Support</span>
          </div>
          <button 
            onClick={onClose}
            className="hover:bg-white/20 p-1 rounded-full transition-colors duration-200"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Chat Content */}
        <div className="p-6 space-y-6 bg-gray-50">
          {/* Welcome Message */}
          <div className="flex">
            <div className="bg-green-500 text-white px-4 py-2 rounded-2xl rounded-tl-md max-w-xs">
              <p className="text-sm">👋 Hi! How can we help?</p>
            </div>
          </div>

          {/* Quick Reply Buttons */}
          <div className="space-y-3">
            {quickReplies.map((reply, index) => (
              <Button
                key={index}
                onClick={() => handleQuickReply(reply)}
                variant="outline"
                className="w-full bg-white border-green-200 text-green-600 hover:bg-green-50 rounded-full"
              >
                {reply}
              </Button>
            ))}
          </div>

          {/* Message Input */}
          <div className="flex space-x-2 pt-4">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type here and press enter.."
              className="flex-1 rounded-full border-gray-200"
            />
            <Button
              onClick={handleSendMessage}
              size="icon"
              className="bg-green-500 hover:bg-green-600 text-white rounded-full"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WhatsAppChatModal;