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
  PaginationFirst,
  PaginationLast,
  PaginationEllipsis,
} from "@/components/ui/pagination";

export default function PaginationSection({ maxPage }: { maxPage: number }) {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const [pageNum, setPageNum] = useState(1);

  const goToPage = (page: number) => {
    if (page < 1 || page > maxPage) return;
    setPageNum(page);
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    replace(`${pathname}?${params}`);
  };

  const nextPage = () => goToPage(pageNum + 1);
  const previousPage = () => goToPage(pageNum - 1);
  const goToFirstPage = () => goToPage(1);
  const goToLastPage = () => goToPage(maxPage);

  const displayPages = [];
  for (
    let i = Math.max(1, pageNum - 2);
    i <= Math.min(maxPage, pageNum + 2);
    i++
  ) {
    displayPages.push(i);
  }

  return (
    <Pagination className="pt-4">
      <PaginationContent>
        <PaginationFirst onClick={goToFirstPage} />
        <PaginationItem>
          <PaginationPrevious
            aria-disabled={pageNum === 1}
            onClick={previousPage}
            className={pageNum === 1 ? "cursor-disabled" : "cursor-pointer"}
          />
        </PaginationItem>
        {/* {pageNum > 3 && (
          <>
            <PaginationItem>
              <PaginationLink
                isActive={pageNum === 1}
                onClick={() => goToPage(1)}
              >
                1
              </PaginationLink>
            </PaginationItem>
            {pageNum > 4 && <PaginationEllipsis />}
          </>
        )} */}
        {displayPages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              isActive={page === pageNum}
              onClick={() => goToPage(page)}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        {/* {maxPage - pageNum > 2 && (
          <>
            {maxPage - pageNum > 3 && <PaginationEllipsis />}
            <PaginationItem>
              <PaginationLink
                isActive={pageNum === maxPage}
                onClick={() => goToPage(maxPage)}
              >
                {maxPage}
              </PaginationLink>
            </PaginationItem>
          </>
        )} */}
        <PaginationItem>
          <PaginationNext
            aria-disabled={pageNum === maxPage}
            onClick={nextPage}
            className={
              pageNum === maxPage ? "cursor-disabled" : "cursor-pointer"
            }
          />
        </PaginationItem>
        <PaginationLast onClick={goToLastPage} />
      </PaginationContent>
    </Pagination>
  );
}
