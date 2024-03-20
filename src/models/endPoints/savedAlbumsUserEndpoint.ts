import { externalUrl, idsExterno, img, infoArtistLessInformation, reasonForRestrictions } from "./reusableInterface"


export interface userAlbumEndpointModel{
    // albunes del usuario actual
    // https://api.spotify.com/v1/me/albums
    href: string,
    limit: number,
    next: string,
    offset: number,
    previous: string,
    total: number,
    items: userAlbumItens[]
}


export interface userAlbumItens{
    added_at: string,
    album: usersAlbumItensAlbum
}

export interface usersAlbumItensAlbum{
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
    artists: infoArtistLessInformation[],
    tracks: usersAlbumItensAlbumTrack,
    copyrights: usersAlbumItensAlbumcopyrightsData[],
    external_ids: idsExterno,
    genres: [],
    label: string,
    popularity: number
}

export interface usersAlbumItensAlbumcopyrightsData{
    text: string,
    type: string
}

export interface usersAlbumItensAlbumTrack{
    href: string,
        limit: number,
        next: string,
        offset: number,
        previous: string,
        total: number,
        items: usersAlbumItensAlbumTrackIntem[]
}


export interface usersAlbumItensAlbumTrackIntem{
    artists: infoArtistLessInformation[],
    available_markets: string[],
    disc_number: number,
    duration_ms: number,
    explicit: boolean,
    external_urls: externalUrl,
    href: string,
    id: string,
    is_playable: boolean,
    linked_from: usersAlbumItensAlbumTrackIntemLinkedFrom,
    restrictions: reasonForRestrictions,
    name: string,
    preview_url: string,
    track_number: number,
    type: string,
    uri: string,
    is_local: boolean
}

export interface usersAlbumItensAlbumTrackIntemLinkedFrom{
    external_urls: externalUrl,
    href: string,
    id: string,
    type: string,
    uri: string
}

