import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calculator, IndianRupee, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface QuoteGeneratorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuoteGeneratorModal = ({ isOpen, onClose }: QuoteGeneratorModalProps) => {
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [selectedApartments, setSelectedApartments] = useState<string[]>([]);
  const [area, setArea] = useState("");
  const [estimatedCost, setEstimatedCost] = useState<number | null>(null);

  const materials = [
    { name: "Teak Wood", price: 2500 },
    { name: "Rosewood", price: 3200 },
    { name: "Oak Wood", price: 2000 },
    { name: "Walnut", price: 2800 },
    { name: "Plywood", price: 1200 },
  ];

  const products = [
    { name: "Bedroom Furniture", basePrice: 30000 },
    { name: "Kitchen", basePrice: 80000 },
    { name: "Office Interiors", basePrice: 120000 },
    { name: "Doors & Windows", basePrice: 15000 },
  ];

  const apartments = [
    { name: "1BHK Apartment", price: 200000 },
    { name: "2BHK Apartment", price: 400000 },
    { name: "3BHK Apartment", price: 600000 },
    { name: "4BHK Apartment", price: 800000 },
    { name: "5BHK Apartment", price: 1200000 },
  ];

  const handleMaterialToggle = (material: string) => {
    setSelectedMaterials(prev => 
      prev.includes(material) 
        ? prev.filter(m => m !== material)
        : [...prev, material]
    );
  };

  const handleProductToggle = (product: string) => {
    setSelectedProducts(prev => 
      prev.includes(product) 
        ? prev.filter(p => p !== product)
        : [...prev, product]
    );
  };

  const handleApartmentToggle = (apartment: string) => {
    setSelectedApartments(prev => 
      prev.includes(apartment) 
        ? prev.filter(a => a !== apartment)
        : [...prev, apartment]
    );
  };

  const calculateQuote = () => {
    if ((selectedMaterials.length === 0 && selectedProducts.length === 0 && selectedApartments.length === 0) || !area) {
      return;
    }

    const areaNum = parseFloat(area);
    let cost = 0;

    // Calculate material costs if any materials are selected
    if (selectedMaterials.length > 0) {
      const totalMaterialPrice = selectedMaterials.reduce((sum, materialName) => {
        const material = materials.find(m => m.name === materialName);
        return sum + (material?.price || 0);
      }, 0);
      const avgMaterialPrice = totalMaterialPrice / selectedMaterials.length;
      cost += avgMaterialPrice * areaNum;
    }

    // Calculate product costs
    const totalProductPrice = selectedProducts.reduce((sum, productName) => {
      const product = products.find(p => p.name === productName);
      return sum + (product?.basePrice || 0);
    }, 0);
    cost += totalProductPrice;

    // Calculate apartment costs
    const totalApartmentPrice = selectedApartments.reduce((sum, apartmentName) => {
      const apartment = apartments.find(a => a.name === apartmentName);
      return sum + (apartment?.price || 0);
    }, 0);
    cost += totalApartmentPrice;

    setEstimatedCost(cost);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[95vh] p-0 bg-white flex flex-col">
        <DialogHeader className="p-4 sm:p-6 border-b border-wood-light bg-gradient-to-r from-primary/5 to-wood-light flex-shrink-0">
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-2xl sm:text-3xl font-bold text-primary flex items-center">
                <Calculator className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3" />
                Instant Quote Generator
              </DialogTitle>
              <p className="text-wood-dark mt-2 text-sm sm:text-base">
                Get an estimated cost for your wood project instantly. Select materials and products to see pricing.
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-8 w-8 p-0 flex-shrink-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          <Card className="border-wood-medium shadow-lg h-full flex flex-col">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-wood-light border-b border-wood-medium flex-shrink-0">
              <CardTitle className="text-lg sm:text-xl text-primary">
                Calculate Your Project Cost
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 flex-1 overflow-y-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 h-full">
                {/* Input Section */}
                <div className="space-y-4 sm:space-y-6 overflow-y-auto max-h-[60vh] lg:max-h-full pr-2">
                  {/* Material Selection */}
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-3">
                      Choose Materials (Select Multiple)
                    </label>
                    <div className="grid grid-cols-1 gap-2">
                      {materials.map((material) => (
                        <div
                          key={material.name}
                          onClick={() => handleMaterialToggle(material.name)}
                          className={`p-3 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                            selectedMaterials.includes(material.name)
                              ? 'border-primary bg-primary/5'
                              : 'border-wood-medium hover:border-primary/50'
                          }`}
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-wood-dark text-sm">{material.name}</span>
                            <span className="text-primary font-bold text-sm">₹{material.price}/sq.ft</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Product Selection */}
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-3">
                      Choose Product Types (Select Multiple)
                    </label>
                    <div className="grid grid-cols-1 gap-2">
                      {products.map((product) => (
                        <div
                          key={product.name}
                          onClick={() => handleProductToggle(product.name)}
                          className={`p-3 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                            selectedProducts.includes(product.name)
                              ? 'border-primary bg-primary/5'
                              : 'border-wood-medium hover:border-primary/50'
                          }`}
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-wood-dark text-sm">{product.name}</span>
                            <span className="text-primary font-bold text-sm">₹{product.basePrice.toLocaleString()}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Apartment Pricing Section */}
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-3">
                      Apartment Pricing (Select Multiple)
                    </label>
                    <div className="grid grid-cols-1 gap-2">
                      {apartments.map((apartment) => (
                        <div
                          key={apartment.name}
                          onClick={() => handleApartmentToggle(apartment.name)}
                          className={`p-3 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                            selectedApartments.includes(apartment.name)
                              ? 'border-primary bg-primary/5'
                              : 'border-wood-medium hover:border-primary/50'
                          }`}
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-wood-dark text-sm">{apartment.name}</span>
                            <span className="text-primary font-bold text-sm">₹{apartment.price.toLocaleString()}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Area Input */}
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      Area (sq.ft)
                    </label>
                    <Input
                      type="number"
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                      placeholder="Enter area in square feet"
                      className="border-wood-medium focus:border-primary"
                    />
                  </div>

                  <Button 
                    onClick={calculateQuote}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                    disabled={(selectedMaterials.length === 0 && selectedProducts.length === 0 && selectedApartments.length === 0) || !area}
                  >
                    <Calculator className="w-4 h-4 mr-2" />
                    Calculate Quote
                  </Button>
                </div>

                {/* Result Section */}
                <div className="space-y-4 overflow-y-auto max-h-[60vh] lg:max-h-full pr-2">
                  {/* Selected Items */}
                  <div>
                    <h3 className="text-sm font-semibold text-primary mb-2">Selected Materials</h3>
                    <div className="flex flex-wrap gap-1">
                      {selectedMaterials.length > 0 ? (
                        selectedMaterials.map((material) => (
                          <Badge key={material} variant="secondary" className="text-xs">
                            {material}
                          </Badge>
                        ))
                      ) : (
                        <span className="text-wood-dark text-xs">No materials selected</span>
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-primary mb-2">Selected Products</h3>
                    <div className="flex flex-wrap gap-1">
                      {selectedProducts.length > 0 ? (
                        selectedProducts.map((product) => (
                          <Badge key={product} variant="secondary" className="text-xs">
                            {product}
                          </Badge>
                        ))
                      ) : (
                        <span className="text-wood-dark text-xs">No products selected</span>
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-primary mb-2">Selected Apartments</h3>
                    <div className="flex flex-wrap gap-1">
                      {selectedApartments.length > 0 ? (
                        selectedApartments.map((apartment) => (
                          <Badge key={apartment} variant="secondary" className="text-xs">
                            {apartment}
                          </Badge>
                        ))
                      ) : (
                        <span className="text-wood-dark text-xs">No apartments selected</span>
                      )}
                    </div>
                  </div>

                  {/* Cost Estimate */}
                  {estimatedCost && (
                    <Card className="border-primary bg-primary/5">
                      <CardContent className="p-4">
                        <h3 className="text-lg font-bold text-primary mb-2 flex items-center">
                          <IndianRupee className="w-5 h-5 mr-2" />
                          Estimated Cost
                        </h3>
                        <div className="text-2xl font-bold text-primary mb-2">
                          ₹{estimatedCost.toLocaleString()}
                        </div>
                        <p className="text-wood-dark text-xs">
                          *This is an approximate estimate. Final pricing may vary based on specific requirements.
                        </p>
                      </CardContent>
                    </Card>
                  )}

                  {/* Contact CTA */}
                  <Card className="border-wood-medium">
                    <CardContent className="p-4 text-center">
                      <h4 className="font-semibold text-primary mb-2 text-sm">Need a Detailed Quote?</h4>
                      <p className="text-wood-dark text-xs mb-3">
                        Contact us for a comprehensive consultation and accurate pricing.
                      </p>
                      <div className="space-y-2">
                        <a 
                          href="https://wa.me/919555222567"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 text-xs font-semibold"
                        >
                          Get Detailed Quote on WhatsApp
                        </a>
                        <a 
                          href="tel:+919555222567"
                          className="block w-full px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 text-xs font-semibold"
                        >
                          Call for Consultation
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteGeneratorModal;