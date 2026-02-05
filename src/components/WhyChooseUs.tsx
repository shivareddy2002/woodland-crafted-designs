import { Card, CardContent } from "@/components/ui/card";
import { Hammer, TreePine, DollarSign, Award, Users, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const WhyChooseUs = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  const reasons = [
    {
      icon: Hammer,
      title: "Superior Craftsmanship",
      description: "Every piece is handcrafted with meticulous attention to detail by our skilled artisans.",
    },
    {
      icon: TreePine,
      title: "Sustainable Materials",
      description: "We use only FSC-certified sustainable wood materials that are environmentally responsible.",
    },
    {
      icon: DollarSign,
      title: "Competitive Pricing",
      description: "Premium quality at affordable prices with transparent pricing and no hidden costs.",
    },
    {
      icon: Award,
      title: "Design Excellence",
      description: "Award-winning designs that blend traditional craftsmanship with modern aesthetics.",
    },
    {
      icon: Users,
      title: "Customer-Centric",
      description: "Personalized service and custom solutions tailored to your unique requirements.",
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "Comprehensive warranty and quality assurance on all our products and services.",
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-wood-light" ref={sectionRef as React.RefObject<HTMLElement>}>
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className={cn(
          "text-center mb-16 transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {/* Discover the Beauty of Wood */}
            Excellence by IDL
          </h2>
          <p className={cn(
            "text-lg text-wood-dark max-w-3xl mx-auto transition-all duration-700 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )} style={{ transitionDelay: "150ms" }}>
            Experience the perfect blend of craftsmanship, sustainability, affordability, and design excellence. 
            We transform spaces with premium wood solutions that stand the test of time.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card 
              key={index}
              className={cn(
                "group border-wood-medium hover-lift hover-glow bg-gradient-to-b from-card to-background transition-all duration-500 ease-out",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-500">
                  <reason.icon className="w-10 h-10 text-primary icon-hover" />
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-4">
                  {reason.title}
                </h3>
                
                <p className="text-wood-dark leading-relaxed">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
