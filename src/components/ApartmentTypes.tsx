import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ApartmentDetailModal from "@/components/ApartmentDetailModal";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import apartment1bhk from "@/assets/1bhk-apartment.jpg";
import apartment2bhk from "@/assets/2bhk-apartment.jpg";
import apartment3bhk from "@/assets/3bhk-apartment.jpg";
import apartment4bhk from "@/assets/4bhk-apartment.jpg";
import apartment5bhk from "@/assets/5bhk-apartment.jpg";

const ApartmentTypes = () => {
  const [selectedApartment, setSelectedApartment] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
    loop: false,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const apartments = [
    {
      type: "1BHK Apartment",
      size: "700 sq.ft.",
      image: apartment1bhk,
      features: ["Compact design", "Smart storage", "Modern wood finishes", "Ideal for singles/couples"],
      button: "View 1BHK",
      bedrooms: 1,
      bathrooms: 1,
      halls: 1,
      kitchens: 1,
      balconies: 1,
      extraFeatures: ["Smart storage solutions"],
      highlights: ["Compact design", "Smart storage", "Modern wood finishes", "Ideal for singles/couples"],
      price: "₹200,000 onwards"
    },
    {
      type: "2BHK Apartment", 
      size: "1200 sq.ft.",
      image: apartment2bhk,
      features: ["Spacious layout", "Family-friendly", "Premium wood interiors", "Open kitchen concept"],
      button: "View 2BHK",
      bedrooms: 2,
      bathrooms: 2,
      halls: 1,
      kitchens: 1,
      balconies: 1,
      extraFeatures: ["Open kitchen concept"],
      highlights: ["Spacious layout", "Family-friendly", "Premium wood interiors", "Open kitchen concept"],
      price: "₹400,000 onwards"
    },
    {
      type: "3BHK Apartment",
      size: "1800 sq.ft.",
      image: apartment3bhk,
      features: ["Luxury living", "Multiple bedrooms", "Custom wood work", "Entertainment spaces"],
      button: "View 3BHK",
      bedrooms: 3,
      bathrooms: 2,
      halls: 1,
      kitchens: 1,
      balconies: 2,
      extraFeatures: ["Entertainment room", "Walk-in closet"],
      highlights: ["Luxury living", "Multiple bedrooms", "Custom wood work", "Entertainment spaces"],
      price: "₹600,000 onwards"
    },
    {
      type: "4BHK Apartment",
      size: "2400 sq.ft.",
      image: apartment4bhk,
      features: ["Premium interiors", "Master suite", "Study room", "Multiple storage areas"],
      button: "View 4BHK",
      bedrooms: 4,
      bathrooms: 3,
      halls: 1,
      kitchens: 1,
      balconies: 2,
      extraFeatures: ["Master suite", "Study room", "Walk-in closet"],
      highlights: ["Premium interiors", "Master suite", "Study room", "Multiple storage areas"],
      price: "₹800,000 onwards"
    },
    {
      type: "5BHK Apartment",
      size: "3000+ sq.ft.",
      image: apartment5bhk,
      features: ["Ultra-luxury", "Penthouse design", "Premium finishes", "Entertainment rooms"],
      button: "View 5BHK",
      bedrooms: 5,
      bathrooms: 4,
      halls: 2,
      kitchens: 1,
      balconies: 3,
      extraFeatures: ["Entertainment room", "Home theater", "Walk-in closet", "Terrace garden"],
      highlights: ["Ultra-luxury", "Penthouse design", "Premium finishes", "Entertainment rooms"],
      price: "₹1,200,000 onwards"
    },
  ];

  const handleViewApartment = (apartment: any) => {
    setSelectedApartment(apartment);
    setIsModalOpen(true);
  };

  return (
    <section id="apartments" className="py-20 bg-background" ref={sectionRef as React.RefObject<HTMLElement>}>
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className={cn(
          "text-center mb-16 transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Apartment Solutions
          </h2>
          <p className={cn(
            "text-lg text-wood-dark max-w-2xl mx-auto transition-all duration-700 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )} style={{ transitionDelay: "150ms" }}>
            Complete wood furnishing solutions for apartments of all sizes. From compact 1BHK to luxurious 5BHK penthouses.
          </p>
        </div>

        {/* Apartments Carousel */}
        <div className={cn(
          "relative transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )} style={{ transitionDelay: "300ms" }}>
          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className={cn(
              "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 h-12 w-12 rounded-full border-primary/30 bg-background/95 backdrop-blur-sm shadow-lg transition-all duration-300",
              "hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-xl",
              "disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-background disabled:hover:text-foreground",
              "hidden md:flex"
            )}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous slide</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            disabled={!canScrollNext}
            className={cn(
              "absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 h-12 w-12 rounded-full border-primary/30 bg-background/95 backdrop-blur-sm shadow-lg transition-all duration-300",
              "hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-xl",
              "disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-background disabled:hover:text-foreground",
              "hidden md:flex"
            )}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next slide</span>
          </Button>

          {/* Carousel Container */}
          <div className="overflow-hidden mx-0 md:mx-8" ref={emblaRef}>
            <div className="flex -ml-4 md:-ml-6">
              {apartments.map((apartment, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 md:pl-6 min-w-0"
                >
                  <Card 
                    className="group overflow-hidden border-wood-medium hover-lift hover-glow flex flex-col h-full transition-all duration-500 ease-out"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={apartment.image}
                        alt={apartment.type}
                        className="w-full h-56 object-cover image-zoom"
                      />
                      <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full font-semibold text-sm">
                        {apartment.size}
                      </div>
                    </div>
                    
                    <CardContent className="p-6 bg-gradient-to-b from-card to-wood-light flex flex-col flex-grow">
                      <h3 className="text-2xl font-bold text-primary mb-4">
                        {apartment.type}
                      </h3>
                      
                      <ul className="space-y-2 mb-6 flex-grow">
                        {apartment.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-wood-dark">
                            <div className="w-2 h-2 bg-wood-accent rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <Button 
                        onClick={() => handleViewApartment(apartment)}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 mt-auto btn-premium"
                      >
                        {apartment.button}
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            {apartments.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  selectedIndex === index
                    ? "bg-primary w-6"
                    : "bg-primary/30 hover:bg-primary/50"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Apartment Detail Modal */}
        <ApartmentDetailModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          apartment={selectedApartment}
        />
      </div>
    </section>
  );
};

export default ApartmentTypes;
