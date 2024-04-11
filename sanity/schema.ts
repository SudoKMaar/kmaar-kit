import { type SchemaTypeDefinition } from "sanity";

import category from "./schemaTypes/category";
import resource from "./schemaTypes/resources";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [resource, category],
};
