import * as z from "zod";
import zodSchemaToSpotifyFields from "./zodSchemaToSpotifyFields";

const PlaylistItemsSchema = z.object({
    album: z.object({
        name: z.string(),
    }),
    items: z.array(z.object({
        track: z.object({
            album: z.object({
                name: z.string(),
                images: z.array(z.object({
                    url: z.object(),
                    height: z.int(),
                    width: z.int(),
                })),
            }),
            artists: z.array(z.object({
                name: z.string(),
            })),
            duration_ms: z.int(),
            name: z.string(),
        }),
    })),
    total: z.int(),
});

export const PLAYLIST_ITEMS_FIELDS = zodSchemaToSpotifyFields(PlaylistItemsSchema);

export default PlaylistItemsSchema;
