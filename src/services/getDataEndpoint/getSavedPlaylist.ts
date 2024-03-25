

/**
 * @param accessToken access token "guardado en local storage" 
 * @return  json del endpoint de las playlist guardadas por el usuario
 */

import { endPoints, options } from "@/constants";
 

export const getSavedPlaylist = async(): Promise<any> =>{
    const apiUrl:string = endPoints.savedPlaylist + "?limit=10";
    return await fetch(apiUrl, options);
}
