import { ArrowRight, ArrowRightIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Container } from "./ui/container";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("Home");

  return (
    <div className="relative w-full h-[500px] bg-gray-400 bg-hero-bg bg-no-repeat bg-cover bg-left-top">
      <div className="z-5 w-full h-full absolute bg-black/50" />

      <Container className="relative z-50">
        <h1 className="text-white font-bold font-afacad text-[48px] leading-[55px] mb-10 mt-10 md:mt-[80px]">
          {t("title")}
        </h1>
        <p className="text-white/80 md:max-w-[50%]">{t("description")}</p>

        <Button className="text-gray-700 mt-5">
          {t("action")} <ArrowRightIcon />
        </Button>
      </Container>
    </div>
  );
}
