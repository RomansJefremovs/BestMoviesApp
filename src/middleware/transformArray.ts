import {Movie} from "../models/Movie";
import {getMovieByID} from "./getMovieByID";

export const transformArray = async(arr:number[]):Promise<Movie[]>=> {
    let resultArr:Movie[] = []
    for (let i = 0; i < arr.length; i++) {
        let temp:number = arr[i]
        let tempMovie:Movie = await getMovieByID(temp)
        resultArr.push(tempMovie)
    }
    return resultArr
}