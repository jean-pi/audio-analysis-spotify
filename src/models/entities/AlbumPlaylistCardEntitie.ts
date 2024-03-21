

export class AlbumPlaylistCardEntitie{
    name: string;
    photoUrl: string;
    type: string;
    numberOfSongs: number;
    owner: string
    isSelected: boolean;

    
    constructor(name: string, photoUrl: string, type: string, numberOfSongs: number, owner: string){
        this.name = name;
        this.photoUrl = photoUrl;
        this.type = type;
        this.numberOfSongs = numberOfSongs;
        this.owner = owner;
        this.isSelected = false;
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

    public isIsSelected(): boolean {
        return this.isSelected;
    }

    public setIsSelected(isSelected: boolean): void {
        this.isSelected = isSelected;
    }
  
}

