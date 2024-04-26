import { zustandBookStore } from "@/store";

export class AlbumPlaylistCardEntitie{
    private name: string;
    private photoUrl: string;
    private type: string;
    private numberOfSongs: number;
    private owner: string | undefined;
    private id: string;
    private isSelected: boolean;
    
    constructor(name: string, photoUrl: string, type: string, numberOfSongs: number, owner: string | undefined, id: string){
        this.name = name;
        this.photoUrl = photoUrl;
        this.type = type.charAt(0).toUpperCase() + type.slice(1);;
        this.numberOfSongs = numberOfSongs;
        this.owner = owner;
        this.id = id;
        this.isSelected = false;
    }

    
    eventClick(){

        zustandBookStore.getState().setAlbumPlaylistSelected({
                photoUrl: this.photoUrl,
                type: this.type,
                owner: this.owner,
                numOfSongs: this.numberOfSongs,
                name: this.name
            })

    }
    
    public getName(): string {
        return this.name;
    }

    public getPhotoUrl(): string {
        return this.photoUrl;
    }

    public getType(): string {
        return this.type;
    }

    public getNumberOfSongs(): number {
        return this.numberOfSongs;
    }

    public isIsSelected(): boolean {
        return this.isSelected;
    }

    public getOwner(): string | undefined {
        return this.owner;
    }

    public getId(): string {
        return this.id;
    }




}


