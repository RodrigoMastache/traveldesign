"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import { useTranslations } from "next-intl";

const destinations = [
  { image: "/assets/img/top10-africa.png", title: "África" },
  { image: "/assets/img/top10-islandia.png", title: "Islandia" },
  { image: "/assets/img/top10-cruceros.png", title: "Cruceros" },
  { image: "https://placehold.co/300x400", title: "Egipto" },
  { image: "https://placehold.co/300x400", title: "Turquía" },
  { image: "https://placehold.co/300x400", title: "Ski" },
];

export default function SwiperTop10() {
  const t = useTranslations("home");

  return (
    <section className="top-10 section-padding">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="title-section mb-5">
              {t("top-destinations-section.title")}
            </h2>
            <div className="swiper swiper-top-10">
              <Swiper
                modules={[Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{
                  clickable: true,
                  el: ".swiper-pagination-top-10",
                }}
                breakpoints={{
                  576: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  992: { slidesPerView: 4 },
                }}
              >
                {destinations.map((dest, index) => (
                  <SwiperSlide key={index}>
                    <Link href="#">
                      <img
                        src={dest.image}
                        width={300}
                        height={400}
                        className="img-fluid"
                        alt={dest.title}
                      />
                      <span className="image-title">{dest.title}</span>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="swiper-pagination swiper-pagination-top-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
