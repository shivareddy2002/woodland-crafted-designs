import { useState } from "react";
import { MapPin, Quote, X, Award, Clock, Users } from "lucide-react";
import portfolioBedroomImage from "@/assets/portfolio-bedroom.jpg";
import portfolioKitchenImage from "@/assets/portfolio-kitchen.jpg";
import portfolioDoorsImage from "@/assets/portfolio-doors.jpg";
import portfolioCabinetsImage from "@/assets/portfolio-cabinets.jpg";
import portfolioOfficeImage from "@/assets/portfolio-office.jpg";
import portfolioApartmentImage from "@/assets/portfolio-apartment.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const portfolioData = {
    Bedroom: [
      {
        title: "Modern Oak-Finish Bedroom",
        image: portfolioBedroomImage,
        customer: "Mr. Ramesh",
        location: "Hyderabad",
        description: "A modern oak-finish bedroom with built-in wardrobes and ambient lighting. Designed for comfort and elegance with thoughtful space optimization.",
        materials: "Premium oak wood, brass handles, soft-close hinges",
        highlights: "Custom wardrobes, ambient LED lighting, premium oak finish",
        duration: "3 weeks",
        budget: "₹2.5 - 3 Lakhs",
        testimonial: "Absolutely loved the craftsmanship and attention to detail. The team understood our vision perfectly!",
      },
      {
        title: "Contemporary Master Suite",
        image: portfolioBedroomImage,
        customer: "Mrs. Divya",
        location: "Mumbai",
        description: "Luxurious master bedroom featuring a walk-in wardrobe, wall paneling, and integrated study area with modern aesthetics.",
        materials: "Walnut veneer, acrylic panels, LED strip lighting",
        highlights: "Walk-in wardrobe, wall paneling, study nook, smart lighting",
        duration: "4 weeks",
        budget: "₹4 - 5 Lakhs",
        testimonial: "Exceptional quality and design. Our bedroom has become the most beautiful space in our home.",
      },
      {
        title: "Kids' Room Transformation",
        image: portfolioBedroomImage,
        customer: "Mr. & Mrs. Patel",
        location: "Bengaluru",
        description: "Vibrant and functional kids' bedroom with bunk beds, study station, and ample storage for toys and books.",
        materials: "MDF with laminate finish, child-safe paints",
        highlights: "Custom bunk beds, study desk, toy storage, playful colors",
        duration: "2 weeks",
        budget: "₹1.5 - 2 Lakhs",
        testimonial: "Our kids absolutely love their new room! Safe, beautiful, and practical.",
      },
    ],
    Kitchen: [
      {
        title: "Modular Kitchen Design",
        image: portfolioKitchenImage,
        customer: "Mrs. Kavya",
        location: "Bengaluru",
        description: "A modular kitchen with matte white finish, quartz countertop, and soft-close drawers designed for modern cooking needs.",
        materials: "Marine plywood, quartz stone, stainless steel hardware",
        highlights: "Quartz countertop, soft-close drawers, matte white finish, chimney & hob",
        duration: "5 weeks",
        budget: "₹3.5 - 4.5 Lakhs",
        testimonial: "Our kitchen feels luxurious and practical — great work! Every detail was perfectly executed.",
      },
      {
        title: "L-Shaped Gourmet Kitchen",
        image: portfolioKitchenImage,
        customer: "Mr. Sanjay",
        location: "Pune",
        description: "Spacious L-shaped kitchen with granite countertops, tall units for storage, and a breakfast counter for casual dining.",
        materials: "BWP plywood, granite, aluminum profiles",
        highlights: "Breakfast counter, tall storage units, granite tops, pull-out baskets",
        duration: "4 weeks",
        budget: "₹3 - 3.8 Lakhs",
        testimonial: "The design maximized our space beautifully. Cooking is now a pleasure!",
      },
      {
        title: "Island Kitchen with Bar",
        image: portfolioKitchenImage,
        customer: "Dr. & Mrs. Reddy",
        location: "Hyderabad",
        description: "Premium island kitchen featuring a central workspace with bar seating, high-gloss cabinets, and modern appliances.",
        materials: "High-gloss acrylic, Corian countertop, premium fittings",
        highlights: "Central island, bar seating, high-gloss finish, wine storage",
        duration: "6 weeks",
        budget: "₹6 - 7 Lakhs",
        testimonial: "This kitchen has become the heart of our home. Absolutely stunning!",
      },
    ],
    Doors: [
      {
        title: "Custom Teakwood Main Door",
        image: portfolioDoorsImage,
        customer: "Mr. Prakash",
        location: "Chennai",
        description: "Custom teakwood main door with intricate carvings and polished finish for durability and charm, making a grand entrance statement.",
        materials: "Premium Burma teak, brass fittings, weather-resistant polish",
        highlights: "Intricate carvings, premium teakwood, weather-resistant finish, brass handles",
        duration: "2 weeks",
        budget: "₹80,000 - 1.2 Lakhs",
        testimonial: "The door transformed our home's entrance beautifully. Worth every penny!",
      },
      {
        title: "Modern Safety Door Set",
        image: portfolioDoorsImage,
        customer: "Mrs. Lakshmi",
        location: "Vizag",
        description: "Contemporary steel safety door with wooden finish, multi-point locking system, and elegant design for security and style.",
        materials: "Steel frame, teak veneer finish, SS locks",
        highlights: "Multi-point locks, teak veneer, powder coating, spy hole",
        duration: "1 week",
        budget: "₹45,000 - 60,000",
        testimonial: "Perfect blend of security and aesthetics. Very satisfied with the quality.",
      },
      {
        title: "Wooden Interior Door Collection",
        image: portfolioDoorsImage,
        customer: "Mr. Venkat",
        location: "Kadapa",
        description: "Complete set of interior doors in matching rosewood finish with modern panel designs for all bedrooms and bathrooms.",
        materials: "Rosewood veneer, engineered wood core",
        highlights: "Matching finish, panel designs, soft-close hinges, modern handles",
        duration: "3 weeks",
        budget: "₹1.2 - 1.8 Lakhs (8 doors)",
        testimonial: "All doors look cohesive and elegant. Great craftsmanship throughout.",
      },
    ],
    Cabinets: [
      {
        title: "Sleek Living Room Cabinets",
        image: portfolioCabinetsImage,
        customer: "Mrs. Ananya",
        location: "Pune",
        description: "Sleek living room cabinets with floating shelves and hidden lighting for a modern aesthetic that maximizes display space.",
        materials: "Laminated MDF, LED strips, glass inserts",
        highlights: "Floating shelves, hidden LED strips, space optimization, display sections",
        duration: "2.5 weeks",
        budget: "₹1.8 - 2.2 Lakhs",
        testimonial: "Perfectly blends style with functionality. Our guests always compliment it!",
      },
      {
        title: "TV Unit with Storage",
        image: portfolioCabinetsImage,
        customer: "Mr. Arun",
        location: "Chennai",
        description: "Modern TV unit with ample storage drawers, open shelves for devices, and integrated cable management for a clean look.",
        materials: "Plywood with walnut laminate, frosted glass",
        highlights: "TV mounting panel, cable management, drawers, open shelves",
        duration: "2 weeks",
        budget: "₹1.2 - 1.5 Lakhs",
        testimonial: "Clean design with excellent storage. No more messy cables!",
      },
      {
        title: "Crockery & Display Unit",
        image: portfolioCabinetsImage,
        customer: "Mrs. Priya",
        location: "Bengaluru",
        description: "Elegant crockery unit with glass shutters, interior lighting, and wine rack — perfect for dining room display and storage.",
        materials: "Teak finish plywood, toughened glass, LED lights",
        highlights: "Glass shutters, LED lighting, wine rack, pull-out trays",
        duration: "3 weeks",
        budget: "₹2 - 2.5 Lakhs",
        testimonial: "Beautiful showcase for our collection. Lighting adds such elegance!",
      },
    ],
    Office: [
      {
        title: "Corporate Workspace Interiors",
        image: portfolioOfficeImage,
        customer: "TechWave Pvt. Ltd.",
        location: "Hyderabad",
        description: "Workspace interiors designed for functionality and aesthetics — walnut panels and ergonomic furniture for enhanced productivity.",
        materials: "Walnut wood panels, ergonomic hardware, modular furniture",
        highlights: "Walnut wood panels, ergonomic design, cable management, storage units",
        duration: "8 weeks",
        budget: "₹12 - 15 Lakhs",
        testimonial: "Our team loves the new workspace ambiance. Productivity has noticeably improved!",
      },
      {
        title: "Home Office Setup",
        image: portfolioOfficeImage,
        customer: "Mr. Karthik",
        location: "Mumbai",
        description: "Compact yet functional home office with custom desk, bookshelves, and filing cabinets designed for remote work comfort.",
        materials: "Oak veneer, soft-close drawer slides",
        highlights: "L-shaped desk, wall-mounted shelves, filing cabinet, cable tray",
        duration: "2 weeks",
        budget: "₹1.5 - 2 Lakhs",
        testimonial: "Perfect workspace at home. Everything I need within reach!",
      },
      {
        title: "Executive Cabin Makeover",
        image: portfolioOfficeImage,
        customer: "Pinnacle Enterprises",
        location: "Bengaluru",
        description: "Luxurious executive cabin featuring a large conference desk, leather chairs, wood paneling, and built-in storage for a professional look.",
        materials: "Premium teak, leather upholstery, glass partitions",
        highlights: "Conference desk, wood paneling, built-in storage, ambient lighting",
        duration: "4 weeks",
        budget: "₹5 - 6.5 Lakhs",
        testimonial: "Impressive transformation! Our clients are always in awe of the cabin.",
      },
    ],
    Apartment: [
      {
        title: "Complete Apartment Interiors",
        image: portfolioApartmentImage,
        customer: "Mr. & Mrs. Sharma",
        location: "Vizag",
        description: "Complete apartment interiors — modern minimalist theme using sustainable wood and soft lighting across all rooms for cohesive living.",
        materials: "Sustainable engineered wood, eco-friendly paints, LED systems",
        highlights: "Sustainable materials, minimalist design, end-to-end execution, smart lighting",
        duration: "12 weeks",
        budget: "₹18 - 22 Lakhs (3 BHK)",
        testimonial: "Every room reflects our personality perfectly. Best decision we made for our home!",
      },
      {
        title: "Luxury Penthouse Interiors",
        image: portfolioApartmentImage,
        customer: "Mr. Rajesh",
        location: "Mumbai",
        description: "High-end penthouse with Italian marble flooring, premium woodwork, designer lighting, and luxury fittings throughout the residence.",
        materials: "Italian marble, teak wood, designer fixtures",
        highlights: "Italian marble, premium woodwork, designer lighting, imported fittings",
        duration: "16 weeks",
        budget: "₹35 - 40 Lakhs (4 BHK)",
        testimonial: "World-class execution. The attention to detail is remarkable!",
      },
      {
        title: "Cozy 2BHK Makeover",
        image: portfolioApartmentImage,
        customer: "Mrs. Swati",
        location: "Pune",
        description: "Smart space utilization for a compact 2BHK with multi-functional furniture, modular kitchen, and elegant bedroom wardrobes.",
        materials: "Laminated plywood, space-saving hardware",
        highlights: "Space optimization, modular furniture, smart storage, cohesive design",
        duration: "8 weeks",
        budget: "₹8 - 10 Lakhs",
        testimonial: "They made our small apartment feel spacious and beautiful. Highly recommend!",
      },
    ],
  };

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const categories = ["Bedroom", "Kitchen", "Doors", "Cabinets", "Office", "Apartment"];

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const closeCategoryView = () => {
    setSelectedCategory(null);
  };

  return (
    <>
      <section id="portfolio" className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Portfolio
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our showcase of completed projects featuring premium wood solutions and custom designs.
            </p>
          </div>

          {/* Category Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {categories.map((category) => (
              <Card
                key={category}
                onClick={() => handleCategoryClick(category)}
                className="group cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-border hover:border-primary bg-card"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-3">
                    {category === "Bedroom" && <Award className="w-12 h-12 mx-auto text-primary group-hover:scale-110 transition-transform" />}
                    {category === "Kitchen" && <Award className="w-12 h-12 mx-auto text-primary group-hover:scale-110 transition-transform" />}
                    {category === "Doors" && <Award className="w-12 h-12 mx-auto text-primary group-hover:scale-110 transition-transform" />}
                    {category === "Cabinets" && <Award className="w-12 h-12 mx-auto text-primary group-hover:scale-110 transition-transform" />}
                    {category === "Office" && <Award className="w-12 h-12 mx-auto text-primary group-hover:scale-110 transition-transform" />}
                    {category === "Apartment" && <Award className="w-12 h-12 mx-auto text-primary group-hover:scale-110 transition-transform" />}
                  </div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {category}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    {portfolioData[category as keyof typeof portfolioData].length} Projects
                  </p>
                  <Button variant="ghost" size="sm" className="mt-4 w-full">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>

      {/* Category Detail Modal */}
      <Dialog open={!!selectedCategory} onOpenChange={closeCategoryView}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle className="text-3xl font-bold text-primary">
                {selectedCategory} Projects
              </DialogTitle>
              <Button variant="ghost" size="icon" onClick={closeCategoryView}>
                <X className="w-5 h-5" />
              </Button>
            </div>
            <p className="text-muted-foreground mt-2">
              Explore our completed {selectedCategory?.toLowerCase()} projects with detailed customer information
            </p>
          </DialogHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {selectedCategory && portfolioData[selectedCategory as keyof typeof portfolioData]?.map((project, index) => (
              <Card
                key={index}
                onClick={() => handleProjectClick(project)}
                className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-border bg-card"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Badge className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm">
                    {project.duration}
                  </Badge>
                </div>

                <CardContent className="p-5 space-y-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span className="font-medium">{project.customer}</span>
                    <span>•</span>
                    <span>{project.location}</span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                    <Users className="w-4 h-4" />
                    <span>{project.budget}</span>
                  </div>

                  <Button variant="outline" size="sm" className="w-full mt-2">
                    View Full Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={closeModal}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-center justify-between">
                  <DialogTitle className="text-2xl md:text-3xl font-bold text-primary">
                    {selectedProject.title}
                  </DialogTitle>
                  <Button variant="ghost" size="icon" onClick={closeModal}>
                    <X className="w-5 h-5" />
                  </Button>
                </div>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-80 object-cover"
                  />
                </div>

                {/* Customer Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="bg-muted/50">
                    <CardContent className="p-4 flex items-center gap-3">
                      <Users className="w-8 h-8 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Customer</p>
                        <p className="font-semibold text-foreground">{selectedProject.customer}</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-muted/50">
                    <CardContent className="p-4 flex items-center gap-3">
                      <MapPin className="w-8 h-8 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Location</p>
                        <p className="font-semibold text-foreground">{selectedProject.location}</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-muted/50">
                    <CardContent className="p-4 flex items-center gap-3">
                      <Clock className="w-8 h-8 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Duration</p>
                        <p className="font-semibold text-foreground">{selectedProject.duration}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3">Project Overview</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Materials Used */}
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3">Materials Used</h3>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm text-foreground">{selectedProject.materials}</p>
                  </div>
                </div>

                {/* Project Highlights */}
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3">Project Highlights</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.highlights.split(", ").map((highlight: string, idx: number) => (
                      <Badge key={idx} variant="secondary" className="px-3 py-1">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3">Investment Range</h3>
                  <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-4 rounded-lg border border-primary/20">
                    <p className="text-xl font-bold text-primary">{selectedProject.budget}</p>
                  </div>
                </div>

                {/* Customer Testimonial */}
                <div className="bg-muted/50 p-6 rounded-lg relative border-l-4 border-primary">
                  <Quote className="w-8 h-8 text-primary/40 absolute top-4 right-4" />
                  <p className="text-base italic text-foreground mb-3 pr-10">
                    "{selectedProject.testimonial}"
                  </p>
                  <p className="text-sm font-semibold text-muted-foreground">
                    — {selectedProject.customer}, {selectedProject.location}
                  </p>
                </div>

                {/* CTA */}
                <div className="flex gap-4 pt-4">
                  <a href="#contact" className="flex-1">
                    <Button size="lg" className="w-full font-semibold">
                      Get Similar Design
                    </Button>
                  </a>
                  <a href="#quote-generator" className="flex-1">
                    <Button variant="outline" size="lg" className="w-full font-semibold">
                      Request Quote
                    </Button>
                  </a>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Portfolio;