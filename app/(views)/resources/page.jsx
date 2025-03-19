"use client";
import Meta from "app/components/Meta";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { headingStyles, bodyTextStyles } from "app/constants/FontStyles";
import {
  DividerWhiteLeft,
  DividerBlueCenter,
  DividerBlueLeft,
} from "app/components/Divider";
import LandingPageInner from "app/sections/LandingPageInner";
import FeatuedBlogList from "app/components/FeaturedBlogList";
const Resources = () => {
  const [news, setNews] = useState([]);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const res = await fetch(
        "https://hconnect-demo.saberion.org/wp-json/wp/v2/posts?per_page=6&_embed=true"
      );
      const data = await res.json();
      setNews(data);
    };

    const fetchBlogs = async () => {
      const res = await fetch(
        "https://hconnect-demo.saberion.org/wp-json/wp/v2/posts?&_embed=true"
      );
      const data = await res.json();
      setBlogs(data);
    };

    fetchNews();
    fetchBlogs();
  }, []);

  function truncateExcerpt(html, wordLimit) {
    // Remove HTML tags to count words
    const plainText = html.replace(/<\/?[^>]+(>|$)/g, "");
    const words = plainText.split(" ");

    // If word count exceeds the limit, truncate and append ellipsis
    if (words.length > wordLimit) {
      const truncated = words.slice(0, wordLimit).join(" ");
      return truncated + "...";
    }

    // Return as is if within the limit
    return plainText;
  }
  const metadata = {
    title:
      "Latest News, Case Studies, Newsletters & Blogs | H Connect International",
    description:
      "Dive into our latest news articles, case studies, newsletters and blogs.",
  };
  return (
    <>
      <>
        <head>
          <title>Resources</title>
          <meta
            name="description"
            content="Dive into our latest news articles, case studies, newsletters and blogs.   "
          />
        </head>
      </>{" "}
      <Meta title={metadata.title} description={metadata.description} />
      <div className="w-full  ">
        <section className="flex flex-col items-center w-full">
          {/* Content Section */}

          <LandingPageInner
            subtitle="RESOURCES"
            blueTitle=" LEARN WITH US "
            titleAfterBlue=""
            description="                                 Stay informed. Stay ahead. Dive into our latest insights."
            ImgUrl="/learn-with-us.png"
          />
        </section>

        <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <section className="mb-16 relative">
              <div className="mx-auto-sm text-center mb-8 lg:mb-10 relative z-10">
                <div className={headingStyles.primaryCenter}>
                  <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                    LATEST
                  </span>{" "}
                  NEWS
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                {news.slice(0, 3).map((item) => {
                  const imageUrl =
                    item._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                    "https://via.placeholder.com/600"; // Fallback image

                  return (
                    <Link key={item.id} href={`/resources/${item.slug}`}>
                      <div
                        className="bg-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow cursor-pointer h-[60vh] flex flex-col justify-center relative "
                        style={{
                          backgroundImage: `url(${imageUrl})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      >
                        <div className="bg-black bg-opacity-50 p-6 absolute inset-0 flex flex-col justify-center items-center text-white rounded-lg hover:shadow-lg">
                          <h3 className="text-sm !font-arial mb-2 font-bold">
                            {item.title.rendered}
                          </h3>
                          <p
                            className="text-gray-200 mb-4 text-sm "
                            dangerouslySetInnerHTML={{
                              __html: truncateExcerpt(
                                item.excerpt.rendered,
                                20
                              ), // Limit to 20 words
                            }}
                          />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
            <FeatuedBlogList />

            <section className="mb-16">
              <div className="mx-auto-sm text-center mb-8 lg:mb-10">
                <div className={headingStyles.primaryCenter}>
                  <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                    CASE
                  </span>{" "}
                  STUDIES
                </div>
              </div>

              {/* Case Study PDF Embed */}

              <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-center">
                <a
                  href="/pdf/case-study-pdf/r2r.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src="/case-study/r2r.jpg"
                    alt="Transform Case Study"
                    className="w-[350px] h-[350px] object-cover mx-auto rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
                  />
                  <p className="mt-2 text-lg font-medium pl-6 font-arial">
                    Record to Report
                  </p>
                </a>

                <a
                  href="/pdf/case-study-pdf/p2p.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src="/case-study/p2p.jpg"
                    alt="Growth Strategy Case Study"
                    className="w-[350px] h-[350px] object-cover mx-auto rounded-lg shadow-lg hover:opacity-80 transition-opacity"
                  />
                  <p className="mt-2 text-lg font-medium pl-6">
                    Procure to Pay
                  </p>
                </a>
                <a
                  href="/pdf/case-study-pdf/epm.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src="/case-study/epm.jpg"
                    alt="Enterprise Performance Management Case Study"
                    className="w-[350px] h-[350px] object-cover mx-auto rounded-lg shadow-lg hover:opacity-80 transition-opacity"
                  />
                  <p className="mt-2 text-lg font-medium pl-6">
                    Enterprise Performance Management
                  </p>
                </a>

                <a
                  href="/pdf/case-study-pdf/in-2-cash.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src="/case-study/in-2-cash.jpg"
                    alt="Enterprise Performance Management Case Study"
                    className="w-[350px] h-[350px] object-cover mx-auto rounded-lg shadow-lg hover:opacity-80 transition-opacity"
                  />
                  <p className="mt-2 text-lg font-medium pl-6">
                    Invoice to Cash
                  </p>
                </a>

                <a
                  href="/pdf/case-study-pdf/f-a-con.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src="/case-study/f-a-con.jpg"
                    alt="Innovation Case Study"
                    className="w-[350px] h-[350px] object-cover mx-auto rounded-lg shadow-lg hover:opacity-80 transition-opacity"
                  />
                  <p className="mt-2 text-lg font-medium pl-6">
                    Finance & Accounting Consultancy
                  </p>
                </a>
              </div>
            </section>

            <section className="mb-16">
              <div className="mx-auto-sm text-center mb-8 lg:mb-10">
                <div className={headingStyles.primaryCenter}>
                  <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                    NEWSLETTERS
                  </span>{" "}
                </div>
              </div>

              {/* Case Study PDF Embed */}

              <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-center">
                <a
                  href="/pdf/2024-Q3-Q4-Newsletter.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src="/Q3-Q4.jpg"
                    alt="Transform Case Study"
                    className="w-[350px] h-[350px] object-cover object-top mx-auto rounded-lg shadow-lg hover:opacity-80 transition-opacity"
                  />
                  <p className="mt-2 text-lg font-medium  font-arial">
                    2024 Insider Scoop: Quarter 3-4
                  </p>
                </a>

                <a
                  href="/pdf/2024-Q2-Newsletter.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src="/Q2.jpg"
                    alt="Growth Strategy Case Study"
                    className="w-[350px] h-[350px] object-cover object-top mx-auto rounded-lg shadow-lg hover:opacity-80 transition-opacity"
                  />
                  <p className="mt-2 text-lg font-medium  font-arial">
                    2024 Insider Scoop: Quarter 2
                  </p>
                </a>

                <a
                  href="/pdf/2024-Q3-Q4-Newsletter.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src="/Q1.jpg"
                    alt="Innovation Case Study"
                    className="w-[350px] h-[350px] object-cover object-top mx-auto rounded-lg shadow-lg hover:opacity-80 transition-opacity"
                  />
                  <p className="mt-2 text-lg font-medium  font-arial">
                    2024 Insider Scoop: Quarter 1
                  </p>
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resources;
