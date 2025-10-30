import * as z from "zod";

const PlaylistSchema = z.object({
    description: z.string(),
    images: z.array(z.object({
        url: z.object(),
        height: z.int(),
        width: z.int(),
    })),
    name: z.string(),
});

export const PLAYLIST_FIELDS = "description,images,name";

export default PlaylistSchema;
