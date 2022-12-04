import {Movie} from "../models/Movie";
import {getFavouritesIds} from "./getFavouritesIds";
import {transformArray} from "./transformArray";

export const getAllFavouriteMoviesById = async(userId:number):Promise<Movie[]> => {
    const tempArr:number[] = await getFavouritesIds(userId)
    return await transformArray(tempArr)
}