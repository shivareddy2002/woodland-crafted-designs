import { useState, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useIsMobile } from "@/hooks/use-mobile";
import { collections } from "@/data/collectionsData";
import type { Collection } from "@/data/collectionsData";
import CollectionDetailModal from "@/components/CollectionDetailModal";

interface CollectionCardProps {
  collection: Collection;
  index: number;
  isVisible: boolean;
  onClick: () => void;
}

const CollectionCard = ({ collection, index, isVisible, onClick }: CollectionCardProps) => (
  <div
    className="group cursor-pointer overflow-hidden rounded-xl bg-card shadow-md transition-all duration-500 ease-out"
    style={{
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0)" : "translateY(20px)",
      transitionDelay: `${index * 120}ms`,
    }}
    onClick={onClick}
  >
    <div className="aspect-square overflow-hidden">
      <img
        src={collection.image}
        alt={collection.title}
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        loading="lazy"
      />
    </div>
    <div className="p-5">
      <h3 className="text-base font-semibold text-foreground md:text-lg">
        {collection.title}
      </h3>
    </div>
    {/* Hover shadow */}
    <div className="pointer-events-none absolute inset-0 rounded-xl transition-shadow duration-500 group-hover:shadow-[0_16px_48px_-12px_hsl(25_45%_25%/0.25)]" />
  </div>
);

const HomeSpaceCollections = () => {
  const [selectedCollection, setSelectedCollection] = useState<Collection | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const isMobile = useIsMobile();
  const scrollRef = useRef<HTMLDivElement>(null);
  const { ref: sectionRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ rootMargin: "0px 0px -30px 0px" });

  const handleCollectionClick = useCallback((collection: Collection) => {
    setSelectedCollection(collection);
    setModalOpen(true);
  }, []);

  const scroll = useCallback((direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.firstElementChild?.getBoundingClientRect().width || 350;
    const gap = 24;
    const scrollAmount = direction === "left" ? -(cardWidth + gap) : cardWidth + gap;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }, []);

  return (
    <section id="home-space-collections" className="section-padding bg-background">
      <div className="container mx-auto container-spacing">
        {/* Section Header */}
        <div
          ref={sectionRef as React.RefObject<HTMLDivElement>}
          className="mb-14 text-center transition-all duration-800 ease-out"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(24px)",
            transitionDuration: "800ms",
          }}
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Home Space Collections
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
            Modular living spaces designed for comfort, productivity, and lifestyle
          </p>
        </div>

        {/* Collection Cards Carousel */}
        <div
          ref={cardsRef as React.RefObject<HTMLDivElement>}
          className="relative"
        >
          {/* Left arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border bg-card shadow-lg transition-all duration-300 hover:bg-secondary hover:shadow-xl md:-left-5"
            aria-label="Previous collection"
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>

          {/* Cards container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth px-8 pb-4 scrollbar-hide"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {collections.map((collection, idx) => (
              <div
                key={collection.id}
                className={`relative flex-shrink-0 ${
                  isMobile
                    ? "w-[calc(100%-4rem)]"
                    : "w-[calc(33.333%-1.25rem)]"
                }`}
                style={{ scrollSnapAlign: "start" }}
              >
                <CollectionCard
                  collection={collection}
                  index={idx}
                  isVisible={cardsVisible}
                  onClick={() => handleCollectionClick(collection)}
                />
              </div>
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute -right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border bg-card shadow-lg transition-all duration-300 hover:bg-secondary hover:shadow-xl md:-right-5"
            aria-label="Next collection"
          >
            <ChevronRight className="h-5 w-5 text-foreground" />
          </button>
        </div>
      </div>

      {/* Collection Detail Modal */}
      <CollectionDetailModal
        collection={selectedCollection}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </section>
  );
};

export default HomeSpaceCollections;
