import Link from "next/link";
import Image from "next/image";
import PartnersSection from "@/app/components/PartnersSection";

export default function Footer() {
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
                  <h3>Ubicación</h3>
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
                  <h3>Contacto</h3>
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
                    <Link className="underline" href="#">
                      Preguntas Frecuentes
                    </Link>
                  </p>
                  <p>
                    <Link className="underline" href="#">
                      Aviso de privacidad
                    </Link>
                  </p>
                  <p>
                    <Link className="underline" href="#">
                      Términos y condiciones
                    </Link>
                  </p>
                  <section className="rrss d-flex gap-3 mt-4 justify-content-center justify-content-md-start">
                    <Link href="#" target="_blank">
                      <Image
                        src="/assets/img/icono-facebook.svg"
                        width={24}
                        height={24}
                        className="img-fluid"
                        alt="Facebook"
                      />
                    </Link>
                    <Link href="#" target="_blank">
                      <Image
                        src="/assets/img/icono-instagram.svg"
                        width={24}
                        height={24}
                        className="img-fluid"
                        alt="Instagram"
                      />
                    </Link>
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
