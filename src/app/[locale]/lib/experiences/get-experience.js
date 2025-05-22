import { query } from "../strapi";

const IMAGE_KEYS = [
  { key: "banner", urlProp: "bannerUrl" },
  { key: "intimage", urlProp: "intImageUrl" },
  { key: "actimage", urlProp: "actImageUrl" },
  { key: "accimage", urlProp: "accImageUrl" },
  { key: "recimage", urlProp: "recImageUrl" },
];

export async function getExperience(documentId, locale) {
  const currentLocale = locale === "es" ? "es-MX" : "en";
  if (!currentLocale) {
    return;
  }

  const res = await query(
    `experiences?filters[documentId][$eq]=${documentId}&locale=${currentLocale}&populate=banner&populate=intimage&populate=actimage&populate=accimage&populate=recimage`
  );

  const experience = res.data[0];

  if (!experience) return null;

  IMAGE_KEYS.forEach(({ key, urlProp }) => {
    const imageArray = experience[key];
    if (imageArray) {
      experience[
        urlProp
      ] = `${process.env.NEXT_PUBLIC_STRAPI_HOST}${imageArray.url}`;
    } else {
      experience[urlProp] =
        "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";
    }
  });

  //   destination.experiences.map((experience) => {
  //     experience.cover = `${process.env.NEXT_PUBLIC_STRAPI_HOST}${experience.details.banner.url}`;
  //   });

  return experience;
}

export async function getExperiencesByCountry(country, experienceName, locale) {
  const currentLocale = locale === "es" ? "es-MX" : "en";
  if (!currentLocale) {
    return;
  }
  const res = await query(
    `experiences?filters[country][$eq]=${country}&locale=${currentLocale}&populate[0]=banner`
  );

  const data = res.data;
  const experiences = data.filter((item) => item.name !== experienceName);

  if (!experiences) return null;

  experiences?.map((experience) => {
    if (experience.banner) {
      experience.cover = `${process.env.NEXT_PUBLIC_STRAPI_HOST}${experience.banner.url}`;
    } else {
      experience.cover =
        "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";
    }
  });

  return experiences;
}
