import Image from "next/image";

export default function PartnersSection() {
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
