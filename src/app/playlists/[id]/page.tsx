export default function Playlist({
    params: { id },
}: Readonly<{
    params: { id: string },
}>
) {
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
