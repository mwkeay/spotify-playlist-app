"use client";

export default function PlaylistTableHead() {
    return (
        <thead>
            <tr
                className="flex px-16 gap-2"
            >
                {/** Index */}
                <th className="flex w-10">
                    #
                </th>
                {/** Title */}
                <th className="flex flex-4">
                    Title
                </th>
                {/** Album or podcast */}
                <th className="flex flex-2">
                    Album or podcast
                </th>
                {/** Hello World! */}
                <th className="flex flex-1">
                    Hello World!
                </th>
                {/** Duration */}
                <th className="flex w-16 justify-end">
                    Duration
                </th>
            </tr>
        </thead>
    );
}
