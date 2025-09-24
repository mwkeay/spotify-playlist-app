export default async function Playlist({
    params,
}: Readonly<{
    params: Promise<{ id: string }>
}>
) {
    const { id } = await params;
	return (
		<div>
			<main className="h-screen flex flex-col items-center justify-center">
                <h1 className="font-sans">
                    Hello World!
                </h1>
                <p className="font-mono">
                    {id}
                </p>
            </main>
		</div>
	);
}
