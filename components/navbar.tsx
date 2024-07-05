import Link from "next/link";
import Image from "next/image";
import { BurgerMenu } from "@/components/burger";
import AddResource from "@/components/add-resource";
import { CategoriesType } from "@/sanity/lib/types";
import { sanityFetch } from "@/sanity/lib/client";
import { categoriesQuery } from "@/sanity/lib/query";

export default async function Navbar() {
  const categories: CategoriesType[] = await sanityFetch({
    query: categoriesQuery,
    tags: ["category"],
  });

  return (
    <nav className="fixed z-50 flex items-center justify-center w-full p-3 select-none bg-gradient-to-b from-background via-background/50 to-background/0 backdrop-blur-lg backdrop-brightness-90">
      <div className="flex items-center justify-between w-full max-w-[1786px]">
        <div className="select-none">
          <Link
            href={"/"}
            className="flex h-12 gap-2 text-2xl font-medium tracking-tight"
          >
            <Image
              alt="KMaar Kit"
              width={163}
              height={48}
              src="/kmaar-kit.png"
            />
          </Link>
        </div>

        <div className="flex-row-reverse items-center hidden gap-4 pr-2 lg:flex">
          <AddResource categories={categories} />
        </div>
        <div className="flex items-center gap-4 lg:hidden">
          <BurgerMenu categories={categories} />
        </div>
      </div>
    </nav>
  );
}
