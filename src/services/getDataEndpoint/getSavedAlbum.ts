

/**
 * @param accessToken access token "guardado en local storage" 
 * @return  json del endpoint de las playlist guardadas por el usuario
 */

import { endPoints, limitAlbumPlaylistItens} from "@/constants";
import { AlbumsUserEndpointModel, userAlbumItens } from "@/models";

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




export const getSavedAlbum = async({pageParam}: {pageParam: number}): Promise<userAlbumItens[]> =>{
    // se debe usar la variable exacta pageParam, ya que reactQuery useInfiniteQuery() le pasa a la funcion que le pasamos en queryFn
    // puedo a acceder a unas pocas propiedades que gracias a reactQuery las puedo acceder desde aqui
    const options = {
        method: 'GET', 
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("access_token")
        }
    }
    const apiUrl:string = endPoints.savedAlbums + `?limit=${limitAlbumPlaylistItens}&offset=${pageParam}`;
    let albumUser: Promise<AlbumsUserEndpointModel> = (await fetch(apiUrl, options)).json()
    return (await albumUser).items;
}
