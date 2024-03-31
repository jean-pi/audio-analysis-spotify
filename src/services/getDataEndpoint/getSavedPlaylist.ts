import { playlistUserEndpointModel } from "@/models";
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


export const getSavedPlaylist = async({pageParam} : {pageParam: number}): Promise<playlistUserEndpointModel> =>{
    const options = {
        method: 'GET', 
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("access_token")
        }
    }
    const apiUrl:string = endPoints.savedPlaylist + `?limit=13&offset=${pageParam}`;
    return (await fetch(apiUrl, options)).json();
}
