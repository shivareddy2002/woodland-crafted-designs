import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProductInquiryModal from "@/components/ProductInquiryModal";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import bedroomImage from "@/assets/bedroom-wood.jpg";
import workUnitsImage from "@/assets/work-units-wood.jpg";
import doorsWindowsImage from "@/assets/doors-windows-wood.jpg";
import modularKitchenImage from "@/assets/modular-kitchen.jpg";
import officeInteriorsImage from "@/assets/office-interiors.jpg";
import hotelsResortsImage from "@/assets/hotels-resorts.jpg";

const FeaturedProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  const products = [
    {
      title: "Bedroom Furniture",
      headline: "Elegant Bedrooms That Redefine Comfort",
      description: "Premium wardrobes, luxury bed frames, modern & traditional styles.",
      startingPrice: "₹30,000 onwards",
      highlights: ["Custom wardrobes", "Premium finishes", "Sustainable wood"],
      image: bedroomImage,
    },
    {
      title: "TV Units", 
      headline: "Functional Designs for Modern Living",
      description: "Modular TV units, Wooden dividers & workstations.",
      startingPrice: "₹25,000 onwards",
      highlights: ["Modular units", "Oak/walnut finishes", "Durable designs"],
      image: workUnitsImage,
    },
    {
      title: "Doors & Windows",
      headline: "Strong, Stylish, and Secure",
      description: "Handcrafted wooden doors & windows.",
      startingPrice: "₹15,000 onwards", 
      highlights: ["Premium hardwood", "Weather-resistant", "Customized"],
      image: doorsWindowsImage,
    },
    {
      title: "Modular Kitchens",
      headline: "Kitchens That Inspire Culinary Creativity",
      description: "Luxury modular kitchens, ergonomic layouts.",
      startingPrice: "₹80,000 onwards",
      highlights: ["Soft-close cabinets", "Water & heat resistant finishes"],
      image: modularKitchenImage,
    },
    {
      title: "Office Interiors",
      headline: "Inspiring Workspaces for Productivity", 
      description: "Ergonomic office interiors, executive cabins, conference rooms.",
      startingPrice: "₹1,20,000 onwards",
      highlights: ["Premium finishes", "Full setup solutions"],
      image: officeInteriorsImage,
    },
    {
      title: "Hotels & Resorts",
      headline: "Luxurious Hospitality Interiors",
      description: "Premium hotel lobbies, resort rooms, elegant reception areas.",
      startingPrice: "₹2,50,000 onwards",
      highlights: ["Luxury finishes", "Custom hospitality designs", "Premium wood"],
      image: hotelsResortsImage,
    },
  ];

  const handleEnquiryClick = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <section id="products" className="py-20 bg-wood-light" ref={sectionRef as React.RefObject<HTMLElement>}>
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className={cn(
          "text-center mb-16 transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Product Categories
          </h2>
          <p className={cn(
            "text-lg text-wood-dark max-w-2xl mx-auto transition-all duration-700 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )} style={{ transitionDelay: "150ms" }}>
            Discover our comprehensive range of premium wood products and solutions for every space and need.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className={cn(
                "group overflow-hidden border-wood-medium hover-lift hover-glow transition-all duration-500 ease-out flex flex-col h-full",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover image-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <CardContent className="p-6 bg-gradient-to-b from-card to-wood-light flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-primary mb-3">
                  {product.title}
                </h3>
                <p className="text-wood-dark mb-6 leading-relaxed flex-grow">
                  {product.description}
                </p>
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 mt-auto btn-premium"
                  onClick={() => handleEnquiryClick(product)}
                >
                  Enquiry
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <ProductInquiryModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          product={selectedProduct}
        />
      </div>
    </section>
  );
};

export default FeaturedProducts;
