
//https://api.spotify.com/v1/me
import { userEndpoint } from "@/models/endPoints";

/**
 * @return  json with user actual info
 */

export const getDataUserEndPoint = async(): Promise<any> =>{

    try {
        const apiUrl:string = "https://api.spotify.com/v1/me";
        const accessToken:string | null = localStorage.getItem("access_token");

        const options = {
            method: "GET", 
            headers: {
                "Authorization" : "Bearer" + accessToken,
            }
        }
        const response = await fetch(apiUrl, options);
    
        if(response.ok){
            const userData = response.json();
            console.log(userData);
            return userData;
        } else{
            throw new Error("not ok: error al obtener el current user, getDataUser.ts" + response.status)
        }
    } catch (error) {
        console.log(error);
        console.log("algun error al obtener current user at getDataUser.ts")
    }
    
    
    

}