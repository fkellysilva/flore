"use client";

import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useTranslations } from "next-intl";

export function MobileMenu({ children }: { children: React.ReactNode }) {
  const t = useTranslations();

  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent className="px-4 w-[316px] md:w-[400px] bg-primary">
        {children}
      </SheetContent>
    </Sheet>
  );
}
