"use client";

import { Sun, SunMoon } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(
      (document.documentElement.getAttribute("data-theme") as
        | "light"
        | "dark") || "light",
    );
    setMounted(true);
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    setTheme(next);
  }

  if (!mounted) {
    return (
      <button
        className="font-mono text-sm text-muted cursor-pointer"
        aria-label="toggle theme"
        style={{ width: 20, height: 20 }}
      />
    );
  }

  return (
    <button
      onClick={toggle}
      className="font-mono text-sm text-muted cursor-pointer"
      aria-label="toggle theme"
    >
      {theme === "dark" ? <Sun /> : <SunMoon />}
    </button>
  );
}
