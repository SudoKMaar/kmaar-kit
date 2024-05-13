"use client";
import { toast } from "sonner";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { CategoriesType } from "@/sanity/lib/types";

interface SidebarSearchProps {
  categories: CategoriesType[];
}

export function SidebarSearch({ categories }: SidebarSearchProps) {
  const router = useRouter();
  const [search, setSearch] = useState<string>("");

  const placeholders = categories.map((category) => category.name);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search.trim() !== "") {
      router.push(`/search?q=${search}`);
      toast(`Searching for ${search}...`);
    }
  };

  return (
    <PlaceholdersAndVanishInput
      placeholders={placeholders}
      onChange={handleChange}
      onSubmit={onSubmit}
    />
  );
}
