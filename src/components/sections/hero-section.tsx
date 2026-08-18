"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { RouteLine } from "@/components/hero/route-line";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative flex min-h-[90vh] scroll-mt-16 items-center overflow-hidden px-6"
    >
      <RouteLine />

      <div className="relative mx-auto w-full max-w-5xl">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            variants={container}
            initial={prefersReducedMotion ? "show" : "hidden"}
            animate="show"
            className="lg:col-span-7"
          >
            <motion.span
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-accent/30 px-3 py-1 text-xs font-medium text-accent-text"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Open to new opportunities
            </motion.span>

            <motion.h1
              variants={item}
              className="mt-6 font-display text-6xl leading-[1.05] tracking-tight text-foreground sm:text-7xl"
            >
              Vitalii Bodnar
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-3 text-lg font-medium text-foreground/70 sm:text-xl"
            >
              React Native Developer
            </motion.p>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-balance text-base text-foreground/60 sm:text-lg"
            >
              I build React Native apps end to end — from architecture to the
              App Store — treating performance as a feature, not an afterthought.
            </motion.p>

            <motion.p
              variants={item}
              className="mt-4 text-sm text-foreground/65"
            >
              Poland (Rzeszów) · Open to remote &amp; relocation
            </motion.p>

            <motion.div
              variants={item}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="#projects"
                className="inline-flex h-11 items-center rounded-full bg-accent px-6 text-sm font-medium text-accent-contrast transition-transform hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                View projects
              </Link>
              <Link
                href="#contact"
                className="inline-flex h-11 items-center rounded-full border border-border px-6 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:text-accent-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Get in touch
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            className="hidden lg:col-span-5 lg:flex lg:justify-end"
          >
            <Image
              src="/photo.jpg"
              alt="Vitalii Bodnar"
              width={380}
              height={460}
              priority
              quality={100}
              style={{ height: "auto" }}
              className="rounded-2xl object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
