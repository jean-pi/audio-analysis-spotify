
// export const redirectUrlConstant = 'https://audioanalysispotify.web.app/app';
export const redirectUrlConstant: string = 'http://localhost:5173/app';

export const endPoints = {
    accessToken: "https://accounts.spotify.com/api/token",
    authorize: "https://accounts.spotify.com/authorize",
    currentUser: "https://api.spotify.com/v1/me",
    savedTracks: "https://api.spotify.com/v1/me/tracks",
    savedPlaylist: "https://api.spotify.com/v1/me/playlists",
    savedAlbums: "https://api.spotify.com/v1/me/albums",
}

export const limitAlbumPlaylistItens: number = 22;

export const scopesAuth: string = 'user-read-private user-read-email playlist-read-private user-library-read';


