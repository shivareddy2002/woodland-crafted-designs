import { useRef, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { Collection, SpaceItem } from "@/data/collectionsData";
import { useIsMobile } from "@/hooks/use-mobile";

interface SpaceCardProps {
  item: SpaceItem;
  index: number;
  isVisible: boolean;
}

const SpaceCard = ({ item, index, isVisible }: SpaceCardProps) => (
  <div
    className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-500 ease-out bg-card"
    style={{
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "scale(1)" : "scale(0.95)",
      transitionDelay: `${index * 100}ms`,
    }}
  >
    <div className="aspect-square overflow-hidden">
      <img
        src={item.image}
        alt={item.title}
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        loading="lazy"
      />
    </div>
    <div className="p-4">
      <h4 className="text-sm font-semibold text-foreground md:text-base">{item.title}</h4>
      <span
        className={`mt-1 inline-block rounded-full px-3 py-0.5 text-xs font-medium ${
          item.type === "Core"
            ? "bg-primary/10 text-primary"
            : "bg-accent/10 text-accent"
        }`}
      >
        {item.type}
      </span>
    </div>
    {/* Hover shadow overlay */}
    <div className="pointer-events-none absolute inset-0 rounded-lg transition-shadow duration-500 group-hover:shadow-[0_12px_40px_-10px_hsl(25_45%_25%/0.2)]" />
  </div>
);

interface SpaceRowCarouselProps {
  items: SpaceItem[];
  label: string;
  isVisible: boolean;
}

const SpaceRowCarousel = ({ items, label, isVisible }: SpaceRowCarouselProps) => {
  const isMobile = useIsMobile();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback((direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.firstElementChild?.getBoundingClientRect().width || 300;
    const gap = 16;
    const scrollAmount = direction === "left" ? -(cardWidth + gap) : cardWidth + gap;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }, []);

  return (
    <div className="mb-8">
      <h3 className="mb-4 text-lg font-semibold text-foreground">
        {label} Spaces
      </h3>
      <div className="relative">
        {/* Left arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute -left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border bg-card shadow-md transition-all duration-300 hover:bg-secondary hover:shadow-lg md:-left-4"
          aria-label={`Previous ${label} space`}
        >
          <ChevronLeft className="h-4 w-4 text-foreground" />
        </button>

        {/* Cards container */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth px-6 scrollbar-hide"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {items.map((item, idx) => (
            <div
              key={item.title}
              className={`flex-shrink-0 ${isMobile ? "w-[calc(100%-3rem)]" : "w-[calc(33.333%-0.75rem)]"}`}
              style={{ scrollSnapAlign: "start" }}
            >
              <SpaceCard item={item} index={idx} isVisible={isVisible} />
            </div>
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute -right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border bg-card shadow-md transition-all duration-300 hover:bg-secondary hover:shadow-lg md:-right-4"
          aria-label={`Next ${label} space`}
        >
          <ChevronRight className="h-4 w-4 text-foreground" />
        </button>
      </div>
    </div>
  );
};

interface CollectionDetailModalProps {
  collection: Collection | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CollectionDetailModal = ({ collection, open, onOpenChange }: CollectionDetailModalProps) => {
  const { ref, isVisible } = useScrollAnimation();

  if (!collection) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] w-[95vw] max-w-4xl overflow-y-auto rounded-lg border-border bg-background p-4 md:p-8">
        <DialogHeader className="mb-6">
          <DialogTitle className="text-2xl font-bold text-foreground md:text-3xl">
            {collection.title}
          </DialogTitle>
        </DialogHeader>

        <div ref={ref as React.RefObject<HTMLDivElement>}>
          {/* Core Spaces Row */}
          <SpaceRowCarousel
            items={collection.coreSpaces}
            label="Core"
            isVisible={isVisible}
          />

          {/* Enhanced Spaces Row */}
          <SpaceRowCarousel
            items={collection.enhancedSpaces}
            label="Enhanced"
            isVisible={isVisible}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CollectionDetailModal;
