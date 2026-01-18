import { Button } from "@/components/ui/button";
import { Eye, Lightbulb, Palette, Layout } from "lucide-react";

const DesignPreview = () => {
  const features = [
    {
      icon: Layout,
      title: "Accurate Layouts",
      description: "See exact room proportions and furniture placement"
    },
    {
      icon: Palette,
      title: "Material Preview",
      description: "Visualize different wood types and finishes"
    },
    {
      icon: Lightbulb,
      title: "Lighting Simulation",
      description: "Experience realistic lighting effects"
    },
    {
      icon: Eye,
      title: "360° Views",
      description: "Explore your space from every angle"
    }
  ];

  const handleRequest3DDesign = () => {
    const quoteSection = document.getElementById('quote-generator');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="design-preview" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              See Before You Build
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Visualize your dream space before execution begins.
            </p>
            <p className="text-foreground/80 mb-8 leading-relaxed">
              We provide realistic 3D interior designs so you can visualize your space 
              before production begins. Experience accurate layouts, materials, lighting, 
              and finishes before making final decisions.
            </p>

            {/* Feature List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              onClick={handleRequest3DDesign}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Eye className="w-5 h-5 mr-2" />
              Request 3D Design
            </Button>
          </div>

          {/* Image Grid Side */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 aspect-[4/3] flex items-center justify-center border border-primary/20 shadow-lg">
                <div className="text-center p-4">
                  <Layout className="w-12 h-12 text-primary mx-auto mb-2" />
                  <span className="text-sm font-medium text-primary">Living Room 3D</span>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 aspect-square flex items-center justify-center border border-primary/20 shadow-lg">
                <div className="text-center p-4">
                  <Palette className="w-12 h-12 text-primary mx-auto mb-2" />
                  <span className="text-sm font-medium text-primary">Kitchen 3D</span>
                </div>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 aspect-square flex items-center justify-center border border-primary/20 shadow-lg">
                <div className="text-center p-4">
                  <Lightbulb className="w-12 h-12 text-primary mx-auto mb-2" />
                  <span className="text-sm font-medium text-primary">Bedroom 3D</span>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 aspect-[4/3] flex items-center justify-center border border-primary/20 shadow-lg">
                <div className="text-center p-4">
                  <Eye className="w-12 h-12 text-primary mx-auto mb-2" />
                  <span className="text-sm font-medium text-primary">Office 3D</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignPreview;
