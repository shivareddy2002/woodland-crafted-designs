import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import bedroomImage from "@/assets/bedroom-wood.jpg";
import workUnitsImage from "@/assets/work-units-wood.jpg";
import doorsWindowsImage from "@/assets/doors-windows-wood.jpg";
import modularKitchenImage from "@/assets/modular-kitchen.jpg";
import officeInteriorsImage from "@/assets/office-interiors.jpg";

const FeaturedProducts = () => {
  const products = [
    {
      title: "Bedroom Furniture",
      description: "Transform your bedroom into a luxurious retreat with our premium wood furniture. Custom-crafted headboards, nightstands, and wardrobes that combine comfort with elegance.",
      image: bedroomImage,
    },
    {
      title: "Work Units, TV Units & Dividers",
      description: "Modern entertainment centers and workspace solutions. Our functional designs maximize space while maintaining the natural beauty of wood.",
      image: workUnitsImage,
    },
    {
      title: "Doors & Windows",
      description: "Premium wooden doors and window frames that enhance your home's security and aesthetic appeal. Weather-resistant and built to last.",
      image: doorsWindowsImage,
    },
    {
      title: "Modular Kitchens",
      description: "Contemporary kitchen designs with smart storage solutions and premium wood cabinets. Functional layouts that enhance your culinary experience.",
      image: modularKitchenImage,
    },
    {
      title: "Office Interiors",
      description: "Professional workspace designs with elegant wood finishes. Create productive environments with our custom office furniture and storage solutions.",
      image: officeInteriorsImage,
    },
  ];

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

        {/* Apartment Solutions */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-primary text-center mb-8">Apartment Solutions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-card p-6 rounded-lg border border-wood-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <h4 className="text-lg font-bold text-primary mb-2">1BHK</h4>
              <p className="text-wood-dark text-sm mb-3">Complete interior solution for 1 bedroom apartments</p>
              <Button variant="outline" size="sm" className="w-full">Inquire</Button>
            </div>
            <div className="bg-card p-6 rounded-lg border border-wood-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <h4 className="text-lg font-bold text-primary mb-2">2BHK</h4>
              <p className="text-wood-dark text-sm mb-3">Comprehensive furnishing for 2 bedroom homes</p>
              <Button variant="outline" size="sm" className="w-full">Inquire</Button>
            </div>
            <div className="bg-card p-6 rounded-lg border border-wood-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <h4 className="text-lg font-bold text-primary mb-2">3BHK</h4>
              <p className="text-wood-dark text-sm mb-3">Luxury interior design for spacious apartments</p>
              <Button variant="outline" size="sm" className="w-full">Inquire</Button>
            </div>
            <div className="bg-card p-6 rounded-lg border border-wood-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <h4 className="text-lg font-bold text-primary mb-2">4BHK</h4>
              <p className="text-wood-dark text-sm mb-3">Premium solutions for large homes</p>
              <Button variant="outline" size="sm" className="w-full">Inquire</Button>
            </div>
            <div className="bg-card p-6 rounded-lg border border-wood-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <h4 className="text-lg font-bold text-primary mb-2">5BHK</h4>
              <p className="text-wood-dark text-sm mb-3">Ultra-luxury penthouse interiors</p>
              <Button variant="outline" size="sm" className="w-full">Inquire</Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden border-wood-medium hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-6 bg-gradient-to-b from-card to-wood-light">
                <h3 className="text-xl font-bold text-primary mb-3">
                  {product.title}
                </h3>
                <p className="text-wood-dark mb-6 leading-relaxed">
                  {product.description}
                </p>
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                >
                  Inquire
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;