import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { ResourceRequestForm } from "@/components/resource-request-form";
import { CategoriesType } from "@/sanity/lib/types";

interface AddResourceProps {
  categories: CategoriesType[];
}

export default function AddResource({ categories }: AddResourceProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          id="add-resource"
          aria-label="Contribute Resource"
          variant="default"
          className="flex items-center h-12 gap-2 my-auto rounded-xl"
        >
          <PlusCircle /> Contribute Resource
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-md mx-auto overflow-scroll text-white bg-black rounded-none shadow-input md:rounded-xl">
        <DialogHeader className="text-center">
          <h2>
            <DialogTitle>Contribute a Resource</DialogTitle>
          </h2>
          <h3>
            <DialogDescription>
              Suggest a resource for inclusion in our kit. Each submission will
              undergo a thorough review to ensure it aligns with our quality
              standards.
            </DialogDescription>
          </h3>
        </DialogHeader>
        <Separator className="mb-[1px]" />
        <ResourceRequestForm className="px-4" categories={categories} />
        <DialogFooter className="pt-0 md:hidden">
          <DialogClose asChild>
            <Button className="bg-gradient-to-br relative group/btn from-background to-background block bg-background w-full text-white h-10 font-medium shadow-[0px_1px_0px_0px_var(--background)_inset,0px_-1px_0px_0px_var(--background)_inset] rounded-xl">
              Cancel <BottomGradient />
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 block w-full h-px transition duration-500 opacity-0 group-hover/btn:opacity-100 -bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="absolute block w-1/2 h-px mx-auto transition duration-500 opacity-0 group-hover/btn:opacity-100 blur-sm -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};
