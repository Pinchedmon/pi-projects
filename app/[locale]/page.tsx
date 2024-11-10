import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");

  return <div className="w-full p-4 h-full">23</div>;
}
