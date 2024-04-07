import { infoInContext } from "@/pages/AppPage/context";


export class AlbumPlaylistCardEntitie{
    private name: string;
    private photoUrl: string;
    private type: string;
    private numberOfSongs: number;
    private owner: string | undefined;
    private id: string;
    private isSelected: boolean;
    private setInfoInContext:  (value: React.SetStateAction<infoInContext | null>) => void;
    
    constructor(name: string, photoUrl: string, type: string, numberOfSongs: number, owner: string | undefined, id: string, setInfoInContext:  (value: React.SetStateAction<infoInContext | null>) => void){
        this.name = name;
        this.photoUrl = photoUrl;
        this.type = type.charAt(0).toUpperCase() + type.slice(1);;
        this.numberOfSongs = numberOfSongs;
        this.owner = owner;
        this.id = id;
        this.isSelected = false;
        this.setInfoInContext = setInfoInContext;
    }

    
    eventClick(){
        //actualiza el estado context
        // deja ver que playlist album esta seleccionado
        // consume un adapter 
        // mete la info del adapter en el estado de contex
        // los componenetes siempre miran a este estado y estan atentos al cambio
        console.log("event click entitie obj");
        // console.log(this.setInfoInContext)
        // this.setInfoInContext({
        //     albumPlaylistSelected: {
        //         photoUrl: "aa",
        //         type: "aaaaa",
        //         numOfSongs: 100,
        //         duration: "10h10m",
        //         name: "anana",
        //     }
        // });
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


