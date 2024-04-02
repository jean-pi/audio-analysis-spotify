import { AlbumsUserEndpointModel, playlistUserEndpointModel } from "@/models";
import { useInfiniteQuery } from "@tanstack/react-query"

type queryFnType<T> = ({}:any) => Promise<T>;
type GetNextPageParamFunction<T> = (lastPage: T) => number;

export function useInfiniteQueryFetch<T>(queryKey: string[], queryFn: queryFnType<T>){ 
    // const query = useQuery<T>({
	// 	queryKey: QueryKey, // manejo de cache
	// 	queryFn: QueryFn,  // este servicio debe devolver la data o error, 
	// 	//saber cuando esta cargando, cuando da un error, cuando devuelve la data
	// })
    const queryInfinite =  useInfiniteQuery<T>({
        queryKey: queryKey,
        queryFn: queryFn,
        initialPageParam: 1,
        getNextPageParam: (lastPage:AlbumsUserEndpointModel |  playlistUserEndpointModel) => {
            console.log(lastPage)
            return 13; 
            
            // la api de spotify no devuleve los albunes o playlist directamente
            // devuelve un json, con informacion adicional, como el siguiente grupo de datos, el gruponde datos anterior, el 
            // numeros de playlist o albunes que tiene el usuario.
            // Pude haber echo la paginacion con el mismo link que manda la respuesta de spotify, porque ahi manda el link para hacer el fetch
            // Aunque pienso que con reactQuery queda mejor expresado el codigo
            // Es mi primera vez haciendo esto y pense que la unica opcion era usar tankstack reactquery, pero la api facilita la paginacion
            // ahora quiero hacer paginacion con reactquery y en teoria solo deberia de llamar el metodo:
            // getNextPageParam: (lastPage, allPages) => {
            //      return lastPage;  // aqui puedo acceder a alindice de la ultima pag, la primera pagina, y cantidad de paginas
            // esto lo podria hacer si la peticion me devolviera las playlist o albunes directamente
            // pense en adaptar el endpoint:
            //    savedPlaylist: "https://api.spotify.com/v1/me/playlists/items",
            //    savedAlbums: "https://api.spotify.com/v1/me/albums/items",
            // pero la api no me lo permite
            // solucion: luego de hacer la peticion
            // }


        }
    })
    return queryInfinite;
}

	