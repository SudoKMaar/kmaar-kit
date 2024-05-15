"use client";
import * as z from "zod";
import axios from "axios";
import Link from "next/link";
import { toast } from "sonner";
import { useState } from "react";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const feedbackFormSchema = z.object({
  name: z
    .string({ required_error: "Your Name is required" })
    .min(2, {
      message: "Name must be at least 2 characters",
    })
    .max(50, {
      message: "ame cannot be more than 50 characters",
    }),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Please enter a valid email address" }),
  feedbackType: z.enum([
    "Bug Report",
    "Feature Request",
    "General Feedback",
    "User Experience",
    "Content",
    "Support",
    "Testimonial",
    "Other",
    "",
  ]),
  subject: z
    .string({ required_error: "Subject is required" })
    .min(2, { message: "Subject must be at least 2 characters" })
    .max(100, { message: "Subject cannot be more than 100 characters" }),
  description: z
    .string({ required_error: "Description is required" })
    .min(10, { message: "Description must be at least 10 characters" })
    .max(500, { message: "Description cannot be more than 500 characters" }),
  rating: z.enum(["★★★★★", "★★★★☆", "★★★☆☆", "★★☆☆☆", "★☆☆☆☆"]),
  screenshots: z.string().url().optional(),
});

export const FeedbackForm = () => {
  const [submitting, setSubmitting] = useState<boolean>(false);

  const form = useForm<z.infer<typeof feedbackFormSchema>>({
    resolver: zodResolver(feedbackFormSchema),
    defaultValues: {
      name: "",
      email: "",
      feedbackType: "",
      subject: "",
      description: "",
      rating: "★★★★★",
      screenshots: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof feedbackFormSchema>) => {
    setSubmitting(true);
    const {
      name,
      email,
      feedbackType,
      subject,
      description,
      rating,
      screenshots,
    } = values;
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/api/feedback-send`,
        {
          name: name,
          email: email,
          feedbackType: feedbackType,
          subject: subject,
          description: description,
          rating: rating,
          screenshots: screenshots,
        }
      );

      if (response.status === 200) {
        toast.success("Feedback submitted!");
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
    <>
      <DialogHeader className="text-center">
        <h2>
          <DialogTitle>We Value Your Feedback</DialogTitle>
        </h2>
        <h3>
          <DialogDescription>
            Please share your thoughts about our website, services, or any
            aspect you would like to highlight.
          </DialogDescription>
        </h3>
      </DialogHeader>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={cn("grid items-start gap-y-2 ")}
        >
          <div className="grid grid-cols-2 gap-2">
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
                      <Input placeholder="Your Name" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </LabelInputContainer>

            <LabelInputContainer>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <div>
                      <FormLabel>Email</FormLabel>
                    </div>
                    <FormControl>
                      <Input placeholder="Your email address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </LabelInputContainer>
          </div>

          <LabelInputContainer>
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <div>
                    <FormLabel>Subject</FormLabel>
                  </div>
                  <FormControl>
                    <Input placeholder="Subject for your feedback" {...field} />
                  </FormControl>
                  <FormMessage />
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
                    Describe the feedback  in detail
                  </FormDescription> */}
                  </div>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Describe your feedback in detail"
                    />
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
                name="feedbackType"
                render={({ field }) => (
                  <FormItem>
                    <div>
                      <FormLabel>Feedback Type</FormLabel>
                    </div>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a feedback type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Feedback Type</SelectLabel>
                          {[
                            "Bug Report",
                            "Feature Request",
                            "General Feedback",
                            "User Experience",
                            "Content",
                            "Support",
                            "Testimonial",
                            "Other",
                          ].map((feedbackOption) => (
                            <SelectItem
                              key={feedbackOption}
                              value={feedbackOption}
                            >
                              {feedbackOption}
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
                name="rating"
                render={({ field }) => (
                  <FormItem>
                    <div>
                      <FormLabel>Rating</FormLabel>
                    </div>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Rating" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Rating</SelectLabel>
                          {["★★★★★", "★★★★☆", "★★★☆☆", "★★☆☆☆", "★☆☆☆☆"].map(
                            (ratingStar, index) => (
                              <SelectItem
                                key={ratingStar}
                                value={ratingStar}
                                aria-label={`${5 - index} out of 5`}
                              >
                                {ratingStar}
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
          </div>

          <LabelInputContainer>
            <FormField
              control={form.control}
              name="screenshots"
              render={({ field }) => (
                <FormItem>
                  <div>
                    <FormLabel>Screenshot</FormLabel>
                  </div>
                  <FormControl>
                    <Input placeholder="Screenshot URL" {...field} />
                  </FormControl>
                  <FormMessage />
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
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-1 h-[1px] w-full" />
      <DialogFooter className="w-full pt-0">
        <Link href="/" className="w-full">
          <Button className="bg-gradient-to-br relative group/btn from-background to-background block bg-background w-full text-white h-10 font-medium shadow-[0px_1px_0px_0px_var(--background)_inset,0px_-1px_0px_0px_var(--background)_inset] rounded-xl">
            Back to Homepage <BottomGradient />
          </Button>
        </Link>
      </DialogFooter>
    </>
  );
};

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
