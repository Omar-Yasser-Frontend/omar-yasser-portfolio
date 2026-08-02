'use client';

import { Sun, SunMoon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="text-muted cursor-pointer font-mono text-sm"
        aria-label="toggle theme"
        style={{ width: 20, height: 20 }}
      />
    );
  }

  return (
    <button
      onClick={() => {
        setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'));
      }}
      className="text-muted cursor-pointer font-mono text-sm"
      aria-label="toggle theme"
    >
      {mounted && theme === 'dark' ? <Sun /> : <SunMoon />}
    </button>
  );
}
