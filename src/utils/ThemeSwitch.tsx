"use client";

import { useEffect, useState } from "react";
import { setTheme, getSavedTheme, Theme } from "@/utils/theme";

export default function ThemeSwitch() {
  const [theme, setThemeState] = useState<Theme>("light");

  useEffect(() => {
    const saved = getSavedTheme();
    setTheme(saved);
    setThemeState(saved);
  }, []);

  const handleChange = (newTheme: Theme) => {
    setTheme(newTheme);
    setThemeState(newTheme);
  };

  return (
    <div style={{
      display: "flex",
      gap: "0.5rem",
      justifyContent: "center",
      padding: "0.5rem",
    }}>
      {(["light", "dark", "calm", "tech"] as Theme[]).map((mood) => (
        <button
          key={mood}
          onClick={() => handleChange(mood)}
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "6px",
            border: theme === mood ? "2px solid var(--color-accent)" : "1px solid var(--color-border)",
            background:
              theme === mood
                ? "var(--accent-gradient)"
                : "var(--color-surface)",
            color: "var(--color-text)",
            cursor: "pointer",
          }}
        >
          {mood.charAt(0).toUpperCase() + mood.slice(1)}
        </button>
      ))}
    </div>
  );
}
