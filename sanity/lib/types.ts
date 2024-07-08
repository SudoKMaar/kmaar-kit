export type CategoriesType = {
  key?: string;
  _id?: string;
  name: string;
  slug: string;
  categoryCount?: number;
  description: string;
  icon: {
    image: string;
    alt: string;
  };
};

export type ResourcesType = {
  _id: string;
  _createdAt: string;
  name: string;
  slug: string;
  description: string;
  category: string[];
  url: string;
  pricing: "Free" | "Paid" | "Free Plan Available";
  keywords: string[];
  image: {
    image: string;
    alt: string;
  };
};

export type ResourceCardType = {
  name: string;
  slug: string;
  description: string;
  category: CategoriesType[];
  url: string;
  pricing: "Free" | "Paid" | "Free Plan Available";
  image: { image: string; alt: string };
};

export type CategoryNameType = {
  name: string;
};
