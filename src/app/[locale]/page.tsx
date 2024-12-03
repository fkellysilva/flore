import { CTA } from "@/components/cta";
import { Hero } from "@/components/hero";
import { Offers } from "@/components/offers";
import { Map } from "@/components/map";
import { useTranslations } from "next-intl";
import { Rating } from "@/components/rating";
import { TopPicks } from "@/components/top-picks";
import { Gallery } from "@/components/gallery";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <main className="relative flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Hero />
      <Offers />
      <TopPicks />
      <Gallery />
      <Rating />
      <Map />
      <CTA />
    </main>
  );
}
