import { query } from "../strapi";

const IMAGE_KEYS = [
  { key: "banner", urlProp: "bannerUrl" },
  { key: "intimage", urlProp: "intImageUrl" },
  { key: "actimage", urlProp: "actImageUrl" },
  { key: "accimage", urlProp: "accImageUrl" },
  { key: "recimage", urlProp: "recImageUrl" },
];

export async function getDestination(documentId) {
  const res = await query(
    `destinations?filters[documentId][$eq]=${documentId}&locale=es-MX&populate=banner&populate=intimage&populate=actimage&populate=accimage&populate=recimage`
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

  return destination;
}
