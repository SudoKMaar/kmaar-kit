import { groq } from "next-sanity";

export const categoriesQuery = groq`*[_type == "category"] {
    _id,
    name,
    "slug": slug.current,
    description,
    "categoryCount": count(*[_type == "resource" && references("category", ^._id)]),
    icon {
      "image": asset->url,
      alt,
    },
  } | order(name asc)`;

// export async function fetchResourcesQuery(order: "asc" | "desc" | "recent") {
//   let orderClause;
//   switch (order) {
//     case "asc":
//       orderClause = "name asc";
//       break;
//     case "desc":
//       orderClause = "name desc";
//       break;
//     case "recent":
//       orderClause = "_createdAt desc";
//       break;
//     default:
//       throw new Error(`Invalid order: ${order}`);
//   }
//   const ResourcesQuery = groq`*[_type == "resource"]{
//       _id,
//       _createdAt,
//       name,
//       "slug": slug.current,
//       description,
//       category,
//       url,
//       pricing,
//       keywords,
//       image {
//         "image": asset->url,
//         alt,
//       },
//     } | order(${orderClause})`;
// }
