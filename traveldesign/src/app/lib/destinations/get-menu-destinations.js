import { query } from "../strapi";

export function getMenuDestinations(continent) {
  return query(
    `destinations?filters[continent][$eq]=${continent}&fields=country&locale=es-MX&sort=country:asc`
  ).then((res) => {
    return res.data;
  });
}
