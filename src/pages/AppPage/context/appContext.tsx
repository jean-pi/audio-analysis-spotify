
import React, {createContext, useState} from "react";


interface AppContextTypes {
    infoInContext: infoInContext | null;
    setInfoInContext: React.Dispatch<React.SetStateAction<infoInContext | null>>;
}

export interface infoInContext{
    userName?:string,
    albumPlaylistSelected?: albumPlaylistProperties | null;
}

interface albumPlaylistProperties {
    photoUrl: string,
    type: string,
    numOfSongs: number | null,
    duration: string,
    name: string,
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