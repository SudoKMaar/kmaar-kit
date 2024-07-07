"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export const ResourceSortingSelect = ({
  sort,
}: {
  sort: "asc" | "desc" | "recent" | "oldest";
}) => {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const setSort = (e: string) => {
    if (["asc", "desc", "recent", "oldest"].includes(e)) {
      const params = new URLSearchParams(searchParams);
      params.set("sort", e);
      replace(`${pathname}?${params}`);
    }
  };
  const validSortValues = ["asc", "desc", "recent", "oldest"];
  const defaultValue = validSortValues.includes(
    searchParams.get("sort") || "asc"
  )
    ? searchParams.get("sort") || "asc"
    : "asc";

  return (
    <Select
      onValueChange={(e: "asc" | "desc" | "recent" | "oldest") => setSort(e)}
      defaultValue={defaultValue}
    >
      <SelectTrigger className="w-[150px] text-white">
        <SelectValue placeholder="Sort by: " />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="asc" className="cursor-pointer">
            <span className="text-muted-foreground">Sort By: </span>A - Z
          </SelectItem>
          <SelectItem value="desc" className="cursor-pointer">
            <span className="text-muted-foreground">Sort By: </span>Z - A
          </SelectItem>
          <SelectItem value="recent" className="cursor-pointer">
            <span className="text-muted-foreground">Sort By: </span>Latest
          </SelectItem>
          <SelectItem value="oldest" className="cursor-pointer">
            <span className="text-muted-foreground">Sort By: </span>Oldest
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
