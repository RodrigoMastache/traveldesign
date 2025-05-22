import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["es", "en"],
  defaultLocale: "es",
  pathnames: {
    "/destinos/[destination_id]": {
      es: "/destinos/[destination_id]",
      en: "/destinations/[destination_id]",
    },
    "/experiencias/[profile_id]": {
      es: "/experiencias/[profile_id]",
      en: "/experiences/[profile_id]",
    },
    "/experiencia/[experience_id]": {
      es: "/experiencia/[experience_id]",
      en: "/experience/[experience_id]",
    },
    "/politicas-de-privacidad": {
      es: "/politicas-de-privacidad",
      en: "/privacy-policy",
    },
    "/nosotros": {
      es: "/nosotros",
      en: "/about-us",
    },
    "/contacto": {
      es: "/contacto",
      en: "/contact",
    },
  },
});
