import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { NerdIcon } from "@/components/svg/nerd";
import { nerdAlertVariants } from "@/components/ui/motion";
import { useBlindCtx } from "@/lib/blind-context-provider";

const nerdAdvice = [
  "Go home!!....",
  "Hmmm...Touch grass?",
  "Uhhh, what are you doing?",
  "That's it you're outta here.....",
  "Did you know......that you could do better? \u{1F913}",
];

const NerdAlert = () => {
  const { setIsBlind, nerdTips } = useBlindCtx();

  return (
    <motion.div
      variants={nerdAlertVariants}
      className="flex gap-2 sm:gap-[7.4375rem] items-center justify-between bg-zinc-800 py-[.625rem] pr-[0.5625rem] pl-[1.1875rem] rounded-xl border border-[rgba(31,31,31,1)] mx-2"
    >
      <div className="flex gap-3 text-[rgba(156,156,156,1)] grow-0 items-center">
        <div>
          <NerdIcon />
        </div>
        <p>{nerdTips}</p>
      </div>
      <Button
        onClick={() => {
          if (nerdTips === nerdAdvice[3])
            window.open(new URL(`${process.env.NEXT_PUBLIC_URL}`));
          setIsBlind(false);
        }}
        variant="outline"
        className="text-zinc-500 font-normal text-sm px-[1.375rem] py-[0.625rem] bg-[rgba(20,20,20,1)] rounded-[0.625rem] border border-[rgba(37,37,37,1)] hover:bg-[rgba(26,26,26,1)] transition active:scale-95"
      >
        Use Lens
      </Button>
    </motion.div>
  );
};

export default NerdAlert;
