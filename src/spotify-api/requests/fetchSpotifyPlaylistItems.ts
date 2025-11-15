import { getClientCredentialsToken } from "@/spotify-api/client-credentials-auth";
import { SpotifyPlaylistItemsData, SpotifyPlaylistItemsSchema } from "../schema/spotify-playlist-items";

export async function fetchSpotifyPlaylistItemsPage(
    playlistId: string,
    offset: number | undefined,
    limit: number | undefined,
): Promise<SpotifyPlaylistItemsData> {
    // Authorisation
    const accessToken = await getClientCredentialsToken();

    // Create Request
    const url = new URL(`https://api.spotify.com/v1/playlists/${ playlistId }/tracks`);
    if (offset) url.searchParams.append("offset", offset.toString());
    if (limit) url.searchParams.append("limit", limit.toString());

    // Make Request
    const response = await fetch(url.toString(), {
        method: "GET",
        headers: {
            "Authorization": "Bearer " + accessToken,
        },
    });
    if (!response.ok) throw new Error("Spotify GET /playlist/{id}/tracks failed with status " + response.status + ": " + response.statusText);

    // Validate
    const data = SpotifyPlaylistItemsSchema.parse(await response.json());
    return data;
}

export default async function fetchSpotifyPlaylistItems(
    playlistId: string,
): Promise<SpotifyPlaylistItemsData> {
    // First page (for track total)
    const data = await fetchSpotifyPlaylistItemsPage(playlistId, 0, 100);

    // Remaining pages
    const requests = [];
    for (let offset = 100; offset < data.total; offset += 100) {
        requests.push(fetchSpotifyPlaylistItemsPage(playlistId, offset, 100));
    };
    const pages = await Promise.all(requests);
    pages.forEach(({ items: pageItems }) => data.items.push(...pageItems));

    return data;
}
