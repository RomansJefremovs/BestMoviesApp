import {getPlaylist} from "./getPlaylist";
import {getUserID} from "../getUserID";

export const checkIfMovieIsInList = async (list_id:number,movieId:number) => {
    let isInPlaylists:boolean = false
        const playlistContent = await getPlaylist(list_id, getUserID())
        for (let index = 0; index < playlistContent.length; index++) {
            if (playlistContent[index] === movieId) {
               isInPlaylists = true
            }else{

            }
        }
    return isInPlaylists
}