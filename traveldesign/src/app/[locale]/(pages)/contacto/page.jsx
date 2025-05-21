import PartnersSection from "@/app/[locale]/components/PartnersSection";

export default function Contacto() {
  return (
    <>
      <main>
        <section className="hero-section">
          <img src="assets/img/contacto-header.png" alt="contactonos" />
          <div className="overlay">
            <h1>Contáctanos</h1>
          </div>
        </section>
        <section class="section-contacto section-padding">
          <div class="container">
            <div class="row">
              <div class="col">
                <h1>Comienza a planear tu viaje</h1>
                <form>
                  <div class="row mb-3 row-gap-3">
                    <div class="col-md-6">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Nombre Completo"
                      />
                    </div>
                    <div class="col-md-6">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Correo electrónico"
                      />
                    </div>
                  </div>

                  <div class="row mb-3 row-gap-3">
                    <div class="col-md-6">
                      <input
                        type="tel"
                        class="form-control"
                        placeholder="Teléfono"
                      />
                    </div>
                    <div class="col-md-6">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Ciudad"
                      />
                    </div>
                  </div>

                  <div class="mb-3 ">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Destino de su próximo viaje"
                    />
                  </div>

                  <div class="row mb-3 row-gap-3">
                    <div class="col-md-6">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Fecha en la que planea viajar"
                      />
                    </div>
                    <div class="col-md-6">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="¿Con quién viaja?"
                      />
                    </div>
                  </div>

                  <div class="mb-3">
                    <textarea
                      class="form-control"
                      rows="4"
                      placeholder="Comentarios adicionales"
                    ></textarea>
                  </div>

                  <div class="mb-3 d-flex justify-content-center">
                    <button type="submit" class="btn-negro">
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <PartnersSection />
      </main>
    </>
  );
}
