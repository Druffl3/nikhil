"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  label: string;
};

export function ScrollReveal({ children, className, delay = 0, label }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
      setRevealed(true);
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const applyMotionPreference = (matches: boolean) => {
      setReducedMotion(matches);

      if (matches) {
        setRevealed(true);
      }
    };

    applyMotionPreference(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      applyMotionPreference(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    if (revealed || reducedMotion) {
      return;
    }

    const node = ref.current;

    if (!node || typeof IntersectionObserver === "undefined") {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -10% 0px"
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [reducedMotion, revealed]);

  return (
    <div
      ref={ref}
      className={className}
      data-reveal={revealed ? "visible" : "hidden"}
      data-reveal-delay={delay}
      data-reveal-label={label}
      data-reveal-reduced={reducedMotion ? "true" : "false"}
    >
      {children}
    </div>
  );
}
