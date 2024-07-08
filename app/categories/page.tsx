import React from "react";
import { Metadata } from "next";
import { cn } from "@/lib/utils";
import { sanityFetch } from "@/sanity/lib/client";
import { categoriesQuery } from "@/sanity/lib/query";
import { CategoriesType } from "@/sanity/lib/types";
import { CategoriesCard } from "@/components/categories-card";
import TextShimmer from "@/components/ui/animated-shiny-text";
import NumberTicker from "@/components/ui/number-ticker";
import { ArrowRight } from "lucide-react";
import { groq } from "next-sanity";

export const metadata: Metadata = {
  title: "Categories",
  description:
    "Discover a wide range of developer resources categorized in KMaar Kit. From software project management to npm troubleshooting, find what you need to level up your skills.",
};

export default async function CategoriesPage() {
  const categories: CategoriesType[] = await sanityFetch({
    query: categoriesQuery,
    tags: ["category"],
  });
  const getTotalCategoriesQuery = groq`count(*[_type == 'category'])`;
  const totalCategories: number = await sanityFetch({
    query: getTotalCategoriesQuery,
    tags: ["category"],
  });
  return (
    <section className="items-center justify-between w-full mx-auto">
      <div className="h-fit w-full bg-background bg-grid-white/[0.08] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <section
          id="hero"
          className="flex flex-col items-center justify-center py-20 text-center select-none"
        >
          <div className="flex flex-col items-center justify-center">
            <div
              className={cn(
                "group rounded-full border text-base text-white transition-all ease-in hover:cursor-pointer border-white/5 bg-neutral-900 hover:bg-neutral-800"
              )}
            >
              <TextShimmer className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:duration-300 hover:text-neutral-400">
                <span>✨ Your Ultimate Developer Resource Library</span>
                <ArrowRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </TextShimmer>
            </div>
            <h1 className="pt-2 pb-4 text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-500 ">
              KMaar Kit
            </h1>
          </div>
          <p className="text-muted-foreground max-w-prose">
            Unlock a world of creativity and productivity with our comprehensive
            collection of tools, assets, and guides tailored for developers and
            designers alike.
          </p>
        </section>
      </div>
      <section>
        <div className="py-4 mx-4 gap-y-1 flex flex-col sm:flex-row justify-between">
          <h2 className="text-2xl sm:text-3xl text-white font-bold">
            Explore{" "}
            <span className="text-gradient">
              {" "}
              <NumberTicker value={totalCategories} /> Categories{" "}
            </span>
          </h2>
        </div>
        <section className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mx-4">
          {categories.map((cat) => (
            <CategoriesCard
              key={cat.slug}
              name={cat.name}
              description={cat.description}
              icon={cat.icon}
              slug={cat.slug}
              categoryCount={cat.categoryCount}
            />
          ))}
        </section>
      </section>
    </section>
  );
}
