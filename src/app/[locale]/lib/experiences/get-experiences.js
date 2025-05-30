import { query } from "../strapi";

export async function getExperiencesByProfile(documentId, locale) {
  const currentLocale = locale === "es" ? "es-MX" : "en";
  if (!currentLocale) {
    return;
  }
  const res = await query(
    `experience-categories?filters[documentId][$eq]=${documentId}&locale=${currentLocale}&populate=banner&populate=experiences&populate[0]=experiences&populate[1]=experiences.banner`
  );

  const expereinces = res.data[0];

  if (!expereinces) return null;

  expereinces.banner = expereinces?.banner
    ? `${process.env.NEXT_PUBLIC_STRAPI_HOST_IMAGE}${expereinces.banner.url}`
    : "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";

  expereinces?.experiences.map((experience) => {
    experience.cover = experience.banner
      ? `${process.env.NEXT_PUBLIC_STRAPI_HOST_IMAGE}${experience.banner.url}`
      : "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";
  });

  return expereinces;
}
