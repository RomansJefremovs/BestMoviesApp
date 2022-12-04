import {Movie} from "../models/Movie";
import callApi from "./callApi";

export const getMovieByID = async(movieID:number):Promise<Movie> => {
    const baseURL = `https://api.themoviedb.org/3/movie/${movieID}?api_key=ac1ccaf7cc1c015abd2c2cddca72cb16`
    return await callApi(baseURL)
}