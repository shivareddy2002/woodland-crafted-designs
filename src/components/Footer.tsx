import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-sm">IDL</span>
              </div>
              <div>
                <div className="font-bold text-lg">In Design Land</div>
                <div className="text-sm opacity-90">Premium Wood Solutions</div>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Crafting exceptional wood solutions with passion and precision. 
              Quality, sustainability, and craftsmanship in every piece.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="opacity-90 hover:opacity-100 transition-opacity">Home</a></li>
              <li><a href="#about" className="opacity-90 hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="#products" className="opacity-90 hover:opacity-100 transition-opacity">Products</a></li>
              <li><a href="#services" className="opacity-90 hover:opacity-100 transition-opacity">Services</a></li>
              <li><a href="#apartments" className="opacity-90 hover:opacity-100 transition-opacity">Apartments</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="opacity-90">Custom Woodwork</li>
              <li className="opacity-90">Furnishing & Interiors</li>
              <li className="opacity-90">Installation & Maintenance</li>
              <li className="opacity-90">Design Consultation</li>
              <li className="opacity-90">Quality Guarantee</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div>
                <div className="font-semibold">Phone:</div>
                <div className="opacity-90">+91 9555222567</div>
              </div>
              <div>
                <div className="font-semibold">Email:</div>
                <div className="opacity-90">indesignland@gmail.com</div>
              </div>
              <div>
                <div className="font-semibold">WhatsApp:</div>
                <a 
                  href="https://wa.me/919555222567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  Chat with us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright line removed as requested */}
          
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="https://facebook.com/rupasthala.design.studio" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-all duration-300 transform hover:scale-110">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://instagram.com/rupasthala_design_studio" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-all duration-300 transform hover:scale-110">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-all duration-300 transform hover:scale-110">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://youtube.com/@rupasthala" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-all duration-300 transform hover:scale-110">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a2.999 2.999 0 0 0-2.108-2.124C19.598 3.5 12 3.5 12 3.5s-7.598 0-9.39.562A2.999 2.999 0 0 0 .502 6.186C0 7.986 0 12 0 12s0 4.014.502 5.814a2.999 2.999 0 0 0 2.108 2.124C4.402 20.5 12 20.5 12 20.5s7.598 0 9.39-.562a2.999 2.999 0 0 0 2.108-2.124C24 16.014 24 12 24 12s0-4.014-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="#" className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-all duration-300 transform hover:scale-110">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;