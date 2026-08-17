import Link from "next/link";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { NAV_SECTIONS, SITE_LINKS } from "@/lib/links";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link
          href="#hero"
          className="font-display text-lg font-medium tracking-tight text-foreground"
          aria-label="Vitalii Bodnar, back to top"
        >
          VB
        </Link>

        <nav
          aria-label="Section navigation"
          className="hidden items-center gap-8 text-sm text-foreground/70 sm:flex"
        >
          {NAV_SECTIONS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <a
            href={SITE_LINKS.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub profile"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground/70 transition-colors hover:text-accent-text hover:bg-foreground/5"
          >
            <GithubIcon className="h-[18px] w-[18px]" />
          </a>
          <a
            href={SITE_LINKS.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn profile"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground/70 transition-colors hover:text-accent-text hover:bg-foreground/5"
          >
            <LinkedinIcon className="h-[18px] w-[18px]" />
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
