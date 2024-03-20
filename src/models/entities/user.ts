
export class User{
    #displayName: string;
    #photoUrl: string;
    #urlToPerfil: string;

    constructor(displayName: string, photoUrl: string, urlToPerfil: string){
        this.#displayName = displayName;
        this.#photoUrl = photoUrl;
        this.#urlToPerfil = urlToPerfil;
    }

    get getdisplayName(): string{
        return this.#displayName;
    }
    get getPhotoUrl(): string{
        return this.#photoUrl;
    }
    get getUrlToPerfil(): string{
        return this.#urlToPerfil;
    }
}