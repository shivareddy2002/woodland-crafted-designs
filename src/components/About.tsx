import { Award, Target, TreePine, Clock, Shield, Recycle, Hammer, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const About = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  const coreValues = [
    { icon: Shield, label: "Commitment to Quality" },
    { icon: Recycle, label: "Sustainability" },
    { icon: Hammer, label: "Innovation" },
    { icon: Users, label: "Customer Satisfaction" },
  ];

  const stats = [
    { icon: Award, value: "7+", label: "Years Experience" },
    { icon: Target, value: "30+", label: "Projects Completed" },
    { icon: TreePine, value: "100%", label: "Sustainable Wood" },
    { icon: Clock, value: "24/7", label: "Customer Support" },
  ];

  return (
    <section id="about" className="py-20 bg-wood-light min-h-screen" ref={sectionRef as React.RefObject<HTMLElement>}>
      <div className="container mx-auto px-4 lg:px-6 h-full">
        <div className="max-w-6xl mx-auto h-full">
          {/* Header */}
          <div className={cn(
            "text-center mb-12 transition-all duration-700 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              About In Design Land
            </h2>
            <div className={cn(
              "w-24 h-1 bg-wood-accent mx-auto mb-6 transition-all duration-700 ease-out",
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            )} style={{ transitionDelay: "200ms" }}></div>
            <p className={cn(
              "text-xl text-wood-dark transition-all duration-700 ease-out",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )} style={{ transitionDelay: "300ms" }}>
              Crafting exceptional wood solutions with passion and precision
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 h-full">
            {/* Content Section */}
            <div className="space-y-6">
              <div className={cn(
                "space-y-4 transition-all duration-700 ease-out",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )} style={{ transitionDelay: "400ms" }}>
                <p className="text-lg text-wood-dark leading-relaxed">
                  At IDL, we bring passion and precision into every detail of woodcraft. From timeless bedroom designs to modern kitchens and custom interiors, we deliver solutions that blend beauty, durability, and sustainability. Our commitment to quality craftsmanship is evident in every piece we create. From custom furniture to architectural elements, we source only the finest sustainable wood materials and employ traditional techniques combined with modern innovation. Each project is a reflection of our dedication to excellence, tailored to meet the unique vision and lifestyle of every client. With IDL, every space becomes a harmonious blend of artistry, functionality, and enduring elegance.
                </p>
              </div>

              {/* Core Values Section */}
              <div className={cn(
                "space-y-6 mt-8 transition-all duration-700 ease-out",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )} style={{ transitionDelay: "500ms" }}>
                <h3 className="text-2xl font-bold text-primary">Our Core Values</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {coreValues.map((value, index) => (
                    <div 
                      key={value.label}
                      className={cn(
                        "flex items-center space-x-3 p-4 bg-card rounded-lg border border-wood-medium hover-lift hover-glow transition-all duration-500 ease-out",
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      )}
                      style={{ transitionDelay: `${600 + index * 100}ms` }}
                    >
                      <value.icon className="w-6 h-6 text-primary flex-shrink-0 icon-hover" />
                      <span className="text-wood-dark font-medium">{value.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Statistics Section */}
            <div className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div 
                    key={stat.label}
                    className={cn(
                      "group text-center p-6 bg-card rounded-lg border border-wood-medium hover-lift hover-glow transition-all duration-500 ease-out",
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}
                    style={{ transitionDelay: `${500 + index * 100}ms` }}
                  >
                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                      <stat.icon className="w-6 h-6 text-primary icon-hover" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-wood-dark font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Personal Info */}
              <div 
                className={cn(
                  "p-6 bg-card rounded-lg border border-wood-medium shadow-md hover-lift transition-all duration-500 ease-out",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: "900ms" }}
              >
                <h4 className="text-lg font-bold text-primary mb-4">Meet Our Architect</h4>
                <div className="space-y-2 text-wood-dark">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Name:</span>
                    <span>Sreekanth Reddy</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Profession:</span>
                    <span>Architect</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Phone:</span>
                    <a href="tel:+919555222567" className="text-primary hover:underline link-underline">+91 9555222567</a>
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
