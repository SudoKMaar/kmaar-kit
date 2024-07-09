"use client";
import { z } from "zod";
import axios from "axios";
import { toast } from "sonner";
import { useState } from "react";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { CategoriesType } from "@/sanity/lib/types";

interface ResouceRequestFormProps {
  categories: CategoriesType[];
  className?: string;
}

const formSchema = z.object({
  name: z
    .string({ required_error: "Resource name is required" })
    .min(2, {
      message: "Resource name must be at least 2 characters",
    })
    .max(50, {
      message: "Resource name cannot be more than 50 characters",
    }),
  description: z
    .string({ required_error: "Description is required" })
    .min(20, {
      message: "Description must be at least 20 characters",
    })
    .max(500, {
      message: "Description cannot be more than 500 characters",
    }),
  category: z.string({ required_error: "Category is required" }).min(2),
  category2: z.string().optional(),
  url: z
    .string({ required_error: "URL is required" })
    .url({ message: "Invalid URL" }),
  pricing: z.string({ required_error: "Pricing is required" }).min(2),
});

export function ResourceRequestForm({
  categories,
  className,
}: ResouceRequestFormProps): React.ReactElement {
  const [submitting, setSubmitting] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      url: "",
      category: "",
      category2: "",
      pricing: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setSubmitting(true);
    const { name, description, url, category, category2, pricing } = values;
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/api/send`,
        {
          name: "Abhishek Kumar",
          resourceName: name,
          resourceDescription: description,
          resourceUrl: url,
          resourceCategory: category,
          resourceCategory2: category2,
          resourcePricing: pricing,
        }
      );

      if (response.status === 200) {
        toast.success("Resource request submitted!");
        form.reset();
      } else {
        toast.error("An error occurred");
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`An error occurred: ${error.message}`);
      } else {
        toast.error("An error occurred");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("grid items-start gap-y-1 ", className)}
      >
        <LabelInputContainer>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <div>
                  <FormLabel>Name</FormLabel>
                </div>
                <FormControl>
                  <Input placeholder="KMaar Kit" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </LabelInputContainer>
        <LabelInputContainer>
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <div>
                  <FormLabel>Description</FormLabel>
                  {/* <FormDescription className="text-muted">
                    Describe the resource in 2-3 sentences
                  </FormDescription> */}
                </div>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="KMaar Kit is a comprehensive developer resource hub offering tutorials and tools to empower your coding and design skills."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </LabelInputContainer>
        <LabelInputContainer>
          <FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <FormItem>
                <div>
                  <FormLabel>URL</FormLabel>
                </div>
                <FormControl>
                  <Input placeholder="https://kmaarkit.vercel.app" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </LabelInputContainer>

        <div className="grid grid-cols-2 gap-2">
          <LabelInputContainer>
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <div>
                    <FormLabel>Primary Category</FormLabel>
                  </div>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="max-h-[250px] overflow-scroll">
                      <SelectGroup>
                        <SelectLabel>Categories</SelectLabel>
                        {categories.map((category) => (
                          <SelectItem
                            key={category.slug}
                            value={category.slug}
                            className="cursor-pointer"
                          >
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <FormField
              control={form.control}
              name="category2"
              render={({ field }) => (
                <FormItem>
                  <div>
                    <FormLabel>Secondary Category</FormLabel>
                  </div>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="max-h-[250px] overflow-scroll">
                      <SelectGroup>
                        <SelectLabel>Categories</SelectLabel>
                        {categories.map((category) => (
                          <SelectItem
                            key={category.slug}
                            value={category.slug}
                            className="cursor-pointer"
                          >
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </LabelInputContainer>
        </div>

        <LabelInputContainer className="mb-1">
          <FormField
            control={form.control}
            name="pricing"
            render={({ field }) => (
              <FormItem>
                <div>
                  <FormLabel>Pricing</FormLabel>
                </div>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select valid pricing" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Pricing</SelectLabel>
                      {["Free", "Paid", "Free Plan Available"].map(
                        (pricingOption) => (
                          <SelectItem
                            key={pricingOption}
                            value={pricingOption}
                            className="cursor-pointer"
                          >
                            {pricingOption}
                          </SelectItem>
                        )
                      )}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
        </LabelInputContainer>

        <Button
          disabled={submitting}
          className="bg-gradient-to-br relative group/btn from-background to-background block bg-background w-full text-white rounded-xl h-10 font-medium shadow-[0px_1px_0px_0px_var(--background)_inset,0px_-1px_0px_0px_var(--background)_inset]"
          type="submit"
        >
          <div className="flex flex-row items-center justify-center text-lg text-center align-middle">
            Submit
            <Send className="w-4 h-4 ml-2" />
          </div>
          <BottomGradient />
        </Button>
      </form>
    </Form>
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

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
