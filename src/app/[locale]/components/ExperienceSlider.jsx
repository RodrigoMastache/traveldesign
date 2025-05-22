"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const experiences = [
  {
    image: "/assets/img/SliderHome.png",
    title: "Safaris",
    description: "¿Por qué son tan especiales?",
  },
  {
    image: "/assets/img/SliderHome2.png",
    title: "Glaciares Majestuosos",
    description: "Explora los impresionantes paisajes glaciares",
  },
  {
    image: "/assets/img/SliderHome3.png",
    title: "Ártico Salvaje",
    description: "Observa osos polares en su hábitat natural",
  },
  {
    image: "/assets/img/SliderHome4.png",
    title: "Desiertos Infinitos",
    description: "Aventúrate en las dunas doradas del Sahara",
  },
];

export default function ExperienceSlider() {
  const t = useTranslations("home");
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className="experiencias section-padding">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="title-section mb-5">
              {t("experiences-section.title")}
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="slider-container">
              <div className="main-slider">
                <Swiper
                  modules={[Navigation, Thumbs]}
                  spaceBetween={0}
                  slidesPerView={1}
                  thumbs={{ swiper: thumbsSwiper }}
                >
                  {experiences.map((exp, index) => (
                    <SwiperSlide key={index} className="main-slide">
                      <div className="slide-image-container">
                        <Image
                          src={exp.image}
                          width={1200}
                          height={800}
                          alt={exp.title}
                        />
                      </div>
                      <div className="slide-card">
                        <h2 className="text-uppercase">{exp.title}</h2>
                        <p>{exp.description}</p>
                        <Link href="#">
                          Conocer más
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                          </svg>
                        </Link>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="thumbs-container">
                <Swiper
                  modules={[Navigation, Pagination, Thumbs]}
                  spaceBetween={10}
                  slidesPerView={2}
                  onSwiper={setThumbsSwiper}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }}
                  pagination={{
                    clickable: true,
                    el: ".thumbs-pagination",
                  }}
                  breakpoints={{
                    768: { slidesPerView: 3 },
                  }}
                >
                  {experiences.map((exp, index) => (
                    <SwiperSlide key={index} className="thumb-slide">
                      <Image
                        src={exp.image}
                        width={300}
                        height={200}
                        alt={`${exp.title} Thumbnail`}
                      />
                    </SwiperSlide>
                  ))}
                  <div className="swiper-button-next"></div>
                  <div className="swiper-button-prev"></div>
                  <div className="thumbs-pagination"></div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
