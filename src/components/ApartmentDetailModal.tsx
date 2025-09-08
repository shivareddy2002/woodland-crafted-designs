import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bed, Bath, Car, Home, Utensils, Calculator, Phone } from "lucide-react";

interface ApartmentDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  apartment: {
    type: string;
    size: string;
    image: string;
    bedrooms: number;
    bathrooms: number;
    halls: number;
    kitchens: number;
    balconies: number;
    extraFeatures: string[];
    highlights: string[];
    price: string;
  } | null;
}

const ApartmentDetailModal = ({ isOpen, onClose, apartment }: ApartmentDetailModalProps) => {
  if (!apartment) return null;

  const handleQuoteRequest = () => {
    const quoteSection = document.getElementById('quote-generator');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' });
    }
    onClose();
  };

  const handleConsultation = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-background border-wood-medium">
        <DialogHeader className="border-b border-wood-light pb-6">
          <DialogTitle className="text-3xl font-bold text-primary">
            {apartment.type} – {apartment.size}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-6">
          {/* Image Section */}
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={apartment.image}
                alt={`${apartment.type} floor plan`}
                className="w-full h-80 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full font-semibold">
                {apartment.size}
              </div>
            </div>
            
            {/* Room Details */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-3 bg-wood-light rounded-lg">
                <Bed className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-semibold text-primary">{apartment.bedrooms}</p>
                  <p className="text-sm text-wood-dark">Bedrooms</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-wood-light rounded-lg">
                <Bath className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-semibold text-primary">{apartment.bathrooms}</p>
                  <p className="text-sm text-wood-dark">Bathrooms</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-wood-light rounded-lg">
                <Home className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-semibold text-primary">{apartment.halls}</p>
                  <p className="text-sm text-wood-dark">Living Hall{apartment.halls > 1 ? 's' : ''}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-wood-light rounded-lg">
                <Utensils className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-semibold text-primary">{apartment.kitchens}</p>
                  <p className="text-sm text-wood-dark">Kitchen{apartment.kitchens > 1 ? 's' : ''}</p>
                </div>
              </div>
              
              {apartment.balconies > 0 && (
                <div className="flex items-center space-x-3 p-3 bg-wood-light rounded-lg">
                  <Car className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-semibold text-primary">{apartment.balconies}</p>
                    <p className="text-sm text-wood-dark">Balcon{apartment.balconies > 1 ? 'ies' : 'y'}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Details Section */}
          <div className="space-y-6">
            {/* Extra Features */}
            {apartment.extraFeatures.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">Extra Features</h3>
                <div className="flex flex-wrap gap-2">
                  {apartment.extraFeatures.map((feature, index) => (
                    <Badge key={index} variant="outline" className="border-wood-accent text-wood-accent">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Highlights */}
            <div>
              <h3 className="text-xl font-bold text-primary mb-3">Key Highlights</h3>
              <ul className="space-y-2">
                {apartment.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center text-wood-dark">
                    <div className="w-2 h-2 bg-wood-accent rounded-full mr-3"></div>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing */}
            <div className="bg-gradient-to-r from-primary/5 to-wood-light p-6 rounded-lg border border-wood-medium">
              <h3 className="text-xl font-bold text-primary mb-2">Starting Price</h3>
              <p className="text-3xl font-bold text-primary mb-2">{apartment.price}</p>
              <p className="text-sm text-wood-dark">
                *Final pricing may vary based on customization, finishes, and specific requirements.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button 
                onClick={handleQuoteRequest}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3"
              >
                <Calculator className="w-4 h-4 mr-2" />
                Request a Quote
              </Button>
              
              <Button 
                onClick={handleConsultation}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold py-3"
              >
                <Phone className="w-4 h-4 mr-2" />
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ApartmentDetailModal;