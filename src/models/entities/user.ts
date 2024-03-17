
export class User{
    _displayName: string;
    _photoUrl: string;
    _urlToPerfil: string;

    constructor(displayName: string, photoUrl: string, urlToPerfil: string){
        this._displayName = displayName;
        this._photoUrl = photoUrl;
        this._urlToPerfil = urlToPerfil;
    }

    get getdisplayName(): string{
        return this._displayName;
    }
    get getPhotoUrl(): string{
        return this._photoUrl;
    }
    get getUrlToPerfil(): string{
        return this._urlToPerfil;
    }
}