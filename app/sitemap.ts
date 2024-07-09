import { groq } from "next-sanity";
import { MetadataRoute } from "next";
import { sanityFetch } from "@/sanity/lib/client";

type CategoryNameType = { slug: string };

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const getCategoryQuery = groq`*[_type == "category"] {"slug":slug.current}`;
  const categoryName: CategoryNameType[] = await sanityFetch({
    query: getCategoryQuery,
    tags: ["category"],
  });
  const categoryEntries: MetadataRoute.Sitemap = categoryName.map(
    ({ slug }) => ({
      url: `${process.env.NEXT_PUBLIC_URL}/categories/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    })
  );

  return [
    {
      url: `${process.env.NEXT_PUBLIC_URL}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}/categories`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}/legal`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}/search`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...categoryEntries,
  ];
}
