import spotifyLogo_black from "@/assets/spotifyLogo_black.png"
import lensIcon from "@/assets/lensIcon.png"
import yourLibraryIcon from "@/assets/yourLibraryIcon.png"

// connect - disconect spotify
export const CONNECT_SPOTIFY_ACCOUNT_TEXT = "Connect Spotify"
export const DISCONNECT_SPOTIFY_ACCOUNT_TEXT = "Disconnect"
export const IMG_SPOTIFY = {
    url : spotifyLogo_black,
    alt: "spotify logo"
}

// warning privacy
export const TEXT_WARNING_PRIVACY = "By logging in you agree to this website having access to data and activity from your Spotify account."
export const LINK_WARNING_PRIVACY = {
    text: "Spotify privacy policy",
    url: "https://www.spotify.com/us/legal/privacy-policy/"
}

// main text of landin page
export const MAIN_TEXT_PRESENTATION = {
    line1: "audio",
    line2: "analysis",
    line3: "for",
    line4: "musicians"
}   
export const SECOND_TEXT_PRESENTATION = "recover tone, timbre, time signature and more, of your songs associated with your Spotify account."


// search bar 
export const PLACEHOLDER_SEARCH_MAIN_BAR_TEXT = "What do you want to analyze?"
export const PLACEHOLDER_SEARCH_SONG_BAR_TEXT = "Find a song in this playlist"
export const ICON_FIND = {
    url: lensIcon,
    alt: "find a track on spotify to analyze",
}


// footer app
export const LINKS_FOOTER_APP = {
    mainLink: {text: "audioanalysispotify.xyc", url: " "},
    github: {text: "Github", url: "https://github.com/jean-pi"},
    x: {text: "X", url: "https://twitter.com/sweetJean26"},
    instagran: {text: "Instagram", url: "https://www.instagram.com/jeanpierre_veliz/"}
}

export const DATA_DESCR_USER_CARD = "go to your spotify profile"

//your library
export const YOUR_LIBRARY_HEAD = {
    text: "Your library",
    img: yourLibraryIcon,
    altImg: "your library spotify icon",}

export const YOUR_LIBRARY_SEARCH_BAR = {
    textPaceholder: "Search your library",
    img: lensIcon,
    alt: "search your library - busca en tu biblioteca",
    dataDescr: "Search in Your Library"

}

// # - titulo - album
export const HEAD_SONG_CONTAINER = {
    numSong:"#",
    title: "Title",
    album: "Álbum"
}

// saved songs card

export const SAVED_SONGS_CARD_CONSTANTS = {
    name: "Saved Songs",
    img: "https://misc.scdn.co/liked-songs/liked-songs-300.png",
    type: "Playlist",
    id: "0"
}