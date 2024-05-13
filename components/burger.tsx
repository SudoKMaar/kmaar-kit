import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CategoriesType } from "@/sanity/lib/types";
import AddResource from "@/components/add-resource";
import { SidebarSearch } from "@/components/sidebar-search";

interface BurgerMenuProps {
  categories: CategoriesType[];
}

export function BurgerMenu({ categories }: BurgerMenuProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="icon"
          className="w-8 h-8 p-0 border bg-background/50 border-border/75"
        >
          <Menu className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col pt-16 overflow-scroll text-white select-none">
        <AddResource categories={categories} />
        <div className="items-center justify-center w-full h-12 mb-4">
          <SidebarSearch categories={categories} />
        </div>
        <SheetTitle className="px-1 text-xl font-bold tracking-widest transition-colors text-foreground group-hover:text-foreground">
          Categories
        </SheetTitle>
        {categories.map((cat) => (
          <Button
            key={cat.slug}
            asChild
            variant="link"
            className="block w-full px-2 my-1 text-left transition-all text-muted-foreground hover:text-foreground"
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

        <div className="flex flex-col w-3/4 overflow-auto max-w-sm max-h-[calc(100dvh-99px)] group text-white">
          <p className="px-1 font-medium tracking-widest underline transition-colors text-muted-foreground group-hover:text-foreground">
            Categories
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
