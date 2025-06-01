// import logo1 from "../../../../assets/img/logo-footer-1.png";
import Image from "next/image";

export default function PartnersSection() {
  const logos = [
    {
      id: 10,
      image: "/assets/img/logo-footer-1.png",
    },
    {
      id: 20,
      image: "/assets/img/logo-footer-2.png",
    },
    {
      id: 30,
      image: "/assets/img/logo-footer-3.png",
    },
    {
      id: 40,
      image: "/assets/img/logo-footer-4.png",
    },
    {
      id: 50,
      image: "/assets/img/logo-four-seasons.png",
    },
    {
      id: 60,
      image: "/assets/img/logo-virtuoso-b.png",
    },
  ];

  return (
    <section className="pre-footer section-padding">
      <div className="logos-carousel">
        {logos.map((item) => (
          <div key={item.id} className="logos-slide">
            {logos.map((logo) => (
              <img key={logo.id} src={logo.image} alt="logo" />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
