import { externalUrl, followers, idsExterno, img, infoArtistLessInformation, reasonForRestrictions } from "./reusableInterface"

export interface savedTrackModel{
    // modelo de "tus me gustas"
    // https://api.spotify.com/v1/me/tracks
    href: string,
    limit: number,
    next: string,
    offset: number,
    previous: string,
    total: number,
    items: savedTrackIten[],
}

export interface savedTrackIten{
    added_at: string,
    track: savedTrackItenTrack
}

export interface savedTrackItenTrack{
    album: dataAlbumSavedTrack,
    artists: infoArtistMoreInformation[],
    available_markets: string[],
    disc_number: number,
    duration_ms: number,
    explicit: boolean,
    external_ids: idsExterno,
    external_urls: externalUrl,
    href: string,
    id: string,
    is_playable: boolean,
    linked_from: {},
    restrictions: reasonForRestrictions,
    name: string,
    popularity: number,
    preview_url: string,
    track_number: number,
    type: string,
    uri: string,
    is_local: boolean 
}

export interface infoArtistMoreInformation{
    external_urls: externalUrl,
    followers: followers,
    genres: [],
    href: string,
    id: string,
    images: img[],
    name: string,
    popularity: number,
    type: number,
    uri: number
}

export interface dataAlbumSavedTrack{
    album_type: string,
    total_tracks: number,
    available_markets: [],
    external_urls: externalUrl,
    href: string,
    id: string,
    images: img[],
    name: string,
    release_date: string,
    release_date_precision: string,
    restrictions: reasonForRestrictions,
    type: string,
    uri: string,
    artists: infoArtistLessInformation[]
}
