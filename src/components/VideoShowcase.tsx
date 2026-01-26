import { useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

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
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Video Showcase
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Experience Our <span className="text-primary">Craftsmanship</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Immerse yourself in our world of premium interior design through stunning video walkthroughs
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Video Container */}
              <div className="relative aspect-[9/16] overflow-hidden">
                <video
                  id={`video-${video.id}`}
                  src={video.src}
                  className="w-full h-full object-cover"
                  loop
                  muted={!isMuted[video.id]}
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
                      const videoEl = document.getElementById(`video-${video.id}`) as HTMLVideoElement;
                      togglePlay(video.id, videoEl);
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
                    const videoEl = document.getElementById(`video-${video.id}`) as HTMLVideoElement;
                    toggleMute(video.id, videoEl);
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
          ))}
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
