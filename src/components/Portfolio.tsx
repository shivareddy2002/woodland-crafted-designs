import { useState } from "react";
import { MapPin, Quote } from "lucide-react";
import portfolioBedroomImage from "@/assets/portfolio-bedroom.jpg";
import portfolioKitchenImage from "@/assets/portfolio-kitchen.jpg";
import portfolioDoorsImage from "@/assets/portfolio-doors.jpg";
import portfolioCabinetsImage from "@/assets/portfolio-cabinets.jpg";
import portfolioOfficeImage from "@/assets/portfolio-office.jpg";
import portfolioApartmentImage from "@/assets/portfolio-apartment.jpg";
import { Card, CardContent } from "@/components/ui/card";

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "Modern Oak-Finish Bedroom",
      category: "Bedroom",
      image: portfolioBedroomImage,
      customer: "Mr. Ramesh",
      location: "Hyderabad",
      description: "A modern oak-finish bedroom with built-in wardrobes and ambient lighting. Designed for comfort and elegance.",
      highlights: "Custom wardrobes, ambient LED lighting, premium oak finish",
      testimonial: "Absolutely loved the craftsmanship and attention to detail.",
    },
    {
      title: "Modular Kitchen Design",
      category: "Kitchen",
      image: portfolioKitchenImage,
      customer: "Mrs. Kavya",
      location: "Bengaluru",
      description: "A modular kitchen with matte white finish, quartz countertop, and soft-close drawers.",
      highlights: "Quartz countertop, soft-close drawers, matte white finish",
      testimonial: "Our kitchen feels luxurious and practical — great work!",
    },
    {
      title: "Custom Teakwood Main Door",
      category: "Doors",
      image: portfolioDoorsImage,
      customer: "Mr. Prakash",
      location: "Chennai",
      description: "Custom teakwood main door with intricate carvings and polished finish for durability and charm.",
      highlights: "Intricate carvings, premium teakwood, weather-resistant finish",
      testimonial: "The door transformed our home's entrance beautifully.",
    },
    {
      title: "Sleek Living Room Cabinets",
      category: "Cabinets",
      image: portfolioCabinetsImage,
      customer: "Mrs. Ananya",
      location: "Pune",
      description: "Sleek living room cabinets with floating shelves and hidden lighting for a modern aesthetic.",
      highlights: "Floating shelves, hidden LED strips, space optimization",
      testimonial: "Perfectly blends style with functionality.",
    },
    {
      title: "Corporate Workspace Interiors",
      category: "Office",
      image: portfolioOfficeImage,
      customer: "TechWave Pvt. Ltd.",
      location: "Hyderabad",
      description: "Workspace interiors designed for functionality and aesthetics — walnut panels and ergonomic furniture.",
      highlights: "Walnut wood panels, ergonomic design, cable management",
      testimonial: "Our team loves the new workspace ambiance.",
    },
    {
      title: "Complete Apartment Interiors",
      category: "Apartment",
      image: portfolioApartmentImage,
      customer: "Mr. & Mrs. Sharma",
      location: "Vizag",
      description: "Complete apartment interiors — modern minimalist theme using sustainable wood and soft lighting.",
      highlights: "Sustainable materials, minimalist design, end-to-end execution",
      testimonial: "Every room reflects our personality perfectly.",
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
            <Card 
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-border bg-card"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={`${item.title} - ${item.customer}, ${item.location}`}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className="inline-block px-4 py-1.5 bg-primary/90 backdrop-blur-sm text-primary-foreground text-sm font-medium rounded-full shadow-lg">
                    {item.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <MapPin className="w-4 h-4" />
                    <span className="font-medium">{item.customer}</span>
                    <span>•</span>
                    <span>{item.location}</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-2 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-2 font-medium">Project Highlights:</p>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {item.highlights}
                  </p>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg relative">
                  <Quote className="w-5 h-5 text-primary/40 absolute top-3 left-3" />
                  <p className="text-sm italic text-foreground/90 pl-6">
                    "{item.testimonial}"
                  </p>
                  <p className="text-xs text-muted-foreground mt-2 pl-6">
                    — {item.customer}
                  </p>
                </div>
              </CardContent>
            </Card>
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