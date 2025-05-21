"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";
import { getMenuDestinations } from "../lib/destinations/get-menu-destinations";
import { getMenuExperiences } from "../lib/experiences/get-menu-experiences";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

export default function Header() {
  const t = useTranslations("header");
  const locale = useLocale();

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
              <Link
                href={locale === "es" ? "/en" : "/es"}
                className="language-switch"
              >
                {locale === "es" ? "English" : "Español"}
              </Link>
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
                />
              </form>
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
        </div>
        <MobileMenu />
      </nav>
    </header>
  );
}
