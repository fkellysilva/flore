import { useTranslations } from "next-intl";
import { Container } from "./ui/container";
import { Link } from "@/i18n/routing";

const categories = [
  { label: "Exóticas", path: "exotic" },
  { label: "Românticas", path: "romantic" },
  { label: "Rústicas", path: "rustic" },
  { label: "Perfumadas", path: "perfumed" },
];

export function Gallery() {
  const t = useTranslations("Gallery");

  return (
    <Container className="my-8 md:my-[60px] bg-gray-100 rounded-t-[40px] rounded-b-0 md:rounded-b-[40px] px-6 md:px-[64px] py-[70px] pt-6">
      <h2 className="my-10 font-black text-primary font-afacad text-[32px] md:text-[48px] text-center">
        {t("title")}
      </h2>

      <div className="w-full space-y-4 md:space-y-10">
        <div className="w-full flex flex-col md:flex-row gap-4 md:gap-12">
          <Link
            href={`/category/${categories[0].path}`}
            className="md:w-[40%] md:flex-1 h-[100px] md:h-[289px] rounded-[20px] bg-[url('/flower-1.png')] bg-center bg-no-repeat bg-[length:100%] hover:bg-[length:110%] transition-all duration-300 ease-in-out"
            style={{ transition: "background-size 200ms linear" }}
          >
            <h3 className="text-white text-lg md:text-[36px] mt-5 ml-6 font-bold font-inter">
              {t("exotic")}
            </h3>
          </Link>
          <Link
            href={`/category/${categories[1].path}`}
            className="md:w-[60%] h-[100px] md:h-[289px] rounded-[20px] bg-[url('/flower-2.png')] bg-no-repeat bg-[length:100%] bg-center hover:bg-[length:110%] transition-all duration-300 ease-in-out"
            style={{ transition: "background-size 200ms linear" }}
          >
            <h3 className="text-white text-lg md:text-[36px] mt-5 ml-6 font-bold font-inter">
              {t("romantic")}
            </h3>
          </Link>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-4 md:gap-12">
          <Link
            href={`/category/${categories[2].path}`}
            className="md:w-[60%] h-[100px] md:h-[289px] rounded-[20px] bg-[url('/flower-3.png')] bg-no-repeat  bg-[length:100%] bg-center hover:bg-[length:110%] transition-all duration-300 ease-in-out"
            style={{ transition: "background-size 200ms linear" }}
          >
            <h3 className="text-white text-lg md:text-[36px] mt-5 ml-6 font-bold font-inter">
              {t("rustic")}
            </h3>
          </Link>
          <Link
            href={`/category/${categories[3].path}`}
            className="md:w-[40%] md:flex-1 h-[100px] md:h-[289px] rounded-[20px] bg-[url('/flower-4.png')] bg-center  bg-no-repeat bg-[length:100%] hover:bg-[length:110%] transition-all duration-300 ease-in-out"
            style={{ transition: "background-size 200ms linear" }}
          >
            <h3 className="text-white text-lg md:text-[36px] mt-5 ml-6 font-bold font-inter">
              {t("perfumed")}
            </h3>
          </Link>
        </div>
      </div>
    </Container>
  );
}
