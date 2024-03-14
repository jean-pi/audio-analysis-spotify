

export class AlbumPLaylistCard{
    _name: string;
    _photoUrl: string;
    _type: string;
    _isSelected: boolean;
    // creo que falta un identificador para hacer la 
    // llamada a las canciones que estan dentro de esta playlist/album

    constructor(name: string, photoUrl: string, type: string, isSelected: boolean){
        this._name = name;
        this._photoUrl = photoUrl;
        this._type = type;
        this._isSelected = isSelected;
    }

    get getName(): string{
        return this._name;
    }
    get getPhotoUrl(): string{
        return this._photoUrl;
    }
    get getType(): string{
        return this._type;
    }
    get getIsSelected(): boolean{
        return this._isSelected;
    }


    clickEvent(){
        //actualiza el estado context
        // deja ver que playlist album esta seleccionado
        // consume un adapter 
        // mete la info del adapter en el estado de contex
        // los componenetes siempre miran a este estado y estan atentos al cambio
    }
}