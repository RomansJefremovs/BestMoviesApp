import {getPlaylist} from "./getPlaylist";
import {addMovieToList} from "./addMovieToList";
import {removeMovieFromList} from "./removeMovieFromList";
import {Playlist} from "../../models/Playlist";
import {getUserID} from "../getUserID";

export const checkIfMovieIsInList = async (playlists:Playlist[],movieId:number) => {
    let isInPlaylists:boolean = false
    for (let i = 0; i < playlists.length; i++) {
        const playlistContent = await getPlaylist(playlists[i].list_id, getUserID())
        for (let index = 0; index < playlistContent.length; index++) {
            if (playlistContent[index] === movieId) {
               return true
            }else{
                console.log('nothing')
            }
        }
    }
    return isInPlaylists
}