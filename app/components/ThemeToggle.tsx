"use client";

import * as React from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const resolved = theme === "system" ? systemTheme : theme;
  const isDark = resolved === "dark";

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className="h-10 w-10 rounded-2xl border border-white/60 bg-white/60 shadow-soft backdrop-blur"
      />
    );
  }

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group relative h-10 w-10 overflow-hidden rounded-2xl border border-white/60 bg-white/60 shadow-soft backdrop-blur transition hover:shadow-glow"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100 bg-[radial-gradient(circle_at_30%_30%,rgba(96,165,250,0.25),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(168,85,247,0.18),transparent_55%)]" />
      <span className="relative grid h-full w-full place-items-center text-sm">
        {isDark ? "🌙" : "☀️"}
      </span>
    </button>
  );
}
