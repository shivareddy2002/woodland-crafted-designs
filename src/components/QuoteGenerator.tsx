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

  const calculateQuote = () => {
    if (selectedMaterials.length === 0 || selectedProducts.length === 0 || !area) {
      return;
    }

    const areaNum = parseFloat(area);
    
    // Calculate average material price
    const totalMaterialPrice = selectedMaterials.reduce((sum, materialName) => {
      const material = materials.find(m => m.name === materialName);
      return sum + (material?.price || 0);
    }, 0);
    const avgMaterialPrice = totalMaterialPrice / selectedMaterials.length;

    // Calculate total product base price
    const totalProductPrice = selectedProducts.reduce((sum, productName) => {
      const product = products.find(p => p.name === productName);
      return sum + (product?.basePrice || 0);
    }, 0);

    // Estimated Cost = (Average Material Price × Area) + Total Product Base Price
    const cost = (avgMaterialPrice * areaNum) + totalProductPrice;
    setEstimatedCost(cost);
  };

  return (
    <section className="py-20 bg-wood-light">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Instant Quote Generator
          </h2>
          <p className="text-lg text-wood-dark max-w-2xl mx-auto">
            Get an estimated cost for your wood project instantly. Select materials and products to see pricing.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-wood-medium shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-wood-light border-b border-wood-medium">
              <CardTitle className="text-2xl text-primary flex items-center">
                <Calculator className="w-6 h-6 mr-3" />
                Calculate Your Project Cost
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Input Section */}
                <div className="space-y-6">
                  {/* Material Selection */}
                  <div>
                    <label className="block text-lg font-semibold text-primary mb-4">
                      Choose Materials (Select Multiple)
                    </label>
                    <div className="grid grid-cols-1 gap-3">
                      {materials.map((material) => (
                        <div
                          key={material.name}
                          onClick={() => handleMaterialToggle(material.name)}
                          className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                            selectedMaterials.includes(material.name)
                              ? 'border-primary bg-primary/5'
                              : 'border-wood-medium hover:border-primary/50'
                          }`}
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-wood-dark">{material.name}</span>
                            <span className="text-primary font-bold">₹{material.price}/sq.ft</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Product Selection */}
                  <div>
                    <label className="block text-lg font-semibold text-primary mb-4">
                      Choose Product Types (Select Multiple)
                    </label>
                    <div className="grid grid-cols-1 gap-3">
                      {products.map((product) => (
                        <div
                          key={product.name}
                          onClick={() => handleProductToggle(product.name)}
                          className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                            selectedProducts.includes(product.name)
                              ? 'border-primary bg-primary/5'
                              : 'border-wood-medium hover:border-primary/50'
                          }`}
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-wood-dark">{product.name}</span>
                            <span className="text-primary font-bold">₹{product.basePrice.toLocaleString()}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Area Input */}
                  <div>
                    <label className="block text-lg font-semibold text-primary mb-3">
                      Area (sq.ft)
                    </label>
                    <Input
                      type="number"
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                      placeholder="Enter area in square feet"
                      className="border-wood-medium focus:border-primary text-lg p-4"
                    />
                  </div>

                  <Button 
                    onClick={calculateQuote}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 text-lg"
                    disabled={selectedMaterials.length === 0 || selectedProducts.length === 0 || !area}
                  >
                    <Calculator className="w-5 h-5 mr-2" />
                    Calculate Quote
                  </Button>
                </div>

                {/* Result Section */}
                <div className="space-y-6">
                  {/* Selected Items */}
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-3">Selected Materials</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedMaterials.length > 0 ? (
                        selectedMaterials.map((material) => (
                          <Badge key={material} variant="secondary" className="text-sm">
                            {material}
                          </Badge>
                        ))
                      ) : (
                        <span className="text-wood-dark text-sm">No materials selected</span>
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-3">Selected Products</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProducts.length > 0 ? (
                        selectedProducts.map((product) => (
                          <Badge key={product} variant="secondary" className="text-sm">
                            {product}
                          </Badge>
                        ))
                      ) : (
                        <span className="text-wood-dark text-sm">No products selected</span>
                      )}
                    </div>
                  </div>

                  {/* Cost Estimate */}
                  {estimatedCost && (
                    <Card className="border-primary bg-primary/5">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
                          <IndianRupee className="w-6 h-6 mr-2" />
                          Estimated Cost
                        </h3>
                        <div className="text-3xl font-bold text-primary mb-2">
                          ₹{estimatedCost.toLocaleString()}
                        </div>
                        <p className="text-wood-dark text-sm">
                          *This is an approximate estimate. Final pricing may vary based on specific requirements, design complexity, and current market rates.
                        </p>
                        <div className="mt-4 pt-4 border-t border-primary/20">
                          <p className="text-sm text-wood-dark">
                            <strong>Formula:</strong> (Average Material Price × Area) + Product Base Prices
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Contact CTA */}
                  <Card className="border-wood-medium">
                    <CardContent className="p-6 text-center">
                      <h4 className="font-semibold text-primary mb-2">Need a Detailed Quote?</h4>
                      <p className="text-wood-dark text-sm mb-4">
                        Contact us for a comprehensive consultation and accurate pricing.
                      </p>
                      <div className="space-y-2">
                        <a 
                          href="https://wa.me/919346493592"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm font-semibold"
                        >
                          Get Detailed Quote on WhatsApp
                        </a>
                        <a 
                          href="tel:+919346493592"
                          className="block w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 text-sm font-semibold"
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
      </div>
    </section>
  );
};

export default QuoteGenerator;