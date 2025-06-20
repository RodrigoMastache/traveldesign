"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function SwiperHero() {
  const t = useTranslations("home");

  const slides = [
    {
      image: "/assets/img/home-banner.webp",
      title: t("main.hero.title-img-1"),
      alt: "Imagen 1",
    },
    {
      image: "/assets/img/home-banner2.webp",
      title: t("main.hero.title-img-2"),
      alt: "Imagen 2",
    },
    {
      image: "/assets/video/VideoBanner.mp4",
      title: t("main.hero.title-img-3"),
      alt: "Video banner",
      isVideo: true,
    },
  ];

  return (
    <div className="swiper swiper-hero position-relative">
      <div className="swiper-wrapper">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true, el: ".swiper-pagination-hero" }}
          loop={true}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="swiper-slide">
                {slide.isVideo ? (
                  <video autoPlay muted loop playsInline className="w-100">
                    <source src={slide.image} type="video/mp4" />
                    Tu navegador no soporta videos.
                  </video>
                ) : (
                  <img src={slide.image} alt={slide.alt} className="w-100" />
                )}
                <div className="hero-overlay">
                  <h1 className="display-4 text-uppercase">{slide.title}</h1>
                  <Link href="/contacto" className="btn hero-btn">
                    {t("main.hero.btn-text")}
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination swiper-pagination-hero"></div>
      </div>
    </div>
  );
}
