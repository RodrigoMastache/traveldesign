"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import { getDestination } from "../../../lib/destinations/get-destination";
import { useParams } from "next/navigation";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Carousel from "@/app/components/Swiper";

export default function Index() {
  const params = useParams();
  const destination_id = params.destination_id;

  const [data, setData] = useState({});

  useEffect(() => {
    if (destination_id) {
      async function getData() {
        const datos = await getDestination(destination_id);
        setData(datos);
      }
      getData();
    }
  }, []);

  return (
    <>
      <Head>
        <title>{data?.country} | Travel Design</title>
        <meta
          name="description"
          content="Descubre Kenia y la reserva Masái Mara con Travel Design"
        />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="hero-section position-relative">
          <div
            className="position-relative"
            style={{ height: "100vh", width: "100%" }}
          >
            {data?.bannerUrl && (
              <img src={data?.bannerUrl} alt="Kenia - Masái Mara" />
            )}
            <div className="overlay d-flex align-items-center justify-content-center">
              <h1 className="text-center text-white">{data?.country}</h1>
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section className="bg-arena section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                {data?.intImageUrl && (
                  <img
                    src={data?.intImageUrl}
                    alt="Masai Mara"
                    className="img-fluid mb-5 mb-md-0"
                  />
                )}
              </div>
              <div className="col-md-8">
                <div className="d-flex flex-column align-items-start h-100 justify-content-between px-md-4 lh-lg">
                  {Object.keys(data).length && (
                    <BlocksRenderer content={data.introduction} />
                  )}
                  <a href="#" className="btn btn-dark btn-negro">
                    Comienza a planear tu viaje
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Qué hacer Section */}
        <section className="section-padding">
          <div className="container">
            <div className="row row-gap-5 mb-5">
              <div className="col-md-8">
                <div className="d-flex flex-column align-items-start h-100 justify-content-between px-md-4 lh-lg">
                  <h2 className="title-article">¿QUÉ HACER?</h2>
                  {Object.keys(data).length && (
                    <BlocksRenderer content={data.activities} />
                  )}
                  <a href="#" className="action-link">
                    Comienza a planear tu viaje
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                {data?.actImageUrl && (
                  <img
                    src={data?.actImageUrl}
                    alt="Safari en África"
                    className="img-fluid h-100 object-fit-cover"
                  />
                )}
              </div>
            </div>

            {/* Dónde quedarte Section */}
            <div className="row row-gap-5 mb-5">
              <div className="col-md-4 order-1 order-md-0">
                {data?.accImageUrl && (
                  <img
                    src={data?.accImageUrl}
                    alt="Alojamiento en Safari"
                    className="img-fluid h-100 object-fit-cover"
                  />
                )}
              </div>
              <div className="col-md-8 order-0 order-md-1">
                <div className="d-flex flex-column align-items-start h-100 justify-content-between px-md-4 lh-lg">
                  <h2 className="title-article">¿DÓNDE QUEDARTE?</h2>
                  {Object.keys(data).length && (
                    <BlocksRenderer content={data.accommodation} />
                  )}
                  <a href="#" className="action-link">
                    Comienza a planear tu viaje
                  </a>
                </div>
              </div>
            </div>

            {/* Recomendaciones Section */}
            <div className="row row-gap-5">
              <div className="col-md-8">
                <div className="d-flex flex-column align-items-start h-100 justify-content-between px-md-4 lh-lg">
                  <h2 className="title-article">RECOMENDACIONES</h2>
                  {Object.keys(data).length && (
                    <BlocksRenderer content={data.recommendations} />
                  )}
                  <a href="#" className="action-link">
                    Comienza a planear tu viaje
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                {data?.recImageUrl && (
                  <img
                    src={data?.recImageUrl}
                    alt="Alojamiento en Safari"
                    className="img-fluid h-100 object-fit-cover"
                  />
                )}
              </div>
            </div>
          </div>
        </section>

        <Carousel
          swiper="swiper-cards-slider"
          title={`Más destinos de ${data?.continent}`}
        />
      </main>
    </>
  );
}
