import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ResourceCardSkeleton() {
  return (
    <>
      <Card className="max-w-md max-h-[30rem] rounded-xl">
        <CardHeader className="space-y-2 p-4 justify-between h-full">
          <div className="space-y-4">
            <CardTitle className="grid auto-cols-min grid-cols-1 grid-flow-col justify-between items-center">
              <Skeleton className="w-[121px] h-[24px] rounded-full" />
              <Skeleton className="w-[20px] h-[20px] rounded-[5px]" />
            </CardTitle>
            <div>
              <div className="w-full relative aspect-video rounded-xl hover:opacity-90 transition-opacity">
                <Skeleton className="w-full h-full rounded-xl" />
              </div>
            </div>
            <CardDescription className="gap-y-1">
              <Skeleton className="w-full h-[16px] rounded-full mt-1" />
              <Skeleton className="w-[90%] h-[16px] rounded-full mt-1" />
              <Skeleton className="w-[98%] h-[16px] rounded-full mt-1" />
              <Skeleton className="w-full h-[16px] rounded-full mt-1" />
            </CardDescription>
          </div>
          <div>
            <div className="grid grid-flow-col justify-between items-end flex-wrap w-full ">
              <div className="flex flex-wrap gap-2">
                <Skeleton className="w-[40px] h-[22px] rounded-full" />
                <Skeleton className="w-[45px] h-[22px] rounded-full" />
              </div>
              <div className="invert">
                <Skeleton className="w-[55px] h-[22px] rounded-full" />
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      <Card className="max-w-md max-h-[30rem] rounded-xl">
        <CardHeader className="space-y-2 p-4 justify-between h-full">
          <div className="space-y-4">
            <CardTitle className="grid auto-cols-min grid-cols-1 grid-flow-col justify-between items-center">
              <Skeleton className="w-[90px] h-[24px] rounded-full" />
              <Skeleton className="w-[20px] h-[20px] rounded-[5px]" />
            </CardTitle>
            <div>
              <div className="w-full relative aspect-video rounded-xl hover:opacity-90 transition-opacity">
                <Skeleton className="w-full h-full rounded-xl" />
              </div>
            </div>
            <CardDescription className="gap-y-1">
              <Skeleton className="w-full h-[16px] rounded-full mt-1" />
              <Skeleton className="w-[98%] h-[16px] rounded-full mt-1" />
              <Skeleton className="w-[93%] h-[16px] rounded-full mt-1" />
              <Skeleton className="w-[50%] h-[16px] rounded-full mt-1" />
            </CardDescription>
          </div>
          <div>
            <div className="grid grid-flow-col justify-between items-end flex-wrap w-full ">
              <div className="flex flex-wrap gap-2">
                <Skeleton className="w-[40px] h-[22px] rounded-full" />
                <Skeleton className="w-[55px] h-[22px] rounded-full" />
              </div>
              <div className="invert">
                <Skeleton className="w-[50px] h-[22px] rounded-full" />
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      <Card className="max-w-md max-h-[30rem] rounded-xl">
        <CardHeader className="space-y-2 p-4 justify-between h-full">
          <div className="space-y-4">
            <CardTitle className="grid auto-cols-min grid-cols-1 grid-flow-col justify-between items-center">
              <Skeleton className="w-[130px] h-[24px] rounded-full" />
              <Skeleton className="w-[20px] h-[20px] rounded-[5px]" />
            </CardTitle>
            <div>
              <div className="w-full relative aspect-video rounded-xl hover:opacity-90 transition-opacity">
                <Skeleton className="w-full h-full rounded-xl" />
              </div>
            </div>
            <CardDescription className="gap-y-1">
              <Skeleton className="w-full h-[16px] rounded-full mt-1" />
              <Skeleton className="w-full h-[16px] rounded-full mt-1" />
              <Skeleton className="w-[96%] h-[16px] rounded-full mt-1" />
              <Skeleton className="w-[20%] h-[16px] rounded-full mt-1" />
            </CardDescription>
          </div>
          <div>
            <div className="grid grid-flow-col justify-between items-end flex-wrap w-full ">
              <div className="flex flex-wrap gap-2">
                <Skeleton className="w-[30px] h-[22px] rounded-full" />
                <Skeleton className="w-[45px] h-[22px] rounded-full" />
              </div>
              <div className="invert">
                <Skeleton className="w-[65px] h-[22px] rounded-full" />
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      <Card className="max-w-md max-h-[30rem] rounded-xl">
        <CardHeader className="space-y-2 p-4 justify-between h-full">
          <div className="space-y-4">
            <CardTitle className="grid auto-cols-min grid-cols-1 grid-flow-col justify-between items-center">
              <Skeleton className="w-[110px] h-[24px] rounded-full" />
              <Skeleton className="w-[20px] h-[20px] rounded-[5px]" />
            </CardTitle>
            <div>
              <div className="w-full relative aspect-video rounded-xl hover:opacity-90 transition-opacity">
                <Skeleton className="w-full h-full rounded-xl" />
              </div>
            </div>
            <CardDescription className="gap-y-1">
              <Skeleton className="w-[96%] h-[16px] rounded-full mt-1" />
              <Skeleton className="w-[90%] h-[16px] rounded-full mt-1" />
              <Skeleton className="w-[98%] h-[16px] rounded-full mt-1" />
              <Skeleton className="w-full h-[16px] rounded-full mt-1" />
            </CardDescription>
          </div>
          <div>
            <div className="grid grid-flow-col justify-between items-end flex-wrap w-full ">
              <div className="flex flex-wrap gap-2">
                <Skeleton className="w-[40px] h-[22px] rounded-full" />
                <Skeleton className="w-[40px] h-[22px] rounded-full" />
              </div>
              <div className="invert">
                <Skeleton className="w-[55px] h-[22px] rounded-full" />
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      <Card className="max-w-md max-h-[30rem] rounded-xl">
        <CardHeader className="space-y-2 p-4 justify-between h-full">
          <div className="space-y-4">
            <CardTitle className="grid auto-cols-min grid-cols-1 grid-flow-col justify-between items-center">
              <Skeleton className="w-[60px] h-[24px] rounded-full" />
              <Skeleton className="w-[20px] h-[20px] rounded-[5px]" />
            </CardTitle>
            <div>
              <div className="w-full relative aspect-video rounded-xl hover:opacity-90 transition-opacity">
                <Skeleton className="w-full h-full rounded-xl" />
              </div>
            </div>
            <CardDescription className="gap-y-1">
              <Skeleton className="w-full h-[16px] rounded-full mt-1" />
              <Skeleton className="w-[90%] h-[16px] rounded-full mt-1" />
              <Skeleton className="w-[98%] h-[16px] rounded-full mt-1" />
              <Skeleton className="w-full h-[16px] rounded-full mt-1" />
            </CardDescription>
          </div>
          <div>
            <div className="grid grid-flow-col justify-between items-end flex-wrap w-full ">
              <div className="flex flex-wrap gap-2">
                <Skeleton className="w-[40px] h-[22px] rounded-full" />
                <Skeleton className="w-[39px] h-[22px] rounded-full" />
              </div>
              <div className="invert">
                <Skeleton className="w-[45px] h-[22px] rounded-full" />
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      <Card className="max-w-md max-h-[30rem] rounded-xl">
        <CardHeader className="space-y-2 p-4 justify-between h-full">
          <div className="space-y-4">
            <CardTitle className="grid auto-cols-min grid-cols-1 grid-flow-col justify-between items-center">
              <Skeleton className="w-[110px] h-[24px] rounded-full" />
              <Skeleton className="w-[20px] h-[20px] rounded-[5px]" />
            </CardTitle>
            <div>
              <div className="w-full relative aspect-video rounded-xl hover:opacity-90 transition-opacity">
                <Skeleton className="w-full h-full rounded-xl" />
              </div>
            </div>
            <CardDescription className="gap-y-1">
              <Skeleton className="w-full h-[16px] rounded-full mt-1" />
              <Skeleton className="w-full h-[16px] rounded-full mt-1" />
              <Skeleton className="w-full h-[16px] rounded-full mt-1" />
              <Skeleton className="w-[65%] h-[16px] rounded-full mt-1" />
            </CardDescription>
          </div>
          <div>
            <div className="grid grid-flow-col justify-between items-end flex-wrap w-full ">
              <div className="flex flex-wrap gap-2">
                <Skeleton className="w-[40px] h-[22px] rounded-full" />
                <Skeleton className="w-[52px] h-[22px] rounded-full" />
              </div>
              <div className="invert">
                <Skeleton className="w-[55px] h-[22px] rounded-full" />
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>
    </>
  );
}
