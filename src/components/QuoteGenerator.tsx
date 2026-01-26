import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, IndianRupee } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const QuoteGenerator = () => {
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [selectedApartments, setSelectedApartments] = useState<string[]>([]);
  const [selectedCommercial, setSelectedCommercial] = useState<string[]>([]);
  const [area, setArea] = useState("");
  const [estimatedCost, setEstimatedCost] = useState<number | null>(null);

  const materials = [
    { name: "Hdhmr Board", price: 120 },
    { name: "Phenolic Board", price: 150 },
    { name: "Plain MDF Board", price: 90 },
    { name: "Grey Board", price: 80 },
    { name: "Laminated Board", price: 140 },
    { name: "Soft Board", price: 60 },
    { name: "Hard Board", price: 100 },
    { name: "WPC Board", price: 130 },
    { name: "Wood Board", price: 110 },
  ];

  const products = [
    { name: "Bedroom Furniture", basePrice: 30000 },
    { name: "Kitchen", basePrice: 80000 },
    { name: "Office Interiors", basePrice: 120000 },
    { name: "Doors & Windows", basePrice: 15000 },
  ];

  const commercialProjects = [
    { name: "Office Interiors", price: 2000 },
    { name: "Hotels & Resorts", price: 2500 },
    { name: "Hospitals & Clinics", price: 2200 },
    { name: "Retail Stores", price: 1800 },
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

  const handleCommercialToggle = (commercial: string) => {
    setSelectedCommercial(prev => 
      prev.includes(commercial) 
        ? prev.filter(c => c !== commercial)
        : [...prev, commercial]
    );
  };

  const calculateQuote = () => {
    if ((selectedMaterials.length === 0 && selectedProducts.length === 0 && selectedApartments.length === 0 && selectedCommercial.length === 0) || !area) {
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

    // Calculate commercial costs
    if (selectedCommercial.length > 0) {
      const totalCommercialPrice = selectedCommercial.reduce((sum, commercialName) => {
        const commercial = commercialProjects.find(c => c.name === commercialName);
        return sum + ((commercial?.price || 0) * areaNum);
      }, 0);
      cost += totalCommercialPrice;
    }

    setEstimatedCost(cost);
  };

  return (
    <section className="py-12 bg-wood-light">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
            Instant Quote Generator
          </h2>
          <p className="text-base text-wood-dark max-w-2xl mx-auto">
            Get an estimated cost for your wood project instantly. Select materials and products to see pricing.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="border-wood-medium shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-wood-light border-b border-wood-medium py-4">
              <CardTitle className="text-xl text-primary flex items-center">
                <Calculator className="w-5 h-5 mr-2" />
                Calculate Your Project Cost
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                {/* Selection Sections - 2 columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Material Selection */}
                  <div>
                    <label className="block text-base font-semibold text-primary mb-3">
                      Choose Materials (Select Multiple)
                    </label>
                    <div className="grid grid-cols-1 gap-2 max-h-60 overflow-y-auto pr-2">
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
                            <span className="text-sm font-medium text-wood-dark">{material.name}</span>
                            <span className="text-sm text-primary font-bold">₹{material.price}/sq.ft</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Product Selection */}
                  <div>
                    <label className="block text-base font-semibold text-primary mb-3">
                      Choose Product Types (Select Multiple)
                    </label>
                    <div className="grid grid-cols-1 gap-2 max-h-60 overflow-y-auto pr-2">
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
                            <span className="text-sm font-medium text-wood-dark">{product.name}</span>
                            <span className="text-sm text-primary font-bold">₹{product.basePrice.toLocaleString()}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Second Row - Apartments & Commercial */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Apartment Pricing Section */}
                  <div>
                    <label className="block text-base font-semibold text-primary mb-3">
                      Apartment Pricing (Select Multiple)
                    </label>
                    <div className="grid grid-cols-1 gap-2 max-h-48 overflow-y-auto pr-2">
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
                            <span className="text-sm font-medium text-wood-dark">{apartment.name}</span>
                            <span className="text-sm text-primary font-bold">₹{apartment.price.toLocaleString()}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Commercial Projects Section */}
                  <div>
                    <label className="block text-base font-semibold text-primary mb-3">
                      Commercial Projects (Select Multiple)
                    </label>
                    <div className="grid grid-cols-1 gap-2 max-h-48 overflow-y-auto pr-2">
                      {commercialProjects.map((commercial) => (
                        <div
                          key={commercial.name}
                          onClick={() => handleCommercialToggle(commercial.name)}
                          className={`p-3 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                            selectedCommercial.includes(commercial.name)
                              ? 'border-primary bg-primary/5'
                              : 'border-wood-medium hover:border-primary/50'
                          }`}
                        >
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-wood-dark">{commercial.name}</span>
                            <span className="text-sm text-primary font-bold">From ₹{commercial.price}/sq.ft</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Area Input & Calculate Button */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                  <div>
                    <label className="block text-base font-semibold text-primary mb-2">
                      Area (sq.ft)
                    </label>
                    <Input
                      type="number"
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                      placeholder="Enter area in square feet"
                      className="border-wood-medium focus:border-primary text-base p-3"
                    />
                  </div>

                  <Button 
                    onClick={calculateQuote}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 text-base h-[50px]"
                    disabled={(selectedMaterials.length === 0 && selectedProducts.length === 0 && selectedApartments.length === 0 && selectedCommercial.length === 0) || !area}
                  >
                    <Calculator className="w-4 h-4 mr-2" />
                    Calculate Quote
                  </Button>
                </div>

                {/* Results Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                  {/* Selected Materials */}
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

                  {/* Selected Products */}
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

                  {/* Selected Apartments */}
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

                  {/* Selected Commercial */}
                  <div>
                    <h3 className="text-sm font-semibold text-primary mb-2">Selected Commercial</h3>
                    <div className="flex flex-wrap gap-1">
                      {selectedCommercial.length > 0 ? (
                        selectedCommercial.map((commercial) => (
                          <Badge key={commercial} variant="secondary" className="text-xs">
                            {commercial}
                          </Badge>
                        ))
                      ) : (
                        <span className="text-wood-dark text-xs">No commercial selected</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Cost Estimate & Contact CTA */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  {/* Cost Estimate */}
                  {estimatedCost && (
                    <Card className="border-primary bg-primary/5">
                      <CardContent className="p-4">
                        <h3 className="text-lg font-bold text-primary mb-3 flex items-center">
                          <IndianRupee className="w-5 h-5 mr-2" />
                          Estimated Cost
                        </h3>
                        <div className="text-2xl font-bold text-primary mb-2">
                          ₹{estimatedCost.toLocaleString()}
                        </div>
                        <p className="text-wood-dark text-xs">
                          *Approximate estimate. Final pricing may vary based on requirements and complexity.
                        </p>
                      </CardContent>
                    </Card>
                  )}

                  {/* Contact CTA */}
                  <Card className="border-wood-medium">
                    <CardContent className="p-4 text-center">
                      <h4 className="text-sm font-semibold text-primary mb-2">Need a Detailed Quote?</h4>
                      <p className="text-wood-dark text-xs mb-3">
                        Contact us for comprehensive consultation.
                      </p>
                      <div className="flex gap-2">
                        <a 
                          href="https://wa.me/919555222567"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 text-xs font-semibold text-center"
                        >
                          WhatsApp Quote
                        </a>
                        <a 
                          href="tel:+919555222567"
                          className="flex-1 px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 text-xs font-semibold text-center"
                        >
                          Call Now
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuoteGenerator;