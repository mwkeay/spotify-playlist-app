import * as z from "zod";
import zodSchemaToSpotifyFields from "./zodSchemaToSpotifyFields";

const PlaylistSchema = z.object({
    description: z.string(),
    images: z.array(z.object({
        url: z.object(),
        height: z.int(),
        width: z.int(),
    })),
    name: z.string(),
});

export const PLAYLIST_FIELDS = zodSchemaToSpotifyFields(PlaylistSchema);

export default PlaylistSchema;
