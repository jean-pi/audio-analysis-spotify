
export class User{
    _displayName: string;
    _photoUrl: string;

    constructor(displayName: string, photoUrl: string){
        this._displayName = displayName;
        this._photoUrl = photoUrl;
    }

    get getdisplayName(): string{
        return this._displayName;
    }
    get getPhotoUrl(): string{
        return this._photoUrl;
    }
}