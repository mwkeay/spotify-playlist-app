"use client";

export default function PlaylistTableHead() {
    return (
        <thead>
            <tr
                className="flex px-8 gap-2"
            >
                {/** Index */}
                <th className="flex w-10 overflow-hidden">
                    <p className="truncate">
                        #
                    </p>
                </th>
                {/** Title */}
                <th className="flex flex-2 overflow-hidden">
                    <p className="truncate">
                        Title
                    </p>
                </th>
                {/** Album or podcast */}
                <th className="flex flex-1 overflow-hidden">
                    <p className="truncate">
                        Album or podcast
                    </p>
                </th>
                {/** Duration */}
                <th className="flex w-16 justify-end overflow-hidden">
                    <p className="truncate">
                        ⌛
                    </p>
                </th>
            </tr>
        </thead>
    );
}
