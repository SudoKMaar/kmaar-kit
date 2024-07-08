"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Lens from "@/components/lens";
import NerdAlert from "@/components/nerd-alert";
import { Button } from "@/components/ui/button";
import { headlineVariants } from "@/components/ui/motion";
import { useBlindCtx } from "@/lib/blind-context-provider";

const nerdAdvice = [
  "Go home!!....",
  "Hmmm...Touch grass?",
  "Uhhh, what are you doing?",
  "That's it you're outta here.....",
  "Did you know......that you could do better? \u{1F913}",
];

export default function NotFound() {
  const { isBlind } = useBlindCtx();
  const { setIsBlind, setNerdTips } = useBlindCtx();
  const handleNerd = () => {
    const rndNo = Math.floor(Math.random() * 5);
    setNerdTips(nerdAdvice[rndNo]);
    setIsBlind(true);
  };
  return (
    <motion.main
      animate={isBlind ? "isBlind" : "isNotBlind"}
      className="grid w-full h-full"
    >
      <Lens>
        <NerdAlert />
      </Lens>
      <div className="col-span-full row-span-full flex flex-col h-full">
        <section className="text-small grow grid">
          <section className="col-span-full row-span-full text-[16rem] sm:text-[24rem] md:text-[32rem] lg:text-[34rem] xl:text-[38rem] leading-[0] flex items-center justify-center overflow-hidden">
            <p className="font-black text-[rgba(24,24,24,1)]">404</p>
          </section>
          <article className="mx-2 col-span-full row-span-full flex items-center justify-center text-muted-foreground">
            <span className="flex flex-col gap-[2.75rem]">
              <div className="text-center">
                <motion.h1
                  variants={headlineVariants}
                  className="text-[4rem] text-[rgba(156,156,156,1)] leading-[1.5]"
                >
                  You Got Lost!
                </motion.h1>
                <p className="text-sm font-bold">
                  Always keep your lens in hand... Mind your lenses, sharpen
                  your senses.
                </p>
              </div>
              <div className="flex flex-col items-center gap-[.5rem]">
                <span className="text-xs">Be on your way now.</span>
                <Link href="/">
                  <Button variant="default" className="px-24 rounded-xl">
                    Get Found
                  </Button>
                </Link>
                <Button
                  onClick={handleNerd}
                  variant="outline"
                  className="text-sm text-muted-foreground px-8"
                >
                  Remove Lens
                </Button>
              </div>
            </span>
          </article>
        </section>
      </div>
    </motion.main>
  );
}
