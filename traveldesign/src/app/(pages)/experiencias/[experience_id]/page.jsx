import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import PartnersSection from "@/app/components/PartnersSection";

export default async function SafariPage({ params }) {
  const { experience_id } = await params;

  return (
    <>
      <Head>
        <title>Safari | Travel Design</title>
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
            <Image
              src="/assets/img/SafariHeader.png"
              alt="Safari en África"
              layout="fill"
              objectFit="cover"
              priority
            />
            <div className="overlay d-flex align-items-center justify-content-center">
              <h1 className="text-center text-white">Safari</h1>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="info-home section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <p className="text-justify text-uppercase">
                  Naturaleza y elegancia
                </p>
                <p className="text-justify">
                  Explora la vida salvaje en su máxima expresión mientras
                  disfrutas de un lujo incomparable. Desde paisajes icónicos
                  hasta alojamientos exclusivos, cada safari es una experiencia
                  única que combina aventura y confort
                </p>
              </div>
              <div className="col-md-5">
                <div className="d-flex justify-content-center">
                  <Link href="#" className="btn btn-dark btn-negro">
                    Planea tu viaje
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
              {/* Kenia */}
              <div className="col-12 col-md-4">
                <div className="card border-0 h-100">
                  <div
                    className="position-relative"
                    style={{ height: "250px" }}
                  >
                    <Image
                      src="/assets/img/safari-kenia.png"
                      alt="Masái Mara"
                      layout="fill"
                      objectFit="cover"
                      className="card-img-top"
                    />
                  </div>
                  <div className="card-body px-0">
                    <p className="text-muted small mb-2">Kenia</p>
                    <h3 className="card-title h4">MASÁI MARA</h3>
                    <p className="card-text text-justify">
                      Vive la Gran Migración y descubre paisajes infinitos
                      llenos de vida salvaje. Una experiencia única en el
                      corazón de África.
                    </p>
                    <Link
                      href="#"
                      className="text-dark text-decoration-underline"
                    >
                      Ver destino
                    </Link>
                  </div>
                </div>
              </div>

              {/* Tanzania */}
              <div className="col-12 col-md-4">
                <div className="card border-0 h-100">
                  <div
                    className="position-relative"
                    style={{ height: "250px" }}
                  >
                    <Image
                      src="/assets/img/safari-tanzania.png"
                      alt="Serengeti"
                      layout="fill"
                      objectFit="cover"
                      className="card-img-top"
                    />
                  </div>
                  <div className="card-body px-0">
                    <p className="text-muted small mb-2">Tanzania</p>
                    <h3 className="card-title h4">SERENGETI</h3>
                    <p className="card-text text-justify">
                      Observa de cerca a los "Cinco Grandes" en un entorno que
                      combina naturaleza pura con exclusividad incomparable.
                    </p>
                    <Link
                      href="#"
                      className="text-dark text-decoration-underline"
                    >
                      Ver destino
                    </Link>
                  </div>
                </div>
              </div>

              {/* Botsuana */}
              <div className="col-12 col-md-4">
                <div className="card border-0 h-100">
                  <div
                    className="position-relative"
                    style={{ height: "250px" }}
                  >
                    <Image
                      src="/assets/img/safari-botsuana.png"
                      alt="Delta del Okavango"
                      layout="fill"
                      objectFit="cover"
                      className="card-img-top"
                    />
                  </div>
                  <div className="card-body px-0">
                    <p className="text-muted small mb-2">Botsuana</p>
                    <h3 className="card-title h4">DELTA DEL OKAVANGO</h3>
                    <p className="card-text text-justify">
                      Navega entre canales cristalinos mientras contemplas la
                      majestuosidad de animales en su hábitat natural.
                    </p>
                    <Link
                      href="#"
                      className="text-dark text-decoration-underline"
                    >
                      Ver destino
                    </Link>
                  </div>
                </div>
              </div>

              {/* Sudáfrica */}
              <div className="col-12 col-md-4">
                <div className="card border-0 h-100">
                  <div
                    className="position-relative"
                    style={{ height: "250px" }}
                  >
                    <Image
                      src="/assets/img/safari-sudafrica.png"
                      alt="Parque Kruger"
                      layout="fill"
                      objectFit="cover"
                      className="card-img-top"
                    />
                  </div>
                  <div className="card-body px-0">
                    <p className="text-muted small mb-2">Sudáfrica</p>
                    <h3 className="card-title h4">PARQUE KRUGER</h3>
                    <p className="card-text text-justify">
                      Disfruta de safaris personalizados en uno de los destinos
                      más emblemáticos de África con lujosos alojamientos.
                    </p>
                    <Link
                      href="#"
                      className="text-dark text-decoration-underline"
                    >
                      Ver destino
                    </Link>
                  </div>
                </div>
              </div>

              {/* Zimbabue */}
              <div className="col-12 col-md-4">
                <div className="card border-0 h-100">
                  <div
                    className="position-relative"
                    style={{ height: "250px" }}
                  >
                    <Image
                      src="/assets/img/safari-zimbabue.png"
                      alt="Parque Hwange"
                      layout="fill"
                      objectFit="cover"
                      className="card-img-top"
                    />
                  </div>
                  <div className="card-body px-0">
                    <p className="text-muted small mb-2">Zimbabue</p>
                    <h3 className="card-title h4">PARQUE HWANGE</h3>
                    <p className="card-text text-justify">
                      Admira enormes manadas de elefantes y paisajes que se
                      transforman con el paso de las estaciones.
                    </p>
                    <Link
                      href="#"
                      className="text-dark text-decoration-underline"
                    >
                      Ver destino
                    </Link>
                  </div>
                </div>
              </div>

              {/* Namibia */}
              <div className="col-12 col-md-4">
                <div className="card border-0 h-100">
                  <div
                    className="position-relative"
                    style={{ height: "250px" }}
                  >
                    <Image
                      src="/assets/img/safari-namibia.png"
                      alt="Desierto de Namib y Etosha"
                      layout="fill"
                      objectFit="cover"
                      className="card-img-top"
                    />
                  </div>
                  <div className="card-body px-0">
                    <p className="text-muted small mb-2">Namibia</p>
                    <h3 className="card-title h4">
                      DESIERTO DE NAMIB Y ETOSHA
                    </h3>
                    <p className="card-text text-justify">
                      Combina paisajes desérticos únicos con encuentros
                      inolvidables con rinocerontes y jirafas bajo cielos
                      estrellados.
                    </p>
                    <Link
                      href="#"
                      className="text-dark text-decoration-underline"
                    >
                      Ver destino
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="row">
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
            </div>
          </div>
        </section>
        <PartnersSection />
      </main>
    </>
  );
}
