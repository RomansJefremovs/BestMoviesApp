import callApi from "./callApi";

export const getFavouritesIds = async(userId:number):Promise<number[]> => {
    const baseURL = `https://cloudcomputingapi.azurewebsites.net/Movies/favorites/get/${userId}`
    try {
        return await callApi(baseURL)
    }catch (e){
        return []
    }

}