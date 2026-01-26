import { Button } from "@/components/ui/button";
import { Eye, Lightbulb, Palette, Layout } from "lucide-react";
import livingRoom3D from "@/assets/3d-living-room.jpg";
import bedroom3D from "@/assets/3d-bedroom.jpg";
import kitchen3D from "@/assets/3d-kitchen.jpg";
import office3D from "@/assets/3d-office.jpg";

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

  const galleryImages = [
    { src: livingRoom3D, label: "Living Room 3D", aspect: "aspect-[4/3]" },
    { src: bedroom3D, label: "Bedroom 3D", aspect: "aspect-square" },
    { src: kitchen3D, label: "Kitchen 3D", aspect: "aspect-square" },
    { src: office3D, label: "Office 3D", aspect: "aspect-[4/3]" }
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
              <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img 
                  src={galleryImages[0].src} 
                  alt={galleryImages[0].label}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-primary-foreground font-semibold">{galleryImages[0].label}</span>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img 
                  src={galleryImages[2].src} 
                  alt={galleryImages[2].label}
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-primary-foreground font-semibold">{galleryImages[2].label}</span>
                </div>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img 
                  src={galleryImages[1].src} 
                  alt={galleryImages[1].label}
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-primary-foreground font-semibold">{galleryImages[1].label}</span>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img 
                  src={galleryImages[3].src} 
                  alt={galleryImages[3].label}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-primary-foreground font-semibold">{galleryImages[3].label}</span>
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
