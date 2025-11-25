import * as z from "zod";
import { SpotifyImagesSchema } from "./spotify-images";

const SpotifyPlaylistTrackSchema = z.object({
    album: z.object({
        name: z.string(),
        images: SpotifyImagesSchema,
    }),
    artists: z.array(z.object({
        name: z.string(),
    })),
    duration_ms: z.int(),
    name: z.string(),
    type: z.literal("track"),
})

const SpotifyPlaylistEpisodeSchema = z.object({
    duration_ms: z.int(),
    images: SpotifyImagesSchema,
    name: z.string(),
    show: z.object({
        name: z.string(),
    }),
    type: z.literal("episode"),
})

export const SpotifyPlaylistItemSchema = z.object({
    track: z.discriminatedUnion("type", [
        SpotifyPlaylistTrackSchema,
        SpotifyPlaylistEpisodeSchema
    ])
});

export type SpotifyPlaylistItemData = z.infer<typeof SpotifyPlaylistItemSchema>;

export const SpotifyPlaylistItemsSchema = z.object({
    items: z.array(SpotifyPlaylistItemSchema),
    total: z.int(),
});

export type SpotifyPlaylistItemsData = z.infer<typeof SpotifyPlaylistItemsSchema>;
