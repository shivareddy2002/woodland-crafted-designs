import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const { ref: sectionRef, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Sent!",
      description: "We'll get back to you within 24 hours with a detailed quote.",
    });
    setFormData({ name: "", email: "", phone: "", project: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    { icon: Phone, title: "Phone", value: "+91 9555222567" },
    { icon: Mail, title: "Email", value: "indesignland@gmail.com" },
    { icon: MessageCircle, title: "WhatsApp", value: "Quick responses via WhatsApp" },
    { icon: MapPin, title: "Address", value: "Kadapa, Andhra Pradesh" },
  ];

  return (
    <section id="contact" className="py-20 bg-wood-light" ref={sectionRef as React.RefObject<HTMLElement>}>
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className={cn(
          "text-center mb-10 transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-3">
            Get In Touch
          </h2>
          <p className={cn(
            "text-lg text-wood-dark max-w-2xl mx-auto transition-all duration-700 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )} style={{ transitionDelay: "150ms" }}>
            Ready to start your wood project? Contact us for a personalized quote and consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Contact Information */}
          <div className={cn(
            "h-full transition-all duration-700 ease-out",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          )} style={{ transitionDelay: "300ms" }}>
            <Card className="border-wood-medium h-full hover-glow transition-all duration-500">
              <CardContent className="p-8 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-primary mb-3">Contact Information</h3>
                <div className="space-y-4 flex-grow">
                  {contactInfo.map((info, index) => (
                    <Card 
                      key={info.title}
                      className={cn(
                        "border-wood-medium hover-lift transition-all duration-500 ease-out",
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      )}
                      style={{ transitionDelay: `${400 + index * 100}ms` }}
                    >
                      <CardContent className="p-2 flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                          <info.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold text-primary">{info.title}</div>
                          <div className="text-wood-dark">{info.value}</div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Quick Contact Buttons */}
                <div className={cn(
                  "space-y-4 mt-4 transition-all duration-700 ease-out",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )} style={{ transitionDelay: "800ms" }}>
                  <h4 className="text-lg font-bold text-primary">Quick Contact</h4>
                  <div className="space-y-3">
                    <a 
                      href="https://wa.me/919555222567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300 font-semibold btn-premium"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Chat on WhatsApp
                    </a>
                    <a 
                      href="tel:+919555222567"
                      className="flex items-center justify-center w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold btn-premium"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quote Request Form */}
          <Card className={cn(
            "border-wood-medium h-full hover-glow transition-all duration-700 ease-out",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          )} style={{ transitionDelay: "400ms" }}>
            <CardContent className="p-8 h-full flex flex-col">
              <h3 className="text-2xl font-bold text-primary mb-6">Request a Quote</h3>
              <form onSubmit={handleSubmit} className="space-y-6 flex-grow flex flex-col">
                <div className="flex-grow space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className={cn(
                      "transition-all duration-500 ease-out",
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    )} style={{ transitionDelay: "500ms" }}>
                      <label className="block text-sm font-medium text-wood-dark mb-2">
                        Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="border-wood-medium focus:border-primary transition-all duration-300"
                      />
                    </div>
                    <div className={cn(
                      "transition-all duration-500 ease-out",
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    )} style={{ transitionDelay: "550ms" }}>
                      <label className="block text-sm font-medium text-wood-dark mb-2">
                        Phone *
                      </label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Your phone number"
                        required
                        className="border-wood-medium focus:border-primary transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className={cn(
                    "transition-all duration-500 ease-out",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )} style={{ transitionDelay: "600ms" }}>
                    <label className="block text-sm font-medium text-wood-dark mb-2">
                      Email *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="border-wood-medium focus:border-primary transition-all duration-300"
                    />
                  </div>

                  <div className={cn(
                    "transition-all duration-500 ease-out",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )} style={{ transitionDelay: "650ms" }}>
                    <label className="block text-sm font-medium text-wood-dark mb-2">
                      Project Type
                    </label>
                    <Input
                      name="project"
                      value={formData.project}
                      onChange={handleInputChange}
                      placeholder="e.g., Bedroom furniture, Kitchen cabinets, Office setup"
                      className="border-wood-medium focus:border-primary transition-all duration-300"
                    />
                  </div>

                  <div className={cn(
                    "transition-all duration-500 ease-out",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )} style={{ transitionDelay: "700ms" }}>
                    <label className="block text-sm font-medium text-wood-dark mb-2">
                      Project Details
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project requirements, timeline, and any specific preferences..."
                      rows={4}
                      className="border-wood-medium focus:border-primary transition-all duration-300"
                    />
                  </div>
                </div>

                <Button 
                  type="submit"
                  className={cn(
                    "w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 mt-auto btn-premium transition-all duration-500 ease-out",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )}
                  style={{ transitionDelay: "750ms" }}
                >
                  Send Quote Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
