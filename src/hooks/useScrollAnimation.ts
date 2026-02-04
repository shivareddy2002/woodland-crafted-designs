import { useEffect, useRef, useState } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { threshold = 0.1, triggerOnce = true, rootMargin = "0px 0px -50px 0px" } = options;
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            setHasAnimated(true);
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, triggerOnce, rootMargin]);

  return { ref, isVisible: isVisible || hasAnimated };
};

// Hook for staggered animations
export const useStaggeredAnimation = (itemCount: number, baseDelay: number = 100) => {
  const { ref, isVisible } = useScrollAnimation();
  
  const getStaggerDelay = (index: number) => ({
    animationDelay: `${index * baseDelay}ms`,
    transitionDelay: `${index * baseDelay}ms`,
  });

  return { ref, isVisible, getStaggerDelay };
};

export default useScrollAnimation;
