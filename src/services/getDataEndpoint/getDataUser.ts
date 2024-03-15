
//https://api.spotify.com/v1/me
import { userEndpoint } from "@/models/endPoints";
import { getAccessToken } from "..";


const apiUrl:string = "https://api.spotify.com/v1/me";

/**
 * @return  json with user actual info
 */


export const getDataUserEndPoint = async(): Promise<any> =>{

    // const res:userEndpoint = await fetch(apiUrl);
    try {
        const accessToken = getAccessToken()
        console.log(accessToken)
        const options = {
            method: "GET", 
            Headers:  `Authorization: Bearer ${accessToken}`,
        }

        const response = await fetch(apiUrl, options);
    
        if(response.ok){
            const userData = response.json();
            return userData;
            console.log(userData)
        } else{
            throw new Error("not ok: error al obtener el current user, getDataUser.ts")
        }
    } catch (error) {
        console.log(error);
        console.log("algun error al obtener current user at getDataUser.ts")
    }
    
    

}