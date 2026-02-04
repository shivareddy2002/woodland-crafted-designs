import { ReactNode, HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type AnimationType = "fade-up" | "fade-in" | "scale-in" | "slide-left" | "slide-right";

interface AnimatedSectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
}

const animationClasses: Record<AnimationType, { initial: string; animate: string }> = {
  "fade-up": {
    initial: "opacity-0 translate-y-8",
    animate: "opacity-100 translate-y-0",
  },
  "fade-in": {
    initial: "opacity-0",
    animate: "opacity-100",
  },
  "scale-in": {
    initial: "opacity-0 scale-95",
    animate: "opacity-100 scale-100",
  },
  "slide-left": {
    initial: "opacity-0 translate-x-8",
    animate: "opacity-100 translate-x-0",
  },
  "slide-right": {
    initial: "opacity-0 -translate-x-8",
    animate: "opacity-100 translate-x-0",
  },
};

export const AnimatedSection = ({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 700,
  className,
  ...props
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useScrollAnimation();
  const { initial, animate } = animationClasses[animation];

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        "transition-all ease-out",
        isVisible ? animate : initial,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

interface AnimatedItemProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  index?: number;
  animation?: AnimationType;
  baseDelay?: number;
  staggerDelay?: number;
  duration?: number;
  isVisible?: boolean;
  className?: string;
}

export const AnimatedItem = ({
  children,
  index = 0,
  animation = "fade-up",
  baseDelay = 0,
  staggerDelay = 100,
  duration = 600,
  isVisible = true,
  className,
  ...props
}: AnimatedItemProps) => {
  const { initial, animate } = animationClasses[animation];
  const delay = baseDelay + index * staggerDelay;

  return (
    <div
      className={cn(
        "transition-all ease-out",
        isVisible ? animate : initial,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
