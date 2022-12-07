import callApi from "../callApi";
import {Playlist} from "../../models/Playlist";

export const getUserLists = async(user_id:number):Promise<Playlist[]> => {
    const url = `https://cloudcomputingapi.azurewebsites.net/Movies/list/user/get/${user_id}`
    try {
        return  await callApi(url,"GET")
    }catch (e) {
        throw e
    }
}

