import SwiperHero from "@/app/[locale]/components/SwiperHero";
import SwiperTop10 from "@/app/[locale]/components/SwiperTop10";
import ExperienceSlider from "@/app/[locale]/components/ExperienceSlider";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("home");

  return (
    <div>
      <SwiperHero />
      <section className="info-home section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Image
                src="/assets/img/logo-virtuoso.png"
                width={200}
                height={100}
                className="img-fluid mb-5 mb-md-0"
                alt="Virtuoso Member"
              />
            </div>
            <div className="col-md-8">
              <p className="text-justify">
                {t("main.introduction.description-1")}
              </p>
              <p className="text-justify">
                {t("main.introduction.description-2")}
              </p>
              <Link href="/contacto" className="btn-negro">
                {t("main.introduction.btn-text")}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <SwiperTop10 />
      <ExperienceSlider />
    </div>
  );
}
