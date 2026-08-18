export type CommercialProject = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  contributions: { title: string; detail: string }[];
  stack: string[];
  meta: {
    company: string;
    role: string;
    team: string;
    platforms: string;
  };
};

export const COMMERCIAL_PROJECTS: CommercialProject[] = [
  {
    id: "current-health",
    title: "Health & Wellness App",
    subtitle: "NDA · Sole Mobile Developer",
    description:
      "A behavioral health app for addiction recovery — community support, progress tracking, and a content library. Built from scratch and shipped solo to App Store & Google Play.",
    contributions: [
      {
        title: "Community feed",
        detail:
          "Channel-based social feed with reactions and real-time updates.",
      },
      {
        title: "Progress tracking",
        detail: "Sobriety streaks, milestones, and savings statistics.",
      },
      {
        title: "Content library",
        detail: "Freemium meditations and articles with subscription gating.",
      },
      {
        title: "Subscriptions & referrals",
        detail:
          "IAP integration and a referral system with automated tier upgrades.",
      },
      {
        title: "CI/CD & releases",
        detail:
          "EAS Build pipeline, OTA updates, and full App Store & Google Play management — handled independently.",
      },
      {
        title: "Admin panel",
        detail:
          "User management, content moderation queue, and analytics dashboard built with React 19 + Vite.",
      },
    ],
    stack: [
      "React Native",
      "Expo",
      "NativeWind",
      "Supabase",
      "React Query",
      "Zod",
      "EAS",
    ],
    meta: {
      company: "Confidential",
      role: "Sole Mobile Developer",
      team: "Solo",
      platforms: "iOS & Android",
    },
  },
  {
    id: "ox-health",
    title: "Health & Wellness App",
    subtitle: "OX Company · Mobile Developer",
    description:
      "A social health app built from the ground up. Co-owned the full mobile codebase from day one as one of two mobile developers.",
    contributions: [
      {
        title: "Onboarding & auth",
        detail: "Full signup and login flow including authentication screens.",
      },
      {
        title: "Social features",
        detail: "Social feed and real-time chat between users.",
      },
      {
        title: "Maps & discovery",
        detail:
          "Location-based search with filters for discovering nearby content.",
      },
      {
        title: "Push notifications",
        detail:
          "Notification integration for engagement and re-engagement flows.",
      },
      {
        title: "Profiles",
        detail: "User profile screens and settings.",
      },
    ],
    stack: [
      "React Native",
      "Expo",
      "NativeWind",
      "Firebase",
      "Redux",
      "React Query",
    ],
    meta: {
      company: "OX Company",
      role: "Mobile Developer",
      team: "2 mobile devs",
      platforms: "iOS & Android",
    },
  },
  {
    id: "ox-fintech",
    title: "Fintech App",
    subtitle: "OX Company · Mobile Developer",
    description:
      "Joined an existing fintech app mid-development to deliver new features and improve stability.",
    contributions: [
      {
        title: "Payment flow",
        detail:
          "End-to-end payment screens integrated with the existing payment infrastructure.",
      },
      {
        title: "Onboarding",
        detail: "New user onboarding flow.",
      },
      {
        title: "Push notifications",
        detail:
          "Notification integration for transactional and marketing events.",
      },
      {
        title: "Performance",
        detail: "Profiling and rendering optimizations across key screens.",
      },
      {
        title: "Bug fixes",
        detail: "Resolved production issues across the codebase.",
      },
    ],
    stack: ["React Native", "Expo"],
    meta: {
      company: "OX Company",
      role: "Mobile Developer",
      team: "2 mobile devs",
      platforms: "iOS & Android",
    },
  },
];
