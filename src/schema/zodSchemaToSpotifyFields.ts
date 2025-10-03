import * as z from "zod";

export default function zodSchemaToSpotifyFields(schema: z.ZodObject): string {
    return Object.entries(schema.shape)
        .map(([key, value]) => {
            if (value instanceof z.ZodObject) {
                return `${key}(${zodSchemaToSpotifyFields(value)})`;
            }
            else if (value instanceof z.ZodArray && value.element instanceof z.ZodObject) {
                return `${key}(${zodSchemaToSpotifyFields(value.element)})`;
            }
            else if (value instanceof z.ZodUnion) {
                return `${key}(${
                    value.def.options
                        .filter(opt => opt instanceof z.ZodObject)
                        .map(opt => zodSchemaToSpotifyFields(opt))
                        .join(",")
                })`
            }
            else {
                return key
            }
        })
        .join(",");
}

