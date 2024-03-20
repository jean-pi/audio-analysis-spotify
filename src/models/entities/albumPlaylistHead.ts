import { AlbumPLaylistCard } from "./albumPlaylistCard";

class AlbumPlaylistCabecera extends AlbumPLaylistCard{

    _numOfsongs: number;
    _duration: number;

    constructor(numOfSongs: number,duration: number, name: string, photoUrl: string, type: string, isSelected: boolean){
        super(name,photoUrl,type,isSelected);
        this._numOfsongs = numOfSongs;
        this._duration = duration;
    }

    get getNumOfSongs(): number{
        return this._numOfsongs;
    }
    get getDuration(): number{
        return this._duration;
    }
}

