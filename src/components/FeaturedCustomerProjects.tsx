import { MapPin, Quote, Eye, Clock, Award, CheckCircle2, Users } from "lucide-react";
import portfolioBedroomImage from "@/assets/portfolio-bedroom.jpg";
import portfolioKitchenImage from "@/assets/portfolio-kitchen.jpg";
import portfolioDoorsImage from "@/assets/portfolio-doors.jpg";
import portfolioCabinetsImage from "@/assets/portfolio-cabinets.jpg";
import portfolioOfficeImage from "@/assets/portfolio-office.jpg";
import portfolioApartmentImage from "@/assets/portfolio-apartment.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const FeaturedCustomerProjects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

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
      duration: "3 Weeks",
      budget: "₹2,50,000",
      projectHighlights: [
        "Custom-built wardrobes with optimized storage",
        "Ambient LED lighting with dimmer controls",
        "Premium oak finish with anti-scratch coating",
        "Soft-close mechanisms for all drawers",
        "Floating bedside tables with hidden charging ports"
      ],
      testimonial:
        "Absolutely loved the craftsmanship and attention to detail. The team was professional and completed everything on time.",
      detailedOverview: "Mr. Ramesh wanted a serene, modern bedroom that maximized storage without compromising aesthetics. We designed custom wardrobes that utilized every inch of space, incorporated ambient lighting for a cozy atmosphere, and chose premium oak for its timeless appeal and durability."
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
      duration: "4 Weeks",
      budget: "₹3,75,000",
      projectHighlights: [
        "Modular design with matte white finish",
        "Premium quartz countertops (20mm thick)",
        "Soft-close drawers and cabinets throughout",
        "Built-in pull-out pantry systems",
        "Integrated chimney and appliances",
        "Under-cabinet LED task lighting"
      ],
      testimonial: "Our kitchen feels luxurious and practical — great work! The storage solutions are brilliant.",
      detailedOverview: "Mrs. Kavya's kitchen transformation focused on functionality and elegance. We created a modular layout that optimized workflow, used durable marine plywood for moisture resistance, and installed premium quartz countertops that combine beauty with practicality."
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
      duration: "2 Weeks",
      budget: "₹85,000",
      projectHighlights: [
        "Hand-carved traditional patterns",
        "Premium Burma teak wood",
        "Weather-resistant multi-coat polish",
        "Solid brass door fittings and handles",
        "Reinforced frame for enhanced security",
        "Custom size to fit existing entrance"
      ],
      testimonial: "The door transformed our home's entrance beautifully. The craftsmanship is exceptional!",
      detailedOverview: "Mr. Prakash wanted a grand entrance that reflected traditional aesthetics while providing modern durability. We sourced premium Burma teak, hand-carved intricate patterns, and applied weather-resistant finishes to ensure the door withstands Chennai's coastal climate."
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
      duration: "2.5 Weeks",
      budget: "₹1,80,000",
      projectHighlights: [
        "Wall-mounted floating design",
        "Hidden LED strip lighting",
        "Tempered glass display sections",
        "Handleless push-to-open mechanisms",
        "Integrated cable management",
        "Custom color-matched laminate finish"
      ],
      testimonial:
        "Perfectly blends style with functionality. Our guests always compliment it! The hidden lighting is gorgeous.",
      detailedOverview: "Mrs. Ananya's living room needed sophisticated storage that didn't overwhelm the space. We designed floating cabinets with hidden LED lighting to create an airy, modern look, incorporated glass displays for showcasing decor, and ensured cable management for electronics."
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
      duration: "6 Weeks",
      budget: "₹12,50,000",
      projectHighlights: [
        "Walnut wood accent walls and panels",
        "Modular workstation setup for 25+ employees",
        "Ergonomic chairs and adjustable desks",
        "Acoustic ceiling panels for noise reduction",
        "Dedicated meeting rooms with glass partitions",
        "Collaborative breakout zones",
        "Cable management and power outlets at every desk"
      ],
      testimonial:
        "Our team loves the new workspace ambiance. Productivity has noticeably improved! The design is both professional and welcoming.",
      detailedOverview: "TechWave needed a workspace that inspired creativity while maintaining professionalism. We incorporated walnut panels for warmth, designed modular workstations for flexibility, added acoustic treatments for better focus, and created collaborative zones to foster teamwork."
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
      duration: "8 Weeks",
      budget: "₹8,50,000",
      projectHighlights: [
        "Full 3BHK apartment transformation",
        "Sustainable and eco-friendly materials throughout",
        "Modern minimalist design theme",
        "Custom wardrobes in all bedrooms",
        "Modular kitchen with breakfast counter",
        "False ceiling with ambient lighting",
        "Automated lighting and curtain systems",
        "Built-in entertainment units"
      ],
      testimonial:
        "Every room reflects our personality perfectly. Best decision we made for our home! The eco-friendly approach was exactly what we wanted.",
      detailedOverview: "The Sharmas wanted a complete home makeover that aligned with their minimalist lifestyle and environmental values. We designed every space—from bedrooms to kitchen to living areas—using sustainable materials, incorporated smart lighting systems, and created cohesive aesthetics throughout the apartment."
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
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-border bg-card cursor-pointer"
              onClick={() => setSelectedProject(project)}
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

                {/* View Details Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Button variant="secondary" size="lg" className="font-semibold shadow-lg">
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Customer Info */}
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  <p className="text-sm font-semibold text-foreground">
                    {project.customer} • {project.location}
                  </p>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Details Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                    <span>{selectedProject.icon}</span>
                    {selectedProject.title}
                  </DialogTitle>
                </DialogHeader>

                <div className="space-y-6">
                  {/* Project Image */}
                  <div className="relative rounded-lg overflow-hidden">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-96 object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary text-lg px-4 py-2">
                      {selectedProject.category}
                    </Badge>
                  </div>

                  {/* Customer & Location Info */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                      <Users className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Customer</p>
                        <p className="font-semibold">{selectedProject.customer}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                      <MapPin className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Location</p>
                        <p className="font-semibold">{selectedProject.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                      <Clock className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Duration</p>
                        <p className="font-semibold">{selectedProject.duration}</p>
                      </div>
                    </div>
                  </div>

                  {/* Project Overview */}
                  <div>
                    <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <Award className="w-5 h-5 text-primary" />
                      Project Overview
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.detailedOverview}
                    </p>
                  </div>

                  {/* Materials Used */}
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Materials Used</h4>
                    <p className="text-muted-foreground">{selectedProject.materials}</p>
                  </div>

                  {/* Project Highlights */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Project Highlights</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {selectedProject.projectHighlights.map((highlight: string, idx: number) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <p className="text-sm text-muted-foreground">{highlight}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Budget */}
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <p className="text-sm text-muted-foreground mb-1">Project Investment</p>
                    <p className="text-2xl font-bold text-primary">{selectedProject.budget}</p>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-muted/50 rounded-lg p-6 border border-border">
                    <Quote className="w-8 h-8 text-primary mb-3" />
                    <p className="text-base italic text-foreground mb-3">
                      "{selectedProject.testimonial}"
                    </p>
                    <p className="text-sm text-muted-foreground font-medium">
                      — {selectedProject.customer}, {selectedProject.location}
                    </p>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <a href="#contact" className="flex-1">
                      <Button className="w-full" size="lg">
                        Start Similar Project
                      </Button>
                    </a>
                    <a href="#quote-generator" className="flex-1">
                      <Button variant="outline" className="w-full" size="lg">
                        Get Free Quote
                      </Button>
                    </a>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

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
