import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-wood-interior.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with subtle zoom animation */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-[scaleInSoft_1.5s_ease-out_forwards]"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-primary/40"></div>
      </div>

      {/* Content with staggered animations */}
      <div className="relative z-10 container mx-auto px-4 lg:px-6 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight opacity-0 animate-fade-up [animation-delay:300ms] [animation-fill-mode:forwards]">
            Discover the Beauty of Wood
          </h1>
          
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto opacity-90 opacity-0 animate-fade-up [animation-delay:500ms] [animation-fill-mode:forwards]">
            Supplying premium wood products for your home, office, and creative projects. 
            Quality, sustainability, and craftsmanship in every piece.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 opacity-0 animate-fade-up [animation-delay:700ms] [animation-fill-mode:forwards]">
            <Button
              size="lg"
              variant="secondary"
              className="px-8 py-6 text-lg font-semibold btn-premium"
              onClick={() => scrollToSection("#products")}
            >
              View Catalog
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg font-semibold border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary btn-premium"
              onClick={() => scrollToSection("#about")}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator with fade animation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-up [animation-delay:1000ms] [animation-fill-mode:forwards]">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
