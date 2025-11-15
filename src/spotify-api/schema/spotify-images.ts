import * as z from "zod";

export const SpotifyImagesSchema = z.array(z.object({
    url: z.string(),
    height: z.int().nullable(),
    width: z.int().nullable(),
}));

export type SpotifyImagesData = z.infer<typeof SpotifyImagesSchema>;
