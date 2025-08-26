import { Card, CardContent } from "@/components/ui/card";
import { Hammer, Home, Wrench, Palette, TreePine, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Hammer,
      title: "Custom Woodwork",
      description: "Bespoke furniture and fixtures tailored to your exact specifications and space requirements.",
    },
    {
      icon: Home,
      title: "Furnishing & Interiors",
      description: "Complete interior design solutions featuring premium wood elements and modern aesthetics.",
    },
    {
      icon: Wrench,
      title: "Installation & Maintenance",
      description: "Professional installation services and ongoing maintenance to ensure longevity of your wood products.",
    },
    {
      icon: Palette,
      title: "Design Consultation",
      description: "Expert design advice to help you choose the perfect wood solutions for your space and style.",
    },
    {
      icon: TreePine,
      title: "Sustainable Materials",
      description: "Eco-friendly wood sourcing with FSC-certified materials for environmentally conscious projects.",
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "Comprehensive warranty and quality assurance on all our wood products and installations.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-lg text-wood-dark max-w-2xl mx-auto">
            Comprehensive wood solutions from design conception to final installation and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group border-wood-medium hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-8 text-center bg-gradient-to-b from-card to-wood-light">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-4">
                  {service.title}
                </h3>
                
                <p className="text-wood-dark leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-wood-light to-wood-medium p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Ready to Transform Your Space?
            </h3>
            <p className="text-wood-dark mb-6">
              Contact us today for a free consultation and let's bring your wood design vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/919346493592"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 font-semibold"
              >
                WhatsApp: 9346493592
              </a>
              <a 
                href="mailto:lsgr0070@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-semibold"
              >
                Email: lsgr0070@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;