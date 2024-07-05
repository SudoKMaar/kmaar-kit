import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const SortingSelect = ({
  sort,
  setSort,
}: {
  sort: "asc" | "desc" | "recent";
  setSort: (sort: "asc" | "desc" | "recent") => void;
}) => {
  return (
    <Select
      onValueChange={(e: "asc" | "desc" | "recent") => setSort(e)}
      defaultValue={sort}
    >
      <SelectTrigger className="w-fit max-w-[15ch] focus-visible:ring-0 focus-visible:bg-primary/15">
        <SelectValue placeholder="Sort by: " />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel></SelectLabel>
          <SelectItem value={"asc"}>
            <span className="text-muted-foreground">Sort by: </span>
            A-Z
          </SelectItem>
          <SelectItem value={"desc"}>
            <span className="text-muted-foreground">Sort by: </span>
            Z-A
          </SelectItem>
          <SelectItem value={"recent"}>
            <span className="text-muted-foreground">Sort by: </span>
            Latest
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
