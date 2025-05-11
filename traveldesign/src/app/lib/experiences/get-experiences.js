import { query } from "../strapi";

export async function getExperiencesByProfile(documentId) {
  const res = await query(
    `experience-categories?filters[documentId][$eq]=${documentId}&locale=es-MX&populate=experiences&populate[0]=experiences&populate[1]=experiences.banner`
  );

  const destination = res.data[0];

  if (!destination) return null;

  destination.experiences.map((experience) => {
    experience.cover = experience.banner
      ? `${process.env.NEXT_PUBLIC_STRAPI_HOST}${experience.banner.url}`
      : "";
  });

  return destination;
}
