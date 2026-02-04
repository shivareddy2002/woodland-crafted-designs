import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const Testimonials = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  const testimonials = [
    {
      name: "Ramesh K.",
      review: "IDL transformed my living room with custom furniture. Amazing craftsmanship!",
      rating: 5,
    },
    {
      name: "Ananya S.",
      review: "The modular kitchen they built for us is both functional and elegant. Highly recommend.",
      rating: 5,
    },
    {
      name: "Vikram P.",
      review: "Professional service, on-time delivery, and great attention to detail.",
      rating: 5,
    },
    {
      name: "Meera L.",
      review: "Loved their eco-friendly wood solutions. Quality that lasts!",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-background" ref={sectionRef as React.RefObject<HTMLElement>}>
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className={cn(
          "text-center mb-16 transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className={cn(
            "text-lg text-wood-dark max-w-2xl mx-auto transition-all duration-700 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )} style={{ transitionDelay: "150ms" }}>
            Don't just take our word for it. Here's what our satisfied customers have to say about our work.
          </p>
        </div>

        <div className={cn(
          "relative max-w-4xl mx-auto px-2 sm:px-0 transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )} style={{ transitionDelay: "300ms" }}>
          <Card className="border-wood-medium shadow-lg hover-glow transition-all duration-500">
            <CardContent className="p-6 sm:p-8 md:p-12 text-center">
              <div className={cn(
                "flex justify-center mb-4 sm:mb-6 transition-all duration-500",
                isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
              )}>
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 fill-current transition-all duration-300"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  />
                ))}
              </div>
              
              <blockquote className={cn(
                "text-lg sm:text-xl md:text-2xl text-wood-dark mb-4 sm:mb-6 italic leading-relaxed px-2 sm:px-4 transition-all duration-500",
                isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              )}>
                "{testimonials[currentIndex].review}"
              </blockquote>
              
              <div className={cn(
                "text-primary font-bold text-base sm:text-lg transition-all duration-500",
                isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              )} style={{ transitionDelay: "100ms" }}>
                — {testimonials[currentIndex].name}
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-6 sm:mt-0">
            <button
              onClick={prevTestimonial}
              className="sm:absolute sm:left-0 md:-left-4 sm:top-1/2 sm:transform sm:-translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary/90 transition-all duration-300 shadow-lg hover:scale-110 active:scale-95"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="sm:absolute sm:right-0 md:-right-4 sm:top-1/2 sm:transform sm:-translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary/90 transition-all duration-300 shadow-lg hover:scale-110 active:scale-95"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-4 sm:mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }
                }}
                className={cn(
                  "w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300",
                  index === currentIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-wood-medium hover:bg-primary/50'
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
