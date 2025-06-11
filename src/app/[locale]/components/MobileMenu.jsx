"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getMenuDestinations } from "../lib/destinations/get-menu-destinations";
import { getMenuExperiences } from "../lib/experiences/get-menu-experiences";
import { useTranslations, useLocale } from "next-intl";

export default function MobileMenu() {
  useEffect(() => {
    const currentPath = window.location.pathname;
    const currentLang = currentPath.split("/")[1];

    const previousLang = localStorage.getItem("lang");

    if (previousLang && previousLang !== currentLang) {
      localStorage.removeItem("destinations");
      localStorage.removeItem("experiences");
    }

    localStorage.setItem("lang", currentLang);
  }, []);

  const router = useRouter();
  const t = useTranslations("header");
  const locale = useLocale();
  const [openSubmenus, setOpenSubmenus] = useState({});

  const [destinations, setDestinations] = useState({});
  useEffect(() => {
    const stored = localStorage.getItem("destinations");

    if (stored) {
      setDestinations(JSON.parse(stored));
      return;
    }

    async function fetchAllDestinations() {
      const regions = [
        { key: "africa", name: "África" },
        { key: "america", name: "América" },
        { key: "asia", name: "Asia" },
        { key: "europa", name: "Europa" },
        { key: "oceania", name: "Oceanía" },
        { key: "oriente-medio", name: "Oriente Medio" },
      ];

      const promises = regions.map(({ key }) =>
        getMenuDestinations(key, locale)
      );

      const results = await Promise.all(promises);

      const allDestinations = results.reduce((acc, data, idx) => {
        acc[regions[idx].name] = data;
        return acc;
      }, {});

      setDestinations(allDestinations);
      localStorage.setItem("destinations", JSON.stringify(allDestinations));
    }

    fetchAllDestinations();
  }, []);

  const [experiences, setExperiences] = useState({});

  useEffect(() => {
    const stored = localStorage.getItem("experiences");

    if (stored) {
      setExperiences(JSON.parse(stored));
      return;
    }

    async function fetchAllExperiences() {
      const categories = [
        { key: "lifestyle", name: "Lifestyle" },
        { key: "perfil", name: "Perfil" },
        { key: "temporada", name: "Temporada" },
      ];

      const results = await Promise.all(
        categories.map(({ key }) => getMenuExperiences(key, locale))
      );

      const allExperiences = results.reduce((acc, data, idx) => {
        acc[categories[idx].name] = data;
        return acc;
      }, {});

      setExperiences(allExperiences);
      localStorage.setItem("experiences", JSON.stringify(allExperiences));
    }

    fetchAllExperiences();
  }, []);

  const toggleSubmenu = (menu) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [menu]: prev[menu] ? null : true,
    }));
  };

  return (
    <div
      className="offcanvas offcanvas-start d-lg-none"
      tabIndex={-1}
      id="offcanvasNavbar"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title">Menú</h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
        ></button>
      </div>
      <div className="offcanvas-body">
        <div className="nav flex-column">
          <div className="nav-item">
            <button
              className="submenu-toggle"
              style={{ textTransform: "capitalize" }}
              data-bs-toggle="collapse"
              onClick={() => toggleSubmenu("destinos")}
            >
              {t("destinations")}
            </button>
            <div
              className={`collapse ${openSubmenus["destinos"] ? "show" : ""}`}
              id="destinosSubmenu"
            >
              <div className="submenu">
                {Object.keys(destinations).length &&
                  Object.entries(destinations).map(([region, items]) => (
                    <div className="nav-item" key={region}>
                      {items.length > 0 ? (
                        <>
                          <button
                            className="submenu-toggle"
                            data-bs-toggle="collapse"
                            onClick={() => toggleSubmenu(`destinos-${region}`)}
                            style={{ textTransform: "capitalize" }}
                          >
                            {region}
                          </button>
                          <div
                            className={`collapse ${
                              openSubmenus[`destinos-${region}`] ? "show" : ""
                            }`}
                          >
                            <div className="submenu">
                              {items.map((item) => (
                                <button
                                  onClick={() => {
                                    toggleSubmenu("destinos");
                                    router.push(
                                      `/destinations/${item?.documentId}`
                                    );
                                  }}
                                  data-bs-dismiss="offcanvas"
                                  className="nav-link"
                                  key={item?.documentId}
                                  style={{ textTransform: "capitalize" }}
                                >
                                  {item.country}
                                </button>
                              ))}
                            </div>
                          </div>
                        </>
                      ) : (
                        <Link href="#" className="nav-link">
                          {region}
                        </Link>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <div className="nav-item">
            <button
              className="submenu-toggle"
              style={{ textTransform: "capitalize" }}
              data-bs-toggle="collapse"
              onClick={() => toggleSubmenu("experiencias")}
            >
              {t("experiences")}
            </button>
            <div
              className={`collapse ${
                openSubmenus["experiencias"] ? "show" : ""
              }`}
            >
              <div className="submenu">
                {Object.entries(experiences).map(([category, items]) => (
                  <div key={category}>
                    <h6 style={{ marginTop: "10px" }}>{category}</h6>
                    {items.map((item) => (
                      <button
                        onClick={() => {
                          toggleSubmenu("experiencias");
                          router.push(`/experiences/${item?.documentId}`);
                        }}
                        data-bs-dismiss="offcanvas"
                        className="nav-link"
                        key={item.documentId}
                        style={{ textTransform: "capitalize" }}
                      >
                        {item?.name}
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="nav-item">
            <button
              onClick={() => {
                router.push(`/nosotros`);
              }}
              style={{ textTransform: "capitalize" }}
              data-bs-dismiss="offcanvas"
              className="submenu-toggle"
            >
              {t("about-us")}
            </button>
          </div>

          <div className="nav-item">
            <button
              onClick={() => {
                router.push(`/contacto`);
              }}
              data-bs-dismiss="offcanvas"
              style={{ textTransform: "capitalize" }}
              className="submenu-toggle"
            >
              {t("contact")}
            </button>
          </div>

          <div className="nav-item">
            <Link href="/blog" className="submenu-toggle">
              Blog
            </Link>
          </div>

          <div className="nav-item">
            <a
              href={locale === "es" ? "/en" : "/es"}
              className="submenu-toggle fs-4"
            >
              {locale === "es" ? "EN" : "ES"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
