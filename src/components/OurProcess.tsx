import { MessageCircle, Ruler, Monitor, Palette, Factory, CheckCircle } from "lucide-react";

const OurProcess = () => {
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

  return (
    <section id="process" className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our 6-Step Working Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A seamless journey from concept to completion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border/50"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                {step.step}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <step.icon className="w-8 h-8 text-primary" />
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
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-center">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-primary" />
            <span className="text-muted-foreground">100% Transparent Process</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-primary" />
            <span className="text-muted-foreground">No Hidden Costs</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-primary" />
            <span className="text-muted-foreground">On-Time Delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
