import { Card, CardContent } from "@/components/ui/card";
import { Hammer, TreePine, DollarSign, Award, Users, Shield } from "lucide-react";

const WhyChooseUs = () => {
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
    <section id="why-choose-us" className="py-20 bg-wood-light">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Discover the Beauty of Wood
          </h2>
          <p className="text-lg text-wood-dark max-w-3xl mx-auto">
            Experience the perfect blend of craftsmanship, sustainability, affordability, and design excellence. 
            We transform spaces with premium wood solutions that stand the test of time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card 
              key={index}
              className="group border-wood-medium hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-b from-card to-background"
            >
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-10 h-10 text-primary" />
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