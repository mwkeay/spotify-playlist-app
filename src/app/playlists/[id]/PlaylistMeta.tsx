import { SpotifyPlaylistData } from "@/spotify-api/schema/spotify-playlist";
import Image from "next/image";

export default async function PlaylistMeta({
    playlistPromise,
}: Readonly<{
    playlistPromise: Promise<SpotifyPlaylistData>,
}>) {
    const playlist = await playlistPromise;
	return (
		<div className="flex gap-2 p-2 rounded items-center bg-card-background">
            <div className="h-8 w-8">
                <Image
                    src={playlist.images[0].url}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    alt={`Cover art for playlist ${playlist.name ?? "undefined"}`}
                />
            </div>
            <p className="font-sans">
                {playlist.name}
            </p>
		</div>
	);
}
