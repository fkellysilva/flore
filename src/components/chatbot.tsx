"use client";

import { animate } from "motion";

import Sun from "../../public/flower.svg";
import { useEffect } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import SunChatbot from "./sun-chatbot";

export function Chatbot() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    animate(
      ".sun",
      { rotate: 90 },
      {
        type: "spring",
        repeat: Infinity,
        repeatDelay: 3,
        duration: 1.2,
      }
    );
  }, []);

  return (
    <Popover>
      <PopoverTrigger className="w-fit h-fit fixed bottom-5 md:bottom-16 right-5 md:right-16 group">
        <Sun className="sun w-16 text-primary group-hover:cursor-pointer group-hover:text-yellow-500" />
      </PopoverTrigger>
      <PopoverContent
        side="top"
        align="end"
        alignOffset={100}
        className="border-none p-0 m-0 [&_div.bg-card]:border-none [&_div.bg-card_div]:!rounded-t-md"
      >
        <SunChatbot />
      </PopoverContent>
    </Popover>
  );
}
