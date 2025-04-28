import SwiperExperiences from "@/app/components/SwiperExperiences";

export default function NosotrosPage() {
  return (
    <>
      <main>
        <section className="hero-section">
          <img src="/assets/img/nosotros-header.png" alt="kenia" />
          <div className="overlay">
            <h1>Conoce nuestra historia</h1>
          </div>
        </section>

        <section className="bg-arena section-padding">
          <div className="container">
            <div className="row row-gap-5">
              <div className="col-md-4 order-1 order-md-0">
                <img
                  src="/assets/img/Nosotros-1.png"
                  className="img-fluid h-100 object-fit-cover"
                  alt="Masai Mara"
                />
              </div>
              <div className="col-md-8 order-0 order-md-1">
                <div className="d-flex flex-column align-items-start h-100 justify-content-between px-md-4 lh-lg">
                  <h2 className="title-article">¿Quiénes somos?</h2>
                  <p className="text-justify">
                    En <b>Travel Design</b>, somos más que una agencia de
                    viajes; somos creadores de experiencias a la medida. Con una
                    pasión inigualable por explorar el mundo, nos especializamos
                    en diseñar viajes únicos que se ajustan a tus necesidades y
                    deseos.
                  </p>
                  <a href="#" className="btn-negro">
                    Comienza a planear tu viaje
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container">
            <div className="row row-gap-5">
              <div className="col-md-8">
                <div className="d-flex flex-column align-items-start h-100 justify-content-between px-md-4 lh-lg">
                  <p className="text-justify">
                    Ya sea que <b>viajes por trabajo o por placer</b>,
                    entendemos que <b>cada detalle cuenta</b>. Desde la
                    selección del vuelo perfecto hasta la elección de{" "}
                    <b>
                      alojamientos exclusivos y la planificación de actividades
                    </b>{" "}
                    personalizadas, nos encargamos de que cada aspecto de{" "}
                    <b>tu viaje sea impecable.</b>
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <img
                  src="/assets/img/nosotros-2.png"
                  className="img-fluid h-100 object-fit-cover"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-arena section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <h3 className="title-article text-center">
                  Nuestra misión es sencilla
                </h3>
                <p className="text-center lead">
                  hacer que cada viaje que planificamos sea memorable y libre de
                  preocupaciones, para que tú solo tengas que disfrutar.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col">
                <h2 className="title-section mb-5">
                  Experiencias inolvidables
                </h2>
                <SwiperExperiences />
              </div>
            </div>
          </div>
        </section>

        <section className="pre-footer">
          <div className="container">
            <div className="row">
              <div className="col">
                <section className="d-flex flex-wrap justify-content-around justify-content-md-between align-items-center gap-4">
                  <img
                    src="/assets/img/logo-four-seasons.png"
                    className="img-fluid mb-3 mb-md-0"
                    alt="Four Seasons - Hotels and Resorts"
                  />
                  <div className="vr my-0 d-none d-md-block"></div>
                  <img
                    src="/assets/img/logo-virtuoso-b.png"
                    className="img-fluid mb-3 mb-md-0"
                    alt="Virtuoso Member"
                  />
                  <div className="vr my-0 d-none d-md-block"></div>
                  <img
                    src="/assets/img/logo-marriot.png"
                    className="img-fluid mb-3 mb-md-0"
                    alt="Marriot international Stars"
                  />
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
