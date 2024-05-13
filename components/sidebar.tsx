import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { sanityFetch } from "@/sanity/lib/client";
import { CategoriesType } from "@/sanity/lib/types";
import { categoriesQuery } from "@/sanity/lib/query";
import { SidebarSearch } from "./sidebar-search";

export const Sidebar = async () => {
  const categories: CategoriesType[] = await sanityFetch({
    query: categoriesQuery,
    tags: ["category"],
  });

  return (
    <div className="flex-col hidden w-full max-w-[250px] pt-20 lg:flex ">
      <div className="items-center justify-center w-[250px] h-12 mb-4">
        <SidebarSearch categories={categories} />
      </div>

      <div className="flex flex-col w-full overflow-auto max-w-sm max-h-[calc(100dvh-99px)] group text-white">
        <p className="px-1 text-xl font-bold tracking-widest transition-colors text-foreground group-hover:text-foreground">
          Categories
        </p>
        {categories.map((cat) => (
          <Button
            key={cat.slug}
            asChild
            variant="link"
            className="block w-3/4 px-2 my-1 text-left transition-all text-muted-foreground hover:text-foreground"
          >
            <Link href={`/categories/${cat.slug}`}>
              <Image
                src={cat.icon.image}
                height={20}
                width={20}
                className="inline mr-2 text-muted-foreground"
                alt={cat.icon.alt}
              />
              {cat.name}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
};
