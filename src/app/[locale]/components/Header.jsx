"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";
import { getMenuDestinations } from "../lib/destinations/get-menu-destinations";
import { getMenuExperiences } from "../lib/experiences/get-menu-experiences";
import { getExperiences } from "../lib/experiences/get-experience";
import { getDestinations } from "../lib/destinations/get-destination";
import { useTranslations, useLocale } from "next-intl";
import { useMediaQuery } from "react-responsive";

export default function Header() {
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

  const t = useTranslations("header");
  const locale = useLocale();

  const isMobileScreen = useMediaQuery({ query: "(max-width: 991px)" });
  const isDesktopScreen = useMediaQuery({ query: "(min-width: 992px)" });

  const [destinations, setDestinations] = useState({});
  useEffect(() => {
    if (!isDesktopScreen) {
      return;
    }

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
    if (!isDesktopScreen) {
      return;
    }
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

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navbarRef = useRef(null);
  const logoHeaderRef = useRef(null);

  useEffect(() => {
    function handleNavbarScroll() {
      if (navbarRef.current && logoHeaderRef.current) {
        if (window.scrollY > 50) {
          navbarRef.current.classList.add("navbar-scrolled");
        } else {
          navbarRef.current.classList.remove("navbar-scrolled");
        }
      }
    }

    document.addEventListener("DOMContentLoaded", handleNavbarScroll);
    window.addEventListener("scroll", handleNavbarScroll);

    return () => {
      window.removeEventListener("scroll", handleNavbarScroll);
    };
  }, []);

  const [data, setData] = useState([]);
  const [dataDestinations, setDataDestinations] = useState([]);

  const getDataExperiences = async () => {
    return getExperiences(locale)
      .then((res) => {
        setData(res);
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  const getDataDestinations = async () => {
    return getDestinations(locale)
      .then((res) => {
        setDataDestinations(res);
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  const handleFocus = () => {
    getDataExperiences();
    getDataDestinations();
  };

  function normalizarTexto(texto) {
    return texto
      ? texto
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
      : "";
  }

  function buscarMientrasEscribes(arr, texto) {
    const textoNormalizado = normalizarTexto(texto);

    return arr.filter((item) => {
      const name = normalizarTexto(item.name || "");
      const country = normalizarTexto(item.country || "");
      return (
        name.includes(textoNormalizado) || country.includes(textoNormalizado)
      );
    });
  }

  const [results, setResultsExperiencias] = useState([]);
  const [resultsDestinos, setResultsDestinos] = useState([]);
  const [keyFinder, setKeyFinder] = useState("");

  const handleSearch = (value) => {
    setKeyFinder(value);
    const busqueda = buscarMientrasEscribes(data, value);
    const busquedaDestinos = buscarMientrasEscribes(dataDestinations, value);
    setResultsExperiencias(busqueda);
    setResultsDestinos(busquedaDestinos);
  };

  return (
    <header className="position-relative">
      <nav ref={navbarRef} className="navbar navbar-expand-lg position-fixed">
        <div className="container">
          <button
            className="navbar-toggler border-0 d-lg-none p-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-links d-none d-lg-flex">
            <MegaMenu
              title={t("destinations")}
              type="destinations"
              data={destinations}
            />
            <MegaMenu
              title={t("experiences")}
              type="experiences"
              data={experiences}
            />
            <Link className="nav-link" href="/nosotros">
              {t("about-us")}
            </Link>
          </div>

          <div
            ref={logoHeaderRef}
            className="navbar-logo d-flex mx-auto"
            id="logo-header"
          >
            <Link href="/">
              <Image
                src="/assets/img/logo-travel-design.svg"
                width={150}
                height={50}
                alt="Logo Travel Design"
                className="img-fluid"
              />
            </Link>
          </div>

          <div className="navbar-links d-none d-lg-flex">
            <Link className="nav-link" href="/contacto">
              {t("contact")}
            </Link>
            <Link className="nav-link" href="/blog">
              {t("blog")}
            </Link>
            <div className="form-language">
              <a
                href={locale === "es" ? "/en" : "/es"}
                className="language-switch"
              >
                {locale === "es" ? "English" : "Español"}
              </a>
              <form className="d-flex align-items-center ms-3 d-none d-lg-block">
                <span className="me-2">{t("search")}</span>
                <span className="me-1">
                  <FiSearch />
                </span>
                <input
                  className="search-input"
                  type="text"
                  placeholder=""
                  aria-label="Search"
                  onFocus={() => handleFocus()}
                  onChange={(e) => handleSearch(e.target.value)}
                  value={keyFinder}
                />
              </form>
              {Boolean(keyFinder && results?.length) && (
                <div className="search-result">
                  <ul>
                    <h5
                      style={{
                        marginBottom: "20px",
                        textTransform: "capitalize",
                      }}
                    >
                      {t("experiences")}
                    </h5>
                    {results?.map((item) => (
                      <li
                        key={item?.documentId}
                        onClick={() => setKeyFinder("")}
                      >
                        <Link href={`/experiencia/${item.documentId}`}>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <ul>
                    <h5
                      style={{
                        marginBottom: "20px",
                        textTransform: "capitalize",
                      }}
                    >
                      {t("destinations")}
                    </h5>
                    {resultsDestinos?.map((item) => (
                      <li
                        key={item?.documentId}
                        onClick={() => setKeyFinder("")}
                      >
                        <Link
                          href={`/destinos/${item.documentId}`}
                          style={{ textTransform: "capitalize" }}
                        >
                          {item.country}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="d-lg-none">
            <button
              className="navbar-toggler border-0 d-lg-none p-0 bi bi-search search-icon-md"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <FiSearch size={24} />
            </button>
          </div>
          {isSearchOpen && (
            <div className="search-result-mobile" style={{ padding: "40px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginBottom: "20px",
                }}
              >
                <span
                  role="button"
                  style={{ fontSize: "25px" }}
                  onClick={() => {
                    setKeyFinder("");
                    setIsSearchOpen(!isSearchOpen);
                  }}
                >
                  ✕
                </span>
              </div>
              <div>
                <label htmlFor="finder-mobile" style={{ marginBottom: "10px" }}>
                  {t("search")}
                </label>
                <input
                  id="finder-mobile"
                  className="search-input"
                  type="text"
                  placeholder=""
                  aria-label="Search"
                  onFocus={() => handleFocus()}
                  onChange={(e) => handleSearch(e.target.value)}
                  style={{ width: "100%" }}
                  value={keyFinder}
                />
              </div>
              {keyFinder && (
                <div>
                  {Boolean(results.length) && (
                    <ul>
                      <h5
                        style={{
                          marginBottom: "20px",
                          textTransform: "capitalize",
                        }}
                      >
                        {t("experiences")}
                      </h5>
                      {results?.map((item) => (
                        <li
                          key={item?.documentId}
                          onClick={() => setKeyFinder("")}
                        >
                          <Link href={`/experiencia/${item.documentId}`}>
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                  {Boolean(resultsDestinos.length) && (
                    <ul>
                      <h5
                        style={{
                          marginBottom: "20px",
                          textTransform: "capitalize",
                        }}
                      >
                        {t("destinations")}
                      </h5>
                      {resultsDestinos?.map((item) => (
                        <li
                          key={item?.documentId}
                          onClick={() => setKeyFinder("")}
                        >
                          <Link
                            href={`/destinos/${item.documentId}`}
                            style={{ textTransform: "capitalize" }}
                          >
                            {item.country}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
        {isMobileScreen && <MobileMenu />}
      </nav>
    </header>
  );
}
