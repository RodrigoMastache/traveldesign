"use client";
import { useTranslations } from "next-intl";

export default function Contacto() {
  const t = useTranslations("contact");
  const setSelectedDestino = () => {};

  return (
    <>
      <main>
        <section className="hero-section">
          <img src="/assets/img/contacto-header.png" alt="contactonos" />
          <div className="overlay">
            <h1>{t("title")}</h1>
          </div>
        </section>
        <section className="section-contacto section-padding">
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>{t("subtitle")}</h1>
                <p>{t("desc-1")}</p>
                <p>{t("desc-2")}</p>
              </div>
            </div>
          </div>
          <div className="container mt-5">
            <div className="row">
              <div className="col">
                <form className="needs-validation" noValidate>
                  <div className="mb-4">
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <label
                          htmlFor="destinos"
                          className="form-label fw-bold"
                        >
                          ¿Cuál(es) es el destino(s) que quieres descubrir en tu
                          próximo viaje?
                        </label>
                      </div>
                      <div className="col-12 col-md-6">
                        <select
                          className="form-select border-0 border-bottom rounded-0"
                          id="destinos"
                          name="destinos"
                          value=""
                          onChange={(e) => setSelectedDestino(e.target.value)}
                        >
                          <option value="">
                            Selecciona uno o más por favor
                          </option>
                          <option value="Botswana">Botswana</option>
                          <option value="Kenia">Kenia</option>
                          <option value="Madagascar">Madagascar</option>
                          <option value="Marruecos">Marruecos</option>
                          <option value="Namibia">Namibia</option>
                          <option value="Playas de África">
                            Playas de África
                          </option>
                          <option value="Ruanda">Ruanda</option>
                          <option value="Sudáfrica">Sudáfrica</option>
                          <option value="Tanzania">Tanzania</option>
                          <option value="Uganda">Uganda</option>
                          <option value="Zambia">Zambia</option>
                          <option value="Zimbabwe">Zimbabwe</option>
                          <option value="Ártico noruego">Ártico noruego</option>
                          <option value="Austria">Austria</option>
                          <option value="Croacia">Croacia</option>
                          <option value="Escocia">Escocia</option>
                          <option value="España">España</option>
                          <option value="Finlandia">Finlandia</option>
                          <option value="Francia">Francia</option>
                          <option value="Grecia">Grecia</option>
                          <option value="Hungría">Hungría</option>
                          <option value="Italia">Italia</option>
                          <option value="Islandia">Islandia</option>
                          <option value="Montenegro">Montenegro</option>
                          <option value="Portugal">Portugal</option>
                          <option value="República Checa">
                            República Checa
                          </option>
                          <option value="Rumanía">Rumanía</option>
                          <option value="Suiza">Suiza</option>
                          <option value="Turquía">Turquía</option>
                          <option value="Antártida">Antártida</option>
                          <option value="Argentina">Argentina</option>
                          <option value="Bolivia">Bolivia</option>
                          <option value="Brasil">Brasil</option>
                          <option value="Canadá">Canadá</option>
                          <option value="Caribe">Caribe</option>
                          <option value="Chile">Chile</option>
                          <option value="Colombia">Colombia</option>
                          <option value="Costa Rica">Costa Rica</option>
                          <option value="Ecuador">Ecuador</option>
                          <option value="Estados Unidos">Estados Unidos</option>
                          <option value="Guatemala">Guatemala</option>
                          <option value="México">México</option>
                          <option value="Perú">Perú</option>
                          <option value="Bután">Bután</option>
                          <option value="Camboya">Camboya</option>
                          <option value="China">China</option>
                          <option value="Corea del Sur">Corea del Sur</option>
                          <option value="Filipinas">Filipinas</option>
                          <option value="India">India</option>
                          <option value="Indonesia">Indonesia</option>
                          <option value="Japón">Japón</option>
                          <option value="Laos">Laos</option>
                          <option value="Malasia">Malasia</option>
                          <option value="Maldivas">Maldivas</option>
                          <option value="Mongolia">Mongolia</option>
                          <option value="Myanmar">Myanmar</option>
                          <option value="Sri Lanka">Sri Lanka</option>
                          <option value="Tailandia">Tailandia</option>
                          <option value="Tibet y Nepal">Tibet y Nepal</option>
                          <option value="Vietnam">Vietnam</option>
                          <option value="Arabia Saudita">Arabia Saudita</option>
                          <option value="Qatar">Qatar</option>
                          <option value="Emiratos Árabes">
                            Emiratos Árabes
                          </option>
                          <option value="Egipto">Egipto</option>
                          <option value="Israel">Israel</option>
                          <option value="Jordania">Jordania</option>
                          <option value="Omán">Omán</option>
                          <option value="Australia">Australia</option>
                          <option value="Fiji">Fiji</option>
                          <option value="Nueva Zelanda">Nueva Zelanda</option>
                          <option value="Polinesia Francesa">
                            Polinesia Francesa
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="tags-container" id="tagsContainer"></div>
                    <span
                      className="clear-all-tags mt-2"
                      style={{ display: "none" }}
                    >
                      &#10006; Borrar selecciones
                    </span>
                    <input
                      type="hidden"
                      id="destinosHidden"
                      name="destinosHidden"
                      required
                    />
                    <div className="invalid-feedback">
                      Por favor, selecciona al menos un destino.
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="row gy-2">
                      <div className="col-12">
                        <label className="form-label fw-bold">
                          ¿Qué tipo de viaje te gustaría realizar?{" "}
                          <span className="fw-light">
                            Puedes seleccionar varias opciones.
                          </span>
                        </label>
                      </div>
                      <div className="col-12">
                        <div className="form-check form-check-inline">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="tipoViaje"
                            value="Aventura"
                            id="tipoAventura"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="tipoAventura"
                          >
                            Aventura
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="tipoViaje"
                            value="Cultura y Arte"
                            id="tipoCultura"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="tipoCultura"
                          >
                            Cultura y Arte
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="tipoViaje"
                            value="Gastronómico"
                            id="tipoGastronomico"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="tipoGastronomico"
                          >
                            Gastronómico
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="tipoViaje"
                            value="Crucero"
                            id="tipoCrucero"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="tipoCrucero"
                          >
                            Crucero
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="tipoViaje"
                            value="Luna de Miel"
                            id="tipoLunaDeMiel"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="tipoAventura"
                          >
                            Luna de Miel
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="tipoViaje"
                            value="Playa"
                            id="tipoPlaya"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="tipoCultura"
                          >
                            Playa
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="tipoViaje"
                            value="Safári"
                            id="tipoSafari"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="tipoGastronomico"
                          >
                            Safári
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="tipoViaje"
                            value="Esquiar"
                            id="tipoEsquiar"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="tipoCrucero"
                          >
                            Esquiar
                          </label>
                          <div className="form-check form-check-inline">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              name="tipoViaje"
                              value="Otro"
                              id="tipoOtro"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="tipoCrucero"
                            >
                              Otro
                            </label>
                          </div>
                          <div className="invalid-feedback">
                            Por favor, selecciona al menos un tipo de viaje.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <label className="form-label fw-bold">
                          ¿Tienes alguna fecha definida para hacer el viaje?
                        </label>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-check form-check-inline">
                          <input
                            type="radio"
                            className="form-check-input"
                            name="fechasDefinidas"
                            value="si"
                            id="fechasSi"
                            required
                          />
                          <label
                            className="form-check-label"
                            htmlFor="fechasSi"
                          >
                            Sí tengo las fechas exactas
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            type="radio"
                            className="form-check-input"
                            name="fechasDefinidas"
                            value="no"
                            id="fechasNo"
                            required
                          />
                          <label
                            className="form-check-label"
                            htmlFor="fechasNo"
                          >
                            Aún no lo defino
                          </label>
                        </div>
                        <div className="invalid-feedback">
                          Por favor, selecciona una opción.
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div
                          className="calendar-container mt-3"
                          id="calendarContainer"
                        >
                          <div className="row gy-3">
                            <div className="col-12 col-md-6">
                              <label
                                htmlFor="fechaSalida"
                                className="form-label fst-italic"
                              >
                                Fecha de salida
                              </label>
                              <input
                                type="date"
                                className="form-control"
                                id="fechaSalida"
                                name="fechaSalida"
                              />
                              <div className="invalid-feedback">
                                Por favor, selecciona una fecha de salida.
                              </div>
                            </div>
                            <div className="col-12 col-md-6">
                              <label
                                htmlFor="fechaRegreso"
                                className="form-label fst-italic"
                              >
                                Fecha de regreso
                              </label>
                              <input
                                type="date"
                                className="form-control"
                                id="fechaRegreso"
                                name="fechaRegreso"
                              />
                              <div className="invalid-feedback">
                                Por favor, selecciona una fecha de regreso.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <label className="form-label fw-bold">
                          ¿Con quién(es) viajas?
                        </label>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="row gy-3">
                          <div className="col-md-6">
                            <select
                              className="form-select border-0 border-bottom rounded-0"
                              id="adultos"
                              name="adultos"
                              required
                            >
                              <option value="">Adultos</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5+</option>
                            </select>
                            <div className="invalid-feedback">
                              Por favor, selecciona el número de adultos.
                            </div>
                          </div>
                          <div className="col-md-6">
                            <select
                              className="form-select border-0 border-bottom rounded-0"
                              id="ninos"
                              name="ninos"
                              required
                            >
                              <option value="">Niños</option>
                              <option value="0">0</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4+</option>
                            </select>
                            <div className="invalid-feedback">
                              Por favor, selecciona el número de niños.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <label
                          htmlFor="presupuesto"
                          className="form-label fw-bold"
                        >
                          ¿Cuál es el presupuesto planeado para invertir en tu
                          viaje? (MXN)
                        </label>
                      </div>
                      <div className="col-12 col-md-6">
                        <select
                          className="form-select border-0 border-bottom rounded-0"
                          id="presupuesto"
                          name="presupuesto"
                          required
                        >
                          <option value="">
                            Selecciona un rango por favor
                          </option>
                          <option value="$20,000-$50,000">
                            $20,000-$50,000
                          </option>
                          <option value="$50,000-$100,000">
                            $50,000-$100,000
                          </option>
                          <option value="$100,000-$200,000">
                            $100,000-$200,000
                          </option>
                          <option value="$200,000-$350,000">
                            $200,000-$350,000
                          </option>
                          <option value="$350,000-$500,000">
                            $350,000-$500,000
                          </option>
                          <option value="$500,000-$800,000">
                            $500,000-$800,000
                          </option>
                          <option value="+$800,000">+$800,000</option>
                        </select>
                        <div className="invalid-feedback">
                          Por favor, selecciona un rango de presupuesto.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="row">
                      <div className="col-12">
                        <label
                          htmlFor="descripcion"
                          className="form-label fw-bold"
                        >
                          Descríbenos la experiencia que deseas vivir
                        </label>
                        <textarea
                          className="form-control"
                          id="descripcion"
                          maxLength="250"
                          name="descripcion"
                          rows="3"
                          placeholder="Incluye información como edades de tus acompañantes y actividades que te gustaría realizar"
                          required
                        ></textarea>
                        <div className="invalid-feedback">
                          Por favor, describe la experiencia que deseas vivir.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="row g-3">
                      <label className="form-label fw-bold">
                        ¿Dónde puede contactarte nuestro experto en viajes?
                      </label>
                      <div className="col-12">
                        <input
                          type="text"
                          className="form-control border-0 border-bottom rounded-0"
                          id="nombre"
                          maxLength="50"
                          name="nombre"
                          placeholder="Nombre completo *"
                          required
                        />
                        <div className="invalid-feedback">
                          Por favor, ingresa tu nombre completo.
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <input
                          type="email"
                          className="form-control border-0 border-bottom rounded-0"
                          id="email"
                          maxLength="50"
                          name="email"
                          placeholder="E-mail *"
                          required
                        />
                        <div className="invalid-feedback">
                          Por favor, ingresa un correo electrónico válido.
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <input
                          type="tel"
                          className="form-control border-0 border-bottom rounded-0"
                          id="telefono"
                          maxLength="10"
                          name="telefono"
                          placeholder="Teléfono *"
                          required
                        />
                        <div className="invalid-feedback">
                          Por favor, ingresa tu número de teléfono.
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <input
                          type="text"
                          className="form-control border-0 border-bottom rounded-0"
                          id="pais"
                          maxLength="25"
                          name="pais"
                          placeholder="Pais (opcional)"
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <input
                          type="text"
                          className="form-control border-0 border-bottom rounded-0"
                          id="ciudad"
                          maxLength="25"
                          name="ciudad"
                          placeholder="Ciudad (opcional)"
                        />
                      </div>
                      <div className="col-12">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="actualizaciones"
                            name="actualizaciones"
                          />
                          <label
                            className="form-check-label small"
                            htmlFor="actualizaciones"
                          >
                            Deseo recibir las últimas actualizaciones sobre
                            viajes y entiendo que puedo cancelar mi suscripción
                            en cualquier momento.
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="privacidad"
                            name="privacidad"
                            required
                          />
                          <label
                            className="form-check-label small"
                            htmlFor="privacidad"
                          >
                            He leído y acepto la{" "}
                            <a href="#" target="_blank" className="text-dark">
                              Política de Privacidad y protección de datos
                            </a>{" "}
                            *
                          </label>
                          <div className="invalid-feedback">
                            Debes aceptar la política de privacidad.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="btn-negro">
                    ENVIAR
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
