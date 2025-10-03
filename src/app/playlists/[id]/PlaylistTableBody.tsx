"use client";

export default function PlaylistTableBody({
    items,
}: Readonly<{
    items: any[]
}>) {
    return (
        <tbody>
            {
                items.slice(0, 20).map((item, index) => <PlaylistTableRow
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
    item: any
    index: number
}>) {
    return (
        <tr
            key={index + 1}
            className="flex px-2"
        >
            <td>
                {item.track.name}
            </td>
        </tr>
    );
}
