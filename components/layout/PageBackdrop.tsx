"use client";

import { animate, remove } from "animejs";
import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/motion/anime";

export default function PageBackdrop() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || prefersReducedMotion()) return;

    const glowA = element.querySelector(".page-backdrop__glow--a");
    const glowB = element.querySelector(".page-backdrop__glow--b");
    const sweep = element.querySelector(".page-backdrop__sweep");
    const grid = element.querySelector(".page-backdrop__grid");

    if (glowA) {
      animate(glowA, {
        translateX: [-24, 18],
        translateY: [0, 20],
        scale: [0.96, 1.05],
        direction: "alternate",
        duration: 7200,
        loop: true,
        ease: "inOutSine",
      });
    }

    if (glowB) {
      animate(glowB, {
        translateX: [22, -18],
        translateY: [0, -18],
        scale: [1, 1.04],
        direction: "alternate",
        duration: 7800,
        loop: true,
        ease: "inOutSine",
      });
    }

    if (sweep) {
      animate(sweep, {
        translateX: ["-8%", "8%"],
        opacity: [0.08, 0.22],
        direction: "alternate",
        duration: 6600,
        loop: true,
        ease: "inOutSine",
      });
    }

    if (grid) {
      animate(grid, {
        translateY: [0, -16],
        opacity: [0.4, 0.55],
        direction: "alternate",
        duration: 8400,
        loop: true,
        ease: "inOutSine",
      });
    }

    return () => {
      remove(element.querySelectorAll("span"));
    };
  }, []);

  return (
    <div aria-hidden="true" className="page-backdrop" ref={ref}>
      <span className="page-backdrop__glow page-backdrop__glow--a" />
      <span className="page-backdrop__glow page-backdrop__glow--b" />
      <span className="page-backdrop__grid" />
      <span className="page-backdrop__motif" />
      <span className="page-backdrop__sweep" />
      <span className="page-backdrop__vignette" />
    </div>
  );
}

