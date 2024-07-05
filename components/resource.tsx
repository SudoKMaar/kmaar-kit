import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import ResourceCard from "@/components/resource-card";
import { ResourceCardType } from "@/sanity/lib/types";
import { MotionSection } from "@/components/ui/motion";
import PaginationSection from "@/components/pagination-section";

const getTotalResources = async () => {
  const query = groq`count(*[_type == 'resource'])/25`;
  return client.fetch(query);
};

const getAscendingResouces = async (lastPageNum: number) => {
  const pageSize = 25;
  const query = groq`*[_type == "resource"] | order(name asc) [${
    (lastPageNum - 1) * pageSize
  }...${lastPageNum * pageSize}] {
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
  // console.log(query);
  return client.fetch(query, { lastId: lastPageNum });
};

export async function Resource({
  searchParams,
}: {
  searchParams?: {
    page: string;
  };
}) {
  const pageNum = Number(searchParams?.page ?? 1);
  // console.log("pagenumber: " + pageNum);
  const totalResources = await getTotalResources();
  const postsNum = Math.ceil(totalResources);
  // console.log("POSTnumber (rounded up): " + postsNum);
  const resources: ResourceCardType[] = await getAscendingResouces(pageNum);
  return (
    <MotionSection
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="py-4 mx-4">
        <h2 className="text-3xl text-white font-bold">
          Explore <span className="text-gradient">Resources</span>
        </h2>
      </div>
      <section className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mx-4">
        {resources.map((resource) => (
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
        ))}
      </section>
      <PaginationSection maxPage={postsNum} />
    </MotionSection>
  );
}
