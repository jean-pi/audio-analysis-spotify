

/**
 * @param accessToken access token "guardado en local storage" 
 * @return  json del endpoint de current user
 */

import { endPoints, options } from "@/constants";


export const getDataUserEndPoint = async(): Promise<any> =>{
        const apiUrl:string = endPoints.currentUser;
        return await fetch(apiUrl, options);

}
    
