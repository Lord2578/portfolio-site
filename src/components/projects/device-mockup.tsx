"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ROUTERIG_SCREENS } from "@/lib/routerig";

export function DeviceMockup() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = ROUTERIG_SCREENS[activeIndex];

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative w-[240px] rounded-[2.75rem] border-4 border-foreground/15 bg-foreground/5 p-2.5 shadow-2xl shadow-black/10 sm:w-[260px]">
        <div className="absolute left-1/2 top-2.5 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-foreground/15" />
        <div className="relative aspect-[1206/2622] w-full overflow-hidden rounded-[2.1rem] bg-background">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={active.src}
                alt={active.alt}
                fill
                sizes="(min-width: 640px) 260px, 240px"
                className="object-cover"
                priority={activeIndex === 0}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div
        role="tablist"
        aria-label="RouteRig screens"
        className="flex flex-wrap justify-center gap-2"
      >
        {ROUTERIG_SCREENS.map((screen, index) => (
          <button
            key={screen.id}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            onClick={() => setActiveIndex(index)}
            className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
              index === activeIndex
                ? "border-accent/40 bg-accent/10 text-accent-text"
                : "border-border text-foreground/50 hover:text-foreground"
            }`}
          >
            {screen.label}
          </button>
        ))}
      </div>
    </div>
  );
}
