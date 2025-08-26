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
                At In Design Land, we believe that wood is more than just a material – it's a living element that brings warmth, character, and natural beauty to every space. For over a decade, we have been dedicated to providing premium wood solutions that transform houses into homes and offices into inspiring workspaces.
              </p>
              
              <p className="text-lg text-wood-dark leading-relaxed">
                Our commitment to quality craftsmanship is evident in every piece we create. From custom furniture to architectural elements, we source only the finest sustainable wood materials and employ traditional techniques combined with modern innovation.
              </p>

              <p className="text-lg text-wood-dark leading-relaxed">
                We take pride in our ability to understand our clients' unique visions and translate them into stunning wooden creations that stand the test of time. Every project is a partnership, and every piece tells a story of meticulous attention to detail.
              </p>
            </div>

            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-card rounded-lg border border-wood-medium">
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <div className="text-wood-dark">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-card rounded-lg border border-wood-medium">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-wood-dark">Projects Completed</div>
                </div>
                <div className="text-center p-6 bg-card rounded-lg border border-wood-medium">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-wood-dark">Sustainable Wood</div>
                </div>
                <div className="text-center p-6 bg-card rounded-lg border border-wood-medium">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-wood-dark">Customer Support</div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary">Our Values</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-wood-accent rounded-full mr-3"></div>
                    <span className="text-wood-dark">Commitment to Quality</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-wood-accent rounded-full mr-3"></div>
                    <span className="text-wood-dark">Environmental Sustainability</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-wood-accent rounded-full mr-3"></div>
                    <span className="text-wood-dark">Innovative Design Solutions</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-wood-accent rounded-full mr-3"></div>
                    <span className="text-wood-dark">Customer Satisfaction</span>
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