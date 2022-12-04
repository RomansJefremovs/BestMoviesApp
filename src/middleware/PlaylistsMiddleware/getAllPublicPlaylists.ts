import callApi from "../callApi";

export const getAllPublicPlaylists = async (user_id:number)=> {
    const url = `https://cloudcomputingapi.azurewebsites.net/Movies/list/global/get/${user_id}`
    try {
        const temp = await callApi(url,"GET")
        return temp
    }catch (e) {
        return `Error ${e}`
    }
}