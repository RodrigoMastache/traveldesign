"use client";

import Head from "next/head";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
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

  function paginate(items, currentPage = 1, pageSize = 6) {
    if (items?.length) {
      const totalItems = items.length;
      const totalPages = Math.ceil(totalItems / pageSize);

      if (currentPage < 1 || currentPage > totalPages) {
        return {
          error: "Página fuera de rango",
          currentPage,
          totalPages,
          data: [],
        };
      }

      const startIndex = (currentPage - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      const paginatedItems = items.slice(startIndex, endIndex);

      return {
        currentPage,
        totalPages,
        pageSize,
        totalItems,
        data: paginatedItems,
      };
    }

    return {
      currentPage,
      totalPages: 0,
      data: [],
    };
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState({});
  const [legacyData, setLegacyData] = useState({});

  // Fetch initial data
  useEffect(() => {
    if (profile_id) {
      async function getData() {
        const datos = await getExperiencesByProfile(profile_id, locale);
        setLegacyData(datos);
        setData({
          ...datos,
          experiences: paginate(datos?.experiences, 1),
        });
      }
      getData();
    }
  }, [profile_id]);

  // Re-paginate when page changes
  useEffect(() => {
    if (legacyData?.experiences) {
      setData((prev) => ({
        ...prev,
        experiences: paginate(legacyData.experiences, currentPage),
      }));
    }
  }, [currentPage]);

  const navigatePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Head>
        <title>{data?.name ?? "Experiencia"}</title>
        <meta
          name="description"
          content={
            data?.introduction?.[0]?.children?.[0]?.text ??
            "Explora esta experiencia."
          }
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

        <section className="section-padding">
          <div className="container">
            <div className="row g-4">
              {data?.experiences?.data?.map((experience) => (
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
          </div>
        </section>

        {/* Pagination */}
        <div className="row">
          <div className="col">
            <nav
              className="section-pagination d-flex justify-content-center mt-5"
              aria-label="Navegación de páginas"
            >
              <ul className="pagination">
                {data?.experiences?.totalPages &&
                  Array.from(
                    { length: data?.experiences?.totalPages },
                    (_, item) => (
                      <li
                        key={item}
                        className={`page-item ${
                          data?.experiences?.currentPage === item + 1
                            ? "active"
                            : ""
                        }`}
                      >
                        <button
                          className="page-link rounded-circle"
                          onClick={() => navigatePage(item + 1)}
                        >
                          {item + 1}
                        </button>
                      </li>
                    )
                  )}
              </ul>
            </nav>
          </div>
        </div>
      </main>
    </>
  );
}
