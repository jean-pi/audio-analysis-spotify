import { useInfiniteQuery } from "@tanstack/react-query"

type queryFnType<T> = ({}:any) => Promise<T>;

export function useInfiniteQueryFetch<T>(queryKey: string[], queryFn: queryFnType<T>){ 
    // const query = useQuery<T>({
	// 	queryKey: QueryKey, // manejo de cache
	// 	queryFn: QueryFn,  // este servicion deve devolver la data o error, 
	// 	//saber cuando esta cargando, cuando da un error, cuando devuelve la data
	// })
    const queryInfinite =  useInfiniteQuery<T>({
        queryKey: queryKey,
        queryFn: queryFn,
        initialPageParam: 1,
        getNextPageParam: () => {
            return 14;
        }
    })
    return queryInfinite;
}

	