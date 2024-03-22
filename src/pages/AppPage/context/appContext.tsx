
import React, {createContext, useState} from "react";


type AppContextTypes = {
    infoInContext: infoInContext | null;
    setInfoInContext: React.Dispatch<React.SetStateAction<infoInContext | null>>;
}

type infoInContext = {
    userName:string,
    albumPlaylistSelected?:{
        photoUrl: string,
        type: string,
        numOfSongs: number | null,
        duration: string,
        name: string,
    }
}

type AppContextProviderProps = {
    children : React.ReactNode;
}
export const AppContext = createContext<AppContextTypes | null>(null);

export default function AppContextProvider({children}:AppContextProviderProps){
    const [infoInContext, setInfoInContext] = useState<infoInContext | null>(null);

    return (
        <AppContext.Provider value={{infoInContext, setInfoInContext}}>
            {children}
        </AppContext.Provider>

    )
}