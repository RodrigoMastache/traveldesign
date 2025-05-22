"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { destinationsData, experiencesData } from "../mockups/megaMenu";
import { getMenuDestinations } from "../lib/destinations/get-menu-destinations";
import { getMenuExperiences } from "../lib/experiences/get-menu-experiences";
import { useTranslations, useLocale } from "next-intl";

export default function MobileMenu() {
  const router = useRouter();

  const locale = useLocale();
  const [openSubmenus, setOpenSubmenus] = useState({});

  const [destinations, setDestinations] = useState({});

  useEffect(() => {
    async function getDataAfrica() {
      const datos = await getMenuDestinations("africa", locale);
      setDestinations((prev) => ({
        ...prev,
        África: datos,
      }));
    }
    async function getDataAmerica() {
      const datos = await getMenuDestinations("america", locale);
      setDestinations((prev) => ({
        ...prev,
        América: datos,
      }));
    }
    async function getDataAsia() {
      const datos = await getMenuDestinations("asia", locale);
      setDestinations((prev) => ({
        ...prev,
        Asia: datos,
      }));
    }
    async function getDataEuropa() {
      const datos = await getMenuDestinations("europa", locale);
      setDestinations((prev) => ({
        ...prev,
        Europa: datos,
      }));
    }
    async function getDataOceania() {
      const datos = await getMenuDestinations("oceania", locale);
      setDestinations((prev) => ({
        ...prev,
        Oceanía: datos,
      }));
    }
    async function getDataOrienteMedio() {
      const datos = await getMenuDestinations("oriente-medio", locale);
      setDestinations((prev) => ({
        ...prev,
        "Oriente Medio": datos,
      }));
    }
    getDataAfrica();
    getDataAmerica();
    getDataAsia();
    getDataEuropa();
    getDataOceania();
    getDataOrienteMedio();
  }, []);

  const [experiences, setExperiences] = useState({});
  useEffect(() => {
    async function getDataLifestyle() {
      const datos = await getMenuExperiences("lifestyle", locale);
      setExperiences((prev) => ({
        ...prev,
        Lifestyle: datos,
      }));
    }
    async function getDataProfile() {
      const datos = await getMenuExperiences("perfil", locale);
      setExperiences((prev) => ({
        ...prev,
        Perfil: datos,
      }));
    }
    async function getDataTemporada() {
      const datos = await getMenuExperiences("temporada", locale);
      setExperiences((prev) => ({
        ...prev,
        Temporada: datos,
      }));
    }
    getDataLifestyle();
    getDataProfile();
    getDataTemporada();
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
              data-bs-toggle="collapse"
              onClick={() => toggleSubmenu("destinos")}
            >
              Destinos
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
              data-bs-toggle="collapse"
              onClick={() => toggleSubmenu("experiencias")}
            >
              Experiencias
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
              data-bs-dismiss="offcanvas"
              className="submenu-toggle"
            >
              Nosotros
            </button>
          </div>

          <div className="nav-item">
            <button
              onClick={() => {
                router.push(`/contacto`);
              }}
              data-bs-dismiss="offcanvas"
              className="submenu-toggle"
            >
              Contacto
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
