
import { 
        AlbumPlaylistCardEntitie, 
        playlistUserIten, 
        userAlbumEndpointModel, 
        playlistUserEndpointModel, 
        userAlbumItens} from "@/models";


/**
 * @param jsonPlaylistUser json de respuesta del endpoint basado en el model "playlistUserEndpointModel"
 * @param jsonAlbumsUser json de respuesta del endpoint basado en el model "userAlbumEndpointModel"
 * @return  album_playlist_user[{},{},{},{}...], array que contiene objetos de album y playlist guardados por el user
 */


export const adapterCardAlbumPlaylist = (jsonPlaylistUser: playlistUserEndpointModel, jsonAlbumsUser: userAlbumEndpointModel) =>{
    const itemsPlaylistUser: playlistUserIten[] = jsonPlaylistUser.items;
    const itemsAlbumsUser: userAlbumItens[]  = jsonAlbumsUser.items;


    // const jsonLikedSong = {
    //     name: "Liked Songs",
    //     imageUrl: "",
    //     type: "Playlist",
    //     numOfTracks: 0,
    //     owner: 
    // }

    const playlist: AlbumPlaylistCardEntitie[] = [];
    itemsPlaylistUser.forEach(iten =>{
        let objPlaylist = new AlbumPlaylistCardEntitie(iten.name,iten.images[0].url, iten.type, iten.tracks.total, iten.owner.display_name, iten.id)
        playlist.push(objPlaylist);
    })
    itemsAlbumsUser.forEach(iten =>{
        let objPlaylist = new AlbumPlaylistCardEntitie(iten.album.name,iten.album.images[0].url, iten.album.type, iten.album.tracks.total, iten.album.artists[0].name, iten.album.id)
        playlist.push(objPlaylist);
    })
    
    return playlist;
}
