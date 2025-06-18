"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Head from "next/head";
import { getBlog, getBlogs } from "../../../lib/blogs/get-blogs";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function Index() {
  const locale = useLocale();

  const b = useTranslations("blog");
  const c = useTranslations("ctas");
  const params = useParams();
  const blog_id = params.blog_id;

  const [blog, setBlog] = useState([]);

  useEffect(() => {
    async function getData() {
      const datos = await getBlog(blog_id, locale);
      setBlog(datos);
    }
    getData();
  }, []);

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function getData() {
      const datos = await getBlogs(locale);
      setBlogs(datos);
    }
    getData();
  }, []);

  return (
    <>
      <Head>
        <title>{blog?.title} | Travel Design</title>
        <meta name="description" content={blog?.title} />
      </Head>

      <main>
        <section className="hero-section position-relative">
          <div
            className="position-relative"
            style={{ height: "100vh", width: "100%" }}
          >
            <img src={blog?.cover} alt="Kenia - Masái Mara" />
            <div className="overlay d-flex align-items-center justify-content-center">
              <h1 className="text-center text-white">{blog?.title}</h1>
            </div>
          </div>
        </section>
        {/* 
        <section className="section-padding">
          <div className="container">
            {Object.keys(blog).length && (
              <BlocksRenderer content={blog.content} />
            )}
          </div>
        </section> */}

        <section className="section-padding">
          <div className="container">
            <div className="row g-5">
              <div className="col-md-8">
                <article className="blog-post">
                  {Object.keys(blog).length && (
                    <BlocksRenderer content={blog.content} />
                  )}
                </article>
              </div>
              <div className="col-md-4">
                <div className="position-sticky" style={{ top: "7rem" }}>
                  <div>
                    <h4 className="fst-italic">Últimas entradas</h4>
                    <ul className="list-unstyled">
                      {blogs &&
                        blogs.map((item) => (
                          <li>
                            <Link
                              className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
                              href={`/blog/${item?.documentId}`}
                            >
                              <img
                                src={
                                  item?.cover ||
                                  "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
                                }
                                alt={item?.title}
                                className="blog-post-img"
                              />
                              <div className="col-lg-8">
                                <h6 className="mb-0">{item?.title}</h6>
                              </div>
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
