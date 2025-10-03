import * as z from "zod";

// MUST stay persistent with defined fields in API requests
const PlaylistSchema = z.object({
    description: z.string(),
    images: z.array(z.object({
        url: z.object(),
        height: z.int(),
        width: z.int(),
    })),
    name: z.string(),
});

export default PlaylistSchema;
