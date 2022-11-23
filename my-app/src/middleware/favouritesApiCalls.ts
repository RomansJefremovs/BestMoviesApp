import {useState} from "react";
import callApi from "./callApi";
import {Movie} from "../models/movies";

interface Input{
    userId:number,
    movieId?:number|string
    type: "GET" | "ADD" | "REMOVE"
}

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

const useFavourites = ({userId,movieId,type}:Input) => {
    const [result, setResult] = useState<Promise<any>[]>()

    const getAllFavourites = async(userId:number) => {
        const result = await getAllFavouriteMoviesById(userId)
    }
    if (type == 'GET'){

    }
}