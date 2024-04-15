import create from "zustand";

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


export const useBookStore = create<infoInContext>( ()=> ({
    
}));