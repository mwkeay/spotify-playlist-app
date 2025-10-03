import * as z from "zod";

export default function zodSchemaToSpotifyFields(schema: z.ZodObject): string {
    return Object.entries(schema.shape)
        .map(([key, value]) => value instanceof z.ZodObject
            ? `${key}(${zodSchemaToSpotifyFields(value)})`
            : key
        )
        .join(",");
}
