"use client";

import { ServerActionError } from "@/lib/formatServerActionError";
import PlaylistTableBody from "./PlaylistTableBody";
import PlaylistTableHead from "./PlaylistTableHead";
import { use, useMemo } from "react";

export default function PlaylistTable({
    playlistTracksPromise,
}: Readonly<{
    playlistTracksPromise: Promise<{
        items?: any[],
        total?: number,
        error?: ServerActionError,
    }>,
}>) {
    const { items } = use(playlistTracksPromise);
    return (
        <table className="flex flex-col outline outline-border">
            <PlaylistTableHead />
            <PlaylistTableBody items={items ?? []} />
        </table>
    );
}
