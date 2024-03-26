

/**
 * @param accessToken access token "guardado en local storage" 
 * @return  json del endpoint de current user
 */

import { endPoints } from "@/constants";


export const getDataUserEndPoint = async(): Promise<any> =>{
        
    const options = {
        method: 'GET', 
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("access_token")
        }
    }
    
        const apiUrl:string = endPoints.currentUser;
        return await fetch(apiUrl, options);

}
    
