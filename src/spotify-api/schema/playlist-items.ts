import * as z from "zod";

const PlaylistTrackSchema = z.object({
    album: z.object({
        name: z.string(),
        images: z.array(z.object({
            url: z.string(),
            height: z.int(),
            width: z.int(),
        })),
    }),
    artists: z.array(z.object({
        name: z.string(),
    })),
    duration_ms: z.int(),
    name: z.string(),
    type: z.literal("track"),
})

const PlaylistEpisodeSchema = z.object({
    duration_ms: z.int(),
    images: z.array(z.object({
        url: z.string(),
        height: z.int(),
        width: z.int(),
    })),
    name: z.string(),
    show: z.object({
        name: z.string(),
    }),
    type: z.literal("episode"),
})

const PlaylistItemsSchema = z.object({
    items: z.array(z.object({
        track: z.union([
            PlaylistTrackSchema,
            PlaylistEpisodeSchema
        ])
    })),
    total: z.int(),
});

export const PLAYLIST_ITEMS_FIELDS = "items(track(album(name,images),artists(name),duration_ms,images,name,show(name),type),total";

export default PlaylistItemsSchema;
