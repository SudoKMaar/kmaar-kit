import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
export const metadata: Metadata = {
  title: "About",
  description:
    "Welcome to KMaar Kit, your premier destination for a diverse range of resources. I am frustrated developer committed to providing you with the highest quality materials to help you achieve your goals.",
};

export default function AboutPage() {
  return (
    <div className="my-20 flex-col flex lg:grid lg:grid-cols-12 sm:mx-4 lg:mx-0">
      <div className="text-muted-foreground col-span-4">
        <h1 className="mb-8 lg:pl-8 tracking-tighter text-6xl">
          About <span className="text-gradient">KMaar Kit</span>
        </h1>
      </div>
      <div className="col-start-6 col-span-5 text-2xl leading-[130%] text-muted-foreground font-medium space-y-7">
        <p className="space-y-4 flex flex-col">
          <span>
            I created KMaar Kit to address the frustrations I encountered when I
            started out in development and web design. Hunting for inspiration,
            resources and tools consumed a lot of valuable time that could have
            been better spent honing my skills.
          </span>
          <span>
            At KMaar Kit, we believe in the power of resources to inspire,
            educate, and empower. Our collection is carefully curated and
            constantly updated to ensure you have access to the best tools and
            materials available.
          </span>
          <span>
            I pride myselves on our user-friendly interface, making it easy for
            you to find exactly what you need. Our resources span a wide range
            of categories, ensuring that no matter your interest or field, KMaar
            Kit has something for you.
          </span>
          <span>
            Thank you for choosing KMaar Kit. We look forward to serving you and
            being a part of your journey towards success.
          </span>
        </p>
        <div className="flex items-center gap-x-3">
          <div className="">
            <Image
              width={50}
              height={50}
              className="h-10 w-10 rounded-full"
              src="/KMaar.png"
              alt="Profile Headshot of Abhishek KMaar Kumar"
            />
          </div>
          <div className="text-white text-base xl:text-xl 2xl:text-2xl font-medium flex flex-col">
            <p className="leading-tight">Abhishek Kumar</p>
            <span className="">
              <Link
                className="leading-tight text-muted-foreground font-normal cursor-pointer hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                href="https://kmaar.vercel.app/"
              >
                KMaar.vercel.app
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
