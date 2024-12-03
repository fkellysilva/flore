"use client";

import { cn } from "@/lib/utils";

import { useState } from "react";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";
import { useCartState } from "@/state/cart";
import { Trash } from "lucide-react";

export function Cart() {
  const [quantity, setQuantity] = useState<number>(1);
  const t = useTranslations("Cart");
  const { items, removeItemFromCart } = useCartState();

  const totalPrice = items.reduce((acc, item) => {
    return acc + item.fullPrice;
  }, 0);

  return (
    <>
      <section className="mt-10 pb-10 border-b border-gray-800 border-opacity-[14%] ">
        <div className="flex items-center justify-between pb-3 border-b border-gray-800 border-opacity-[14%] mb-8">
          <span className="text-white font-body text-sm">{t("product")}</span>
          <span className="text-white font-body text-sm">{t("total")}</span>
        </div>

        <div className="max-h-[calc(100vh_-_450px)] overflow-y-scroll pr-4 space-y-4">
          {items.length === 0 && <p>{t("empty_cart")}</p>}

          {items.map((product) => (
            <div>
              <div className="flex items-start">
                <img
                  src={product.thumbnail}
                  width={68}
                  height={68}
                  alt="A yellow rubber duck."
                  className="rounded-md"
                />
                <div className="flex flex-col items-start ml-2">
                  <h6 className="shrink-0 font-bold  text-md text-white font-body">
                    {product.name}
                  </h6>
                  <span className="text-xs text-white font-body font-[500]">
                    {product.fullPrice.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>
                  <Button
                    className="flex items-center gap-1 text-red-600 hover:text-red-800 font-bold p-0 outline-none border-0"
                    onClick={() => {
                      removeItemFromCart(product);
                    }}
                  >
                    <Trash className="w-4" />
                    {t("remove")}
                  </Button>
                </div>

                <span className="ml-auto text-lg font-body text-main font-[600]">
                  {product.fullPrice.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-5 space-y-3">
        <div className="flex items-center justify-between">
          <p className="font-body text-main text-sm font-[700]">
            {t("estimated_total")}
          </p>
          <span className="font-body text-main text-sm font-[600]">
            {totalPrice.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>
        <p className="text-[11px] text-white font-[500]">{t("taxes")}</p>
      </section>

      <Button
        className="mt-12 bg-green-600 hover:bg-green-800 text-white w-full"
        onClick={() => {}}
      >
        {t("checkout")}
      </Button>
    </>
  );
}
