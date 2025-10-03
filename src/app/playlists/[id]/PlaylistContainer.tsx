import fetchPlaylist from "@/app/actions/fetchPlaylist";
import PlaylistMeta from "./PlaylistMeta";
import { Suspense } from "react";
import fetchPlaylistTracks from "@/app/actions/fetchPlaylistTracks";
import PlaylistTable from "./PlaylistTable";

export default async function PlaylistContainer({
    params,
}: Readonly<{
    params: Promise<{ id: string }>,
}>
) {
    const { id } = await params;
    const playlistPromise = fetchPlaylist(id, "name,description,images");
    const playlistTracksPromise = fetchPlaylistTracks(id, "total,items(track(name,duration_ms,artists(name),album(name)))");
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
