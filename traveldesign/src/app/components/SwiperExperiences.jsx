"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "@/app/nosotros/nosotros.module.css";

const experiences = [
  {
    image: "/assets/img/nosotros-safari.png",
    title: "Safari de lujo en África",
  },
  {
    image: "/assets/img/nosotros-maldivas.png",
    title: "Escapada a las Maldivas",
  },
  {
    image: "/assets/img/nosotros-crucero.png",
    title: "Crucero por el Mediterráneo",
  },
  // Add more experiences as needed
];

export default function SwiperExperiences() {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={30}
      slidesPerView={1}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
      }}
      className={styles.swiperCardsSlider}
    >
      {experiences.map((exp, index) => (
        <SwiperSlide key={index}>
          <a href="#">
            <img src={exp.image} className="img-fluid" alt="" />
            <span className={styles.imageTitle}>{exp.title}</span>
          </a>
        </SwiperSlide>
      ))}
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </Swiper>
  );
}
