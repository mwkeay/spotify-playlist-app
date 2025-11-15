import PlaylistMeta from "./PlaylistMeta";
import { Suspense } from "react";
import PlaylistTable from "./PlaylistTable";
import fetchSpotifyPlaylistItems from "@/spotify-api/requests/fetchSpotifyPlaylistItems";
import fetchSpotifyPlaylist from "@/spotify-api/requests/fetchSpotifyPlaylist";

export default async function PlaylistContainer({
    params,
}: Readonly<{
    params: Promise<{ id: string }>,
}>
) {
    const { id } = await params;
    const playlistPromise = fetchSpotifyPlaylist(id, "description,images,name");
    const playlistTracksPromise = fetchSpotifyPlaylistItems(id);
	return (
        <main className="h-screen flex flex-col items-center justify-center gap-8">
            <p className="font-mono">
                <span className="font-mono bg-card-background px-1 rounded">
                    playlist_id
                </span>
                {`: ${id}`}
            </p>
            <Suspense fallback={<p>Loading...</p>}>
                <PlaylistMeta playlistPromise={playlistPromise} />
            </Suspense>
            <PlaylistTable playlistTracksPromise={playlistTracksPromise} />
        </main>
	);
}
