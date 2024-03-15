import { externalUrl } from "./reusableInterface";

export interface userEndpoint{
    // modelo de user que manda 
    // https://api.spotify.com/v1/users/{user_id}   
    display_name: string,
    external_urls: externalUrl,
    href: string,
    id: string,
    images: [],
    type: string,
    uri: string,
    followers: followersUser,
}


export interface followersUser{
    href: null,
    total: 0
}