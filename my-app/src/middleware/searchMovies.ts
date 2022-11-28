import callApi from "./callApi";
import {SearchMovie} from "../models/movies";

export const searchMovies = async (movie_name:string):Promise<SearchMovie> => {
    const query = movie_name.replace(/\s/g,"%20").toLowerCase()
    const baseURl = `https://api.themoviedb.org/3/search/movie?api_key=ac1ccaf7cc1c015abd2c2cddca72cb16&query=${query}`
    return await callApi(baseURl)
}

