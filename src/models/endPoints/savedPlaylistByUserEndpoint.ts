import { externalUrl, followers, img } from "./reusableInterface"
import { user } from "./userEndpoint"



export interface playlistUser{
    // Playlist user (sin tracks)
    // https://api.spotify.com/v1/me/playlists
    href: string,
    limit: number,
    next: string,
    offset: number,
    previous: string,
    total: number,
    items: playlistUser[]
}

export interface playlistUserIten{
    collaborative: boolean,
    description: string,
    external_urls: externalUrl,
    href: string,
    id: string,
    images: img[],
    name: string,
    owner: playlistUserItenOwnerData,
    public: boolean,
    snapshot_id: string,
    tracks: playlistUserItenTrack,
    type: string,
    uri: string
}

export interface playlistUserItenOwnerData{
    external_urls: externalUrl,
    followers: followers,
    href: string,
    id: string,
    type: user,
    uri: string,
    display_name: string
}

export interface playlistUserItenTrack{
    href: string,
    total: number
}