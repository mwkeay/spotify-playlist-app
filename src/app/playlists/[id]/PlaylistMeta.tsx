import { SpotifyPlaylistData } from "@/spotify-api/schema/spotify-playlist";
import Image from "next/image";

export default async function PlaylistMeta({
    playlistPromise,
}: Readonly<{
    playlistPromise: Promise<SpotifyPlaylistData>,
}>) {
    const playlistData = await playlistPromise;
	return (
		<div className="flex gap-4 px-4 py-2 rounded-2xl items-center bg-card-background">
            <div className="h-12 w-12">
                <Image
                    src={playlistData.images[0].url}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    alt={`Cover art for playlist ${playlistData.name ?? "undefined"}`}
                />
            </div>
            <p className="font-sans text-xl">
                {playlistData.name}
            </p>
		</div>
	);
}
