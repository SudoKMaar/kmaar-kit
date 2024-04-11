import { defineField, defineType } from "sanity";

export default defineType({
  name: "resource",
  title: "Resource",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "Enter the name of the resource",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "Enter a short description of the resource",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "array",
      description: "Choose two categegories",
      validation: (rule) =>
        rule
          .required()
          .min(1)
          .max(2)
          .error("You must select between 1 and 2 categories."),
      of: [{ type: "string" }],
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
      description: "Enter the URL of the resource",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "pricing",
      title: "Pricing",
      type: "string",
      description: "Choose the valid pricing of the resource",
      validation: (rule) => rule.required(),
      options: { list: ["Free", "Paid", "Free Plan Available"] },
    }),
    defineField({
      name: "keywords",
      title: "Keywords",
      type: "array",
      description: "Enter relevant keywords regarding the resource",
      validation: (rule) => rule.required(),
      of: [{ type: "string" }],
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      description: "Upload an image of the resource",
      validation: (rule) => rule.required(),
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          description: "Enter alternate title for the image",
          type: "string",
        },
      ],
    }),
  ],
});
