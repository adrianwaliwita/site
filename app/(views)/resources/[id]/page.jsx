// /(views)/resources/[id]/page.js
import BlogPageInner from "app/sections/BlogPageInner";
import { Card, CardContent } from "@/components/ui/card";

// This runs at build time to generate all possible paths
export async function generateStaticParams() {
  try {
    // Fetch all posts to get their IDs
    const res = await fetch(
      "https://hconnect-demo.saberion.org/wp-json/wp/v2/posts?per_page=100"
    );

    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }

    const posts = await res.json();

    // Return an array of objects with the id parameter
    return posts.map((post) => ({
      id: post.id.toString(),
    }));
  } catch (error) {
    console.error("Error fetching post IDs:", error);
    return []; // Return empty array if fetching fails
  }
}

// This generates metadata for each page at build time
export async function generateMetadata({ params }) {
  const { id } = params;

  try {
    const res = await fetch(
      `https://hconnect-demo.saberion.org/wp-json/wp/v2/posts/${id}?_embed`
    );

    if (!res.ok) {
      return {
        title: "Post Not Found",
      };
    }

    const post = await res.json();

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
  const { id } = params;

  try {
    const res = await fetch(
      `https://hconnect-demo.saberion.org/wp-json/wp/v2/posts/${id}?_embed`
    );

    if (!res.ok) {
      return <div>Post not found.</div>;
    }

    const resource = await res.json();

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
        <div className="max-w-[50vw] mt-10 mx-auto">
          <CardContent>
            <div
              className="resource-content prose prose-lg max-w-[60vw] text-black font-arial text-sm leading-[5.0vh]
     [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6
     [&_blockquote]:border-l-4 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-black
    prose-h2:text-3xl prose-h2:font-bold prose-h2:leading-tight prose-h2:mt-6 prose-h2:mb-4"
              dangerouslySetInnerHTML={{ __html: resource.content.rendered }}
            />
          </CardContent>
        </div>
      </div>
    );
  } catch (error) {
    return <div>Error loading post: {error.message}</div>;
  }
}
