"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Carousel from "@/app/[locale]/components/Swiper";
import { useTranslations, useLocale } from "next-intl";
import { getMenuExperiences } from "../../lib/experiences/get-menu-experiences";

export default function NosotrosPage() {
  const t = useTranslations("about-us");
  const c = useTranslations("ctas");
  const locale = useLocale();

  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    async function getDataLifestyle() {
      const datos = await getMenuExperiences("lifestyle", locale);
      setExperiences(datos);
    }
    getDataLifestyle();
  }, []);

  return (
    <>
      <main>
        <section className="hero-section">
          <img src="/assets/img/nosotros-header.png" alt="kenia" />
          <div className="overlay">
            <h1>{t("title")}</h1>
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
                  <p className="text-justify">
                    <b>Travel Design</b> {t("sec-1")}
                  </p>
                  <Link href="/contacto" className="btn-negro">
                    {c("articles.start")}
                  </Link>
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
                  <p className="text-justify">{t("sec-2")}</p>
                  <p className="text-justify">{t("sec-3")}</p>
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

        <section className="section-padding">
          <div className="container">
            <div className="row row-gap-5">
              <div className="col-md-4 order-1 order-md-0">
                <img
                  src="/assets/img/nosotros-3.png"
                  className="img-fluid h-100 object-fit-cover"
                  alt=""
                />
              </div>
              <div className="col-md-8 order-0 order-md-1">
                <div className="d-flex flex-column align-items-start h-100 justify-content-between px-md-4 lh-lg">
                  <p className="text-justify">{t("sec-4")}</p>
                  <p className="text-justify">{t("sec-5")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col">
                <h3 className="h4 text-center fw-bold">{t("sec-6")}</h3>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-arena">
          <div className="container">
            <div className="row gy-5">
              <div className="col-lg-6 border-end  d-flex flex-column justify-content-center align-items-center">
                <p className="title-article">Suc. CDMX</p>
                <p className="lead">
                  Radiatas 34, Bosque de las Lomas
                  <br />
                  55-8526-3303
                  <br />
                  Lun - Vie: 9am - 6pm
                </p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.5568218348044!2d-99.25549662429471!3d19.388333042092075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d201190fff6293%3A0x5f50f151cc47c120!2sBosque%20de%20Radiatas%2034%2C%20Bosques%20de%20las%20Lomas%2C%20Cuajimalpa%20de%20Morelos%2C%2005120%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1747773464245!5m2!1ses-419!2smx"
                  width="400"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
                <p className="title-article">Suc. Cuernavaca</p>
                <p className="lead">
                  Av. 50 metros 100 Torre III Piso 6 Oficina 602
                  <br />
                  Villas del Lago, Cuernavaca, Morelos,
                  <br /> C.P. 62374
                </p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.9591068591258!2d-99.19785891588654!3d18.933204110669884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cddf8a565c9d21%3A0x52233d8b5e037737!2sBlvd.%20del%20Lago%20100%2C%20Villas%20del%20Lago%2C%2062374%20Cuernavaca%2C%20Mor.!5e0!3m2!1ses-419!2smx!4v1747773499373!5m2!1ses-419!2smx"
                  width="400"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col">
                <h2 className="title-section mb-5">FAQs</h2>
                <div className="accordion" id="accordionTravel">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        ¿Por qué contratar una agencia de viajes?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionTravel"
                    >
                      <div className="accordion-body">
                        Contratar una agencia de viajes te brinda la
                        tranquilidad de tener a un equipo de expertos
                        respaldándote en cada paso del camino. Más allá de
                        reservar vuelos y hoteles, una agencia se encarga de
                        anticipar tus necesidades, resolver cualquier imprevisto
                        y facilitarte toda la logística antes y durante tu
                        viaje. <br />
                        <br />
                        ¿No sabes qué documentos necesitas para ingresar a tu
                        destino? ¿Te preocupa el idioma o moverte con seguridad
                        en un país extranjero? Una agencia puede ayudarte con
                        todo: desde gestionar visados y requisitos migratorios,
                        hasta conectarte con guías que hablen tu idioma,
                        recomendaciones personalizadas y atención continua
                        mientras estás de viaje. Además, el itinerario se ajusta
                        100% a tus intereses, estilo de vida y ritmo —haciendo
                        que cada experiencia sea verdaderamente única y sin
                        preocupaciones.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        ¿Cuáles son los beneficios de planear mi viaje con
                        Travel Design?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionTravel"
                    >
                      <div className="accordion-body">
                        En Travel Design diseñamos experiencias a la medida, sin
                        importar el tipo de viajero o grupo. Ya sea un plan en
                        pareja o una gran aventura compartida, adaptamos cada
                        detalle para crear momentos inolvidables. <br />
                        <br />
                        Ofrecemos viajes para: <br />
                        - Grupos de amigos(as) <br />
                        - Familias de todos los tamaños <br />
                        - Parejas que buscan escapadas románticas o viajes de
                        aniversario <br />
                        - Lunas de miel <br />
                        - Viajes corporativos o de negocios <br />
                        <br />
                        Cada perfil tiene necesidades diferentes, y nuestra
                        labor es asegurarnos de que cada experiencia esté
                        pensada para cumplirlas con excelencia. Contáctanos{" "}
                        <a href="/contacto">aquí</a> y empecemos a diseñarlo
                        juntos.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        ¿Qué tipo de viajes ofrece Travel Design?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionTravel"
                    >
                      <div className="accordion-body">
                        Diseñamos viajes personalizados cuidando cada detalle
                        para que la experiencia se alinee perfectamente con tus
                        intereses y expectativas. Algunos de los viajes más
                        solicitados incluyen: <br />
                        <br />
                        - Viajes de aventura: safaris, hiking, expediciones,
                        naturaleza <br />
                        - Cultura y arte: destinos históricos, museos,
                        arquitectura, tradiciones <br />
                        - Experiencias gastronómicas: recorridos culinarios,
                        cenas exclusivas, enoturismo <br />
                        - Cruceros de lujo: travesías por mar o río, con
                        servicios de primera <br />
                        <br />
                        No importa cuál sea tu estilo de viaje, lo diseñamos de
                        manera personalizada para ti. Escríbenos{" "}
                        <a href="/contacto">aquí</a>.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        ¿Cuánto tiempo antes debo planificar mi viaje?
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionTravel"
                    >
                      <div className="accordion-body">
                        Lo ideal es comenzar a planear tu viaje con al menos 3 a
                        6 meses de anticipación, especialmente si se trata de
                        destinos muy demandados o experiencias exclusivas. Esto
                        nos permite asegurar las mejores opciones de
                        alojamiento, transporte y actividades, recuerda que
                        entre más anticipación tengamos, mejores oportunidades
                        podemos encontrar. Sin embargo, si tienes una fecha más
                        próxima en mente, ¡también podemos ayudarte! Nos
                        adaptamos a tus tiempos para crear una experiencia
                        excepcional.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        ¿Qué está incluido en el costo de un viaje?
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionTravel"
                    >
                      <div className="accordion-body">
                        Cada itinerario es único y el costo depende de lo que
                        desees incluir. Generalmente contempla alojamiento,
                        transporte, experiencias personalizadas, asistencia
                        durante el viaje y nuestro servicio de diseño y gestión
                        integral. <br />
                        <br />
                        Es importante aclarar que no hay ningún costo adicional
                        por diseñar tu viaje con Travel Design. Nuestros
                        convenios son directamente con hoteles y operadores
                        locales, lo que significa que tú no pagas más por
                        acceder a un viaje hecho a tu medida. Siempre te
                        presentaremos una propuesta clara y transparente, sin
                        sorpresas. Además, contarás con atención personalizada
                        antes, durante y después de tu viaje, para que tú solo
                        te ocupes de disfrutar cada momento. <br />
                        <br />
                        ¿Quieres una propuesta personalizada? Escríbenos{" "}
                        <a href="/contacto">aquí</a>.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                      >
                        ¿Cómo puedo personalizar mi viaje?
                      </button>
                    </h2>
                    <div
                      id="collapseSix"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionTravel"
                    >
                      <div className="accordion-body">
                        La personalización es el corazón de lo que hacemos.
                        Desde el primer contacto, nos tomamos el tiempo para
                        conocerte y entender tus gustos, intereses y
                        expectativas. A partir de ahí, diseñamos un itinerario
                        totalmente a tu medida: tú eliges el ritmo, los
                        destinos, el tipo de alojamiento y las experiencias que
                        quieres vivir. Nosotros nos encargamos de hacerlo
                        realidad. <br />
                        <br />
                        ¿Listo para empezar a planearlo? Contáctanos{" "}
                        <a href="/contacto">aquí</a> y recibe una propuesta de
                        nuestro equipo.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSeven"
                        aria-expanded="false"
                        aria-controls="collapseSeven"
                      >
                        ¿Ofrecen viajes para grupos o solo para individuos y
                        parejas?
                      </button>
                    </h2>
                    <div
                      id="collapseSeven"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionTravel"
                    >
                      <div className="accordion-body">
                        En Travel Design diseñamos el viaje que tengas en mente,
                        sin importar si es una escapada en pareja, una aventura
                        en familia, un viaje con amigos o una experiencia en
                        solitario. También organizamos viajes corporativos y de
                        incentivos, cuidando cada detalle para que tú solo te
                        ocupes de disfrutar. Ya sea personal o profesional,
                        creamos experiencias únicas, hechas a tu medida. <br />
                        <br />
                        ¿Tienes algo en mente? Contáctanos{" "}
                        <a href="/contacto">aquí</a> y empecemos a diseñarlo
                        juntos.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseEight"
                        aria-expanded="false"
                        aria-controls="collapseEight"
                      >
                        ¿Cómo se realiza el pago de los viajes?
                      </button>
                    </h2>
                    <div
                      id="collapseEight"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionTravel"
                    >
                      <div className="accordion-body">
                        Desde que recibes tu itinerario por primera vez, se
                        especifican claramente los métodos de pago disponibles.
                        Puedes realizar tu pago mediante depósito o
                        transferencia bancaria en pesos mexicanos, euros o
                        dólares. <br />
                        <br />
                        Dependiendo del tipo de viaje y la anticipación con la
                        que se reserve, el pago puede hacerse en una sola
                        exhibición o en partes. <br />
                        <br />
                        Ten en cuenta los siguientes puntos importantes: <br />
                        • Para pagos con tarjeta de crédito bancaria o American
                        Express, aplica un cargo adicional del 5%. (Este cargo
                        no aplica en el caso de pagos de cruceros). <br />•
                        Algunos impuestos pueden ser pagaderos directamente en
                        el destino, dependiendo del país o ciudad que visites.{" "}
                        <br />
                        • El cargo por emisión de boleto de avión es de $600.00
                        MXN más IVA por persona. <br />
                        • En caso de cambios en boletos de avión, se aplica un
                        cargo de $800.00 MXN más IVA por persona, además de las
                        penalidades y diferencias tarifarias que determine cada
                        aerolínea. <br />
                        <br />
                        Nuestro equipo te acompaña en cada paso para que tengas
                        claridad total sobre tu inversión y ningún detalle quede
                        al aire.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseNine"
                        aria-expanded="false"
                        aria-controls="collapseNine"
                      >
                        ¿Qué sucede si necesito realizar cambios en mi
                        itinerario después de la reserva?
                      </button>
                    </h2>
                    <div
                      id="collapseNine"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionTravel"
                    >
                      <div className="accordion-body">
                        Sabemos que los planes pueden cambiar. Si necesitas
                        modificar algún detalle después de reservar, haremos
                        todo lo posible por ayudarte y ajustar el itinerario
                        según las condiciones de cada proveedor. <br />
                        <br />
                        Algunos cambios pueden generar cargos adicionales, pero
                        siempre te informaremos con total transparencia antes de
                        realizar cualquier modificación. <br />
                        <br />
                        Nuestro equipo estará contigo en todo momento para
                        encontrar la mejor solución. Tu tranquilidad también
                        forma parte del viaje.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTen"
                        aria-expanded="false"
                        aria-controls="collapseTen"
                      >
                        ¿Travel Design ofrece asistencia durante todo el viaje?
                      </button>
                    </h2>
                    <div
                      id="collapseTen"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionTravel"
                    >
                      <div className="accordion-body">
                        Sí. En Travel Design creemos que la verdadera
                        tranquilidad está en saber que no estás solo. Tu asesor
                        de viaje estará disponible para ti desde el primer
                        contacto hasta tu regreso, atento a cualquier necesidad
                        o eventualidad que pueda surgir en el camino. <br />
                        <br />
                        Nuestra prioridad es que vivas tu experiencia con
                        confianza y sin preocupaciones. Tú solo te encargas de
                        disfrutar, nosotros nos encargamos del resto.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {experiences && (
          <Carousel
            swiper="swiper-cards-slider"
            title={t("carousel-title")}
            data={experiences}
            type="experiences"
            pathByItem="/experiencias/"
          />
        )}
      </main>
    </>
  );
}
