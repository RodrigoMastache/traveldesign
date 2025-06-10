import { query } from "../strapi";

const IMAGE_KEYS = [
  { key: "banner", urlProp: "bannerUrl" },
  { key: "intimage", urlProp: "intImageUrl" },
  { key: "actimage", urlProp: "actImageUrl" },
  { key: "accimage", urlProp: "accImageUrl" },
  { key: "recimage", urlProp: "recImageUrl" },
];

export async function getExperiences(locale) {
  const currentLocale = locale === "es" ? "es-MX" : "en";
  if (!currentLocale) {
    return;
  }

  const pageSize = 100;

  const firstPage = await query(
    `experiences?locale=${currentLocale}&pagination[page]=1&pagination[pageSize]=${pageSize}`
  );

  const secondPage = await query(
    `experiences?locale=${currentLocale}&pagination[page]=2&pagination[pageSize]=${pageSize}`
  );

  const allExperiences = [
    ...(firstPage.data || []),
    ...(secondPage.data || []),
  ];

  if (!allExperiences) return null;
  return allExperiences;
}

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
      ] = `${process.env.NEXT_PUBLIC_STRAPI_HOST_IMAGE}${imageArray.url}`;
    } else {
      experience[urlProp] =
        "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";
    }
  });

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
      experience.cover = `${process.env.NEXT_PUBLIC_STRAPI_HOST_IMAGE}${experience.banner.url}`;
    } else {
      experience.cover =
        "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";
    }
  });

  return experiences;
}
