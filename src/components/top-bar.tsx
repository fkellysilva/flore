"use client";

import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Container } from "./ui/container";
import { usePathname, useRouter } from "@/i18n/routing";

import BrazilFlagIcon from "../../public/br.svg";
import USFlagIcon from "../../public/us.svg";

export function TopBar() {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className="md:px-0 w-full h-9 bg-primary dark:bg-primary">
      <Container className="mx-auto flex justify-between">
        <Button onClick={toggleTheme} className="h-9 p-0">
          <Sun className="h-8 w-[1.2rem] text-white rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-8 w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>

        <div className="ml-11 flex gap-3">
          <Button
            className="h-9 p-0"
            onClick={() => {
              router.push(pathname, { locale: "pt" });
            }}
          >
            <BrazilFlagIcon />
          </Button>
          <Button
            className="h-9 p-0"
            onClick={() => {
              router.push(pathname, { locale: "en" });
            }}
          >
            <USFlagIcon />
          </Button>
        </div>
      </Container>
    </div>
  );
}
