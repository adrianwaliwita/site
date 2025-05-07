// /(views)/resources/[slug]/page.js
export const revalidate = 10; // Revalidates the page every 10 seconds

import BlogPageInner from "app/sections/BlogPageInner";
import { Card, CardContent } from "@/components/ui/card";
import CTA from "app/sections/CTA";

// This runs at build time to generate all possible paths
export async function generateStaticParams() {
  try {
    // First, get the total number of posts
    const countRes = await fetch(
      "https://hconnect-demo.saberion.org/wp-json/wp/v2/posts?per_page=1",
      { cache: "no-store" }
    );

    // Extract total posts from headers
    const totalPosts = parseInt(countRes.headers.get("X-WP-Total") || "0");
    const totalPages = parseInt(countRes.headers.get("X-WP-TotalPages") || "1");

    // Now fetch all posts across all pages
    let allPosts = [];

    for (let page = 1; page <= totalPages; page++) {
      const pageRes = await fetch(
        `https://hconnect-demo.saberion.org/wp-json/wp/v2/posts?per_page=100&page=${page}`,
        { cache: "no-store" }
      );

      if (!pageRes.ok) {
        continue;
      }

      const pagePosts = await pageRes.json();
      allPosts = [...allPosts, ...pagePosts];
    }

    // Return an array of objects with the slug parameter
    return allPosts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error("Error in generateStaticParams:", error);

    // In case of error, return an empty array
    // This is different from the ID approach since we can't easily generate
    // fallback slugs as they're text-based rather than sequential numbers
    return [];
  }
}

// This generates metadata for each page at build time
export async function generateMetadata({ params }) {
  const { slug } = params;

  try {
    const res = await fetch(
      `https://hconnect-demo.saberion.org/wp-json/wp/v2/posts?slug=${slug}&_embed`
    );

    if (!res.ok) {
      return {
        title: "Post Not Found",
      };
    }

    const posts = await res.json();

    // The slug query returns an array, so we take the first result
    if (posts.length === 0) {
      return {
        title: "Post Not Found",
      };
    }

    const post = posts[0];

    return {
      title: post.title.rendered,
      description: post.excerpt?.rendered || "",
    };
  } catch (error) {
    return {
      title: "Error Loading Post",
    };
  }
}

// This fetches data for each post at build time
export default async function ResourcePage({ params }) {
  const { slug } = params;

  try {
    const res = await fetch(
      `https://hconnect-demo.saberion.org/wp-json/wp/v2/posts?slug=${slug}&_embed`
    );

    if (!res.ok) {
      return <div>Post not found.</div>;
    }

    const posts = await res.json();

    // The slug query returns an array, so we take the first result
    if (posts.length === 0) {
      return <div>Post not found.</div>;
    }

    const resource = posts[0];

    const imageUrl =
      resource._embedded?.["wp:featuredmedia"]?.[0]?.source_url ??
      resource?.jetpack_featured_media_url ??
      "/service-images/tech.jpg"; // Fallback

    return (
      <div className="">
        <BlogPageInner
          subtitle="BLOGS"
          blueTitle={resource.title.rendered}
          description=" by H Connect International"
          ImgUrl={imageUrl}
        />
        <div className="max-w-[100vw] md:max-w-[50vw]  mt-10 mx-auto">
          <CardContent>
            <div
              className="resource-content prose prose-lg max-w-[100vw] md:max-w-[60vw] text-black font-arial text-sm leading-[5.0vh]
      [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6
      [&_blockquote]:border-l-4 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-black
      [&_h2]:text-5xl !important [&_h2]:font-bold !important [&_h2]:leading-tight !important [&_h2]:mt-8 !important [&_h2]:mb-6 !important"
              dangerouslySetInnerHTML={{ __html: resource.content.rendered }}
            />
          </CardContent>
        </div>

        <CTA
          title={"READY TO START?"}
          href={"/contact"}
          text={"Get in Touch"}
        ></CTA>
      </div>
    );
  } catch (error) {
    return <div>Error loading post: {error.message}</div>;
  }
}
