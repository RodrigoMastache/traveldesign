import { query } from "../strapi";

const IMAGE_KEYS = [
  { key: "banner", urlProp: "bannerUrl" },
  { key: "intimage", urlProp: "intImageUrl" },
  { key: "actimage", urlProp: "actImageUrl" },
  { key: "accimage", urlProp: "accImageUrl" },
  { key: "recimage", urlProp: "recImageUrl" },
];

export async function getExperience(documentId) {
  const res = await query(
    `experiences?filters[documentId][$eq]=${documentId}&locale=es-MX&populate=banner&populate=intimage&populate=actimage&populate=accimage&populate=recimage`
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

export async function getExperiencesByCountry(country, experienceName) {
  const res = await query(
    `experiences?filters[country][$eq]=${country}&locale=es-MX&populate[0]=banner`
  );

  const data = res.data;
  const experiences = data.filter((item) => item.name !== experienceName);

  console.log("experiences", experiences);

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
