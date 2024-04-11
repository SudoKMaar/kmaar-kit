/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

import Studio from "./studio";
export const dynamic = "force-static";
export { viewport } from "next-sanity/studio/viewport";
import { metadata as studioMetadata } from "next-sanity/studio/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...studioMetadata,
  title: "Studio",
};

export default function StudioPage() {
  return <Studio />;
}
