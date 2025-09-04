import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import bedroomImage from "@/assets/bedroom-wood.jpg";
import workUnitsImage from "@/assets/work-units-wood.jpg";
import doorsWindowsImage from "@/assets/doors-windows-wood.jpg";

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

        {/* Additional Product Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-card p-6 rounded-lg border border-wood-medium hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-bold text-primary mb-3">Modular Kitchens</h3>
            <p className="text-wood-dark mb-4">Contemporary kitchen solutions with premium wood cabinets and custom designs.</p>
            <button className="text-primary hover:text-primary/80 font-semibold">Inquire →</button>
          </div>
          <div className="bg-card p-6 rounded-lg border border-wood-medium hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-bold text-primary mb-3">Office Interiors</h3>
            <p className="text-wood-dark mb-4">Professional workspace solutions with elegant wooden furniture and storage.</p>
            <button className="text-primary hover:text-primary/80 font-semibold">Inquire →</button>
          </div>
          <div className="bg-card p-6 rounded-lg border border-wood-medium hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-bold text-primary mb-3">Apartments</h3>
            <p className="text-wood-dark mb-4">Complete apartment solutions: 1BHK, 2BHK, and 3BHK interior designs.</p>
            <button className="text-primary hover:text-primary/80 font-semibold">View Options →</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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