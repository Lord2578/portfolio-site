"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion";

// Shared between the SVG <path> and the marker's CSS offset-path so the two
// stay perfectly in sync — the marker literally rides the same curve.
const ROUTE_PATH = "M40,60 C 220,10 260,190 460,120 S 700,240 780,190";

export function RouteLine() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Cursor parallax: a few px of drift toward the pointer, springed for a
  // soft, physical feel. Disabled entirely under reduced-motion by simply
  // never updating the motion values (they stay at 0).
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 60, damping: 20, mass: 0.6 });
  const springY = useSpring(pointerY, { stiffness: 60, damping: 20, mass: 0.6 });

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = (event.clientX - rect.left) / rect.width - 0.5;
    const relY = (event.clientY - rect.top) / rect.height - 0.5;
    pointerX.set(relX * 14);
    pointerY.set(relY * 10);
  }

  function handlePointerLeave() {
    pointerX.set(0);
    pointerY.set(0);
  }

  // Scroll parallax: as the hero scrolls out of view, the line drifts up
  // and fades slightly rather than snapping away with the rest of the page.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const scrollY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const scrollOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <motion.div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ x: springX, y: springY, translateY: scrollY, opacity: scrollOpacity }}
      className="pointer-events-auto absolute inset-x-0 top-1/2 -z-10 h-[220px] -translate-y-1/2 sm:h-[260px] lg:h-[300px]"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 800 260"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        <path
          d={ROUTE_PATH}
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          className="text-border"
        />
        <path
          d={ROUTE_PATH}
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          pathLength={1}
          className="route-path text-accent"
        />
      </svg>
      <span
        style={{ offsetPath: `path('${ROUTE_PATH}')`, offsetRotate: "0deg" } as React.CSSProperties}
        className="route-marker absolute h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_12px_var(--accent)]"
      />
    </motion.div>
  );
}
