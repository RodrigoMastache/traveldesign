import { query } from "../strapi";

export function getMenuExperiences(profile, locale) {
  const currentLocale = locale === "es" ? "es-MX" : "en";
  if (!currentLocale) {
    return;
  }
  return query(
    `experience-categories?filters[profile][$eq]=${profile}&locale=${currentLocale}&populate=experiences&populate[0]=banner`
  ).then((res) => {
    const destinations = res.data;
    destinations?.map((destination) => {
      if (destination.banner) {
        destination.cover = `${process.env.NEXT_PUBLIC_STRAPI_HOST}${destination.banner.url}`;
      } else {
        destination.cover =
          "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";
      }
    });

    return destinations;
  });
}
