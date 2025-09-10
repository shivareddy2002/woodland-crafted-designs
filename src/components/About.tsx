import { Award, Target, TreePine, Clock, Shield, Recycle, Hammer, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-wood-light min-h-screen">
      <div className="container mx-auto px-4 lg:px-6 h-full">
        <div className="max-w-6xl mx-auto h-full">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              About In Design Land
            </h2>
            <div className="w-24 h-1 bg-wood-accent mx-auto mb-6"></div>
            <p className="text-xl text-wood-dark">
              Crafting exceptional wood solutions with passion and precision
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 h-full">
            {/* Content Section */}
            <div className="space-y-6 overflow-y-auto max-h-[70vh] pr-4">
              <div className="space-y-4">
                <p className="text-lg text-wood-dark leading-relaxed">
                  At IDL, we bring passion and precision into every detail of woodcraft. From timeless bedroom designs to modern kitchens and custom interiors, we deliver solutions that blend beauty, durability, and sustainability.
                </p>
                
                <p className="text-lg text-wood-dark leading-relaxed">
                  Our commitment to quality craftsmanship is evident in every piece we create. From custom furniture to architectural elements, we source only the finest sustainable wood materials and employ traditional techniques combined with modern innovation.
                </p>
              </div>

              {/* Core Values Section */}
              <div className="space-y-6 mt-8">
                <h3 className="text-2xl font-bold text-primary">Our Core Values</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 p-4 bg-card rounded-lg border border-wood-medium hover:shadow-lg transition-all duration-300">
                    <Shield className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-wood-dark font-medium">Commitment to Quality</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-card rounded-lg border border-wood-medium hover:shadow-lg transition-all duration-300">
                    <Recycle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-wood-dark font-medium">Sustainability</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-card rounded-lg border border-wood-medium hover:shadow-lg transition-all duration-300">
                    <Hammer className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-wood-dark font-medium">Innovation</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-card rounded-lg border border-wood-medium hover:shadow-lg transition-all duration-300">
                    <Users className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-wood-dark font-medium">Customer Satisfaction</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Statistics Section */}
            <div className="space-y-8 overflow-y-auto max-h-[70vh] pr-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="text-center p-6 bg-card rounded-lg border border-wood-medium group hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <div className="text-wood-dark font-medium">Years Experience</div>
                </div>
                
                <div className="text-center p-6 bg-card rounded-lg border border-wood-medium group hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-wood-dark font-medium">Projects Completed</div>
                </div>
                
                <div className="text-center p-6 bg-card rounded-lg border border-wood-medium group hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full">
                    <TreePine className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-wood-dark font-medium">Sustainable Wood</div>
                </div>
                
                <div className="text-center p-6 bg-card rounded-lg border border-wood-medium group hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-wood-dark font-medium">Customer Support</div>
                </div>
              </div>

              {/* Additional Content Space for Future Use */}
              <div className="space-y-4">
                <div className="p-6 bg-gradient-to-r from-primary/5 to-wood-light rounded-lg border border-wood-medium">
                  <h4 className="text-lg font-bold text-primary mb-3">Why Choose In Design Land?</h4>
                  <ul className="space-y-2 text-wood-dark">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Expert craftsmanship with modern techniques</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Sustainable and eco-friendly materials</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Custom solutions for every space</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Timely delivery and professional service</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;