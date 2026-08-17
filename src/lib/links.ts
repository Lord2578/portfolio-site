export const SITE_LINKS = {
  github: "https://github.com/Lord2578",
  linkedin: "https://www.linkedin.com/in/vitalii-bodnar-7a3a3224b",
  email: "bodnar.vietal@gmail.com",
  // Resume PDF is being revised before it goes public — add the href once
  // the final version is ready (see portfolio_website_project memory).
  resume: null as string | null,
} as const;

export const NAV_SECTIONS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;
