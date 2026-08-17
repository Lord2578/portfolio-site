"use client";

import { motion, useReducedMotion } from "framer-motion";

const FACTS = [
  { label: "Focus", value: "React Native · TypeScript · Performance" },
  { label: "Experience", value: "2.5+ years — team & sole ownership" },
  {
    label: "Education",
    value: "BSc Computer Science, IT Step University (2025)",
  },
  { label: "Based", value: "Poland (Rzeszów) · Open to remote & relocation" },
] as const;

export function AboutSection() {
  const prefersReducedMotion = useReducedMotion();
  const hidden = { opacity: 0, y: 16 };
  const show = { opacity: 1, y: 0 };

  return (
    <section id="about" className="scroll-mt-16 border-b border-border/60 px-6 py-28">
      <div className="mx-auto grid w-full max-w-5xl gap-16 lg:grid-cols-12">
        <motion.div
          initial={prefersReducedMotion ? show : hidden}
          whileInView={show}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-7"
        >
          <h2 className="text-sm font-medium tracking-wide text-accent-text">
            About
          </h2>

          <p className="mt-6 font-display text-2xl leading-snug text-foreground sm:text-3xl">
            A Computer Science degree got me in the door — shipping is what
            actually taught me the job.
          </p>

          <div className="mt-6 space-y-5 text-base leading-relaxed text-foreground/70 sm:text-lg">
            <p>
              Two years inside a team at OX Company, then a move into a
              sole-developer role, where every architecture decision, every
              release, and every production issue is mine to own — from
              planning and estimation through App Store submission.
            </p>
            <p>
              That ownership shapes how I work: I choose the libraries,
              structure the codebase for the next six months rather than the
              next feature, and treat startup time, memory, and re-render
              cost as metrics to watch continuously — not a cleanup pass at
              the end.
            </p>
            <p>
              Claude Code is part of that process daily — for architecture
              discussions, code review, and working through gnarly bugs
              faster, not for skipping the thinking.
            </p>
          </div>

          <p className="mt-8 text-sm text-foreground/65">
            Certified: React Native — Advanced Concepts · React Native — The
            Practical Guide · React Native Skia &amp; Reanimated
          </p>
        </motion.div>

        <motion.dl
          initial={prefersReducedMotion ? show : hidden}
          whileInView={show}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="h-fit divide-y divide-border rounded-2xl border border-border lg:col-span-5"
        >
          {FACTS.map((fact) => (
            <div key={fact.label} className="px-6 py-5">
              <dt className="text-xs font-medium uppercase tracking-wider text-foreground/65">
                {fact.label}
              </dt>
              <dd className="mt-1.5 text-sm text-foreground/80">
                {fact.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
