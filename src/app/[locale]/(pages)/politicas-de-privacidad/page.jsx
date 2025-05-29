import { useTranslations } from "next-intl";

export default function Politicas() {
  const t = useTranslations("privacyPolicy");

  return (
    <div>
      <header>
        <section className="hero-section">
          <img src="/assets/img/Politicas_Header.jpg" alt={t("headerAlt")} />
          <div className="overlay">
            <h1>{t("headerTitle")}</h1>
          </div>
        </section>
      </header>
      <main>
        <section className="section-contacto section-padding">
          <div className="container">
            <div className="row">
              <div className="col">
                <h2>{t("title")}</h2>
                <p>
                  <strong>{t("lastUpdateLabel")}</strong> {t("lastUpdateDate")}
                </p>
                <p>{t("intro")}</p>

                <h3 className="h5 fw-bold">{t("section1Title")}</h3>
                <p>{t("section1Content")}</p>

                <h3 className="h5 fw-bold">{t("section2Title")}</h3>
                <p>{t("section2Intro")}</p>
                <ul>
                  <li>{t("section2Item1")}</li>
                  <li>{t("section2Item2")}</li>
                  <li>{t("section2Item3")}</li>
                </ul>

                <h3 className="h5 fw-bold">{t("section3Title")}</h3>
                <p>{t("section3Intro")}</p>
                <ul>
                  <li>{t("section3Item1")}</li>
                  <li>{t("section3Item2")}</li>
                  <li>{t("section3Item3")}</li>
                  <li>{t("section3Item4")}</li>
                </ul>

                <h3 className="h5 fw-bold">{t("section4Title")}</h3>
                <p>{t("section4Intro")}</p>
                <ol>
                  <li>{t("section4Item1")}</li>
                  <li>{t("section4Item2")}</li>
                  <li>{t("section4Item3")}</li>
                </ol>
                <p>{t("section4Note")}</p>

                <h3 className="h5 fw-bold">{t("section5Title")}</h3>
                <p>{t("section5Intro")}</p>
                <ul>
                  <li>{t("section5Item1")}</li>
                  <li>{t("section5Item2")}</li>
                </ul>

                <h3 className="h5 fw-bold">{t("section6Title")}</h3>
                <p>{t("section6Intro")}</p>

                <h3 className="h5 fw-bold">{t("section7Title")}</h3>
                <p>{t("section7Intro")}</p>

                <h3 className="h5 fw-bold">{t("section8Title")}</h3>
                <p>{t("section8Intro")}</p>

                <h3 className="h5 fw-bold">{t("section9Title")}</h3>
                <p>{t("section9Intro")}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
