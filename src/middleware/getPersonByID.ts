import {PersonByID} from "../models/PersonByID";
import callApi from "./callApi";

export const getPersonByID = async (person_id:number):Promise<PersonByID> => {
    return await callApi(`https://api.themoviedb.org/3/person/${person_id}?api_key=ac1ccaf7cc1c015abd2c2cddca72cb16&language=en-US`)
}