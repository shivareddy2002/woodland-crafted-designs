import { useState } from "react";
import { Menu, X, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-wood-light">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={scrollToTop}
            className="flex items-center space-x-2 group cursor-pointer transition-all duration-300 hover:scale-105"
          >
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
              <span className="text-primary-foreground font-bold text-sm">IDL</span>
            </div>
            <div>
              <div className="font-bold text-lg text-primary group-hover:text-primary/80 transition-colors duration-300">In Design Land</div>
              <div className="text-xs text-wood-medium -mt-1 group-hover:text-wood-dark transition-colors duration-300">Premium Wood Solutions</div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-wood-accent transition-all duration-300 ease-in-out font-medium relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-wood-accent after:origin-bottom-right after:transition-transform after:duration-300 ease-in-out hover:after:scale-x-100 hover:after:origin-bottom-left transform hover:-translate-y-0.5"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("#quote-generator")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <Calculator className="w-4 h-4 mr-2" />
              Get Quote
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-wood-light bg-background">
            <nav className="py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-2 text-foreground hover:bg-wood-light hover:text-wood-accent transition-all duration-300 ease-in-out transform hover:translate-x-1"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("#quote-generator")}
                className="block w-full text-left px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 ease-in-out transform hover:translate-x-1 rounded-lg mx-4 mt-2"
              >
                <Calculator className="w-4 h-4 mr-2 inline" />
                Get Quote
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;