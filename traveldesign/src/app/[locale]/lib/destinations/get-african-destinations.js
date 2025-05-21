import { query } from "../strapi";

export function getAfricanDestination() {
  return query("destinations?locale=es-MX").then((res) => {
    return res.data;
  });
}
