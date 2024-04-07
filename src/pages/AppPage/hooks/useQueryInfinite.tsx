import { limitAlbumPlaylistItens } from "@/constants";
import { useInfiniteQuery } from "@tanstack/react-query"

type queryFnType<T> = ({}:any) => Promise<T>;

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
        getNextPageParam: (lastPage, allPages) =>{ // primero se escribe lastPage, tenia escrito all pages primero y me devolvia loas valores de allpages y lastPages invertidos

            const nextPage = (lastPage as any[]).length === 0 ? undefined : allPages.length * limitAlbumPlaylistItens + 1;
            // puedo detectar cuanto ya no tenga paginas con el hasNextPage
            // cuando en esta funcion no retorno un numero hasNextPage será falso
            return nextPage;

 
        }
            // la api de spotify no devuleve los albunes o playlist directamente
            // devuelve un json, con informacion adicional, como el siguiente grupo de datos, el gruponde datos anterior, el 
            // numeros de playlist o albunes que tiene el usuario.
            // Pude haber echo la paginacion con el mismo link que manda la respuesta de spotify, porque ahi manda el link para hacer el fetch
            // Es mi primera vez haciendo esto y pense que la unica opcion era usar tankstack reactquery, pero la api facilita la paginacion
            // ahora quiero hacer paginacion con reactquery y en teoria solo deberia de llamar el metodo:
            // la api de spotify no tiene el parametro page="" en la url, si no que es con un
            // offset="" que devuelve la siguiente cantidad de elementos iniciando desde el indice indicado en el offset
            // y como limine el limit="", por eso aplico el ciclo for
    })
    return queryInfinite;
}

	