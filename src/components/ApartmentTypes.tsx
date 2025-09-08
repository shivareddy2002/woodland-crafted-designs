import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ApartmentDetailModal from "@/components/ApartmentDetailModal";
import apartment1bhk from "@/assets/1bhk-apartment.jpg";
import apartment2bhk from "@/assets/2bhk-apartment.jpg";
import apartment3bhk from "@/assets/3bhk-apartment.jpg";
import apartment4bhk from "@/assets/4bhk-apartment.jpg";
import apartment5bhk from "@/assets/5bhk-apartment.jpg";

const ApartmentTypes = () => {
  const [selectedApartment, setSelectedApartment] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const apartments = [
    {
      type: "1BHK Apartment",
      size: "700 sq.ft.",
      image: apartment1bhk,
      features: ["Compact design", "Smart storage", "Modern wood finishes", "Ideal for singles/couples"],
      button: "View 1BHK",
      bedrooms: 1,
      bathrooms: 1,
      halls: 1,
      kitchens: 1,
      balconies: 1,
      extraFeatures: ["Smart storage solutions"],
      highlights: ["Compact design", "Smart storage", "Modern wood finishes", "Ideal for singles/couples"],
      price: "₹200,000 onwards"
    },
    {
      type: "2BHK Apartment", 
      size: "1200 sq.ft.",
      image: apartment2bhk,
      features: ["Spacious layout", "Family-friendly", "Premium wood interiors", "Open kitchen concept"],
      button: "View 2BHK",
      bedrooms: 2,
      bathrooms: 2,
      halls: 1,
      kitchens: 1,
      balconies: 1,
      extraFeatures: ["Open kitchen concept"],
      highlights: ["Spacious layout", "Family-friendly", "Premium wood interiors", "Open kitchen concept"],
      price: "₹400,000 onwards"
    },
    {
      type: "3BHK Apartment",
      size: "1800 sq.ft.",
      image: apartment3bhk,
      features: ["Luxury living", "Multiple bedrooms", "Custom wood work", "Entertainment spaces"],
      button: "View 3BHK",
      bedrooms: 3,
      bathrooms: 2,
      halls: 1,
      kitchens: 1,
      balconies: 2,
      extraFeatures: ["Entertainment room", "Walk-in closet"],
      highlights: ["Luxury living", "Multiple bedrooms", "Custom wood work", "Entertainment spaces"],
      price: "₹600,000 onwards"
    },
    {
      type: "4BHK Apartment",
      size: "2400 sq.ft.",
      image: apartment4bhk,
      features: ["Premium interiors", "Master suite", "Study room", "Multiple storage areas"],
      button: "View 4BHK",
      bedrooms: 4,
      bathrooms: 3,
      halls: 1,
      kitchens: 1,
      balconies: 2,
      extraFeatures: ["Master suite", "Study room", "Walk-in closet"],
      highlights: ["Premium interiors", "Master suite", "Study room", "Multiple storage areas"],
      price: "₹800,000 onwards"
    },
    {
      type: "5BHK Apartment",
      size: "3000+ sq.ft.",
      image: apartment5bhk,
      features: ["Ultra-luxury", "Penthouse design", "Premium finishes", "Entertainment rooms"],
      button: "View 5BHK",
      bedrooms: 5,
      bathrooms: 4,
      halls: 2,
      kitchens: 1,
      balconies: 3,
      extraFeatures: ["Entertainment room", "Home theater", "Walk-in closet", "Terrace garden"],
      highlights: ["Ultra-luxury", "Penthouse design", "Premium finishes", "Entertainment rooms"],
      price: "₹1,200,000 onwards"
    },
  ];

  const handleViewApartment = (apartment: any) => {
    setSelectedApartment(apartment);
    setIsModalOpen(true);
  };

  return (
    <section id="apartments" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Apartment Solutions
          </h2>
          <p className="text-lg text-wood-dark max-w-2xl mx-auto">
            Complete wood furnishing solutions for apartments of all sizes. From compact 1BHK to luxurious 5BHK penthouses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {apartments.map((apartment, index) => (
            <Card 
              key={index}
              className="group overflow-hidden border-wood-medium hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
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
              
              <CardContent className="p-6 bg-gradient-to-b from-card to-wood-light flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {apartment.type}
                </h3>
                
                <ul className="space-y-2 mb-6 flex-grow">
                  {apartment.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-wood-dark">
                      <div className="w-2 h-2 bg-wood-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  onClick={() => handleViewApartment(apartment)}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 mt-auto"
                >
                  {apartment.button}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Apartment Detail Modal */}
        <ApartmentDetailModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          apartment={selectedApartment}
        />
      </div>
    </section>
  );
};

export default ApartmentTypes;