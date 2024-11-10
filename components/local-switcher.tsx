"use client";

import { useParams } from "next/navigation";
import { useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { Button } from "./ui/button";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  // Function to get the next locale
  function getNextLocale(currentLocale: string) {
    const currentIndex = routing.locales.indexOf(currentLocale as "en" | "ru");
    const nextIndex = (currentIndex + 1) % routing.locales.length; // Loop back to the first locale
    return routing.locales[nextIndex];
  }

  function onLocaleChange() {
    const nextLocale = getNextLocale(locale);
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  return (
    <Button
      variant={"outline"}
      onClick={onLocaleChange}
      disabled={isPending}
      className={`${isPending ? "loading" : ""} w-12 h-12`}
    >
      {locale == "ru" ? "🇷🇺" : "🇺🇸"}
    </Button>
  );
}
