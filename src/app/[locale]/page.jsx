"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SwiperHero from "@/app/[locale]/components/SwiperHero";
import SwiperPagination from "@/app/[locale]/components/SwiperPagination";
import Carousel from "@/app/[locale]/components/Swiper";
import ExperienceSlider from "@/app/[locale]/components/ExperienceSlider";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { getTopDestinations } from "./lib/destinations/get-destination";

export default function Home() {
  const t = useTranslations("home");
  const locale = useLocale();

  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    async function getData() {
      const datos = await getTopDestinations(locale);
      setDestinations(datos?.destinations);
    }
    getData();
  }, []);

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
      <SwiperPagination
        data={destinations}
        // swiper="swiper-cards-slider"
        // swiperPagination="swiper-pagination-top-10"
        // title={t("top-destinations-section.title")}
        // type="destinations"
        // pathByItem="/destinations/"
      />
      <ExperienceSlider />
    </div>
  );
}
