import { groq } from "next-sanity";

export const categoriesQuery = groq`*[_type == "category"] {
    _id,
    name,
    "slug": slug.current,
    description,
    icon {
      "image": asset->url,
      alt,
    },
  } | order(name asc)`;
