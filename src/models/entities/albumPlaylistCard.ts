

export class AlbumPlaylistCardEntitie{
    private name: string;
    private photoUrl: string;
    private type: string;
    private numberOfSongs: number;
    private duration: string;
    private isSelected: boolean;

    
    constructor(name: string, photoUrl: string, type: string, isSelected: boolean = false, numberOfSongs: number, duration: string){
        this.name = name;
        this.photoUrl = photoUrl;
        this.type = type;
        this.numberOfSongs = numberOfSongs;
        this.duration = duration;
        this.isSelected = isSelected;
    }

    
    clickEvent(){
        //actualiza el estado context
        // deja ver que playlist album esta seleccionado
        // consume un adapter 
        // mete la info del adapter en el estado de contex
        // los componenetes siempre miran a este estado y estan atentos al cambio
    }
    
    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getPhotoUrl(): string {
        return this.photoUrl;
    }

    public setPhotoUrl(photoUrl: string): void {
        this.photoUrl = photoUrl;
    }

    public getType(): string {
        return this.type;
    }

    public setType(type: string): void {
        this.type = type;
    }

    public getNumberOfSongs(): number {
        return this.numberOfSongs;
    }

    public setNumberOfSongs(numberOfSongs: number): void {
        this.numberOfSongs = numberOfSongs;
    }

    public getDuration(): string {
        return this.duration;
    }

    public setDuration(duration: string): void {
        this.duration = duration;
    }

    public isIsSelected(): boolean {
        return this.isSelected;
    }

    public setIsSelected(isSelected: boolean): void {
        this.isSelected = isSelected;
    }
  
}

