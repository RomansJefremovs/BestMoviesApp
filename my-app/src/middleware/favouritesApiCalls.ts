import callApi from "./callApi";
import {Movie} from "../models/movies";

export const getFavouritesIds = async(userId:number):Promise<number[]> => {
    const baseURL = `https://cloudcomputingapi.azurewebsites.net/Movies/favorites/get/${userId}`
    return await callApi(baseURL)

}
export const getMovieByID = async(movieID:number):Promise<Movie> => {
    const baseURL = `https://api.themoviedb.org/3/movie/${movieID}?api_key=ac1ccaf7cc1c015abd2c2cddca72cb16`
    return await callApi(baseURL)
}

export const transformArray = async(arr:number[]):Promise<Movie[]>=> {
   let resultArr:Movie[] = []
    for (let i = 0; i < arr.length; i++) {
        let temp:number = arr[i]
        let tempMovie:Movie = await getMovieByID(temp)
        resultArr.push(tempMovie)
    }
    return resultArr
}

export const getAllFavouriteMoviesById = async(userId:number):Promise<Movie[]> => {
    const tempArr:number[] = await getFavouritesIds(userId)
    return await transformArray(tempArr)
}

export const addToFavourites = async (userId:number, movieId:number):Promise<string> => {
    const url = `https://cloudcomputingapi.azurewebsites.net/Movies/favorites/add/${userId}/${movieId}`
    return await callApi(url,"POST")
}

export const removeFromFavourites = async (userId:number, movieId:number):Promise<string> => {
    const url = `https://cloudcomputingapi.azurewebsites.net/Movies/favorites/remove/${userId}/${movieId}`
    return  await callApi(url,"POST")

}