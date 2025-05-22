import { query } from "../strapi";

export function getMenuDestinations(continent, locale) {
  const currentLocale = locale === "es" ? "es-MX" : "en";
  if (!currentLocale) {
    return;
  }
  return query(
    `destinations?filters[continent][$eq]=${continent}&fields=country&locale=${currentLocale}&sort=country:asc`
  ).then((res) => {
    return res.data;
  });
}
