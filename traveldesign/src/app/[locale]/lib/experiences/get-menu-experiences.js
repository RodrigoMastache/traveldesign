import { query } from "../strapi";

export function getMenuExperiences(profile, locale) {
  const currentLocale = locale === "es" ? "es-MX" : "en";
  if (!currentLocale) {
    return;
  }
  return query(
    `experience-categories?filters[profile][$eq]=${profile}&locale=${currentLocale}&populate=experiences`
  ).then((res) => {
    return res.data;
  });
}
