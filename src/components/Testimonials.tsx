import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const Testimonials = () => {
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

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-wood-dark max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our work.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto px-2 sm:px-0">
          <Card className="border-wood-medium shadow-lg">
            <CardContent className="p-6 sm:p-8 md:p-12 text-center">
              <div className="flex justify-center mb-4 sm:mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-lg sm:text-xl md:text-2xl text-wood-dark mb-4 sm:mb-6 italic leading-relaxed px-2 sm:px-4">
                "{testimonials[currentIndex].review}"
              </blockquote>
              
              <div className="text-primary font-bold text-base sm:text-lg">
                — {testimonials[currentIndex].name}
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons - positioned below on mobile, sides on desktop */}
          <div className="flex justify-center gap-4 mt-6 sm:mt-0">
            <button
              onClick={prevTestimonial}
              className="sm:absolute sm:left-0 md:-left-4 sm:top-1/2 sm:transform sm:-translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors duration-200 shadow-lg"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="sm:absolute sm:right-0 md:-right-4 sm:top-1/2 sm:transform sm:-translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors duration-200 shadow-lg"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-4 sm:mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-primary' : 'bg-wood-medium'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;