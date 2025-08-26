import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import apartment1bhk from "@/assets/1bhk-apartment.jpg";
import apartment2bhk from "@/assets/2bhk-apartment.jpg";
import apartment3bhk from "@/assets/3bhk-apartment.jpg";

const ApartmentTypes = () => {
  const apartments = [
    {
      type: "1BHK Apartment",
      size: "700 sq.ft.",
      image: apartment1bhk,
      features: ["Compact design", "Smart storage", "Modern wood finishes", "Ideal for singles/couples"],
      button: "View 1BHK",
    },
    {
      type: "2BHK Apartment", 
      size: "1200 sq.ft.",
      image: apartment2bhk,
      features: ["Spacious layout", "Family-friendly", "Premium wood interiors", "Open kitchen concept"],
      button: "View 2BHK",
    },
    {
      type: "3BHK Apartment",
      size: "1800 sq.ft.",
      image: apartment3bhk,
      features: ["Luxury living", "Multiple bedrooms", "Custom wood work", "Entertainment spaces"],
      button: "View 3BHK",
    },
  ];

  return (
    <section id="apartments" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Apartment Solutions
          </h2>
          <p className="text-lg text-wood-dark max-w-2xl mx-auto">
            Complete wood furnishing solutions for apartments of all sizes. From compact 1BHK to spacious 3BHK layouts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {apartments.map((apartment, index) => (
            <Card 
              key={index}
              className="group overflow-hidden border-wood-medium hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={apartment.image}
                  alt={apartment.type}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full font-semibold text-sm">
                  {apartment.size}
                </div>
              </div>
              
              <CardContent className="p-6 bg-gradient-to-b from-card to-wood-light">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {apartment.type}
                </h3>
                
                <ul className="space-y-2 mb-6">
                  {apartment.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-wood-dark">
                      <div className="w-2 h-2 bg-wood-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3"
                >
                  {apartment.button}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApartmentTypes;