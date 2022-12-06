import callApi from "../callApi";

export const getPlaylist = async (list_id:number,userID:string) => {
    const url = `https://cloudcomputingapi.azurewebsites.net/Movies/list/content/get/${userID}/${list_id}`
    try {
        return await callApi(url,"GET")
    }catch (e) {
        return "Error"
    }
}