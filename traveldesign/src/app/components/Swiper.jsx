"use client";

import { useEffect } from "react";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Index = ({ swiper, title, data }) => {
  useEffect(() => {
    new Swiper(`.${swiper}`, {
      modules: [Navigation, Pagination],
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 3000,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 3,
        },
      },
    });
  }, []);

  return (
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="title-section mb-5">{title}</h2>
            <div className={`swiper ${swiper}`}>
              <div className="swiper-wrapper">
                {data?.map((item) => (
                  <div key={item.documentId} className="swiper-slide">
                    <a href="#">
                      <img src={item?.cover} className="img-fluid" alt="" />
                      <span className="image-title">{item?.country}</span>
                    </a>
                  </div>
                ))}
              </div>
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
