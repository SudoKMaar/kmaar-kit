import Image from "next/image";
import { ArrowRight } from "lucide-react";
import TextShimmer from "@/components/ui/animated-shiny-text";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="items-center justify-between w-full mx-auto">
      <div className="h-fit w-full bg-background bg-grid-white/[0.08] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <section
          id="hero"
          className="flex flex-col items-center justify-center py-20 text-center select-none"
        >
          <div className="flex flex-col items-center justify-center">
            <div
              className={cn(
                "group rounded-full border text-base text-white transition-all ease-in hover:cursor-pointer border-white/5 bg-neutral-900 hover:bg-neutral-800"
              )}
            >
              <TextShimmer className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:duration-300 hover:text-neutral-400">
                <span>✨ Your Ultimate Developer Resource Library</span>
                <ArrowRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </TextShimmer>
            </div>
            <h1 className="pt-2 pb-4 text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-500 ">
              KMaar Kit
            </h1>
          </div>
          <p className="text-muted-foreground max-w-prose">
            Unlock a world of creativity and productivity with our comprehensive
            collection of tools, assets, and guides tailored for developers and
            designers alike.
          </p>
        </section>
      </div>
      <div className="w-full h-screen">a</div>
    </main>
  );
}
