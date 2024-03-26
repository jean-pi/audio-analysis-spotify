

/**
 * @param accessToken access token "guardado en local storage" 
 * @return  json del endpoint de las playlist guardadas por el usuario
 */

import { endPoints} from "@/constants";


export const getSavedAlbum = async(): Promise<any> =>{
    const options = {
        method: 'GET', 
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("access_token")
        }
    }
    const apiUrl:string = endPoints.savedAlbums + "?limit=20";
    return (await fetch(apiUrl, options)).json();
}
