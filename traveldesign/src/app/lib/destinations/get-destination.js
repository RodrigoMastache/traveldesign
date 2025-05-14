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
    `destinations?filters[documentId][$eq]=${documentId}&locale=es-MX&populate=banner&populate=intimage&populate=actimage&populate=accimage&populate=recimage&populate[0]=experiences&populate[1]=experiences.details&populate[2]=experiences.details.banner`
  );

  const destination = res.data[0];

  if (!destination) return null;

  IMAGE_KEYS.forEach(({ key, urlProp }) => {
    const imageArray = destination[key];
    if (imageArray) {
      destination[
        urlProp
      ] = `${process.env.NEXT_PUBLIC_STRAPI_HOST}${imageArray.url}`;
    } else {
      destination[urlProp] =
        "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";
    }
  });

  // destination.experiences.map((experience) => {
  //   experience.cover = `${process.env.NEXT_PUBLIC_STRAPI_HOST}${experience.details.banner.url}`;
  // });

  return destination;
}

export async function getDestinationByContinent(continent, country) {
  const res = await query(
    `destinations?filters[continent][$eq]=${continent}&locale=es-MX&populate[0]=banner`
  );

  const data = res.data;

  const destinations = data.filter((item) => item.country !== country);

  if (!destinations) return null;

  destinations?.map((destination) => {
    if (destination.banner) {
      destination.cover = `${process.env.NEXT_PUBLIC_STRAPI_HOST}${destination.banner.url}`;
    } else {
      destination.cover =
        "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";
    }
  });

  return destinations;
}
