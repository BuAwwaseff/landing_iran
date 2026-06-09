import { animate } from "animejs";
import { motionTokens, prefersReducedMotion } from "@/motion/anime";

export function revealUp(targets: Element, delay = 0) {
  if (prefersReducedMotion()) {
    (targets as HTMLElement).style.opacity = "1";
    (targets as HTMLElement).style.transform = "none";
    return;
  }

  animate(targets, {
    opacity: [0, 1],
    translateY: [motionTokens.distance.md, 0],
    duration: motionTokens.duration.slow,
    delay,
    ease: motionTokens.easing.entrance,
  });
}

export function revealLeft(targets: Element, delay = 0) {
  if (prefersReducedMotion()) {
    (targets as HTMLElement).style.opacity = "1";
    (targets as HTMLElement).style.transform = "none";
    return;
  }

  animate(targets, {
    opacity: [0, 1],
    translateX: [motionTokens.distance.sm, 0],
    duration: motionTokens.duration.slow,
    delay,
    ease: motionTokens.easing.entrance,
  });
}

export function revealScale(targets: Element, delay = 0) {
  if (prefersReducedMotion()) {
    (targets as HTMLElement).style.opacity = "1";
    (targets as HTMLElement).style.transform = "none";
    return;
  }

  animate(targets, {
    opacity: [0, 1],
    scale: [0.96, 1],
    duration: motionTokens.duration.base,
    delay,
    ease: motionTokens.easing.entrance,
  });
}

export function floatLoop(targets: Element, amplitude = 10, duration = 6400) {
  if (prefersReducedMotion()) return;

  animate(targets, {
    translateY: [-amplitude / 2, amplitude / 2],
    direction: "alternate",
    duration,
    loop: true,
    ease: "inOutSine",
  });
}

export function pulseGlow(targets: Element, duration = 4600) {
  if (prefersReducedMotion()) return;

  animate(targets, {
    opacity: [0.45, 0.95],
    scale: [0.98, 1.03],
    direction: "alternate",
    duration,
    loop: true,
    ease: "inOutSine",
  });
}

export function hoverLift(targets: Element) {
  if (prefersReducedMotion()) return () => undefined;

  const element = targets as HTMLElement;

  const handleEnter = () => {
    animate(element, {
      translateY: -6,
      scale: motionTokens.scale.hover,
      duration: motionTokens.duration.fast,
      ease: motionTokens.easing.standard,
    });
  };

  const handleLeave = () => {
    animate(element, {
      translateY: 0,
      scale: 1,
      duration: motionTokens.duration.fast,
      ease: motionTokens.easing.standard,
    });
  };

  element.addEventListener("mouseenter", handleEnter);
  element.addEventListener("mouseleave", handleLeave);

  return () => {
    element.removeEventListener("mouseenter", handleEnter);
    element.removeEventListener("mouseleave", handleLeave);
  };
}
