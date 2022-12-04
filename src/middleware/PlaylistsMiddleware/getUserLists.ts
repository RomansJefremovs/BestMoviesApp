import callApi from "../callApi";
import {Playlist, Playlists} from "../../models/Playlist";

export const getUserLists = async(user_id:number):Promise<Playlists> => {
    const url = `https://cloudcomputingapi.azurewebsites.net/Movies/list/user/get/${user_id}`
    return  await callApi(url,"GET")
}

