import Link from "next/link";
import Image from "next/image";
import PartnersSection from "@/app/[locale]/components/PartnersSection";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <div>
      <PartnersSection />
      <footer className="py-4 mt-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <section className="d-flex flex-wrap flex-column text-center text-md-start flex-md-row justify-content-around align-items-center align-items-md-start gap-5">
                <section className="logo mb-3 mb-md-0 col-lg-4">
                  <Image
                    src="/assets/img/logo-travel-design.svg"
                    width={150}
                    height={50}
                    alt="Logo Travel Design"
                    className="img-fluid"
                  />
                </section>
                <section className="mb-3 mb-md-0">
                  <h3>{t("address.title")}</h3>
                  <p>
                    <Link
                      href="https://maps.app.goo.gl/bpRoKHiGTVWi51Fg8"
                      target="_blank"
                    >
                      Bosque de Radiatas 34,
                      <br />
                      Piso 1, Oficina 1-D.
                      <br />
                      Bosque de las Lomas,
                      <br />
                      C.P 051200
                    </Link>
                  </p>
                </section>
                <section className="mb-3 mb-md-0">
                  <h3>{t("contact.title")}</h3>
                  <p>
                    <Link href="mailto:contacto@td.com.mx">
                      contacto@td.com.mx
                    </Link>
                  </p>
                  <p>
                    <Link href="tel:+525585263303">+52 55 8526 3303</Link>
                  </p>
                </section>
                <section>
                  <p>
                    <Link className="underline" href="/nosotros">
                      {t("frequent-questions.title")}
                    </Link>
                  </p>
                  <p>
                    <Link className="underline" href="/politicas-de-privacidad">
                      {t("private-notice.title")}
                    </Link>
                  </p>
                  <section className="rrss d-flex gap-3 mt-4 justify-content-center justify-content-md-start">
                    <a
                      href="https://www.facebook.com/people/Travel-Design-MX/100032495513266/"
                      target="_blank"
                      aria-label="Facebook"
                    >
                      <Image
                        src="/assets/img/icono-facebook.svg"
                        width={24}
                        height={24}
                        className="img-fluid"
                        alt="Facebook"
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/traveldesignmx"
                      target="_blank"
                      aria-label="Instagram"
                    >
                      <Image
                        src="/assets/img/icono-instagram.svg"
                        width={24}
                        height={24}
                        className="img-fluid"
                        alt="Instagram"
                      />
                    </a>
                  </section>
                </section>
              </section>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
