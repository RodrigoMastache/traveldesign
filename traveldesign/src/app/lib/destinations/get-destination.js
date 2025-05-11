import { query } from "../strapi";

const IMAGE_KEYS = [
  { key: "banner", urlProp: "bannerUrl" },
  { key: "intimage", urlProp: "intImageUrl" },
  { key: "intimage", urlProp: "intImageUrl" },
  { key: "actimage", urlProp: "actImageUrl" },
  { key: "accimage", urlProp: "accImageUrl" },
  { key: "recimage", urlProp: "recImageUrl" },
];

export async function getDestination(documentId) {
  const res = await query(
    `destinations?filters[documentId][$eq]=${documentId}&locale=es-MX&populate=actimage&populate=accimage&populate=recimage&populate[0]=experiences&populate[1]=experiences.details&populate[2]=experiences.details.banner`
  );

  const destination = res.data[0];

  if (!destination) return null;

  IMAGE_KEYS.forEach(({ key, urlProp }) => {
    const imageArray = destination[key];
    if (Array.isArray(imageArray) && imageArray.length > 0) {
      destination[
        urlProp
      ] = `${process.env.NEXT_PUBLIC_STRAPI_HOST}${imageArray[0].url}`;
    }
  });

  destination.experiences.map((experience) => {
    experience.cover = `${process.env.NEXT_PUBLIC_STRAPI_HOST}${experience.details.banner.url}`;
  });

  return destination;
}
