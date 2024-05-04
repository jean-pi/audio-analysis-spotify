import { create } from 'zustand'

interface GenerationBookState {
    userName: string;
    setUserName: (userName: string) => void;
    albumPlaylistSelected: albumPlaylistSelected;
    setAlbumPlaylistSelected: (albumPlaylistSelected: albumPlaylistSelected) => void;
}


export interface albumPlaylistSelected{
    photoUrl: string,
    type: string,
    owner: string | undefined
    numOfSongs: number | null,
    name: string,
}



export const zustandBookStore = create<GenerationBookState>((set) => ({
    // estado user name
    userName: "",
    setUserName: (userName: string) => set({ userName: userName }),

    // estado albumPlaylist selected
    albumPlaylistSelected: {
        photoUrl: "",
        type: "",
        owner: "",
        numOfSongs: 0,
        name: "",
    },
    setAlbumPlaylistSelected: (albumPlaylistSelected: albumPlaylistSelected) => set({ albumPlaylistSelected: albumPlaylistSelected }),



}))