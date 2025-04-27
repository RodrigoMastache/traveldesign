"use client";

import { useState } from "react";
import Link from "next/link";
import { destinationsData, experiencesData } from "../mockups/megaMenu";

export default function MobileMenu() {
  const [openSubmenus, setOpenSubmenus] = useState({});

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
                {Object.entries(destinationsData).map(([region, items]) => (
                  <div className="nav-item" key={region}>
                    {items.length > 0 ? (
                      <>
                        <button
                          className="submenu-toggle"
                          data-bs-toggle="collapse"
                          onClick={() => toggleSubmenu(`destinos-${region}`)}
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
                              <Link href="#" className="nav-link" key={item}>
                                {item}
                              </Link>
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
                {Object.entries(experiencesData).map(([category, items]) => (
                  <div key={category}>
                    <h6>{category}</h6>
                    {items.map((item) => (
                      <Link href="#" className="nav-link" key={item}>
                        {item}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="nav-item">
            <Link href="/nosotros" className="submenu-toggle">
              Nosotros
            </Link>
          </div>

          <div className="nav-item">
            <Link href="/contacto" className="submenu-toggle">
              Contacto
            </Link>
          </div>

          <div className="nav-item">
            <Link href="/blog" className="submenu-toggle">
              Blog
            </Link>
          </div>

          <div className="nav-item">
            <Link href="#" className="submenu-toggle fs-4">
              EN
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
