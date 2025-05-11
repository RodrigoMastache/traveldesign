import { query } from "../strapi";

export function getMenuExperiences(profile) {
  return query(
    `experience-categories?filters[profile][$eq]=${profile}&locale=es-MX&populate=experiences`
  ).then((res) => {
    return res.data;
  });
}
