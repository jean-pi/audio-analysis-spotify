
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
        //actualiza el estado context
        // deja ver que playlist album esta seleccionado
        // consume un adapter 
        // mete la info del adapter en el estado de contex
        // los componenetes siempre miran a este estado y estan atentos al cambio
       
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


