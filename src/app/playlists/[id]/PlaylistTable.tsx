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
    const { items: itemsData } = use(playlistTracksPromise);
    return (
        <table className={
            "flex w-full flex-col font-sans"
            //+ " outline outline-blue-500 [&_*]:outline [&_*]:outline-red-500" 
        }>
            <PlaylistTableHead />
            <PlaylistTableBody items={itemsData} />
        </table>
    );
}
