import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Legal Info",
  description:
    "Welcome to KMaar Kit, your premier destination for a diverse range of resources. I am frustrated developer committed to providing you with the highest quality materials to help you achieve your goals.",
};

export default function AboutPage() {
  return (
    <div className="my-20 flex-col flex lg:grid lg:grid-cols-12 sm:mx-4 lg:mx-0">
      <div className="text-muted-foreground col-span-4">
        <h1 className="mb-8 lg:pl-8 tracking-tighter text-6xl">
          Legal <span className="text-gradient">Info</span>
        </h1>
      </div>
      <div className="col-start-6 col-span-5 text-2xl leading-[130%] text-muted-foreground font-medium space-y-7">
        <p className="space-y-4 flex flex-col">
          <span>
            Welcome to the KMaar Kit legal information page! As stewards of this
            resource library, we want to ensure transparency and compliance with
            legal requirements. Below, you’ll find essential information related
            to our platform:
          </span>
          <span>
            <span className="text-gradient">Terms of Use:</span> By accessing
            and using the “KMaar Kit,” you agree to abide by our terms of use.
            These terms outline your rights and responsibilities while
            interacting with our content.
          </span>
          <span>
            <span className="text-gradient"> Copyright and Licensing:</span> The
            materials within “KMaar Kit” are not subject to copyright
            protection. All trademarks, logos, brand and company names are the
            property of their respective owners. If you believe any content
            infringes upon your rights, contact us promptly.
          </span>
          <span>
            <span className="text-gradient">Disclaimer:</span> While we strive
            for accuracy, the information provided here is for general purposes
            only.
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
