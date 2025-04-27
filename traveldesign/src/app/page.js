import SwiperHero from "@/app/components/SwiperHero";
import SwiperTop10 from "@/app/components/SwiperTop10";
import ExperienceSlider from "@/app/components/ExperienceSlider";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <SwiperHero />
      <section className="info-home section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Image
                src="/assets/img/logo-virtuoso.png"
                width={200}
                height={100}
                className="img-fluid mb-5 mb-md-0"
                alt="Virtuoso Member"
              />
            </div>
            <div className="col-md-8">
              <p className="text-justify">
                Cada viaje es una obra de arte creada para ti. No solo planeamos
                itinerarios, diseñamos experiencias que envuelven tus sentidos
                en un lujo irresistible. Desde destinos exóticos hasta rincones
                exclusivos, te llevamos más allá de lo convencional,
                ofreciéndote el privilegio de explorar el mundo con estilo y
                sofisticación.
              </p>
              <p className="text-justify">
                Descubre el lujo hecho a tu medida. Permítete ser cautivado por
                la elegancia de cada detalle, y vive la esencia de viajar como
                nunca antes.
              </p>
              <Link href="/contacto" className="btn-negro">
                Comienza a planear tu viaje
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SwiperTop10 />

      <ExperienceSlider />

      <PartnersSection />
    </>
  );
}

function PartnersSection() {
  return (
    <section className="pre-footer section-padding">
      <div className="container">
        <div className="row">
          <div className="col">
            <section className="d-flex flex-wrap justify-content-around justify-content-md-between align-items-center gap-4">
              <Image
                src="/assets/img/logo-four-seasons.png"
                width={150}
                height={80}
                className="img-fluid mb-3 mb-md-0"
                alt="Four Seasons - Hotels and Resorts"
              />
              <div className="vr my-0 d-none d-md-block"></div>
              <Image
                src="/assets/img/logo-virtuoso-b.png"
                width={150}
                height={80}
                className="img-fluid mb-3 mb-md-0"
                alt="Virtuoso Member"
              />
              <div className="vr my-0 d-none d-md-block"></div>
              <Image
                src="/assets/img/logo-marriot.png"
                width={150}
                height={80}
                className="img-fluid mb-3 mb-md-0"
                alt="Marriot international Stars"
              />
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
