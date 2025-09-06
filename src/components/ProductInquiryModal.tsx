import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    title: string;
    headline: string;
    description: string;
    startingPrice: string;
    highlights: string[];
    image: string;
  } | null;
}

const ProductInquiryModal = ({ isOpen, onClose, product }: ProductInquiryModalProps) => {
  if (!product) return null;

  const handleQuoteRequest = () => {
    // Scroll to quote generator section
    const element = document.querySelector('#quote-generator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onClose();
    }
  };

  const handleConsultation = () => {
    // Scroll to contact section
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary mb-4">
            {product.headline}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Product Image */}
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute top-4 right-4">
              <Badge variant="secondary" className="bg-primary text-primary-foreground">
                {product.title}
              </Badge>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-3">
            <p className="text-lg text-wood-dark leading-relaxed">
              {product.description}
            </p>
            
            {/* Starting Price */}
            <div className="flex items-center space-x-2">
              <span className="text-wood-dark font-medium">Starting from:</span>
              <span className="text-2xl font-bold text-primary">{product.startingPrice}</span>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-primary">Key Features:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {product.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 p-3 bg-wood-light/50 rounded-lg border border-wood-medium/30"
                >
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-wood-dark font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-wood-medium/30">
            <Button 
              onClick={handleQuoteRequest}
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Request a Quote
            </Button>
            <Button 
              onClick={handleConsultation}
              variant="outline"
              className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Book a Consultation
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductInquiryModal;