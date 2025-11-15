import * as z from "zod";
import { SpotifyImagesSchema } from "./spotify-images";

export const SpotifyPlaylistSchema = z.object({
    description: z.string(),
    images: SpotifyImagesSchema,
    name: z.string(),
});

export type SpotifyPlaylistData = z.infer<typeof SpotifyPlaylistSchema>;
