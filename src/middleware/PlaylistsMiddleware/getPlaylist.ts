import callApi from "../callApi";

export const getPlaylist = async (list_id:number,userID:string) => {
    const url = `https://cloudcomputingapi.azurewebsites.net/Movies/list/content/get/${userID}/${list_id}`
    try {
        const temp = await callApi(url,"GET")
        return temp
    }catch (e) {
        return "Error"
    }

}