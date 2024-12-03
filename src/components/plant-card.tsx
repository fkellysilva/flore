"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "@/i18n/routing";
import { Plus, ShoppingBag, Star, StarHalf } from "lucide-react";
import { Button } from "./ui/button";
import { useCartState } from "@/state/cart";
import { toast } from "sonner";

interface PlantCardProps {
  id: string;
  name: string;
  rating: number;
  fullPrice: number;
  discountRate: number;
  thumbnail: string;
}

export default function PlantCard(props: PlantCardProps) {
  const router = useRouter();
  const { addItemToCart } = useCartState();

  return (
    <Card className="group w-[300px] overflow-hidden hover:cursor-pointer">
      <CardContent className="p-0">
        <div className="relative">
          <img
            src={props.thumbnail}
            alt="Antúrio plant with red flowers"
            className="w-full h-[300px] object-contain bg-white object-center group-hover:scale-105 transition-all duration-300 ease-in-out"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-medium mb-2 hover:text-primary">
            {props.name}
          </h3>
          <div className="flex items-center gap-1 mb-3">
            {[...Array(Math.trunc(props.rating))].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-yellow-400 text-yellow-400"
              />
            ))}

            {props.rating % 2 !== 0 && props.rating !== 5 && (
              <StarHalf className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            )}

            <span className="text-sm text-muted-foreground ml-1">
              {props.rating}/5
            </span>

            <Button
              className="group/btn ml-auto mr-1 relative bg-transparent hover:bg-transparent"
              onClick={() => {
                addItemToCart(props);
                toast.success("Item added to cart!");
              }}
            >
              <ShoppingBag className="absolute w-6 ml-2 text-primary group-hover:stroke-yellow-500" />
              <Plus className="absolute w-4 ml-2 text-black group-hover/btn:rotate-90 transition-all duration-200 right-[-15%] top-4" />
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">
              {(
                props.fullPrice -
                props.fullPrice * props.discountRate
              ).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
            {props.discountRate > 0 && (
              <>
                <span className="text-sm text-muted-foreground line-through">
                  {props.fullPrice.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
                <span className="text-sm text-red-500 bg-red-100 px-2 py-0.5 rounded">
                  -{(props.discountRate * 100).toString().replace(".", ",")}%
                </span>
              </>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
