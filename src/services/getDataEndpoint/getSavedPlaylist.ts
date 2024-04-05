import { playlistUserEndpointModel, playlistUserIten } from "@/models";
import { endPoints} from "@/constants";
 
// export const getSavedPlaylist = async(): Promise<playlistUserEndpointModel> =>{
//     const options = {
//         method: 'GET', 
//         headers: {
//             'Authorization': 'Bearer ' + localStorage.getItem("access_token")
//         }
//     }
//     const apiUrl:string = endPoints.savedPlaylist + "?limit=13&offset=1";
//     return (await fetch(apiUrl, options)).json();
// }


export const getSavedPlaylist = async({pageParam} : {pageParam: number}): Promise<playlistUserIten[]> =>{
    const options = {
        method: 'GET', 
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("access_token")
        }
    }
    const apiUrl:string = endPoints.savedPlaylist + `?limit=10&offset=${pageParam}`;
    const playlistUserItens: Promise<playlistUserEndpointModel> = (await fetch(apiUrl, options)).json();
    return (await playlistUserItens).items;
}
