import callApi from "./callApi";
import {SearchMovie} from "../models/SearchMovie";

export const getTopRated = async ():Promise<SearchMovie> => {
    const url = "https://api.themoviedb.org/3/movie/top_rated?api_key=ac1ccaf7cc1c015abd2c2cddca72cb16&language=en-US"
    try {
        return await callApi(url,"GET")
    }catch (e) {
        return {page: 0, results: [], total_pages: 0, total_results: 0}
    }
}