import { query } from "../strapi";

export async function getBlogs(locale) {
  const currentLocale = locale === "es" ? "es-MX" : "en";
  if (!currentLocale) {
    return;
  }
  const res = await query(`blogs?locale=${currentLocale}&populate=banner`);

  const blogs = res.data;

  if (!blogs) return null;

  blogs?.map((blog) => {
    blog.cover = blog.banner
      ? `${process.env.NEXT_PUBLIC_STRAPI_HOST_IMAGE}${blog.banner.url}`
      : "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";
  });

  return blogs;
}

export async function getBlog(documentId, locale) {
  const currentLocale = locale === "es" ? "es-MX" : "en";
  if (!currentLocale) {
    return;
  }
  const res = await query(
    `blogs?filters[documentId][$eq]=${documentId}&locale=${currentLocale}&populate=banner`
  );
  const blog = res.data[0];

  if (!blog) return null;

  if (blog?.banner) {
    blog.cover = blog.banner
      ? `${process.env.NEXT_PUBLIC_STRAPI_HOST_IMAGE}${blog.banner.url}`
      : "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";
  }

  return blog;
}
