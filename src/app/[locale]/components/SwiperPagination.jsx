"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function SwiperPagination({ data }) {
  const t = useTranslations("home");
  return (
    <div className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="title-section mb-5">
              {t("top-destinations-section.title")}
            </h2>
            <div className={`swiper`}>
              <div className="swiper-cards-slider">
                <Swiper
                  modules={[Autoplay, Pagination]}
                  spaceBetween={0}
                  slidesPerView={1}
                  breakpoints={{
                    768: {
                      slidesPerView: 3,
                    },
                  }}
                  autoplay={{ delay: 3000 }}
                  pagination={{
                    clickable: true,
                    el: ".swiper-pagination-top-10-destinos",
                  }}
                  loop={true}
                >
                  {data.map((item, index) => (
                    <SwiperSlide key={item.documentId}>
                      <div key={item.documentId} className="swiper-slide">
                        <Link href={`/destinations/${item.documentId}`}>
                          <img src={item?.cover} className="img-fluid" alt="" />
                          <span className="image-title">{item?.country}</span>
                        </Link>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="swiper-pagination swiper-pagination-top-10-destinos"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
