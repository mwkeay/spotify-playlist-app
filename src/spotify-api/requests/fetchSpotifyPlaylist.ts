import { getClientCredentialsToken } from "../client-credentials-auth";
import { SpotifyPlaylistData, SpotifyPlaylistSchema } from "../schema/spotify-playlist";

const DEFAULT_FIELDS = "description,images,name";

export default async function fetchSpotifyPlaylist(
    playlistId: string,
    fields: string = DEFAULT_FIELDS,
): Promise<SpotifyPlaylistData> {
    // Authorisation
    const accessToken = await getClientCredentialsToken();

    // Create Request
    const url = new URL("https://api.spotify.com/v1/playlists/" + playlistId);
    url.searchParams.append("fields", fields);

    // Make Request
    const response = await fetch(url.toString(), {
        method: "GET",
        headers: {
            "Authorization": "Bearer " + accessToken,
        },
    });
    if (!response.ok) {
        throw new Error("Spotify GET /playlist/{id}/tracks failed with status " + response.status + ": " + response.statusText);
    }

    // Validate
    const data = SpotifyPlaylistSchema.parse(await response.json());
    return data;
};
