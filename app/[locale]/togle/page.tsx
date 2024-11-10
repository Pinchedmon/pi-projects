import LocaleSwitcher from "@/components/local-switcher";
import { ModeToggle } from "@/components/mode-toggle";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
      <ModeToggle />
      <h1>{t("title")}</h1>
      <Link href={"/"}>{t("about")}</Link>
      <LocaleSwitcher />
    </div>
  );
}
