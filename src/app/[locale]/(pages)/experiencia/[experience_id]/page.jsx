"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Head from "next/head";
import {
  getExperience,
  getExperiencesByCountry,
} from "../../../lib/experiences/get-experience";
import { useParams } from "next/navigation";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Carousel from "@/app/[locale]/components/Swiper";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

export default function Index() {
  const locale = useLocale();
  const t = useTranslations("titles");
  const c = useTranslations("ctas");
  const params = useParams();
  const experience_id = params.experience_id;

  const [data, setData] = useState({});
  const [moreExperiences, setExperiences] = useState();

  useEffect(() => {
    if (experience_id) {
      async function getDataByCountry(country, experienceName) {
        const datos = await getExperiencesByCountry(
          country,
          experienceName,
          locale
        );
        setExperiences(datos);
      }

      async function getData() {
        const datos = await getExperience(experience_id, locale);
        setData(datos);
        getDataByCountry(datos?.country, datos?.name);
      }
      getData();
    }
  }, []);

  return (
    <>
      <Head>
        <title>Title | Travel Design</title>
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
              <h1 className="text-center text-white">
                <span>{data.country}</span>
                {data.name}
              </h1>
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
                  <Link href="/contacto" className="btn btn-dark btn-negro">
                    {c("articles.start")}
                  </Link>
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
                  <h2 className="title-article">{t("articles.activities")}</h2>
                  {Object.keys(data).length && (
                    <BlocksRenderer content={data.activities} />
                  )}
                  <Link href="/contacto" className="action-link">
                    {c("articles.start")}
                  </Link>
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
                  <h2 className="title-article">
                    {t("articles.accommodations")}
                  </h2>
                  {Object.keys(data).length && (
                    <BlocksRenderer content={data.accommodation} />
                  )}
                  <Link href="/contacto" className="action-link">
                    {c("articles.start")}
                  </Link>
                </div>
              </div>
            </div>

            {/* Recomendaciones Section */}
            <div className="row row-gap-5">
              <div className="col-md-8">
                <div className="d-flex flex-column align-items-start h-100 justify-content-between px-md-4 lh-lg">
                  <h2 className="title-article">
                    {t("articles.recommendations")}
                  </h2>
                  {Object.keys(data).length && (
                    <BlocksRenderer content={data.recommendations} />
                  )}
                  <Link href="/contacto" className="action-link">
                    {c("articles.start")}
                  </Link>
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
        {Boolean(moreExperiences?.length) && (
          <Carousel
            swiper="swiper-cards-slider"
            title={`${t("experiences.carousel-title")} ${data?.country}`}
            data={moreExperiences}
            type="experiences"
            pathByItem="/experiencia/"
          />
        )}
      </main>
    </>
  );
}
