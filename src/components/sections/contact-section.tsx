"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons";
import { SITE_LINKS } from "@/lib/links";

export function ContactSection() {
  const prefersReducedMotion = useReducedMotion();
  const hidden = { opacity: 0, y: 16 };
  const show = { opacity: 1, y: 0 };

  return (
    <section id="contact" className="scroll-mt-16 px-6 py-28">
      <motion.div
        initial={prefersReducedMotion ? show : hidden}
        whileInView={show}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto w-full max-w-5xl"
      >
        <h2 className="text-sm font-medium tracking-wide text-accent-text">
          Contact
        </h2>

        <p className="mt-6 max-w-2xl font-display text-4xl leading-tight text-foreground sm:text-5xl">
          Let&rsquo;s talk.
        </p>

        <p className="mt-5 max-w-xl text-lg text-foreground/60">
          Open to new opportunities — remote, on-site, or relocation. The
          fastest way to reach me is email.
        </p>

        <a
          href={`mailto:${SITE_LINKS.email}`}
          className="group mt-10 inline-flex items-center gap-3 rounded-md font-display text-2xl text-foreground transition-colors hover:text-accent-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:text-3xl"
        >
          <MailIcon className="h-6 w-6 shrink-0 text-accent transition-transform group-hover:translate-x-1" />
          {SITE_LINKS.email}
        </a>

        <div className="mt-12 flex gap-4">
          <a
            href={SITE_LINKS.github}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:text-accent-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={SITE_LINKS.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:text-accent-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <LinkedinIcon className="h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}
