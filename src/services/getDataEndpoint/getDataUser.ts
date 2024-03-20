

/**
 * @param accessToken access token "guardado en local storage" 
 * @return  json del endpoint de current user
 */

import { endPoints } from "@/constants";


export const getDataUserEndPoint = async(accessToken: string | null): Promise<any> =>{
    try {
        const apiUrl:string = endPoints.currentUser;
        const options = {
            method: 'GET', 
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        }
        const response = await fetch(apiUrl, options);
    
        if(!response.ok) throw new Error("not ok: error al obtener el current user, getDataUser.ts" + response.status)

        const userData = response.json();
        return userData;
    } catch (error) {
        console.log(error);
    }
}
    
