"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Contacto() {
  const destinationsLocalStorage = localStorage.getItem("destinations");
  const destinationsParsed = JSON.parse(destinationsLocalStorage);
  const destinations = Object.values(destinationsParsed).flat();
  const formRef = useRef(null);

  const t = useTranslations("contact");
  const [formData, setFormData] = useState({
    destinos: [],
    tipoViaje: [],
    fechasDefinidas: "",
    fechaSalida: "",
    fechaRegreso: "",
    adultos: "",
    ninos: "",
    presupuesto: "",
    descripcion: "",
    nombre: "",
    email: "",
    telefono: "",
    pais: "",
    ciudad: "",
    actualizaciones: false,
    privacidad: false,
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (name === "tipoViaje") {
        // Manejar checkboxes de tipoViaje
        setFormData((prev) => {
          const newTipoViaje = checked
            ? [...prev.tipoViaje, value]
            : prev.tipoViaje.filter((item) => item !== value);
          return { ...prev, tipoViaje: newTipoViaje };
        });
      } else {
        // Manejar otros checkboxes
        setFormData((prev) => ({ ...prev, [name]: checked }));
      }
    } else if (type === "select-multiple") {
      // Manejar selección múltiple (aunque en tu código es select simple)
      const options = e.target.options;
      const selectedValues = [];
      for (let i = 0; i < options.length; i++) {
        if (options[i].selected) {
          selectedValues.push(options[i].value);
        }
      }
      setFormData((prev) => ({ ...prev, [name]: selectedValues }));
    } else {
      // Manejar inputs normales
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Manejar selección de destinos (versión mejorada para múltiples selecciones)
  const handleDestinoChange = (e) => {
    const selectedOption = e.target.value;
    if (selectedOption && !formData.destinos.includes(selectedOption)) {
      setFormData((prev) => ({
        ...prev,
        destinos: [...prev.destinos, selectedOption],
      }));
      e.target.value = ""; // Resetear el select después de seleccionar
    }
  };

  // Eliminar un destino seleccionado
  const removeDestino = (destinoToRemove) => {
    setFormData((prev) => ({
      ...prev,
      destinos: prev.destinos.filter((destino) => destino !== destinoToRemove),
    }));
  };

  // Validar el formulario
  const validateForm = () => {
    const errors = {};

    if (formData.destinos.length === 0) {
      errors.destinos = "Por favor, selecciona al menos un destino.";
    }

    if (formData.tipoViaje.length === 0) {
      errors.tipoViaje = "Por favor, selecciona al menos un tipo de viaje.";
    }

    if (!formData.fechasDefinidas) {
      errors.fechasDefinidas = "Por favor, selecciona una opción.";
    } else if (
      formData.fechasDefinidas === "si" &&
      (!formData.fechaSalida || !formData.fechaRegreso)
    ) {
      errors.fechas = "Por favor, completa ambas fechas.";
    }

    if (!formData.adultos) {
      errors.adultos = "Por favor, selecciona el número de adultos.";
    }

    if (formData.ninos === "") {
      errors.ninos = "Por favor, selecciona el número de niños.";
    }

    if (!formData.presupuesto) {
      errors.presupuesto = "Por favor, selecciona un rango de presupuesto.";
    }

    if (!formData.descripcion.trim()) {
      errors.descripcion =
        "Por favor, describe la experiencia que deseas vivir.";
    }

    if (!formData.nombre.trim()) {
      errors.nombre = "Por favor, ingresa tu nombre completo.";
    }

    if (!formData.email.trim()) {
      errors.email = "Por favor, ingresa un correo electrónico.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Por favor, ingresa un correo electrónico válido.";
    }

    if (!formData.telefono.trim()) {
      errors.telefono = "Por favor, ingresa tu número de teléfono.";
    }

    if (!formData.privacidad) {
      errors.privacidad = "Debes aceptar la política de privacidad.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (validateForm()) {
      try {
        delete formData.actualizaciones;
        delete formData.privacidad;
        console.log("Datos del formulario:", formData);

        emailjs
          .sendForm(
            process.env.NEXT_PUBLIC_EMAIL_SERVICE,
            process.env.NEXT_PUBLIC_EMAIL_TEMPLATE,
            formRef.current,
            process.env.NEXT_PUBLIC_EMAIL_API_KEY
          )
          .then((res) => {
            setLoading(false);
            setIsSubmitted(true);
            setFormData({
              destinos: [],
              tipoViaje: [],
              fechasDefinidas: "",
              fechaSalida: "",
              fechaRegreso: "",
              adultos: "",
              ninos: "",
              presupuesto: "",
              descripcion: "",
              nombre: "",
              email: "",
              telefono: "",
              pais: "",
              ciudad: "",
              actualizaciones: false,
              privacidad: false,
            });
          })
          .catch((error) => {
            setLoading(false);
            console.error("error bro", error);
            throw new Error("Error al enviar el formulario", error);
          });
      } catch (error) {
        setLoading(false);
        console.error("Error al enviar el formulario:", error);
        setFormErrors({
          submit:
            "Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.",
        });
      }
    }
  };

  if (isSubmitted) {
    return (
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
              <div className="col text-center">
                <h1>¡Gracias por contactarnos!</h1>
                <p>
                  Hemos recibido tu información y pronto nos pondremos en
                  contacto contigo.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

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
                {formErrors.submit && (
                  <div className="alert alert-danger">{formErrors.submit}</div>
                )}
                <form
                  ref={formRef}
                  className="needs-validation"
                  noValidate
                  onSubmit={handleSubmit}
                >
                  <div className="mb-4">
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <label
                          htmlFor="destinos"
                          className="form-label fw-bold"
                        >
                          {t("q1.question")}
                        </label>
                      </div>
                      <div className="col-12 col-md-6">
                        <select
                          className={`form-select border-0 border-bottom rounded-0 ${
                            formErrors.destinos ? "is-invalid" : ""
                          }`}
                          id="destinos"
                          name="destinos"
                          onChange={handleDestinoChange}
                        >
                          <option value="">{t("q1.placeholder")}</option>
                          {destinations &&
                            destinations?.map((item) => (
                              <option
                                key={item?.documentId}
                                value={item.country}
                              >
                                {item.country}
                              </option>
                            ))}
                        </select>
                        <div className="invalid-feedback">
                          {formErrors.destinos}
                        </div>
                      </div>
                    </div>
                    <div className="tags-container mt-2" id="tagsContainer">
                      {formData.destinos.map((destino, index) => (
                        <span key={index} className="tag me-2 mb-2">
                          {destino}
                          <button
                            type="button"
                            className="ms-2 btn-close"
                            style={{ fontSize: "10px" }}
                            aria-label="Eliminar"
                            onClick={() => removeDestino(destino)}
                          ></button>
                        </span>
                      ))}
                    </div>
                    {formData.destinos.length > 0 && (
                      <button
                        type="button"
                        className="btn btn-link p-0 text-decoration-none mt-2"
                        onClick={() =>
                          setFormData((prev) => ({ ...prev, destinos: [] }))
                        }
                      >
                        &#10006; {t("q1.cta")}
                      </button>
                    )}
                    <input
                      type="text"
                      name="destinos"
                      value={formData.destinos.join(",")}
                      style={{ display: "none" }}
                      readOnly
                    />
                  </div>

                  <div className="mb-4">
                    <div className="row gy-2">
                      <div className="col-12">
                        <label className="form-label fw-bold">
                          {t("q2.question")}{" "}
                          <span className="fw-light">
                            {t("q2.placeholder")}
                          </span>
                        </label>
                        {formErrors.tipoViaje && (
                          <div className="text-danger small">
                            {formErrors.tipoViaje}
                          </div>
                        )}
                      </div>
                      <div className="col-12">
                        <div className="form-check form-check-inline">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="tipoViaje"
                            value="Aventura"
                            id="tipoAventura"
                            checked={formData.tipoViaje.includes("Aventura")}
                            onChange={handleChange}
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
                            checked={formData.tipoViaje.includes(
                              "Cultura y Arte"
                            )}
                            onChange={handleChange}
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
                            checked={formData.tipoViaje.includes(
                              "Gastronómico"
                            )}
                            onChange={handleChange}
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
                            checked={formData.tipoViaje.includes("Crucero")}
                            onChange={handleChange}
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
                            checked={formData.tipoViaje.includes(
                              "Luna de Miel"
                            )}
                            onChange={handleChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="tipoLunaDeMiel"
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
                            checked={formData.tipoViaje.includes("Playa")}
                            onChange={handleChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="tipoPlaya"
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
                            checked={formData.tipoViaje.includes("Safári")}
                            onChange={handleChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="tipoSafari"
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
                            checked={formData.tipoViaje.includes("Esquiar")}
                            onChange={handleChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="tipoEsquiar"
                          >
                            Esquiar
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="tipoViaje"
                            value="Otro"
                            id="tipoOtro"
                            checked={formData.tipoViaje.includes("Otro")}
                            onChange={handleChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="tipoOtro"
                          >
                            Otro
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <label className="form-label fw-bold">
                          {t("q3.question")}
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
                            checked={formData.fechasDefinidas === "si"}
                            onChange={handleChange}
                            required
                          />
                          <label
                            className="form-check-label"
                            htmlFor="fechasSi"
                          >
                            {t("q3.answer1")}
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            type="radio"
                            className="form-check-input"
                            name="fechasDefinidas"
                            value="no"
                            id="fechasNo"
                            checked={formData.fechasDefinidas === "no"}
                            onChange={handleChange}
                            required
                          />
                          <label
                            className="form-check-label"
                            htmlFor="fechasNo"
                          >
                            {t("q3.answer2")}
                          </label>
                        </div>
                        {formErrors.fechasDefinidas && (
                          <div className="invalid-feedback d-block">
                            {formErrors.fechasDefinidas}
                          </div>
                        )}
                      </div>
                    </div>
                    {formData.fechasDefinidas === "si" && (
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
                                  {t("q3.answer1Opt1")}
                                </label>
                                <input
                                  type="date"
                                  className={`form-control ${
                                    formErrors.fechas ? "is-invalid" : ""
                                  }`}
                                  id="fechaSalida"
                                  name="fechaSalida"
                                  value={formData.fechaSalida}
                                  onChange={handleChange}
                                />
                                {formErrors.fechas && (
                                  <div className="invalid-feedback">
                                    {formErrors.fechas}
                                  </div>
                                )}
                              </div>
                              <div className="col-12 col-md-6">
                                <label
                                  htmlFor="fechaRegreso"
                                  className="form-label fst-italic"
                                >
                                  {t("q3.answer1Opt2")}
                                </label>
                                <input
                                  type="date"
                                  className={`form-control ${
                                    formErrors.fechas ? "is-invalid" : ""
                                  }`}
                                  id="fechaRegreso"
                                  name="fechaRegreso"
                                  value={formData.fechaRegreso}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mb-4">
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <label className="form-label fw-bold">
                          {t("q4.question")}
                        </label>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="row gy-3">
                          <div className="col-md-6">
                            <select
                              className={`form-select border-0 border-bottom rounded-0 ${
                                formErrors.adultos ? "is-invalid" : ""
                              }`}
                              id="adultos"
                              name="adultos"
                              value={formData.adultos}
                              onChange={handleChange}
                              required
                            >
                              <option value="">
                                {t("q4.placeholderAnswer1")}
                              </option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5+</option>
                            </select>
                            {formErrors.adultos && (
                              <div className="invalid-feedback">
                                {formErrors.adultos}
                              </div>
                            )}
                          </div>
                          <div className="col-md-6">
                            <select
                              className={`form-select border-0 border-bottom rounded-0 ${
                                formErrors.ninos ? "is-invalid" : ""
                              }`}
                              id="ninos"
                              name="ninos"
                              value={formData.ninos}
                              onChange={handleChange}
                              required
                            >
                              <option value="">
                                {t("q4.placeholderAnswer2")}
                              </option>
                              <option value="0">0</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4+</option>
                            </select>
                            {formErrors.ninos && (
                              <div className="invalid-feedback">
                                {formErrors.ninos}
                              </div>
                            )}
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
                          {t("q5.question")}
                        </label>
                      </div>
                      <div className="col-12 col-md-6">
                        <select
                          className={`form-select border-0 border-bottom rounded-0 ${
                            formErrors.presupuesto ? "is-invalid" : ""
                          }`}
                          id="presupuesto"
                          name="presupuesto"
                          value={formData.presupuesto}
                          onChange={handleChange}
                          required
                        >
                          <option value="">{t("q5.placeholder")}</option>
                          <option value={t("q5.priceRanges.range1")}>
                            {t("q5.priceRanges.range1")}
                          </option>
                          <option value={t("q5.priceRanges.range2")}>
                            {t("q5.priceRanges.range2")}
                          </option>
                          <option value={t("q5.priceRanges.range3")}>
                            {t("q5.priceRanges.range3")}
                          </option>
                          <option value={t("q5.priceRanges.range4")}>
                            {t("q5.priceRanges.range4")}
                          </option>
                          <option value={t("q5.priceRanges.range5")}>
                            {t("q5.priceRanges.range5")}
                          </option>
                          <option value={t("q5.priceRanges.range6")}>
                            {t("q5.priceRanges.range6")}
                          </option>
                          <option value={t("q5.priceRanges.range7")}>
                            {t("q5.priceRanges.range7")}
                          </option>
                        </select>
                        {formErrors.presupuesto && (
                          <div className="invalid-feedback">
                            {formErrors.presupuesto}
                          </div>
                        )}
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
                          {t("q6.question")}
                        </label>
                        <textarea
                          className={`form-control ${
                            formErrors.descripcion ? "is-invalid" : ""
                          }`}
                          id="descripcion"
                          maxLength="250"
                          name="descripcion"
                          rows="3"
                          placeholder={t("q6.placeholder")}
                          value={formData.descripcion}
                          onChange={handleChange}
                          required
                        ></textarea>
                        {formErrors.descripcion && (
                          <div className="invalid-feedback">
                            {formErrors.descripcion}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="row g-3">
                      <label className="form-label fw-bold">
                        {t("q7.question")}
                      </label>
                      <div className="col-12">
                        <input
                          type="text"
                          className={`form-control border-0 border-bottom rounded-0 ${
                            formErrors.nombre ? "is-invalid" : ""
                          }`}
                          id="nombre"
                          maxLength="50"
                          name="nombre"
                          placeholder={t("q7.placeholderAnswer1")}
                          value={formData.nombre}
                          onChange={handleChange}
                          required
                        />
                        {formErrors.nombre && (
                          <div className="invalid-feedback">
                            {formErrors.nombre}
                          </div>
                        )}
                      </div>
                      <div className="col-12 col-md-6">
                        <input
                          type="email"
                          className={`form-control border-0 border-bottom rounded-0 ${
                            formErrors.email ? "is-invalid" : ""
                          }`}
                          id="email"
                          maxLength="50"
                          name="email"
                          placeholder={t("q7.placeholderAnswer2")}
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                        {formErrors.email && (
                          <div className="invalid-feedback">
                            {formErrors.email}
                          </div>
                        )}
                      </div>
                      <div className="col-12 col-md-6">
                        <input
                          type="tel"
                          className={`form-control border-0 border-bottom rounded-0 ${
                            formErrors.telefono ? "is-invalid" : ""
                          }`}
                          id="telefono"
                          maxLength="10"
                          name="telefono"
                          placeholder={t("q7.placeholderAnswer3")}
                          value={formData.telefono}
                          onChange={handleChange}
                          required
                        />
                        {formErrors.telefono && (
                          <div className="invalid-feedback">
                            {formErrors.telefono}
                          </div>
                        )}
                      </div>
                      <div className="col-12 col-md-6">
                        <input
                          type="text"
                          className="form-control border-0 border-bottom rounded-0"
                          id="pais"
                          maxLength="25"
                          name="pais"
                          placeholder={t("q7.placeholderAnswer4")}
                          value={formData.pais}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <input
                          type="text"
                          className="form-control border-0 border-bottom rounded-0"
                          id="ciudad"
                          maxLength="25"
                          name="ciudad"
                          placeholder={t("q7.placeholderAnswer5")}
                          value={formData.ciudad}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-12">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="actualizaciones"
                            name="actualizaciones"
                            checked={formData.actualizaciones}
                            onChange={handleChange}
                          />
                          <label
                            className="form-check-label small"
                            htmlFor="actualizaciones"
                          >
                            {t("q7.check1")}
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className={`form-check-input ${
                              formErrors.privacidad ? "is-invalid" : ""
                            }`}
                            id="privacidad"
                            name="privacidad"
                            checked={formData.privacidad}
                            onChange={handleChange}
                            required
                          />
                          <label
                            className="form-check-label small"
                            htmlFor="privacidad"
                          >
                            {t("q7.check2-1")}{" "}
                            <a
                              href="/privacy-policy"
                              target="_blank"
                              className="text-dark"
                            >
                              {t("q7.check2-2")}
                            </a>{" "}
                          </label>
                          {formErrors.privacidad && (
                            <div className="invalid-feedback d-block">
                              {formErrors.privacidad}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="btn-negro">
                    {loading ? t("loading") : t("cta")}
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
