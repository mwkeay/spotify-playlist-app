import PlaylistContainer from "./PlaylistContainer";

export default async function Playlist({
    params,
}: Readonly<{
    params: Promise<{ id: string }>
}>
) {
	return (
		<div>
			<PlaylistContainer params={params} />
		</div>
	);
}
