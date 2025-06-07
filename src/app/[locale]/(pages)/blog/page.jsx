"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Head from "next/head";
import { getBlogs } from "../../lib/blogs/get-blogs";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

export default function Index() {
  const locale = useLocale();

  const b = useTranslations("blog");
  const c = useTranslations("ctas");

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
        <title>Blog | Travel Design</title>
        <meta name="description" content="Blog de Travel Design" />
      </Head>

      <main>
        <section className="hero-section position-relative">
          <img src="/assets/img/blog-header.jpg" alt="imagen-blog" />
          <div className="overlay d-flex align-items-center justify-content-center">
            <h1 className="text-center text-white">Blog</h1>
          </div>
        </section>

        <section className="info-home section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-7">{b("intro")}</div>
              <div className="col-md-5">
                <div className="d-flex justify-content-center">
                  <Link href="#" className="btn btn-dark btn-negro">
                    {c("experiences.start")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container">
            <div className="row g-4">
              {blogs &&
                blogs?.map((blog) => (
                  <div key={blog?.id} className="col-12 col-md-4">
                    <div className="card border-0 h-100">
                      <div className="position-relative">
                        <img
                          src={
                            blog?.cover ||
                            "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
                          }
                          alt={blog?.title}
                          className="card-img-top"
                          style={{ objectFit: "cover", height: "250px" }}
                        />
                      </div>
                      <div className="card-body px-0">
                        <h3
                          className="card-title h4"
                          style={{ textTransform: "capitalize" }}
                        >
                          {blog?.title}
                        </h3>
                        <p>{blog?.introduction}</p>
                        <Link
                          href={`/blog/${blog?.documentId}`}
                          className="text-dark text-decoration-underline"
                        >
                          {b("blog-cta")}
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
