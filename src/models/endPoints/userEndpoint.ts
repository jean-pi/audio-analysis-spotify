import { externalUrl } from "./reusableInterface";

export interface userEndpointModel{
    // modelo de user que manda 
    // https://api.spotify.com/v1/users/{user_id}   
    display_name: string,
    external_urls: externalUrl,
    href: string,
    id: string,
    images: [
        {
            height: number,
            width: number,
            url: string
        },
        {
            height: number,
            width: number,
            url: string
        }
    ],
    type: string,
    uri: string,
    followers: followersUser,
}


export interface followersUser{
    href: null,
    total: 0
}