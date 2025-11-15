"use client";

import PlaylistTableBody from "./PlaylistTableBody";
import PlaylistTableHead from "./PlaylistTableHead";
import { use } from "react";
import { SpotifyPlaylistItemsData } from "@/spotify-api/schema/spotify-playlist-items";

export default function PlaylistTable({
    playlistTracksPromise,
}: Readonly<{
    playlistTracksPromise: Promise<SpotifyPlaylistItemsData>,
}>) {
    const { items } = use(playlistTracksPromise);
    return (
        <table className="flex flex-col outline outline-border">
            <PlaylistTableHead />
            <PlaylistTableBody items={items ?? []} />
        </table>
    );
}
