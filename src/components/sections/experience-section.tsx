"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EXPERIENCE } from "@/lib/experience";

export function ExperienceSection() {
  const prefersReducedMotion = useReducedMotion();
  const hidden = { opacity: 0, y: 16 };
  const show = { opacity: 1, y: 0 };

  return (
    <section
      id="experience"
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
          Experience
        </motion.p>

        <div className="relative mt-10 max-w-3xl">
          <div
            aria-hidden="true"
            className="absolute left-[5px] top-2 bottom-2 w-px bg-border"
          />

          <ol className="space-y-16">
            {EXPERIENCE.map((role, index) => (
              <motion.li
                key={role.id}
                initial={prefersReducedMotion ? show : hidden}
                whileInView={show}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                className="relative pl-8"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-2 h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_10px_var(--accent)]"
                />

                <p className="text-xs font-medium uppercase tracking-wider text-foreground/40">
                  {role.period}
                </p>
                <h3 className="mt-2 font-display text-2xl text-foreground">
                  {role.role}
                </h3>
                <p className="mt-1 text-sm font-medium text-foreground/60">
                  {role.company}
                </p>
                <p className="mt-4 text-base text-foreground/70">
                  {role.summary}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {role.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-relaxed text-foreground/60"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/30"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
