import { query } from "../strapi";

export function getMenuExperiences(profile, locale) {
  const currentLocale = locale === "es" ? "es-MX" : "en";
  if (!currentLocale) {
    return;
  }
  return query(
    `experience-categories?filters[profile][$eq]=${profile}&locale=${currentLocale}&populate=experiences&populate[0]=banner`
  ).then((res) => {
    const experiences = res.data;
    experiences?.map((experience) => {
      if (experience.banner) {
        experience.cover = `${process.env.NEXT_PUBLIC_STRAPI_HOST_IMAGE}${experience.banner.url}`;
      } else {
        experience.cover =
          "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";
      }
    });

    return experiences;
  });
}
