"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Head from "next/head";
import { getBlog } from "../../../lib/blogs/get-blogs";
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

        <section className="section-padding">
          <div className="container">
            {Object.keys(blog).length && (
              <BlocksRenderer content={blog.content} />
            )}
          </div>
        </section>
      </main>
    </>
  );
}
