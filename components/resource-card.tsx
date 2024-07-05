"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRightFromSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ResourceCardType } from "@/sanity/lib/types";

const ResourceCard = ({
  name,
  slug,
  description,
  category,
  url,
  pricing,
  image,
}: ResourceCardType) => {
  return (
    <>
      <Card key={slug} className="max-w-md max-h-[30rem] rounded-lg">
        <CardHeader className="space-y-2 p-4 justify-between h-full">
          <div className="space-y-4">
            <CardTitle className="grid auto-cols-min grid-cols-1 grid-flow-col justify-between items-center">
              <Link
                href={url}
                target="_blank"
                className="flex items-center group"
              >
                {name}
                <ArrowUpRightFromSquare className="ml-2 inline h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </Link>
            </CardTitle>
            <div>
              <Link href={url} target="_blank" className="">
                <div className="w-full relative aspect-video bg-muted rounded-lg hover:opacity-90 transition-opacity">
                  <Image
                    placeholder="empty"
                    src={image.image}
                    alt={image.alt}
                    fill
                    sizes="100% 100%"
                    className="rounded-lg object-cover"
                  />
                </div>
              </Link>
            </div>
            <CardDescription>{description}</CardDescription>
          </div>

          <div>
            <div className="grid grid-flow-col justify-between items-end flex-wrap w-full ">
              <div className="flex flex-wrap gap-2">
                {category.map((cat, idx) => (
                  <Badge
                    key={idx}
                    className="font-medium opacity-75"
                    variant="secondary"
                  >
                    {cat.name}
                  </Badge>
                ))}
              </div>
              <div className="invert">
                {pricing == "Paid" && (
                  <Badge
                    className="font-normal opacity-100"
                    variant={"secondary"}
                  >
                    ₹₹₹
                  </Badge>
                )}
                {pricing == "Free" && (
                  <Badge
                    className="font-normal opacity-100"
                    variant={"secondary"}
                  >
                    Free
                  </Badge>
                )}
                {pricing == "Free Plan Available" && (
                  <Badge
                    className="font-normal opacity-100"
                    variant={"secondary"}
                  >
                    Freemium
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>
    </>
  );
};

export default ResourceCard;
