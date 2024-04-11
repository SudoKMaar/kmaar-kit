import "server-only";
import {
  createClient,
  type ClientConfig,
  type QueryParams,
} from "@sanity/client";

import {
  apiVersion,
  dataset,
  projectId,
  token,
  revalidateSecret,
} from "@/sanity/env";

const config: ClientConfig = {
  projectId,
  dataset,
  apiVersion,
  useCdn: revalidateSecret ? false : true,
  token,
};

export const client = createClient(config);

export async function sanityFetch<QueryResponse>({
  query,
  qParams = {},
  tags,
}: {
  query: string;
  qParams?: QueryParams;
  tags: string[];
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, qParams, {
    // disable cache when hook secret is undefined for development only.
    cache: revalidateSecret ? "force-cache" : "no-cache",
    next: { tags },
  });
}
