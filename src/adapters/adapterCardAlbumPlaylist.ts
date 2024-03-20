
import { AlbumPlaylistCardEntitie } from "@/models";
import { playlistUserEndpointModel } from "@/models";
import { userAlbumEndpointModel } from "@/models";

/**
 * @param jsonPlaylistUser json de respuesta del endpoint basado en el model "playlistUserEndpointModel"
 * @param jsonAlbumsUser json de respuesta del endpoint basado en el model "userAlbumEndpointModel"
 * @return  album_playlist_user[{},{},{},{}...], array que contiene objetos de album y playlist guardados por el user
 */


export const adapterCardAlbumPlaylist = (jsonPlaylistUser: playlistUserEndpointModel) =>{
    const itens = jsonPlaylistUser.items;

    console.log(itens);
    
}
