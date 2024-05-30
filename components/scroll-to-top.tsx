"use client";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const ScrollToTop = () => {
  const [visibleToTop, setVisibleToTop] = useState(false);

  const toggleVisibleToTop = () => {
    const scrolled = document.getElementById("mainContent")?.scrollTop || 0;
    if (scrolled > 300) {
      setVisibleToTop(true);
    } else if (scrolled <= 300) {
      setVisibleToTop(false);
    }
  };
  useEffect(() => {
    document
      .getElementById("mainContent")
      ?.addEventListener("scroll", toggleVisibleToTop);
    return () => {
      document
        .getElementById("mainContent")
        ?.removeEventListener("scroll", toggleVisibleToTop);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="toTop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Button
          size="icon"
          variant="default"
          onClick={() => {
            document
              .getElementById("mainContent")
              ?.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className={`bg-primary/50 rounded-full bottom-2 fixed right-3 z-50 opacity-90 hover:opacity-100 transition-opacity duration-300 ${
            !visibleToTop && "opacity-0 pointer-events-none "
          }`}
        >
          <ArrowUp className="h-8 w-8" />
        </Button>
      </motion.div>
    </AnimatePresence>
  );
};
