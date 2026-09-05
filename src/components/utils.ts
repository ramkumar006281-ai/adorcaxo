"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

// ─── Reduced Motion Subscription via useSyncExternalStore ──────────────────
function subscribeReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getReducedMotionSnapshot(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot(): boolean {
  return false;
}

export function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );
}

// ─── Scroll-reveal hook ────────────────────────────────────────────────────────
// Returns a [ref, isVisible] tuple. Attach ref to any element; isVisible
// flips true once the element enters the viewport.
// Respects prefers-reduced-motion: if the user has requested reduced motion,
// isVisible is immediately true so elements render without animation.
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit = { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;

    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(currentRef);
      }
    }, options);

    observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [options, prefersReduced]);

  return [ref, prefersReduced || isVisible] as const;
}

// ─── Legacy alias (used by Hero, WhyChooseUs, CaseStudies etc.) ──────────────
// Hook to detect when an element is in the viewport.
// Respects prefers-reduced-motion: if the user has requested reduced motion,
// isIntersecting is immediately true so elements render without animation delays.
export function useIntersection(options: IntersectionObserverInit = { threshold: 0.1, rootMargin: "0px" }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;

    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        // Stop observing once visible (one-time animation)
        observer.unobserve(currentRef);
      }
    }, options);

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options, prefersReduced]);

  return [ref, prefersReduced || isIntersecting] as const;
}

// Hook to animate count-up from 0 to target.
// Correctly handles trigger=true on first mount and ensures final target is always reached without SSR hydration mismatch.
export function useCountUp(target: number, duration: number = 1600, trigger: boolean = false) {
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    // Guard: only run once even if trigger stays true across re-renders
    if (!trigger || hasRun.current) return;
    hasRun.current = true;

    const end = target;
    if (end === 0) return;

    const startTime = performance.now();
    let animationFrameId: number;

    const updateCount = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeProgress * end);

      if (progress < 1) {
        setCount(current);
        animationFrameId = requestAnimationFrame(updateCount);
      } else {
        setCount(end); // Guarantee exact final value
      }
    };

    animationFrameId = requestAnimationFrame(updateCount);
    return () => { cancelAnimationFrame(animationFrameId); };
  }, [target, duration, trigger]);

  return count;
}
