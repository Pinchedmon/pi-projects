import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "ru"],
  pathnames: {
    "/": "/",
    "/pomodoro": "/pomodoro",
  },
  // Used when no locale matches
  defaultLocale: "ru",
});

export type Locale = (typeof routing.locales)[number];

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createNavigation(routing);
