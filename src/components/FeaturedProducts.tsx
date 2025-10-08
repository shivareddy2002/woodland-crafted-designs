import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProductInquiryModal from "@/components/ProductInquiryModal";
import bedroomImage from "@/assets/bedroom-wood.jpg";
import workUnitsImage from "@/assets/work-units-wood.jpg";
import doorsWindowsImage from "@/assets/doors-windows-wood.jpg";
import modularKitchenImage from "@/assets/modular-kitchen.jpg";
import officeInteriorsImage from "@/assets/office-interiors.jpg";

const FeaturedProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
  ];

  const handleEnquiryClick = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <section id="products" className="py-20 bg-wood-light">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Product Categories
          </h2>
          <p className="text-lg text-wood-dark max-w-2xl mx-auto">
            Discover our comprehensive range of premium wood products and solutions for every space and need.
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden border-wood-medium hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200 mt-auto"
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