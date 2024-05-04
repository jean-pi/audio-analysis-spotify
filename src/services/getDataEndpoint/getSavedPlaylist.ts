import { playlistUserEndpointModel, playlistUserIten } from "@/models";
import { endPoints, limitAlbumPlaylistItens} from "@/constants";
 

export const getSavedPlaylist = async({pageParam} : {pageParam: number}): Promise<playlistUserIten[]> =>{
    const options = {
        method: 'GET', 
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("access_token")
        }
    }
    const apiUrl:string = endPoints.savedPlaylist + `?limit=${limitAlbumPlaylistItens}&offset=${pageParam}`;
    const playlistUserItens: Promise<playlistUserEndpointModel> = (await fetch(apiUrl, options)).json();
    return (await playlistUserItens).items;
}
