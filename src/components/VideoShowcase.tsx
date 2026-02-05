import { useState, useEffect, useRef, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Play, Pause, Volume2, VolumeX, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

import videoLivingSpace1 from "@/assets/video-living-space-1.mp4";
import videoLivingSpace2 from "@/assets/video-living-space-2.mp4";
import videoWarmthOfWood from "@/assets/video-warmth-of-wood.mp4";

const videos = [
  {
    id: 1,
    title: "Modern Living Space Reveal",
    description: "Experience the elegance of contemporary living with our signature wood finishes",
    category: "Living Room",
    src: videoLivingSpace1,
  },
  {
    id: 2,
    title: "Luxury Living Transformation",
    description: "Watch how we transform ordinary spaces into extraordinary living experiences",
    category: "Living Room",
    src: videoLivingSpace2,
  },
  {
    id: 3,
    title: "The Warmth of Wood",
    description: "Discover how natural wood textures bring warmth and character to any interior",
    category: "Wood Interiors",
    src: videoWarmthOfWood,
  },
];

const VideoShowcase = () => {
  const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(null);
  const [isPlaying, setIsPlaying] = useState<{ [key: number]: boolean }>({});
  const [isMuted, setIsMuted] = useState<{ [key: number]: boolean }>({});
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});
  const sectionRef = useRef<HTMLElement>(null);
  const { ref: animationRef, isVisible } = useScrollAnimation();

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
    loop: false,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Autoplay videos when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Play all videos when section is visible
            videos.forEach((video) => {
              const videoEl = videoRefs.current[video.id];
              if (videoEl) {
                videoEl.play().catch(() => {
                  // Autoplay might be blocked, user needs to interact
                });
                setIsPlaying((prev) => ({ ...prev, [video.id]: true }));
              }
            });
          } else {
            // Pause all videos when section is out of view
            videos.forEach((video) => {
              const videoEl = videoRefs.current[video.id];
              if (videoEl) {
                videoEl.pause();
                setIsPlaying((prev) => ({ ...prev, [video.id]: false }));
              }
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const togglePlay = (videoId: number, videoElement: HTMLVideoElement) => {
    if (isPlaying[videoId]) {
      videoElement.pause();
    } else {
      videoElement.play();
    }
    setIsPlaying((prev) => ({ ...prev, [videoId]: !prev[videoId] }));
  };

  const toggleMute = (videoId: number, videoElement: HTMLVideoElement) => {
    videoElement.muted = !videoElement.muted;
    setIsMuted((prev) => ({ ...prev, [videoId]: !prev[videoId] }));
  };

  return (
    <section ref={(el) => {
      sectionRef.current = el;
      if (animationRef && typeof animationRef === 'object' && 'current' in animationRef) {
        (animationRef as React.MutableRefObject<HTMLElement | null>).current = el;
      }
    }} className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className={cn(
          "text-center mb-16 transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <span className={cn(
            "inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 transition-all duration-500",
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )} style={{ transitionDelay: "100ms" }}>
            Video Showcase
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Experience Our <span className="text-primary">Craftsmanship</span>
          </h2>
          <p className={cn(
            "text-muted-foreground text-lg max-w-2xl mx-auto transition-all duration-700 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )} style={{ transitionDelay: "200ms" }}>
            Immerse yourself in our world of premium interior design through stunning video walkthroughs
          </p>
        </div>

        {/* Video Carousel */}
        <div className={cn(
          "relative transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )} style={{ transitionDelay: "300ms" }}>
          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className={cn(
              "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 h-12 w-12 rounded-full border-primary/30 bg-background/95 backdrop-blur-sm shadow-lg transition-all duration-300",
              "hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-xl",
              "disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-background disabled:hover:text-foreground",
              "hidden md:flex"
            )}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous slide</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            disabled={!canScrollNext}
            className={cn(
              "absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 h-12 w-12 rounded-full border-primary/30 bg-background/95 backdrop-blur-sm shadow-lg transition-all duration-300",
              "hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-xl",
              "disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-background disabled:hover:text-foreground",
              "hidden md:flex"
            )}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next slide</span>
          </Button>

          {/* Carousel Container */}
          <div className="overflow-hidden mx-0 md:mx-8" ref={emblaRef}>
            <div className="flex -ml-4 md:-ml-6">
              {videos.map((video, index) => (
                <div
                  key={video.id}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 md:pl-6 min-w-0"
                >
                  <div className="group relative bg-card rounded-2xl overflow-hidden shadow-lg hover-lift hover-glow transition-all duration-500 ease-out">
                    {/* Video Container */}
                    <div className="relative aspect-[9/16] sm:aspect-[9/14] lg:aspect-[9/16] overflow-hidden">
                      <video
                        ref={(el) => { videoRefs.current[video.id] = el; }}
                        src={video.src}
                        className="w-full h-full object-cover"
                        loop
                        playsInline
                        onClick={() => setSelectedVideo(video)}
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 group-hover:opacity-90 transition-opacity duration-300" />
                      
                      {/* Category Badge */}
                      <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                        {video.category}
                      </span>

                      {/* Play/Pause Controls */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            const videoEl = videoRefs.current[video.id];
                            if (videoEl) togglePlay(video.id, videoEl);
                          }}
                          className="w-16 h-16 bg-primary/90 hover:bg-primary rounded-full flex items-center justify-center text-primary-foreground transform transition-all duration-300 hover:scale-110 shadow-lg"
                        >
                          {isPlaying[video.id] ? (
                            <Pause className="w-6 h-6" />
                          ) : (
                            <Play className="w-6 h-6 ml-1" />
                          )}
                        </button>
                      </div>

                      {/* Volume Control */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          const videoEl = videoRefs.current[video.id];
                          if (videoEl) toggleMute(video.id, videoEl);
                        }}
                        className="absolute bottom-20 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-300"
                      >
                        {isMuted[video.id] ? (
                          <Volume2 className="w-4 h-4" />
                        ) : (
                          <VolumeX className="w-4 h-4" />
                        )}
                      </button>

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-xl font-bold text-white mb-2">{video.title}</h3>
                        <p className="text-white/80 text-sm line-clamp-2">{video.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  selectedIndex === index
                    ? "bg-primary w-6"
                    : "bg-primary/30 hover:bg-primary/50"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Fullscreen Modal */}
        <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
          <DialogContent className="max-w-4xl p-0 bg-black border-none overflow-hidden">
            {selectedVideo && (
              <div className="relative">
                <video
                  src={selectedVideo.src}
                  className="w-full max-h-[80vh] object-contain"
                  controls
                  autoPlay
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedVideo.title}</h3>
                  <p className="text-white/80">{selectedVideo.description}</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default VideoShowcase;
