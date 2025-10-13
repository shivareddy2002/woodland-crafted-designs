import { MapPin, Quote } from "lucide-react";
import portfolioBedroomImage from "@/assets/portfolio-bedroom.jpg";
import portfolioKitchenImage from "@/assets/portfolio-kitchen.jpg";
import portfolioDoorsImage from "@/assets/portfolio-doors.jpg";
import portfolioCabinetsImage from "@/assets/portfolio-cabinets.jpg";
import portfolioOfficeImage from "@/assets/portfolio-office.jpg";
import portfolioApartmentImage from "@/assets/portfolio-apartment.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const FeaturedCustomerProjects = () => {
  const featuredProjects = [
    {
      category: "Bedroom",
      icon: "🛏️",
      title: "Modern Oak-Finish Bedroom",
      customer: "Mr. Ramesh",
      location: "Hyderabad",
      image: portfolioBedroomImage,
      description:
        "A modern oak-finish bedroom with built-in wardrobes and ambient lighting. Designed for comfort and elegance.",
      materials: "Premium oak wood, brass handles, soft-close hinges",
      testimonial:
        "Absolutely loved the craftsmanship and attention to detail.",
    },
    {
      category: "Kitchen",
      icon: "🍳",
      title: "Modular Kitchen Design",
      customer: "Mrs. Kavya",
      location: "Bengaluru",
      image: portfolioKitchenImage,
      description:
        "A modular kitchen with matte white finish, quartz countertop, and soft-close drawers.",
      materials: "Marine plywood, quartz stone, stainless steel hardware",
      testimonial: "Our kitchen feels luxurious and practical — great work!",
    },
    {
      category: "Doors",
      icon: "🚪",
      title: "Custom Teakwood Main Door",
      customer: "Mr. Prakash",
      location: "Chennai",
      image: portfolioDoorsImage,
      description:
        "Custom teakwood main door with intricate carvings and polished finish for durability and charm.",
      materials: "Premium Burma teak, brass fittings, weather-resistant polish",
      testimonial: "The door transformed our home's entrance beautifully.",
    },
    {
      category: "Cabinets",
      icon: "🪞",
      title: "Sleek Living Room Cabinets",
      customer: "Mrs. Ananya",
      location: "Pune",
      image: portfolioCabinetsImage,
      description:
        "Sleek living room cabinets with floating shelves and hidden lighting.",
      materials: "Laminated MDF, LED strips, glass inserts",
      testimonial:
        "Perfectly blends style with functionality. Our guests always compliment it!",
    },
    {
      category: "Office",
      icon: "🏢",
      title: "Corporate Workspace Interiors",
      customer: "TechWave Pvt. Ltd.",
      location: "Hyderabad",
      image: portfolioOfficeImage,
      description:
        "Workspace interiors designed for functionality and aesthetics — walnut panels and ergonomic furniture.",
      materials: "Walnut wood panels, ergonomic hardware, modular furniture",
      testimonial:
        "Our team loves the new workspace ambiance. Productivity has noticeably improved!",
    },
    {
      category: "Apartment",
      icon: "🏠",
      title: "Complete Apartment Interiors",
      customer: "Mr. & Mrs. Sharma",
      location: "Vizag",
      image: portfolioApartmentImage,
      description:
        "Complete apartment interiors — modern minimalist theme using sustainable wood and soft lighting.",
      materials: "Sustainable engineered wood, eco-friendly paints, LED systems",
      testimonial:
        "Every room reflects our personality perfectly. Best decision we made for our home!",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Featured Customer Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from satisfied customers — showcasing our craftsmanship, dedication, and the beautiful spaces we've created together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-border bg-card"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Category Badge */}
                <Badge className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm text-sm font-semibold">
                  {project.icon} {project.category}
                </Badge>

                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-sm font-medium mb-1 opacity-90">Materials Used:</p>
                  <p className="text-xs opacity-80">{project.materials}</p>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Customer Info */}
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  <p className="text-sm font-semibold text-foreground">
                    {project.customer} – {project.location}
                  </p>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Testimonial */}
                <div className="bg-muted/50 rounded-lg p-4 border border-border">
                  <Quote className="w-5 h-5 text-primary mb-2" />
                  <p className="text-sm italic text-foreground">
                    "{project.testimonial}"
                  </p>
                  <p className="text-xs text-muted-foreground mt-2 font-medium">
                    — {project.customer}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-8 rounded-xl border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Want to See Your Project Featured Here?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join our growing family of satisfied customers. Let's transform your space into something extraordinary.
            </p>
            <a href="#contact">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Start Your Project Today
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCustomerProjects;
