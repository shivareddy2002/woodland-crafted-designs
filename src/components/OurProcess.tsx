import { MessageCircle, Ruler, Monitor, Palette, Factory, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const OurProcess = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  const steps = [
    {
      icon: MessageCircle,
      title: "Free Consultation",
      description: "Share your vision and requirements with our expert team",
      step: "01"
    },
    {
      icon: Ruler,
      title: "Site Measurement",
      description: "Precise on-site measurements for perfect fit",
      step: "02"
    },
    {
      icon: Monitor,
      title: "3D Design Approval",
      description: "Visualize your space with realistic 3D renders",
      step: "03"
    },
    {
      icon: Palette,
      title: "Material Selection",
      description: "Choose from premium woods and finishes",
      step: "04"
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Expert craftsmanship in our modern facility",
      step: "05"
    },
    {
      icon: CheckCircle,
      title: "Installation & Handover",
      description: "Professional installation with quality assurance",
      step: "06"
    }
  ];

  const trustIndicators = [
    "100% Transparent Process",
    "No Hidden Costs",
    "On-Time Delivery"
  ];

  return (
    <section id="process" className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/20" ref={sectionRef as React.RefObject<HTMLElement>}>
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className={cn(
          "text-center mb-16 transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our 6-Step Working Process
          </h2>
          <p className={cn(
            "text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )} style={{ transitionDelay: "150ms" }}>
            A seamless journey from concept to completion.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={cn(
                "group relative bg-card rounded-2xl p-8 shadow-md hover-lift hover-glow border border-border/50 transition-all duration-500 ease-out",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {/* Step Number */}
              <div className={cn(
                "absolute -top-4 -right-4 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg shadow-lg transition-all duration-500",
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
              )} style={{ transitionDelay: `${400 + index * 100}ms` }}>
                {step.step}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-500">
                <step.icon className="w-8 h-8 text-primary icon-hover" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>

              {/* Connector Line (visible on larger screens) */}
              {index < steps.length - 1 && (index + 1) % 3 !== 0 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30" />
              )}
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className={cn(
          "mt-16 flex flex-wrap justify-center gap-8 text-center transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )} style={{ transitionDelay: "900ms" }}>
          {trustIndicators.map((indicator, index) => (
            <div 
              key={indicator}
              className={cn(
                "flex items-center gap-2 transition-all duration-500 ease-out",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: `${1000 + index * 100}ms` }}
            >
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">{indicator}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
