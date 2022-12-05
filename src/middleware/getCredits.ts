import {Credits} from "../models/Credits";
import callApi from "./callApi";

export const getCredits = async (movie_id:number):Promise<Credits> => {
    try {
        return await callApi(`
https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=ac1ccaf7cc1c015abd2c2cddca72cb16&language=en-US`,"GET")
    }catch (e){
        return {cast: [], crew: [], id: 0}
    }
}