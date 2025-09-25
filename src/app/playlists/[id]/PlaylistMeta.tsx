"use client";

import Image from "next/image";
import { Suspense, use } from "react";

export default function PlaylistMeta({
    dataPromise
}: Readonly<{
    dataPromise: Promise<any>
}>) {
    const data = use(dataPromise);
	return (
		<div className="flex gap-2 p-2 rounded items-center bg-card-background">
            <div className="h-8 w-8">
                <Image
                    src={data.playlist.images[0].url}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    alt={`Cover art for playlist ${data.playlist.name ?? "undefined"}`}
                />
            </div>
            <p className="font-sans">
                {data.playlist.name}
            </p>
		</div>
	);
}
