"use client";

import formatMilliseconds from "@/lib/formatMilliseconds";
import { SpotifyPlaylistItemData } from "@/spotify-api/schema/spotify-playlist-items";

export default function PlaylistTableBody({
    items,
}: Readonly<{
    items: SpotifyPlaylistItemData[]
}>) {
    return (
        <tbody className="flex flex-col gap-1 py-2">
            {
                items.map((item, index) => <PlaylistTableRow
                    key={index}
                    item={item}
                    index={index}
                />)
            }
        </tbody>
    );
}

function PlaylistTableRow({
    item,
    index,
}: Readonly<{
    item: SpotifyPlaylistItemData
    index: number
}>) {
    return (
        <tr
            key={index + 1}
            className="flex px-16 py-2 gap-2 hover:outline"
        >
            {/** Index */}
            <td className="flex w-10 overflow-hidden">
                <p className="truncate">
                    {index + 1}
                </p>
            </td>
            {/** Title */}
            <td className="flex flex-4 overflow-hidden">
                <p className="truncate">
                    {item.track.name}
                </p>
            </td>
            {/** Album or podcast */}
            <td className="flex flex-2 overflow-hidden">
                <p className="truncate">
                    {item.track.type === "track" ? item.track.album.name : item.track.show.name }
                </p>
            </td>
            {/** Hello World! */}
            <td className="flex flex-1 overflow-hidden">
                <p className="truncate">
                    Hello World!
                </p>
            </td>
            {/** Duration */}
            <td className="flex w-16 overflow-hidden justify-end">
                <p className="truncate font-mono">
                    {formatMilliseconds(item.track.duration_ms)}
                </p>
            </td>
        </tr>
    );
}
