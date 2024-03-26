
import { 
        AlbumPlaylistCardEntitie,  
        AlbumsUserEndpointModel, 
        playlistUserEndpointModel, } from "@/models";


/**
 * @param jsonPlaylistUser json de respuesta del endpoint basado en el model "playlistUserEndpointModel"
 * @param jsonAlbumsUser json de respuesta del endpoint basado en el model "userAlbumEndpointModel"
 * @return  album_playlist_user[{},{},{},{}...], array que contiene objetos de album y playlist guardados por el user
 */

 
export const adapterCardAlbumPlaylist = (jsonPlaylistUser: playlistUserEndpointModel, jsonAlbumsUser: AlbumsUserEndpointModel) =>{

    const playlist: AlbumPlaylistCardEntitie[] = [];

    // const savedSongs = new AlbumPlaylistCardEntitie(
    //     "Saved Songs",

    // )

    jsonPlaylistUser.items.forEach(item =>{
        let objPlaylist = new AlbumPlaylistCardEntitie(
            item.name,
            item.images[0].url,
            item.type, 
            item.tracks.total, 
            item.owner.display_name, 
            item.id)
        playlist.push(objPlaylist);
    })

    jsonAlbumsUser.items.forEach(item =>{
        let objPlaylist = new AlbumPlaylistCardEntitie(
            item.album.name,
            item.album.images[0].url, 
            item.album.type, 
            item.album.tracks.total, 
            item.album.artists[0].name, 
            item.album.id)
        playlist.push(objPlaylist);
    })
    
    return playlist;
}
