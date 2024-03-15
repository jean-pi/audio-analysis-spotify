
export interface externalUrl{
    spotify: string
}

export interface idsExterno{
    isrc: string,
    ean: string,
    upc: string
}

export interface reasonForRestrictions{
    reason: string
}

export interface img{
    url: string,
    height: number,
    width: number
}

export interface infoArtistLessInformation{
    external_urls: externalUrl,
    href: string,
    id: string,
    name: string,
    type: string,
    uri: string
}

export interface followers{
    href: string,
    total: number
}





