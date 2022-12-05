import {Movie} from "../models/Movie";
import callApi from "./callApi";

export const getMovieByID = async(movieID:number):Promise<Movie> => {
    const baseURL = `https://api.themoviedb.org/3/movie/${movieID}?api_key=ac1ccaf7cc1c015abd2c2cddca72cb16`
    try {
        return await callApi(baseURL)
    }catch (e) {
          return  {adult: false,
            backdrop_path: "",
            genre_ids: [],
            id: 0,
            original_language: "",
            original_title: "",
            overview: "",
            popularity: 0,
            poster_path: null,
            release_date: "",
            title: "",
            video: false,
            vote_average: 0,
            vote_count: 0
        }
    }
}