"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";

export default function Header() {
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
            <MegaMenu title="Destinos" type="destinations" />
            <MegaMenu title="Experiencias" type="experiences" />
            <Link className="nav-link" href="/nosotros">
              Nosotros
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
              Contacto
            </Link>
            <Link className="nav-link" href="/blog">
              Blog
            </Link>
            <div className="form-language">
              <Link href="#" className="language-switch">
                English
              </Link>
              <form className="d-flex align-items-center ms-3 d-none d-lg-block">
                <span className="me-2">Buscar</span>
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
