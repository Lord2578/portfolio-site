"use client";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@/components/icons";
import { useHasMounted } from "@/lib/use-has-mounted";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  // Avoid rendering theme-dependent UI until mounted, since the resolved
  // theme (from system preference) isn't known on the server.
  const mounted = useHasMounted();

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} mode` : "Toggle theme"}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground/70 transition-colors hover:text-accent-text hover:bg-foreground/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      {mounted && isDark ? (
        <SunIcon className="h-[18px] w-[18px]" />
      ) : (
        <MoonIcon className="h-[18px] w-[18px]" />
      )}
    </button>
  );
}
