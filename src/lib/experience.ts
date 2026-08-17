export const EXPERIENCE = [
  {
    id: "nda-current",
    role: "Middle React Native Developer",
    company: "NDA",
    period: "Feb 2026 — Present",
    summary:
      "Sole mobile developer — architecture, features, and releases are entirely mine to own.",
    points: [
      "Own architecture decisions, feature delivery, and production releases end to end for a live product, with no other mobile developer on the team",
      "Set up and maintain the full release pipeline — EAS Build, TestFlight, OTA updates — independently, without a dedicated release engineer",
      "Diagnosed and resolved startup-time, memory, and rendering bottlenecks as part of ongoing performance work, not a pre-release scramble",
      "Use Claude Code daily for architecture discussions, code review, and working through hard bugs faster",
    ],
  },
  {
    id: "ox-company",
    role: "React Native Developer",
    company: "OX Company",
    period: "Feb 2024 — Feb 2026",
    summary: "Two years shipping inside a team — where the RN fundamentals were built.",
    points: [
      "Built and maintained scalable React Native components and screens, integrating native modules and platform-specific APIs",
      "Selected and integrated libraries for UI, state management, and data fetching to fit project needs",
      "Partnered with QA and automation engineers to help maintain and improve the test automation framework",
      "Supported CI/CD configuration (EAS Build, TestFlight) and owned feature/task estimation against business requirements",
    ],
  },
] as const;
