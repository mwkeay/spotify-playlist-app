import fetchPlaylist from "@/app/actions/fetchPlaylist";
import PlaylistMeta from "./PlaylistMeta";
import { Suspense } from "react";

export default async function PlaylistContainer({
    params,
}: Readonly<{
    params: Promise<{ id: string }>
}>
) {
    const { id } = await params;
    const playlistPromise = fetchPlaylist(id, "name");
	return (
        <main className="h-screen flex flex-col items-center justify-center">
            <p className="font-mono pb-8">
                <span className="font-mono bg-gray-700 px-1 rounded">
                    playlist_id
                </span>
                {`: ${id}`}
            </p>
            <Suspense fallback={<p>Loading...</p>}>
                <PlaylistMeta dataPromise={playlistPromise} />
            </Suspense>
        </main>
	);
}
