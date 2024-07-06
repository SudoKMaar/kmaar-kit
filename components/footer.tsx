import Link from "next/link";
import Image from "next/image";
import { MoveUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FeedbackFormButton } from "@/components/feedback-button";
import { KMaarKitLogoFull } from "@/components/svg/kmaar-kit-logo-full";

interface Link {
  id: number;
  href: string;
  label: string;
}

const links: Link[] = [
  {
    id: 1,
    href: "/about",
    label: "About",
  },
  {
    id: 2,
    href: "/feedback",
    label: "Submit feedback",
  },
  {
    id: 3,
    href: "https://github.com/SudoKMaar/kmaar-kit",
    label: "Contribute on GitHub",
  },
  {
    id: 4,
    href: "mailto:abhi2004shek.kumar@gmail.com",
    label: "Contact",
  },
  {
    id: 5,
    href: "/privacy-policy",
    label: "Privacy Policy",
  },
  {
    id: 6,
    href: "/legal",
    label: "Legal",
  },
];

export default function Footer() {
  return (
    <footer className="items-center justify-center w-full mx-auto mt-8 mb-4 sm:mb-0">
      {/* <div className="pb-6 border-b border-b-zinc-400">
        <span className="sr-only">KMaar Kit</span>
        <KMaarKitLogoFull />
      </div> */}
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-1 h-[1px] w-full" />
      <div className="flex flex-col items-start justify-between pt-1 pb-2 text-white gap-y-4 gap-x-2 md:flex-row">
        <div className="flex flex-col text-base gap-y-0 b-8">
          <div className="select-none">
            <Link
              href={"/"}
              className="flex h-12 gap-2 text-2xl font-medium tracking-tight"
            >
              <Image
                alt="KMaar Kit"
                width={163}
                height={48}
                src="/kmaar-kit.png"
              />
            </Link>
          </div>
          <div className="flex w-full md:w-56 gap-x-1 xl:w-96 ">
            <span className="w-fit flex-nowrap whitespace-nowrap">
              &copy; {new Date().getFullYear()}
            </span>
            <Link
              className="relative w-full overflow-y-hidden hover:underline hover:underline-offset-2 decoration-[#0093b4] group h-fit"
              target="_blank"
              rel="noopener noreferrer"
              href="https://kmaar.vercel.app/"
            >
              <span className="font-bold tracking-wider hover:underline hover:underline-offset-2 text-gradient">
                Abhishek Kumar
              </span>
            </Link>
          </div>
          <div className="flex flex-col w-full md:w-56 gap-x-1 xl:w-96 ">
            <div className="w-fit flex-nowrap whitespace-nowrap">
              All rights reserved | Powered by
            </div>
            <Link
              className="relative w-full overflow-y-hidden hover:underline hover:underline-offset-2 decoration-[#0093b4] group h-fit"
              target="_blank"
              rel="noopener noreferrer"
              href="https://kmstudio.vercel.app/"
            >
              <span className="font-bold tracking-wider hover:underline hover:underline-offset-2 text-gradient">
                KMaar Miscellaneous Studio
              </span>
            </Link>
          </div>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-y-3 gap-y-0 md:pt-2 xl:pt-4 text-gradient">
          {links.map((link) => (
            <li key={link.id} className="flex text-base w-fit group">
              {link.id === 2 ? (
                <FeedbackFormButton mode="modal" asChild>
                  <Button variant="link" className="p-0 text-base">
                    {link.label}
                    <span className="relative overflow-hidden h-fit w-fit">
                      <MoveUpRight className="group-hover:-translate-y-5 group-hover:translate-x-5 duration-500 transition-transform ease-in-out-circ fill-[#0093b4] stroke-[1] w-[75%] h-[75%]" />
                      <MoveUpRight className="absolute top-0 group-hover:translate-x-0 duration-500 group-hover:translate-y-0 transition-all ease-in-out-circ translate-y-5 -translate-x-5 fill-[#00b8e2] stroke-[1] w-[80%] h-[80%]" />
                    </span>
                  </Button>
                </FeedbackFormButton>
              ) : link.id === 3 || link.id === 4 ? (
                <Link
                  className="group"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={link.href}
                >
                  <Button variant="link" className="p-0 text-base">
                    {link.label}
                    <span className="relative overflow-hidden h-fit w-fit">
                      <MoveUpRight className="group-hover:-translate-y-5 group-hover:translate-x-5 duration-500 transition-transform ease-in-out-circ fill-[#0093b4] stroke-[1] w-[75%] h-[75%]" />
                      <MoveUpRight className="absolute top-0 group-hover:translate-x-0 duration-500 group-hover:translate-y-0 transition-all ease-in-out-circ translate-y-5 -translate-x-5 fill-[#00b8e2] stroke-[1] w-[80%] h-[80%]" />
                    </span>
                  </Button>
                </Link>
              ) : (
                <Link className="group" href={link.href}>
                  <Button variant="link" className="p-0 text-base">
                    {link.label}
                    <span className="relative overflow-hidden h-fit w-fit">
                      <MoveUpRight className="group-hover:-translate-y-5 group-hover:translate-x-5 duration-500 transition-transform ease-in-out-circ fill-[#0093b4] stroke-[1] w-[75%] h-[75%]" />
                      <MoveUpRight className="absolute top-0 group-hover:translate-x-0 duration-500 group-hover:translate-y-0 transition-all ease-in-out-circ translate-y-5 -translate-x-5 fill-[#00b8e2] stroke-[1] w-[80%] h-[80%]" />
                    </span>
                  </Button>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
