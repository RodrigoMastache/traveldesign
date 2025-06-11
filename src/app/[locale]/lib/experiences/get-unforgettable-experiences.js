import { query } from "../strapi";

export async function getUnforgettableExperiences(locale) {
  const currentLocale = locale === "es" ? "es-MX" : "en";
  if (!currentLocale) {
    return;
  }

  const res = await query(
    `unforgettable-experiences?locale=${currentLocale}&populate=experiences&populate[0]=experiences&populate[1]=experiences.banner`
  );

  const experiences = res.data[0];

  if (!experiences) return null;

  experiences?.experiences?.map((experience) => {
    experience.title = experience.name;
    experience.description = experience.auxiliarydescription;
    if (experience.banner) {
      experience.image = `${process.env.NEXT_PUBLIC_STRAPI_HOST_IMAGE}${experience.banner.url}`;
    } else {
      experience.image =
        "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";
    }
  });

  return experiences;
}
