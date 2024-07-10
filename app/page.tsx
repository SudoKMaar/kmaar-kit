import { Suspense } from "react";
import { groq } from "next-sanity";
import { ArrowRight } from "lucide-react";
import { redirect } from "next/navigation";
import { cn } from "@/lib/utils";
import { sanityFetch } from "@/sanity/lib/client";
import ResourceCard from "@/components/resource-card";
import { ResourceCardType } from "@/sanity/lib/types";
import TextShimmer from "@/components/ui/animated-shiny-text";
import PaginationSection from "@/components/resource-pagination-section";
import ResourceCardSkeleton from "@/components/resource-card-skeleton";
import NumberTicker from "@/components/ui/number-ticker";
import { ResourceSortingSelect } from "@/components/resource-sorting-select";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    page: string;
    sort: "desc" | "asc" | "recent" | "oldest";
  };
}) {
  const getTotalResourcesQuery = groq`count(*[_type == 'resource'])`;
  const pageNum = Number(searchParams?.page ?? 1);
  // console.log("pagenumber: " + pageNum);
  const totalResources: number = await sanityFetch({
    query: getTotalResourcesQuery,
    tags: ["resource"],
  });
  const maxPage: number = Math.ceil(totalResources / 24);
  // console.log("POSTnumber (rounded up): " + postsNum);
  const pageSize = 24;
  const sortParam = searchParams?.sort;
  let sortOrder;
  switch (sortParam) {
    case "asc":
      sortOrder = "name asc";
      break;
    case "desc":
      sortOrder = "name desc";
      break;
    case "recent":
      sortOrder = "_createdAt desc";
      break;
    case "oldest":
      sortOrder = "_createdAt asc";
      break;
    default:
      sortOrder = "name asc";
  }
  const getResourcesQuery = groq`*[_type == "resource"] | order(${sortOrder}) [${
    (pageNum - 1) * pageSize
  }...${pageNum * pageSize}] {
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
    }}`;
  // console.log(getResourcesQuery);
  const resources: ResourceCardType[] = await sanityFetch({
    query: getResourcesQuery,
    tags: ["resource"],
  });
  // console.log(resources);
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
        <div className="py-4 mx-4 gap-y-1 flex flex-col sm:flex-row justify-between">
          <h2 className="text-2xl sm:text-3xl text-white font-bold">
            Explore{" "}
            <span className="text-gradient">
              {" "}
              <NumberTicker value={totalResources} /> Resources{" "}
            </span>
          </h2>
          <div className="w-[154px]">
            <Suspense
              key={searchParams?.sort || ""}
              fallback={<p>Sort By A-Z</p>}
            >
              <ResourceSortingSelect sort={searchParams?.sort || "asc"} />
            </Suspense>
          </div>
        </div>
        <section className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mx-4">
          <Suspense
            key={searchParams?.page || ""}
            fallback={<ResourceCardSkeleton />}
          >
            {resources.length > 0
              ? resources.map((resource) => (
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
              : redirect("/")}
          </Suspense>
        </section>
        <PaginationSection maxPage={maxPage} />
      </section>
    </main>
  );
}
