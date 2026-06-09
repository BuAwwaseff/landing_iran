"use client";

import { useEffect, useRef } from "react";
import { observeOnce } from "@/motion/observers";
import { revealLeft, revealScale, revealUp } from "@/motion/presets";
import { cn } from "@/lib/cn";
import { prefersReducedMotion } from "@/motion/anime";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: "up" | "left" | "scale";
};

export default function Reveal({
  children,
  className,
  delay = 0,
  variant = "up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (prefersReducedMotion()) {
      element.dataset.ready = "true";
      element.style.opacity = "1";
      element.style.transform = "none";
      return;
    }

    element.style.opacity = "0";
    element.style.transform =
      variant === "left"
        ? "translateX(18px)"
        : variant === "scale"
          ? "scale(0.96)"
          : "translateY(18px)";

    return observeOnce(element, () => {
      element.dataset.ready = "true";

      switch (variant) {
        case "left":
          revealLeft(element, delay);
          break;
        case "scale":
          revealScale(element, delay);
          break;
        case "up":
        default:
          revealUp(element, delay);
          break;
      }
    });
  }, [delay, variant]);

  return (
    <div className={cn("reveal", className)} ref={ref}>
      {children}
    </div>
  );
}
