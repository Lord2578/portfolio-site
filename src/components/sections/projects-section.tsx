"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GithubIcon } from "@/components/icons";
import { DeviceMockup } from "@/components/projects/device-mockup";
import {
  ROUTERIG_DECISIONS,
  ROUTERIG_REPO,
  ROUTERIG_STACK,
} from "@/lib/routerig";

export function ProjectsSection() {
  const prefersReducedMotion = useReducedMotion();
  const hidden = { opacity: 0, y: 16 };
  const show = { opacity: 1, y: 0 };

  return (
    <section
      id="projects"
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
          Projects
        </motion.p>

        <div className="mt-6 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={prefersReducedMotion ? show : hidden}
            whileInView={show}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="order-2 lg:order-1 lg:col-span-7"
          >
            <h3 className="font-display text-3xl text-foreground sm:text-4xl">
              RouteRig
            </h3>
            <p className="mt-1 text-sm text-foreground/50">
              Truck-aware route planner — Expo &amp; React Native
            </p>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/70">
              <p>
                <span className="font-medium text-foreground">Problem — </span>
                regular navigation apps route trucks the same way they route
                cars, ignoring height, weight, and length restrictions. That's
                how trucks end up wedged under low bridges.
              </p>
              <p>
                <span className="font-medium text-foreground">Solution — </span>
                RouteRig plans routes that account for the vehicle, and shows
                the truck route next to the standard car route so the
                difference — and the reason for it — is visible at a glance.
              </p>
            </div>

            <h4 className="mt-10 text-sm font-medium text-foreground">
              Key technical decisions
            </h4>
            <dl className="mt-4 space-y-5">
              {ROUTERIG_DECISIONS.map((decision) => (
                <div key={decision.title}>
                  <dt className="text-sm font-medium text-foreground/85">
                    {decision.title}
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-foreground/60">
                    {decision.detail}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-wrap gap-2">
              {ROUTERIG_STACK.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border px-3 py-1 font-mono text-xs text-foreground/60"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={ROUTERIG_REPO}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:text-accent-text"
            >
              <GithubIcon className="h-4 w-4" />
              View on GitHub
            </a>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? show : hidden}
            whileInView={show}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="order-1 lg:order-2 lg:col-span-5"
          >
            <DeviceMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
