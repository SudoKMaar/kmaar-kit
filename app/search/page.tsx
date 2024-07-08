import { Metadata } from "next";
import { Suspense } from "react";
import { groq } from "next-sanity";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { sanityFetch } from "@/sanity/lib/client";
import AddResource from "@/components/add-resource";
import { categoriesQuery } from "@/sanity/lib/query";
import ResourceCard from "@/components/resource-card";
import NumberTicker from "@/components/ui/number-ticker";
import TextShimmer from "@/components/ui/animated-shiny-text";
import { CategoriesType, ResourceCardType } from "@/sanity/lib/types";
import ResourceCardSkeleton from "@/components/resource-card-skeleton";
import PaginationSection from "@/components/resource-pagination-section";

export const metadata: Metadata = {
  title: { absolute: "Search KMaar Kit: Boost Your Productivity" },
  description:
    "Unlock a world of creativity and productivity with our comprehensive collection of tools, assets, and guides tailored for developers and designers alike. Search for resource search for KMaar Kit",
};

export default async function Search({
  searchParams,
}: {
  searchParams?: {
    page: string;
    q: string;
  };
}) {
  const categories: CategoriesType[] = await sanityFetch({
    query: categoriesQuery,
    tags: ["category"],
  });
  const q = searchParams?.q ?? "";
  const searchQuery = groq`*[_type == "resource" && keywords match "*${q}*"] | order(name asc){
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            description,
            "category": category[]->{name},
            url,
            pricing,
            keywords,
            image {
            "image": asset->url,
            alt,
            }
        }`;
  const resources: ResourceCardType[] = await sanityFetch({
    query: searchQuery,
    tags: ["resource"],
  });
  const getTotalResult = `count(*[_type == "resource" && keywords match "*${q}*"])`;
  const totalResult: number = await sanityFetch({
    query: getTotalResult,
    tags: ["resource"],
  });
  const pageNum = Number(searchParams?.page ?? 1);
  const maxPage = Math.ceil(totalResult / 12);
  return (
    <main className="items-center justify-between w-full mx-auto">
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
        <div className="py-4 mx-4">
          <h2 className="text-3xl text-white font-bold">
            <NumberTicker value={totalResult} /> Search Result For{" "}
            <span className="text-gradient">{q}</span>
          </h2>
        </div>
        <section className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mx-4">
          <Suspense
            key={searchParams?.q || ""}
            fallback={<ResourceCardSkeleton />}
          >
            {resources.length > 0 ? (
              resources.map((resource) => (
                <ResourceCard
                  key={resource.slug}
                  name={resource.name}
                  slug={resource.slug}
                  description={resource.description}
                  category={resource.category}
                  url={resource.url}
                  pricing={resource.pricing}
                  image={resource.image}
                />
              ))
            ) : (
              <div className="text-muted-foreground flex flex-col w-full mx-auto justify center col-span-full items-center py-4">
                <p className="w-full text-xl text-center">
                  Sorry! We don&apos;t have anything for that yet!
                </p>
                <div className="mx-auto items-center justify-center pt-2">
                  <AddResource categories={categories} />
                </div>
              </div>
            )}
          </Suspense>
        </section>
        <PaginationSection maxPage={1} />
      </section>
    </main>
  );
}
