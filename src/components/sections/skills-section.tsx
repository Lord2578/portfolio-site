"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SKILL_GROUPS } from "@/lib/skills";

export function SkillsSection() {
  const prefersReducedMotion = useReducedMotion();
  const hidden = { opacity: 0, y: 16 };
  const show = { opacity: 1, y: 0 };

  return (
    <section
      id="skills"
      className="scroll-mt-16 border-b border-border/60 px-6 py-28"
    >
      <div className="mx-auto w-full max-w-5xl">
        <motion.p
          initial={prefersReducedMotion ? show : hidden}
          whileInView={show}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-sm font-medium tracking-wide text-accent-text"
        >
          Skills
        </motion.p>

        <div className="mt-10 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group, index) => (
            <motion.div
              key={group.id}
              initial={prefersReducedMotion ? show : hidden}
              whileInView={show}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: (index % 3) * 0.08,
              }}
            >
              <h3 className="text-xs font-medium uppercase tracking-wider text-foreground/40">
                {group.label}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border px-3 py-1 font-mono text-xs text-foreground/60"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
