"use client";
import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { FeedbackForm } from "@/components/feedback-form";

interface FeedbackFormProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const FeedbackFormButton = ({
  children,
  mode = "redirect",
  asChild,
}: FeedbackFormProps) => {
  const router = useRouter();

  const onClick = () => {
    router.push("/feedback");
  };

  if (mode === "modal") {
    return (
      <Dialog>
        <DialogTrigger asChild={asChild}>{children}</DialogTrigger>
        <DialogContent className="w-full max-w-md mx-auto overflow-scroll text-white bg-black rounded-none shadow-input md:rounded-xl">
          <FeedbackForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};
