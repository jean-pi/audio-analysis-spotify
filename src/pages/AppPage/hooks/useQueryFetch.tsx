import { useQuery } from "@tanstack/react-query"

type queryFnType<T> = () => Promise<T>;

export function useQueryFetch<T>(QueryKey: string[], QueryFn: queryFnType<T>){ 
    const query = useQuery<T>({
		queryKey: QueryKey, // manejo de cache
		queryFn: QueryFn,  // este servicion deve devolver la data o error, 
		//saber cuando esta cargando, cuando da un error, cuando devuelve la data
	})
    return query
}