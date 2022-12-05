import callApi from "./callApi";

export const removeFromFavourites = async (userId:number, movieId:number):Promise<string> => {
    const url = `https://cloudcomputingapi.azurewebsites.net/Movies/favorites/remove/${userId}/${movieId}`
    try {
        return  await callApi(url,"POST")
    }catch (e) {
        return `Error ${e}`
    }

}