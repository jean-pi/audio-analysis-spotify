import create from "zustand";

interface GenerationBookState {
    infoInContext: InfoInContext;
    setInfoInContext: (infoInContext: InfoInContext) => void;
}

export interface InfoInContext{
    userName?:string,
    albumPlaylistSelected?: AlbumPlaylistProperties;
}

interface AlbumPlaylistProperties {
    photoUrl: string,
    type: string,
    numOfSongs: number | null,
    duration: string,
    name: string,
}

export const useBookStore = create<GenerationBookState>()((set) => ({
    infoInContext: {
        userName: "",
        albumPlaylistSelected: {
            photoUrl: "",
            type: "",
            numOfSongs: 0,
            duration: "",
            name: "",
        }
    },
    setInfoInContext: (setInfoInContextInput: InfoInContext) => set({setInfoInContextInput})
}))