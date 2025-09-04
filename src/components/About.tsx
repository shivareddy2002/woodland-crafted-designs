import { Award, Target, TreePine, Clock, Shield, Recycle, Hammer, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-wood-light">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              About In Design Land
            </h2>
            <div className="w-24 h-1 bg-wood-accent mx-auto mb-6"></div>
            <p className="text-xl text-wood-dark">
              Crafting exceptional wood solutions with passion and precision
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-wood-dark leading-relaxed">
                At IDL, we bring passion and precision into every detail of woodcraft. From timeless bedroom designs to modern kitchens and custom interiors, we deliver solutions that blend beauty, durability, and sustainability.
              </p>
              
              <p className="text-lg text-wood-dark leading-relaxed">
                Our commitment to quality craftsmanship is evident in every piece we create. From custom furniture to architectural elements, we source only the finest sustainable wood materials and employ traditional techniques combined with modern innovation.
              </p>
            </div>

            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-card rounded-lg border border-wood-medium group hover:shadow-lg transition-all duration-300">
                  <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <div className="text-wood-dark">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-card rounded-lg border border-wood-medium group hover:shadow-lg transition-all duration-300">
                  <Target className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-wood-dark">Projects Completed</div>
                </div>
                <div className="text-center p-6 bg-card rounded-lg border border-wood-medium group hover:shadow-lg transition-all duration-300">
                  <TreePine className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-wood-dark">Sustainable Wood</div>
                </div>
                <div className="text-center p-6 bg-card rounded-lg border border-wood-medium group hover:shadow-lg transition-all duration-300">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-wood-dark">Customer Support</div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-bold text-primary">Our Core Values</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 p-3 bg-card/50 rounded-lg border border-wood-medium/50">
                    <Shield className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-wood-dark font-medium">Commitment to Quality</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-card/50 rounded-lg border border-wood-medium/50">
                    <Recycle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-wood-dark font-medium">Sustainability</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-card/50 rounded-lg border border-wood-medium/50">
                    <Hammer className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-wood-dark font-medium">Innovation</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-card/50 rounded-lg border border-wood-medium/50">
                    <Users className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-wood-dark font-medium">Customer Satisfaction</span>
                  </div>
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