"use client";

import { use } from "react";

export default function PlaylistMeta({
    dataPromise
}: Readonly<{
    dataPromise: Promise<any>
}>) {
    const data = use(dataPromise);
	return (
		<div>
            {data.playlist.name}
		</div>
	);
}
