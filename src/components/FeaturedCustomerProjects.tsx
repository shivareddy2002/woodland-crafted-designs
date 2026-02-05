import { MapPin, Quote, Eye, Clock, Award, CheckCircle2, Users } from "lucide-react";

// Main project hero images
import hero2BHKRameshImage from "@/assets/hero-2bhk-ramesh.jpg";
import hero3BHKShivaImage from "@/assets/hero-3bhk-shiva.jpg";
import heroOfficeTechWaveImage from "@/assets/hero-office-techwave.jpg";
import heroGuesthouseKarthikImage from "@/assets/hero-guesthouse-karthik.jpg";
import heroHotelKavyaImage from "@/assets/hero-hotel-kavya.jpg";
import heroPenthouseKalyaniImage from "@/assets/hero-penthouse-kalyani.jpg";

// Project 1 - Mr. Naresh 2BHK
import bedroomRameshImage from "@/assets/bedroom-ramesh.jpg";
import bathroomRameshImage from "@/assets/bathroom-ramesh.jpg";
import livingRameshImage from "@/assets/living-ramesh.jpg";
import kitchenRameshImage from "@/assets/kitchen-ramesh.jpg";

// Project 2 - Mrs. Subhashini 3BHK
import masterBedroomShivaImage from "@/assets/master-bedroom-shiva.jpg";
import kidsBedroomShivaImage from "@/assets/kids-bedroom-shiva.jpg";
import bathroomShivaImage from "@/assets/bathroom-shiva.jpg";
import livingShivaImage from "@/assets/living-shiva.jpg";
import kitchenShivaImage from "@/assets/kitchen-shiva.jpg";

// Project 3 - Mr. Sanjay Office
import receptionOfficeImage from "@/assets/reception-office.jpg";
import workstationsOfficeImage from "@/assets/workstations-office.jpg";
import meetingOfficeImage from "@/assets/meeting-office.jpg";
import refreshmentOfficeImage from "@/assets/refreshment-office.jpg";

// Project 4 - Mr. Karthik Guesthouse
import receptionGuesthouseImage from "@/assets/reception-guesthouse.jpg";
import guestroomsGuesthouseImage from "@/assets/guestrooms-guesthouse.jpg";
import diningGuesthouseImage from "@/assets/dining-guesthouse.jpg";
import outdoorGuesthouseImage from "@/assets/outdoor-guesthouse.jpg";

// Project 5 - Mrs. Kavya Hotel
import receptionHotelImage from "@/assets/reception-hotel.jpg";
import guestroomsHotelImage from "@/assets/guestrooms-hotel.jpg";
import diningHotelImage from "@/assets/dining-hotel.jpg";
import serviceHotelImage from "@/assets/service-hotel.jpg";
import safetyHotelImage from "@/assets/safety-hotel.jpg";

// Project 6 - Mrs. Kalyani Penthouse
import livingPenthouseImage from "@/assets/living-penthouse.jpg";
import bedroomsPenthouseImage from "@/assets/bedrooms-penthouse.jpg";
import kitchenPenthouseImage from "@/assets/kitchen-penthouse.jpg";
import terracePenthouseImage from "@/assets/terrace-penthouse.jpg";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { useState } from "react";

const FeaturedCustomerProjects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  const featuredProjects = [
    {
      category: "2BHK Home",
      icon: "🛏️",
      title: "Mr. Naresh — 2BHK Home Interiors",
      customer: "Mr. Naresh",
      location: "Hyderabad",
      image: hero2BHKRameshImage,
      description: "Elegant 2BHK featuring two bedrooms, two bathrooms, a modern living room, and modular kitchen — designed with teak wood finish and subtle lighting.",
      duration: "2 Months",
      // budget: "₹5,50,000",
      testimonial: "Absolutely loved the craftsmanship and attention to detail. The team was professional and completed everything on time.",
      detailedOverview: "Mr. Naresh wanted a complete 2BHK transformation that combined modern aesthetics with traditional warmth. We designed each space with premium teakwood finishes, incorporated smart storage solutions, and created a cohesive flow throughout the home.",
      subSections: [
        {
          name: "Bedroom",
          image: bedroomRameshImage,
          description: "Crafted with premium teakwood and cozy interiors for restful comfort. Features custom-built wardrobes with optimized storage, ambient LED lighting with dimmer controls, and premium oak finish with anti-scratch coating."
        },
        {
          name: "Bathroom",
          image: bathroomRameshImage,
          description: "Functional and elegant with waterproof wooden finishes. Modern bathroom featuring wooden vanity, glass shower area, and contemporary fixtures that blend luxury with durability."
        },
        {
          name: "Living Room",
          image: livingRameshImage,
          description: "Designed for gatherings with soft ambient light and modern furniture. Open hall with wooden TV unit and seating area creates a welcoming atmosphere for family and guests."
        },
        {
          name: "Kitchen",
          image: kitchenRameshImage,
          description: "Ergonomic design with soft-close cabinets and quartz countertop. Modular kitchen in matte white & wood tones offers the perfect blend of style and functionality."
        }
      ]
    },
    {
      category: "3BHK Home",
      icon: "🏠",
      title: "Mrs. Subhashini — 3BHK Premium Residence",
      customer: "Mrs. Subhashini",
      location: "Hyderabad",
      image: hero3BHKShivaImage,
      description: "Spacious 3BHK with three bedrooms, three bathrooms, a luxurious hall, and an advanced modular kitchen.",
      duration: "3 Months",
      // budget: "₹8,75,000",
      testimonial: "The transformation exceeded our expectations. Every detail was thoughtfully designed and expertly executed.",
      detailedOverview: "Mrs. Subhashini's 3BHK residence was designed to reflect modern luxury while maintaining family-friendly functionality. We incorporated elegant wooden flooring, contemporary lighting solutions, and created dedicated spaces for each family member.",
      subSections: [
        {
          name: "Master Bedroom",
          image: masterBedroomShivaImage,
          description: "Modern aesthetics with ample wardrobe space. Elegant wooden flooring with panel lighting creates a sophisticated retreat with optimized storage solutions."
        },
        {
          name: "Kids Bedroom",
          image: kidsBedroomShivaImage,
          description: "Vibrant wooden textures with playful decor. A fun and functional space designed to inspire creativity while providing practical storage and study areas."
        },
        {
          name: "Bathroom",
          image: bathroomShivaImage,
          description: "Minimalistic and modern wood-tile combination. Contemporary design featuring clean lines, premium fixtures, and elegant finishes."
        },
        {
          name: "Living Room",
          image: livingShivaImage,
          description: "Family-friendly layout with entertainment setup. Spacious area designed for relaxation and gatherings with modern wooden furniture and ambient lighting."
        },
        {
          name: "Kitchen",
          image: kitchenShivaImage,
          description: "Smart storage and breakfast counter setup. Advanced modular kitchen with innovative organization systems and contemporary design elements."
        }
      ]
    },
    // {
    //   category: "Office",
    //   icon: "🏢",
    //   title: "Mr. Sanjay — Office Interiors (TechWave Pvt. Ltd.)",
    //   customer: "TechWave Pvt. Ltd.",
    //   location: "Hyderabad",
    //   image: heroOfficeTechWaveImage,
    //   description: "Corporate workspace with reception, ergonomic workstations, meeting rooms, and refreshment zone.",
    //   duration: "10 Weeks",
    //   budget: "₹15,50,000",
    //   testimonial: "Our team loves the new workspace ambiance. Productivity has noticeably improved! The design is both professional and welcoming.",
    //   detailedOverview: "TechWave needed a modern office that fostered collaboration while maintaining professionalism. We designed ergonomic workstations, created acoustic solutions for better focus, and incorporated branded elements throughout the space.",
    //   subSections: [
    //     {
    //       name: "Reception",
    //       image: receptionOfficeImage,
    //       description: "Sleek wood-paneled front desk and wall branding. Creates a powerful first impression with professional elegance and welcoming ambiance."
    //     },
    //     {
    //       name: "Workstations",
    //       image: workstationsOfficeImage,
    //       description: "Modular desks with wooden partitions. Designed for optimal productivity with ergonomic features and efficient space utilization for the team."
    //     },
    //     {
    //       name: "Meeting Room",
    //       image: meetingOfficeImage,
    //       description: "Teakwood conference table and acoustic panels. Professional space designed for productive meetings with modern technology integration."
    //     },
    //     {
    //       name: "Refreshment Zone",
    //       image: refreshmentOfficeImage,
    //       description: "Compact pantry with warm wooden finishes. A comfortable break area that promotes team bonding and relaxation."
    //     }
    //   ]
    // },
    {
      category: "Guesthouse",
      icon: "🏡",
      title: "Mr. Karthik — Guesthouse Project",
      customer: "Mr. Karthik",
      location: "Chennai",
      image: heroGuesthouseKarthikImage,
      description: "Designed for comfort and hospitality — reception, guest rooms, dining, parking, and outdoor areas.",
      duration: "3 Months",
      // budget: "₹12,25,000",
      testimonial: "The guesthouse has become a favorite retreat for our guests. The wooden accents create a warm, inviting atmosphere.",
      detailedOverview: "Mr. Karthik's guesthouse was designed with hospitality at its core. We created welcoming spaces using polished wood paneling, ensured comfort in every guest room, and integrated indoor and outdoor areas seamlessly.",
      subSections: [
        {
          name: "Reception",
          image: receptionGuesthouseImage,
          description: "Elegant welcome area with polished wood paneling. Sets the tone for a memorable stay with sophisticated design and warm hospitality."
        },
        {
          name: "Guest Rooms",
          image: guestroomsGuesthouseImage,
          description: "Cozy interiors with wardrobe and bedside lighting. Each room designed for comfort and relaxation with thoughtful amenities."
        },
        {
          name: "Dining Area",
          image: diningGuesthouseImage,
          description: "Family-style wooden dining setup. Spacious and inviting space perfect for shared meals and memorable gatherings."
        },
        {
          name: "Outdoor",
          image: outdoorGuesthouseImage,
          description: "Relaxation area with garden seating and wooden railing. Peaceful outdoor space designed to connect with nature."
        }
      ]
    },
    // {
    //   category: "Hotel",
    //   icon: "🏨",
    //   title: "Mrs. Kavya — Hotel Interiors",
    //   customer: "Mrs. Kavya",
    //   location: "Bengaluru",
    //   image: heroHotelKavyaImage,
    //   description: "Full hotel interior design — from reception to service zones with elegant wood decor.",
    //   duration: "16 Weeks",
    //   budget: "₹28,50,000",
    //   testimonial: "The hotel interiors have received countless compliments from our guests. The wood finishes add warmth and luxury throughout.",
    //   detailedOverview: "Mrs. Kavya's hotel required a comprehensive design approach that balanced luxury with functionality. We created a grand lobby with wooden ceiling accents, designed comfortable guest rooms, and ensured all service areas were both beautiful and efficient.",
    //   subSections: [
    //     {
    //       name: "Reception",
    //       image: receptionHotelImage,
    //       description: "Grand lobby with wooden ceiling and marble flooring. Impressive entrance that sets the standard for luxury and hospitality."
    //     },
    //     {
    //       name: "Guest Rooms",
    //       image: guestroomsHotelImage,
    //       description: "Modern comfort with warm wood wall panels. Each room designed to provide a luxurious stay experience with contemporary amenities."
    //     },
    //     {
    //       name: "Dining Area",
    //       image: diningHotelImage,
    //       description: "Multi-table setup with soft lighting. Elegant restaurant space designed for memorable dining experiences."
    //     },
    //     {
    //       name: "Service Area",
    //       image: serviceHotelImage,
    //       description: "Functional wooden storage units. Efficient back-of-house spaces that support seamless hotel operations."
    //     },
    //     {
    //       name: "Safety & Accessibility",
    //       image: safetyHotelImage,
    //       description: "Secure wood partitions and signage. Comprehensive safety features integrated elegantly into the design."
    //     }
    //   ]
    // },
    // {
    //   category: "Penthouse",
    //   icon: "🌇",
    //   title: "Mrs. Kalyani — Luxury Penthouse Interiors",
    //   customer: "Mrs. Kalyani",
    //   location: "Mumbai",
    //   image: heroPenthouseKalyaniImage,
    //   description: "Premium penthouse featuring open-plan living, elegant bedrooms, modern kitchen, and scenic terrace.",
    //   duration: "14 Weeks",
    //   budget: "₹22,75,000",
    //   testimonial: "Living in this penthouse feels like a dream. The attention to detail and quality of materials is exceptional.",
    //   detailedOverview: "Mrs. Kalyani's luxury penthouse was designed to maximize the stunning city views while creating sophisticated living spaces. We used premium teak furniture, incorporated high-gloss wood cabinetry, and created seamless indoor-outdoor transitions.",
    //   subSections: [
    //     {
    //       name: "Living Area",
    //       image: livingPenthouseImage,
    //       description: "Open concept with luxury teak furniture. Expansive space designed for entertaining with breathtaking views and sophisticated finishes."
    //     },
    //     {
    //       name: "Bedrooms",
    //       image: bedroomsPenthouseImage,
    //       description: "Artistic interiors with warm tones. Private retreats designed for ultimate comfort and relaxation with custom wooden elements."
    //     },
    //     {
    //       name: "Kitchen",
    //       image: kitchenPenthouseImage,
    //       description: "Minimalist high-gloss wood cabinetry. State-of-the-art kitchen combining beauty with cutting-edge functionality."
    //     },
    //     {
    //       name: "Terrace",
    //       image: terracePenthouseImage,
    //       description: "Lounge-style open space with wooden flooring and skyline view. Spectacular outdoor living area perfect for relaxation and entertainment."
    //     }
    //   ]
    // }
  ];

  return (
    <section id="customer-projects" className="py-20 bg-muted/30" ref={sectionRef as React.RefObject<HTMLElement>}>
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className={cn(
          "text-center mb-16 transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Portfolio
          </h2>
          <p className={cn(
            "text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )} style={{ transitionDelay: "150ms" }}>
            Real stories from satisfied customers — showcasing our craftsmanship, dedication, and the beautiful spaces we've created together.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              className={cn(
                "group overflow-hidden hover-lift hover-glow border-border bg-card cursor-pointer transition-all duration-500 ease-out",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover image-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Category Badge */}
                <Badge className={cn(
                  "absolute top-4 left-4 bg-primary/90 backdrop-blur-sm text-sm font-semibold transition-all duration-500",
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                )} style={{ transitionDelay: `${400 + index * 100}ms` }}>
                  {project.icon} {project.category}
                </Badge>

                {/* View Details Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <Button variant="secondary" size="lg" className="font-semibold shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
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
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
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
          <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
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

                  {/* Sub-Sections Tabs */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Interior Spaces</h4>
                    <Tabs defaultValue={selectedProject.subSections?.[0]?.name} className="w-full">
                      <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 gap-2 h-auto">
                        {selectedProject.subSections?.map((section: any, idx: number) => (
                          <TabsTrigger 
                            key={idx} 
                            value={section.name}
                            className="text-sm py-2"
                          >
                            {section.name}
                          </TabsTrigger>
                        ))}
                      </TabsList>
                      {selectedProject.subSections?.map((section: any, idx: number) => (
                        <TabsContent key={idx} value={section.name} className="mt-4">
                          <Card className="overflow-hidden border-border">
                            <img
                              src={section.image}
                              alt={section.name}
                              className="w-full h-80 object-cover"
                            />
                            <CardContent className="p-6">
                              <h5 className="text-xl font-bold mb-3 text-foreground">{section.name}</h5>
                              <p className="text-muted-foreground leading-relaxed">{section.description}</p>
                            </CardContent>
                          </Card>
                        </TabsContent>
                      ))}
                    </Tabs>
                  </div>

                  {/* Budget */}
                  {/* <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <p className="text-sm text-muted-foreground mb-1">Project Investment</p>
                    <p className="text-2xl font-bold text-primary">{selectedProject.budget}</p>
                  </div> */}

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
                  {/* <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <a href="#contact" className="flex-1" onClick={() => setSelectedProject(null)}>
                      <Button className="w-full" size="lg">
                        Start Similar Project
                      </Button>
                    </a>
                    <a href="#quote-generator" className="flex-1" onClick={() => setSelectedProject(null)}>
                      <Button variant="outline" className="w-full" size="lg">
                        Get Free Quote
                      </Button>
                    </a>
                  </div> */}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

        {/* Call to Action */}
        {/* <div className="text-center mt-16">
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
        </div> */}
      </div>
    </section>
  );
};

export default FeaturedCustomerProjects;
