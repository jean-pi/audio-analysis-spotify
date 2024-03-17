

/**
 * @param accessToken access token "guardado en local storage" 
 * @return  respuesta del endpoint de curren user
 */


export const getDataUserEndPoint = async(accessToken: string | null): Promise<any> =>{
    try {
        const apiUrl:string = "https://api.spotify.com/v1/me";
        const options = {
            method: 'GET', 
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        }
        const response = await fetch(apiUrl, options);
    
        if(response.ok){
            const userData = response.json();
            return userData;
        } else{
            throw new Error("not ok: error al obtener el current user, getDataUser.ts" + response.status)
        }
    } catch (error) {
        console.log(error);
        console.log("algun error al obtener current user at getDataUser.ts")
    }
}

