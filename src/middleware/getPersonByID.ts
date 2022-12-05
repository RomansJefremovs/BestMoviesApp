import {PersonByID} from "../models/PersonByID";
import callApi from "./callApi";

export const getPersonByID = async (person_id:number):Promise<PersonByID> => {
    try {
        return await callApi(`https://api.themoviedb.org/3/person/${person_id}?api_key=ac1ccaf7cc1c015abd2c2cddca72cb16&language=en-US`)
    }catch (e) {
        return {
            adult: false,
            also_known_as: [],
            biography: "",
            birthday: null,
            deathday: null,
            gender: 0,
            homepage: null,
            id: 0,
            imdb_id: "",
            known_for_department: "",
            name: "",
            place_of_birth: null,
            popularity: 0,
            profile_path: null
        }
    }
}