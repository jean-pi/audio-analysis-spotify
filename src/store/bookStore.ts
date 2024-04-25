import { create } from 'zustand'
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
    owner: string | undefined
    numOfSongs: number | null,
    duration: string,
    name: string,
}


export const zustandBookStore = create<GenerationBookState>((set) => ({
    infoInContext: {
        userName: "",
        albumPlaylistSelected: {
            photoUrl: "",
            type: "",
            owner: "",
            numOfSongs: 0,
            duration: "",
            name: "",
        }
    },
    setInfoInContext: (infoInContextInput: InfoInContext) => set({ infoInContext: infoInContextInput })
}))