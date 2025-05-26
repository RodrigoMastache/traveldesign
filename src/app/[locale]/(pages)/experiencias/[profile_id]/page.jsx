"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { getExperiencesByProfile } from "../../../lib/experiences/get-experiences";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

export default function Index() {
  const locale = useLocale();
  const c = useTranslations("ctas");
  const params = useParams();
  const profile_id = params.profile_id;

  const [data, setData] = useState({});

  useEffect(() => {
    if (profile_id) {
      async function getData() {
        const datos = await getExperiencesByProfile(profile_id, locale);
        setData(datos);
      }
      getData();
    }
  }, []);

  console.log("data", data);

  return (
    <>
      <Head>
        <title>{data?.name} | Travel Design</title>
        <meta
          name="description"
          content="Descubre los mejores safaris en África con Travel Design"
        />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="hero-section position-relative">
          <div
            className="position-relative"
            style={{ height: "100vh", width: "100%" }}
          >
            <img src={data.banner} alt={data?.name || "imagen"} />
            <div className="overlay d-flex align-items-center justify-content-center">
              <h1 className="text-center text-white">{data?.name}</h1>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="info-home section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                {Object.keys(data).length && (
                  <BlocksRenderer content={data.introduction} />
                )}
              </div>
              <div className="col-md-5">
                <div className="d-flex justify-content-center">
                  <Link href="#" className="btn btn-dark btn-negro">
                    {c("experiences.start")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Destinations Section */}
        <section className="section-padding">
          <div className="container">
            <div className="row g-4">
              {data?.experiences?.map((experience) => (
                <div key={experience?.id} className="col-12 col-md-4">
                  <div className="card border-0 h-100">
                    <div className="position-relative">
                      <img
                        src={
                          experience?.cover ||
                          "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
                        }
                        alt={experience?.name}
                        className="card-img-top"
                        style={{ objectFit: "cover", height: "250px" }}
                      />
                    </div>
                    <div className="card-body px-0">
                      <p className="text-muted small mb-2">
                        {experience?.country}
                      </p>
                      <h3
                        className="card-title h4"
                        style={{ textTransform: "capitalize" }}
                      >
                        {experience?.name}
                      </h3>
                      {Object.keys(experience).length && (
                        <BlocksRenderer content={experience.description} />
                      )}
                      <Link
                        href={`/experiencia/${experience?.documentId}`}
                        className="text-dark text-decoration-underline"
                      >
                        {c("experiences.more-details")}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {/* <div className="row">
              <div className="col">
                <nav
                  className="section-pagination d-flex justify-content-center mt-5"
                  aria-label="Navegación de páginas"
                >
                  <ul className="pagination">
                    <li className="page-item active">
                      <Link
                        className="page-link rounded-circle"
                        href="#"
                        aria-current="page"
                      >
                        1
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" href="#">
                        2
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" href="#">
                        3
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" href="#">
                        4
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link
                        className="page-link"
                        href="#"
                        aria-label="Siguiente"
                      >
                        <span aria-hidden="true">&rsaquo;</span>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div> */}
          </div>
        </section>
      </main>
    </>
  );
}
