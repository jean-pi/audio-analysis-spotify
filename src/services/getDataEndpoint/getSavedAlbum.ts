

/**
 * @param accessToken access token "guardado en local storage" 
 * @return  json del endpoint de las playlist guardadas por el usuario
 */

import { endPoints} from "@/constants";
import { AlbumsUserEndpointModel } from "@/models";

    //antes de usar useInfiniteQuery()
// export const getSavedAlbum = async(): Promise<AlbumsUserEndpointModel> =>{
//     const options = {
//         method: 'GET', 
//         headers: {
//             'Authorization': 'Bearer ' + localStorage.getItem("access_token")
//         }
//     }
//     const apiUrl:string = endPoints.savedAlbums + "?limit=13&offset=2";
//     return (await fetch(apiUrl, options)).json();
// }




export const getSavedAlbum = async({pageParam}: {pageParam: number}): Promise<AlbumsUserEndpointModel> =>{
    // se debe usar la variable exacta pageParam, ya que reactQuery useInfiniteQuery() le pasa a la funcion que le pasamos en queryFn
    // puedo a acceder a unas pocas propiedades que gracias a reactQuery las puedo acceder desde aqui
    const options = {
        method: 'GET', 
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("access_token")
        }
    }
    const apiUrl:string = endPoints.savedAlbums + `?limit=12&offset=${pageParam}`;
    return (await fetch(apiUrl, options)).json();
}
