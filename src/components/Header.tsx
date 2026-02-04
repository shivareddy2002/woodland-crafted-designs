import { useState, useEffect } from "react";
import { Menu, X, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#customer-projects" },
    { label: "Apartments", href: "#apartments" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
      isScrolled 
        ? "bg-background/98 backdrop-blur-md border-b border-wood-light shadow-md" 
        : "bg-background/95 backdrop-blur-sm border-b border-wood-light"
    )}>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={scrollToTop}
            className="flex items-center space-x-2 group cursor-pointer transition-all duration-500 ease-out hover:scale-105"
          >
            <img 
              src={logo} 
              alt="In Design Land Logo" 
              className="w-10 h-10 rounded-full object-cover group-hover:shadow-lg transition-all duration-500" 
            />
            <div>
              <div className="font-bold text-lg text-primary group-hover:text-primary/80 transition-colors duration-300">In Design Land</div>
              <div className="text-xs text-wood-medium -mt-1 group-hover:text-wood-dark transition-colors duration-300">Premium Wood Solutions</div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-wood-accent transition-all duration-300 ease-out font-medium relative link-underline transform hover:-translate-y-0.5"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("#quote-generator")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg font-semibold btn-premium"
            >
              <Calculator className="w-4 h-4 mr-2" />
              Get Quote
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden transition-transform duration-300 hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "md:hidden overflow-hidden transition-all duration-500 ease-out",
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="border-t border-wood-light bg-background">
            <nav className="py-4 space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    "block w-full text-left px-4 py-2 text-foreground hover:bg-wood-light hover:text-wood-accent transition-all duration-300 ease-out transform hover:translate-x-1",
                    isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  )}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("#quote-generator")}
                className={cn(
                  "block w-full text-left px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 ease-out transform hover:translate-x-1 rounded-lg mx-4 mt-2",
                  isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                )}
                style={{ transitionDelay: `${navItems.length * 50}ms` }}
              >
                <Calculator className="w-4 h-4 mr-2 inline" />
                Get Quote
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
