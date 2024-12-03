import { useTranslations } from "next-intl";
import { Container } from "./ui/container";
import { Mail, Search } from "lucide-react";
import { Button } from "./ui/button";

export function CTA() {
  const t = useTranslations("CTA");

  return (
    <Container className="flex flex-col md:flex-row items-center md:absolute bg-primary bottom-[-20px] md:bottom-[-70px] left-[50%] md:translate-x-[-50%] rounded-[20px] py-5 px-4 md:px-[64px]">
      <h2 className="my-10 font-black text-white font-afacad text-[32px] md:text-[48px] text-center md:text-left">
        {t("title")}
      </h2>

      <div className="relative gap-2 z-0 flex flex-col flex-1 items-center justify-center md:ml-4 sm:relative sm:inset-0 ">
        <div className="grid w-full grid-cols-1 sm:max-w-xs">
          <input
            name="search"
            type="search"
            placeholder={t("Email")}
            className="col-start-1 row-start-1 block w-full rounded-3xl bg-gray-100 py-1.5 pl-10 pr-3 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
          />
          <Mail
            aria-hidden="true"
            className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400"
          />
        </div>
        <Button size="sm" variant="secondary" className="bg-green-500 w-full">
          Assine o boletim informativo
        </Button>
      </div>
    </Container>
  );
}
