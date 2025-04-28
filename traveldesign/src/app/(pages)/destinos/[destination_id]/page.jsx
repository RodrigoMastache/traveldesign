import Head from "next/head";
import Image from "next/image";
import PartnersSection from "@/app/components/PartnersSection";

export default function KeniaPage() {
  return (
    <>
      <Head>
        <title>Kenia | Travel Design</title>
        <meta
          name="description"
          content="Descubre Kenia y la reserva Masái Mara con Travel Design"
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
              src="/assets/img/keniaHeader.png"
              alt="Kenia - Masái Mara"
              layout="fill"
              objectFit="cover"
              priority
            />
            <div className="overlay d-flex align-items-center justify-content-center">
              <h1 className="text-center text-white">
                <span>Kenia</span>
                Masái Mara
              </h1>
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section className="bg-arena section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <img
                  src="/assets/img/kenia-resume.png"
                  alt="Masai Mara"
                  className="img-fluid mb-5 mb-md-0"
                />
              </div>
              <div className="col-md-8">
                <div className="d-flex flex-column align-items-start h-100 justify-content-between px-md-4 lh-lg">
                  <p className="text-justify">
                    Un lugar donde las llanuras infinitas cobran vida con la
                    Gran Migración y encuentros inolvidables con los "Cinco
                    Grandes".
                  </p>
                  <p className="text-justify">
                    Este destino único combina paisajes espectaculares y la rica
                    cultura Masái para ofrecerte una experiencia que jamás
                    olvidarás.
                  </p>
                  <a href="#" className="btn btn-dark btn-negro">
                    Comienza a planear tu viaje
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Qué hacer Section */}
        <section className="section-padding">
          <div className="container">
            <div className="row row-gap-5 mb-5">
              <div className="col-md-8">
                <div className="d-flex flex-column align-items-start h-100 justify-content-between px-md-4 lh-lg">
                  <h2 className="title-article">¿QUÉ HACER?</h2>
                  <p className="text-justify">
                    Vive la emoción de la Gran Migración, donde millones de
                    animales cruzan el río Mara en una lucha por la
                    supervivencia. Disfruta de un paseo en globo aerostático
                    para admirar la sabana desde el cielo o visita las aldeas
                    Masái para conocer sus tradiciones únicas. Cada actividad
                    está diseñada para conectar al viajero con la esencia de
                    África.
                  </p>
                  <a href="#" className="action-link">
                    Comienza a planear tu viaje
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <img
                  src="/assets/img/kenia-quehacer.png"
                  alt="Safari en África"
                  className="img-fluid h-100 object-fit-cover"
                />
              </div>
            </div>

            {/* Dónde quedarte Section */}
            <div className="row row-gap-5 mb-5">
              <div className="col-md-4 order-1 order-md-0">
                <img
                  src="/assets/img/kenia-dondequedarte.png"
                  alt="Alojamiento en Safari"
                  className="img-fluid h-100 object-fit-cover"
                />
              </div>
              <div className="col-md-8 order-0 order-md-1">
                <div className="d-flex flex-column align-items-start h-100 justify-content-between px-md-4 lh-lg">
                  <h2 className="title-article">¿DÓNDE QUEDARTE?</h2>
                  <p className="text-justify">
                    El lujo y la naturaleza se unen en Masái Mara con
                    alojamientos como Mahali Mzuri, que combina diseño exclusivo
                    y vistas inigualables. También puedes elegir campamentos de
                    tiendas como Kichwa Tembo para una experiencia auténtica, o
                    eco-lodges como Basecamp, ideales para viajeros sostenibles.
                  </p>
                  <a href="#" className="action-link">
                    Comienza a planear tu viaje
                  </a>
                </div>
              </div>
            </div>

            {/* Recomendaciones Section */}
            <div className="row row-gap-5">
              <div className="col-md-8">
                <div className="d-flex flex-column align-items-start h-100 justify-content-between px-md-4 lh-lg">
                  <h2 className="title-article">RECOMENDACIONES</h2>
                  <p className="text-justify">
                    Visita de julio a octubre para presenciar la Gran Migración
                    en todo su esplendor. Durante el día, las temperaturas son
                    cálidas, entre 25°C y 30°C, mientras que las noches pueden
                    ser frescas. Lleva ropa en tonos neutros, protección solar,
                    repelente de insectos y binoculares. Antes de viajar, te
                    asesoraremos sobre las vacunas necesarias, no tienes que
                    preocuparte por eso.
                  </p>
                  <a href="#" className="action-link">
                    Comienza a planear tu viaje
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <img
                  src="/assets/img/kenia-recomendaciones.png"
                  alt="Alojamiento en Safari"
                  className="img-fluid h-100 object-fit-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <PartnersSection />
      </main>
    </>
  );
}
