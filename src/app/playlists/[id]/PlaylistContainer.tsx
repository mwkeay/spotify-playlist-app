import PlaylistTable from "./PlaylistTable";
import fetchSpotifyPlaylistItems from "@/spotify-api/requests/fetchSpotifyPlaylistItems";

export default async function PlaylistContainer({
    params,
}: Readonly<{
    params: Promise<{ id: string }>,
}>
) {
    const { id } = await params;
    const playlistTracksPromise = fetchSpotifyPlaylistItems(id);
	return (
        <main className="flex h-screen">
            <div className="w-[50%] flex flex-col items-center gap-8 py-16 bg-card-background">
                <p className="font-mono">
                    <span className="font-mono bg-background px-1 rounded">
                        playlist_id
                    </span>
                    <span className="font-mono text-card-foreground">
                        {`: ${id}`}
                    </span>
                </p>
            </div>
            <div className="w-[50%] overflow-scroll flex flex-col gap-8 items-center py-8 scroll-pane">
                <PlaylistTable playlistTracksPromise={playlistTracksPromise} />
            </div>
        </main>
	);
}
