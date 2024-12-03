import { useTranslations } from "next-intl";
import { Container } from "./ui/container";
import PlantCard from "./plant-card";
import { Button } from "./ui/button";

export function TopPicks() {
  const t = useTranslations("TopPicks");

  const products = [
    {
      id: "sodjghiodsfj",
      name: "Astromélias Coloridas",
      fullPrice: 130.9,
      discountRate: 0,
      rating: 4.5,
      thumbnail: "/astromelias.png",
    },
    {
      id: "oijdfighdf",
      name: "Bromélia",
      fullPrice: 150.9,
      discountRate: 0.15,
      rating: 5,
      thumbnail: "/bromelia.png",
    },
    {
      id: "osdkfghdsmn",
      name: "Orquídea do Amor",
      fullPrice: 199.9,
      discountRate: 0,
      rating: 4,
      thumbnail: "/love-orchid.png",
    },
    {
      id: "iwkerkikmrgo",
      name: "Antúrio",
      fullPrice: 130.9,
      discountRate: 0.382,
      rating: 4.5,
      thumbnail: "/anturio.png",
    },
  ];

  return (
    <section className="w-full">
      <Container>
      <h2 className="my-10 font-black text-primary font-afacad text-[32px] md:text-[48px] text-center md:text-left">
          {t("title").toUpperCase()}
        </h2>

        <div className="flex flex-col md:flex-row gap-4 md:flex-wrap items-center">
          {products.map((product) => (
            <PlantCard
              key={product.id}
              id={product.id}
              fullPrice={product.fullPrice}
              name={product.name}
              discountRate={product.discountRate}
              rating={product.rating}
              thumbnail={product.thumbnail}
            />
          ))}
        </div>
        <div className="flex w-full justify-center">
          <Button size="lg" className="w-[200px] mt-4 mx-auto">
            {t("view_more")}
          </Button>
        </div>
      </Container>
    </section>
  );
}
