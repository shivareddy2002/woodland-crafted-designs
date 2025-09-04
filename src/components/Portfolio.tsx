import { useState } from "react";
import portfolioBedroomImage from "@/assets/portfolio-bedroom.jpg";
import portfolioKitchenImage from "@/assets/portfolio-kitchen.jpg";
import portfolioDoorsImage from "@/assets/portfolio-doors.jpg";
import portfolioCabinetsImage from "@/assets/portfolio-cabinets.jpg";
import portfolioOfficeImage from "@/assets/portfolio-office.jpg";
import portfolioApartmentImage from "@/assets/portfolio-apartment.jpg";

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "Premium Bedroom Interior",
      category: "Bedroom",
      image: portfolioBedroomImage,
      description: "Custom wooden bedroom with elegant headboard and premium furniture",
    },
    {
      title: "Modern Kitchen Design",
      category: "Kitchen",
      image: portfolioKitchenImage,
      description: "Contemporary kitchen with premium wood cabinets and island",
    },
    {
      title: "Wooden Doors & Windows",
      category: "Doors",
      image: portfolioDoorsImage,
      description: "Premium wooden doors and window frames installation",
    },
    {
      title: "Storage Solutions",
      category: "Cabinets",
      image: portfolioCabinetsImage,
      description: "Custom wooden storage cabinets and shelving units",
    },
    {
      title: "Office Interiors",
      category: "Office",
      image: portfolioOfficeImage,
      description: "Professional wooden office furniture and interiors",
    },
    {
      title: "Apartment Design",
      category: "Apartment",
      image: portfolioApartmentImage,
      description: "Complete apartment interior with wooden elements",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Bedroom", "Kitchen", "Doors", "Cabinets", "Office", "Apartment"];

  const filteredItems = selectedCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Portfolio
          </h2>
          <p className="text-lg text-wood-dark max-w-2xl mx-auto">
            Explore our showcase of completed projects featuring premium wood solutions and custom designs.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-wood-light text-wood-dark hover:bg-wood-medium"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg border border-wood-medium hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="inline-block px-3 py-1 bg-wood-accent text-white text-sm rounded-full mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-wood-light to-wood-medium p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-wood-dark mb-6">
              Let's create something beautiful together. Contact us for a free consultation.
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-semibold"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;