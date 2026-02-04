import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Search, Play, ArrowRight, Facebook, Twitter, Linkedin, Share2, X } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

// Import blog images
import blogKitchenImage from "@/assets/blog-modular-kitchen.jpg";
import blogBedroomImage from "@/assets/blog-wooden-bedroom.jpg";
import blogSustainableImage from "@/assets/blog-sustainable-wood.jpg";

interface BlogPost {
  id: number;
  title: string;
  category: string;
  shortDescription: string;
  image: string;
  hasVideo: boolean;
  author: string;
  date: string;
  fullContent: {
    introduction: string;
    sections: { title: string; content: string }[];
    conclusion: string;
  };
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Top Modular Kitchen Design Trends in India (2026)",
    category: "Modular Kitchen",
    shortDescription: "Discover the latest modular kitchen styles, layouts, and materials transforming modern Indian homes.",
    image: blogKitchenImage,
    hasVideo: true,
    author: "IDL Design Team",
    date: "January 15, 2026",
    fullContent: {
      introduction: "The modular kitchen has revolutionized how Indian homes approach cooking spaces. In 2026, we're seeing exciting new trends that combine functionality with stunning aesthetics. From smart storage solutions to sustainable materials, let's explore what's shaping modern Indian kitchens.",
      sections: [
        {
          title: "1. Handleless Cabinets with Push-to-Open Mechanism",
          content: "Clean lines and minimalist aesthetics are defining 2026 kitchens. Handleless cabinets with push-to-open or touch-latch mechanisms create sleek, uninterrupted surfaces that are both beautiful and easy to clean."
        },
        {
          title: "2. Warm Wood Tones with Matte Finishes",
          content: "Natural wood finishes in walnut, oak, and teak are making a strong comeback. Paired with matte finishes, these warm tones create inviting spaces that feel both modern and timeless."
        },
        {
          title: "3. Smart Storage Solutions",
          content: "Corner carousels, pull-out pantries, and custom drawer organizers are must-haves. Magic corners and tall units maximize every inch of space, essential for Indian homes where storage is premium."
        },
        {
          title: "4. Integrated Appliances",
          content: "Built-in ovens, concealed chimneys, and integrated refrigerators create seamless designs. This trend emphasizes clean aesthetics while maintaining full functionality."
        },
        {
          title: "5. Quartz and Engineered Stone Countertops",
          content: "Durable, stain-resistant, and available in stunning patterns, engineered stone countertops are replacing traditional granite. They offer the beauty of natural stone with superior performance."
        }
      ],
      conclusion: "Ready to transform your kitchen with these 2026 trends? Contact IDL Design Team for a free consultation and let us bring your dream modular kitchen to life!"
    }
  },
  {
    id: 2,
    title: "How to Design a Perfect Wooden Bedroom Interior",
    category: "Bedroom Interiors",
    shortDescription: "Learn how wood can bring warmth, comfort, and elegance to your bedroom space.",
    image: blogBedroomImage,
    hasVideo: true,
    author: "IDL Design Team",
    date: "January 10, 2026",
    fullContent: {
      introduction: "A wooden bedroom interior creates a sanctuary of warmth and tranquility. Wood's natural beauty, combined with its versatility, makes it the perfect material for creating bedrooms that are both luxurious and comfortable. Here's how to design your perfect wooden bedroom.",
      sections: [
        {
          title: "Benefits of Wooden Bedrooms",
          content: "Wood naturally regulates humidity, creates acoustic comfort, and adds warmth to any space. It's durable, timeless, and can be refinished to look new for decades. The psychological benefits include reduced stress and better sleep quality."
        },
        {
          title: "Choosing the Right Wood",
          content: "Teak and sheesham are excellent for durability and rich color. Mango wood offers affordability with character. For a lighter aesthetic, pine or rubber wood work beautifully. Consider the room's lighting when selecting wood tones."
        },
        {
          title: "Smart Storage Integration",
          content: "Wooden wardrobes with mirror panels save space. Platform beds with under-storage maximize utility. Consider wooden headboards with built-in shelving for books and accessories."
        },
        {
          title: "Lighting That Complements Wood",
          content: "Warm LED lighting (2700K-3000K) enhances wood grain. Recessed ceiling lights paired with wooden pendant fixtures create layers. Consider cove lighting behind wooden wall panels for dramatic effect."
        }
      ],
      conclusion: "Transform your bedroom into a wooden haven with IDL Design Team. We specialize in custom wooden interiors that reflect your personality while maximizing comfort and functionality."
    }
  },
  {
    id: 3,
    title: "Why Sustainable Wood is the Future of Interior Design",
    category: "Sustainability",
    shortDescription: "Understand the importance of eco-friendly wood materials in modern interior projects.",
    image: blogSustainableImage,
    hasVideo: false,
    author: "IDL Design Team",
    date: "January 5, 2026",
    fullContent: {
      introduction: "As environmental consciousness grows, sustainable wood has emerged as the cornerstone of responsible interior design. Choosing eco-friendly materials isn't just good for the planet—it's a smart investment in quality, durability, and health.",
      sections: [
        {
          title: "What is Sustainable Wood?",
          content: "Sustainable wood comes from responsibly managed forests certified by organizations like FSC (Forest Stewardship Council). These forests are harvested at rates that allow natural regeneration, ensuring wood availability for future generations."
        },
        {
          title: "Environmental Benefits",
          content: "Sustainable forestry protects biodiversity, prevents deforestation, and maintains carbon sinks. Unlike synthetic materials, wood is biodegradable and has a lower carbon footprint when sourced responsibly."
        },
        {
          title: "Health and Indoor Air Quality",
          content: "Sustainable wood products use low-VOC finishes and adhesives, improving indoor air quality. Natural wood also regulates humidity, reducing allergens and creating healthier living spaces."
        },
        {
          title: "Long-term Cost Advantages",
          content: "While sustainable wood may have a higher upfront cost, its durability means fewer replacements. Quality wood furniture can last generations, making it more economical over time compared to cheaper alternatives."
        }
      ],
      conclusion: "At IDL Design, we're committed to sustainable practices. Our certified sustainable wood options let you create beautiful spaces while protecting our environment. Request a consultation to explore eco-friendly options for your project."
    }
  }
];

const categories = ["All", "Modular Kitchen", "Bedroom Interiors", "Sustainability"];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleShare = (platform: string, post: BlogPost) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(post.title);
    
    let shareUrl = "";
    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`;
        break;
    }
    window.open(shareUrl, "_blank", "width=600,height=400");
  };

  return (
    <section id="blog" className="py-16 md:py-24 bg-gradient-to-b from-secondary/20 to-background" ref={sectionRef as React.RefObject<HTMLElement>}>
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className={cn(
          "text-center mb-12 transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Design Insights & Inspiration
          </h2>
          <p className={cn(
            "text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )} style={{ transitionDelay: "150ms" }}>
            Expert tips, trends, and ideas to transform your living and working spaces.
          </p>
        </div>

        {/* Search and Filter */}
        <div className={cn(
          "flex flex-col md:flex-row gap-4 mb-10 max-w-4xl mx-auto transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )} style={{ transitionDelay: "250ms" }}>
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 bg-card border-border/50 transition-all duration-300 focus:shadow-md"
            />
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "rounded-full transition-all duration-300 hover:scale-105",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
                style={{ transitionDelay: `${300 + index * 50}ms` }}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <article
              key={post.id}
              className={cn(
                "group bg-card rounded-2xl overflow-hidden shadow-md hover-lift hover-glow border border-border/50 transition-all duration-500 ease-out",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover image-zoom"
                />
                
                {/* Video Overlay */}
                {post.hasVideo && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center">
                      <Play className="w-7 h-7 text-primary-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>
                )}
                
                {/* Category Badge */}
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  {post.category}
                </Badge>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {post.shortDescription}
                </p>

                <div className="flex items-center justify-between">
                  <Button
                    variant="ghost"
                    className="text-primary hover:text-primary/80 p-0 h-auto font-semibold"
                    onClick={() => setSelectedPost(post)}
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>

                  {/* Social Share Icons */}
                  <div className="flex items-center gap-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-8 h-8 text-muted-foreground hover:text-primary"
                      onClick={() => handleShare("facebook", post)}
                    >
                      <Facebook className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-8 h-8 text-muted-foreground hover:text-primary"
                      onClick={() => handleShare("twitter", post)}
                    >
                      <Twitter className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-8 h-8 text-muted-foreground hover:text-primary"
                      onClick={() => handleShare("linkedin", post)}
                    >
                      <Linkedin className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No articles found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Blog Detail Modal */}
      <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedPost && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-primary text-primary-foreground">
                    {selectedPost.category}
                  </Badge>
                  {selectedPost.hasVideo && (
                    <Badge variant="outline" className="gap-1">
                      <Play className="w-3 h-3" /> Video Available
                    </Badge>
                  )}
                </div>
                <DialogTitle className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                  {selectedPost.title}
                </DialogTitle>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>By {selectedPost.author}</span>
                  <span>•</span>
                  <span>{selectedPost.date}</span>
                </div>
              </DialogHeader>

              {/* Featured Image */}
              <div className="relative rounded-xl overflow-hidden my-6">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-64 object-cover"
                />
                {selectedPost.hasVideo && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>
                )}
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground/80 leading-relaxed text-lg mb-6">
                  {selectedPost.fullContent.introduction}
                </p>

                {selectedPost.fullContent.sections.map((section, index) => (
                  <div key={index} className="mb-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {section.title}
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                ))}

                {/* Conclusion CTA */}
                <div className="bg-primary/10 rounded-xl p-6 mt-8">
                  <p className="text-foreground font-medium mb-4">
                    {selectedPost.fullContent.conclusion}
                  </p>
                  <Button
                    onClick={() => {
                      setSelectedPost(null);
                      const quoteSection = document.getElementById('quote-generator');
                      if (quoteSection) quoteSection.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-primary hover:bg-primary/90"
                  >
                    Get Free Consultation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>

              {/* Share Section */}
              <div className="flex items-center justify-between pt-6 border-t border-border mt-6">
                <span className="text-muted-foreground font-medium flex items-center gap-2">
                  <Share2 className="w-4 h-4" /> Share this article
                </span>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleShare("facebook", selectedPost)}
                  >
                    <Facebook className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleShare("twitter", selectedPost)}
                  >
                    <Twitter className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleShare("linkedin", selectedPost)}
                  >
                    <Linkedin className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Blog;
