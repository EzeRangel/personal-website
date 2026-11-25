"use client";

import { useSyncExternalStore } from "react";
import {
  Menu,
  MenuContent,
  MenuItemIndicator,
  MenuRadioGroup,
  MenuRadioItem,
  MenuTrigger,
} from "@ui-sdk/react/menu";
import { THEME_KEY, themeChoices, type ThemeChoice } from "@/lib/theme";

type ThemeSelectProps = {
  labels: { label: string; system: string; light: string; dark: string };
};

const listeners = new Set<() => void>();

function readChoice(): ThemeChoice {
  const value = document.documentElement.getAttribute("data-theme-choice");
  return value === "light" || value === "dark" ? value : "system";
}

function applyChoice(choice: ThemeChoice) {
  const root = document.documentElement;
  const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  root.setAttribute("data-theme-choice", choice);
  root.setAttribute("data-theme", choice === "system" ? (dark ? "dark" : "light") : choice);
  try {
    if (choice === "system") window.localStorage.removeItem(THEME_KEY);
    else window.localStorage.setItem(THEME_KEY, choice);
  } catch {
    // Storage can be blocked; the choice then lasts for this page view only.
  }
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function ThemeSelect({ labels }: ThemeSelectProps) {
  const choice = useSyncExternalStore(subscribe, readChoice, () => "system" as const);

  return (
    <Menu>
      <MenuTrigger className="er-toggle">
        <span className="er-sr">{labels.label}: </span>
        {/* The inline theme script sets data-theme-choice before paint, so CSS shows the right word without a flash. */}
        {themeChoices.map((value) => (
          <span key={value} className="er-theme__value" data-value={value}>
            {labels[value]}
          </span>
        ))}
      </MenuTrigger>
      <MenuContent className="er-theme-menu" align="end" sideOffset={4} aria-label={labels.label}>
        <MenuRadioGroup<ThemeChoice> value={choice} onValueChange={(value) => applyChoice(value)}>
          {themeChoices.map((value) => (
            <MenuRadioItem key={value} value={value} className="er-theme-menu__item" closeOnSelect>
              <MenuItemIndicator keepMounted className="er-theme-menu__mark" />
              {labels[value]}
            </MenuRadioItem>
          ))}
        </MenuRadioGroup>
      </MenuContent>
    </Menu>
  );
}
