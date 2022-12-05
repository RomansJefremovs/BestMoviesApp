import callApi from "./callApi";

export const addToFavourites = async (userId:number, movieId:number):Promise<string> => {
    const url = `https://cloudcomputingapi.azurewebsites.net/Movies/favorites/add/${userId}/${movieId}`
    try {
        return await callApi(url,"POST")
    }catch (e){
        return `Error ${e}`
    }
}