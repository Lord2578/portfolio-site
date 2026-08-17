import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons";
import { SITE_LINKS } from "@/lib/links";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-8 text-sm text-foreground/60 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {year} Vitalii Bodnar. Built with Next.js.</p>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${SITE_LINKS.email}`}
            aria-label="Email Vitalii"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:text-accent-text hover:bg-foreground/5"
          >
            <MailIcon className="h-[18px] w-[18px]" />
          </a>
          <a
            href={SITE_LINKS.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub profile"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:text-accent-text hover:bg-foreground/5"
          >
            <GithubIcon className="h-[18px] w-[18px]" />
          </a>
          <a
            href={SITE_LINKS.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn profile"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:text-accent-text hover:bg-foreground/5"
          >
            <LinkedinIcon className="h-[18px] w-[18px]" />
          </a>
        </div>
      </div>
    </footer>
  );
}
