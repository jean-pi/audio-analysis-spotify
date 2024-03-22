

/**
 * @param accessToken access token "guardado en local storage" 
 * @return  json del endpoint de las playlist guardadas por el usuario
 */

import { endPoints } from "@/constants";


export const getSavedAlbum = async(accessToken: string | null): Promise<any> =>{
    try {

        const apiUrl:string = endPoints.savedAlbums + "?limit=10";
        const options = {
            method: 'GET', 
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        }
        const response = await fetch(apiUrl, options);
    
        if(!response.ok) throw new Error("not ok: error al obtener el current user, getDataUser.ts" + response.status)

        const userData =  response.json();
        return userData;
    

    } catch (error) {
        console.log(error);
    }
}
