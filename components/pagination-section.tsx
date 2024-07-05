"use client";
import React, { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function PaginationSection({ maxPage }: { maxPage: number }) {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const [pageNum, setPageNum] = useState(1);

  const nextPage = () => {
    if (pageNum + 1 > maxPage) return;
    setPageNum((prev) => prev + 1);
    const params = new URLSearchParams(searchParams);
    params.set("page", (pageNum + 1).toString());
    replace(`${pathname}?${params}`);
  };

  const previousPage = () => {
    if (pageNum <= 1) return;
    setPageNum((prev) => prev - 1);
    const params = new URLSearchParams(searchParams);
    params.set("page", (pageNum - 1).toString());
    replace(`${pathname}?${params}`);
  };

  return (
    <Pagination className="pt-4">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            aria-disabled={pageNum === 0}
            onClick={previousPage}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>{pageNum}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext onClick={nextPage} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
