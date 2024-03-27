
import { 
        AlbumPlaylistCardEntitie,  
        AlbumsUserEndpointModel, 
        playlistUserEndpointModel, } from "@/models";


/**
 * @param jsonPlaylistUser json de respuesta del endpoint basado en el model "playlistUserEndpointModel"
 * @param jsonAlbumsUser json de respuesta del endpoint basado en el model "userAlbumEndpointModel"
 * @return  album_playlist_user[{},{},{},{}...], array que contiene objetos de album y playlist guardados por el user
 */

 
export const adapterCardAlbumPlaylist = (jsonPlaylistUser: playlistUserEndpointModel, jsonAlbumsUser: AlbumsUserEndpointModel, likedSongs: AlbumPlaylistCardEntitie): AlbumPlaylistCardEntitie[] =>{

    const playlistEnAlbums: AlbumPlaylistCardEntitie[] = [];

    
    jsonPlaylistUser.items.forEach(item =>{
        let objPlaylist = new AlbumPlaylistCardEntitie(
            item.name,
            item.images[0].url,
            item.type, 
            item.tracks.total, 
            item.owner.display_name, 
            item.id)
            playlistEnAlbums.push(objPlaylist);
    });

    jsonAlbumsUser.items.forEach(item =>{
        let objPlaylist = new AlbumPlaylistCardEntitie(
            item.album.name,
            item.album.images[0].url, 
            item.album.type, 
            item.album.tracks.total, 
            item.album.artists[0].name, 
            item.album.id)
            playlistEnAlbums.push(objPlaylist);
    });

    function mixArrWithSeed<T>(array: T[], semilla: number): T[] {
        const arrayRevuelto = array.slice(); // Copia el array original para no modificarlo
        // Usamos la misma función de comparación con una semilla para garantizar la consistencia
        arrayRevuelto.sort(() => {
          const random = (Math.sin(semilla++) * 10000) % 25;
          return random > 1 ? 1 : -1;
        });
        return arrayRevuelto;
      }
    
    const randomPosition =  mixArrWithSeed(playlistEnAlbums, 1);
    randomPosition.unshift(likedSongs);
    return randomPosition;
}
