"use client";

import { ShoppingBag } from "lucide-react";
import { Cart } from "./shopping-cart";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { useCartState } from "@/state/cart";

export function ShoppingBagMenu({ title }: { title: string }) {
  const { open, items, setCartOpen } = useCartState();

  return (
    <Sheet
      open={open}
      onOpenChange={(open) => {
        setCartOpen(open);
      }}
    >
      <SheetTrigger>
        <Button className="group relative !bg-transparent hover:!bg-transparent">
          <ShoppingBag className="w-6 ml-2 text-primary group-hover:stroke-yellow-500" />
          {items.length > 0 && (
            <span className="text-[.6rem] font-bold font-inter absolute rounded-full w-4 h-4 text-white bg-red-600 flex items-center justify-center top-1.5 right-2.5">
              {items.length}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="px-4 w-[316px] md:w-[400px] bg-primary">
        <SheetHeader>
          <SheetTitle className="md:mt-[8.5%] font-afacad font-bold text-[40px] text-white">
            {title}
          </SheetTitle>
        </SheetHeader>
        <Cart />
      </SheetContent>
    </Sheet>
  );
}
