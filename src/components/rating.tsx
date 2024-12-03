import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useTranslations } from "next-intl";
import { Container } from "./ui/container";

import Stars from "../../public/stars.svg";
import { BadgeCheck } from "lucide-react";

const ratings = [
  {
    name: "Yara Antunes",
    rating:
      "Adorei a experiência de comprar as flores no Floré! As fotos do site são idênticas ao produto real. O buquê de helicônias que escolhi chegou super bem embalado e as flores estavam fresquinhas e vibrantes. A entrega foi rápida e o atendimento online foi muito atencioso. Com certeza vou comprar novamente!",
  },
  {
    name: "Armando Dias",
    rating:
      "Fiquei impressionado com a variedade de flores tropicais que a Floré oferece. Optei por um arranjo de antúrios e bromélias para presentear minha namorada e ela amou! A entrega foi pontual e o arranjo chegou lindamente montado. Recomendo!",
  },
  {
    name: "Manuela Aragão",
    rating:
      "Encontrei o Floré pesquisando por flores exóticas para decorar minha sala. O site é fácil de navegar e as informações sobre cada flor são bem completas. Fiz um pedido de um vaso com orquídeas e fiquei encantada com a beleza e a qualidade das flores. O único ponto que poderia melhorar seria a opção de personalizar mais os arranjos.",
  },
  {
    name: "Ricardo Almeida",
    rating:
      "Comprei um buquê de rosas vermelhas para presentear minha mãe no Dia das Mães e ela adorou! As flores estavam frescas e perfumadas e a embalagem era muito bonita. A entrega foi rápida e o atendimento foi muito atencioso. Recomendo!",
  },
  {
    name: "Larissa Costa",
    rating:
      "A Floré é a minha floricultura favorita! Já comprei vários arranjos de flores para decorar minha casa e sempre fico satisfeita com a qualidade e a beleza das flores. Os preços são justos e o atendimento é excelente. Recomendo!",
  },
  {
    name: "Pedro Lima",
    rating:
      "Adorei o serviço de entrega de flores da Floré! Comprei um buquê de girassóis para presentear minha namorada e ela adorou! As flores estavam frescas e a entrega foi rápida. O atendimento online foi muito atencioso e o site é fácil de navegar. Com certeza vou comprar novamente!",
  },
  {
    name: "Mariana Santos",
    rating:
      "Comprei um arranjo de flores para presentear minha avó e ela adorou! As flores estavam frescas e a entrega foi rápida. O atendimento online foi muito atencioso e o site é fácil de navegar. Recomendo!",
  },
];

export function Rating() {
  const t = useTranslations("Rating");

  return (
    <section className="relative w-full">
      <Container className="w-full mb-10">
        <h2 className="mt-4 mb-10 font-black text-primary font-afacad text-[32px] md:text-[48px] text-center md:text-left">
          {t("title")}
        </h2>
      </Container>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-none"
      >
        <Container className="hidden md:block relative">
          <CarouselPrevious className="top-[-75px] !right-16 bg-none border-0" />
          <CarouselNext className="top-[-75px] !right-0 bg-none border-0" />
        </Container>

        <CarouselContent className="w-full">
          {ratings.map((rating, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/3 lg:basis-1/4 2xl:basis-1/5"
            >
              <div className="p-1">
                <Card className="rounded-3xl">
                  <CardContent className="flex flex-col items-start py-[28px] px-[32px]">
                    <Stars />

                    <div className="flex items-center gap-2 mb-3 mt-[15px]">
                      <h3 className="text-2xl font-semibold">{rating.name}</h3>
                      <BadgeCheck
                        className="fill-teal-400 text-white"
                        size={28}
                      />
                    </div>
                    <p className="font-inter text-gray-600 text-[1rem]">
                      "{rating.rating}"
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <Container className="block md:hidden relative pb-10">
          <CarouselPrevious className="!bottom-0 !right-[55%] bg-none border-0" />
          <CarouselNext className="!bottom-0 !right-[35%] bg-none border-0" />
        </Container>
      </Carousel>
    </section>
  );
}
