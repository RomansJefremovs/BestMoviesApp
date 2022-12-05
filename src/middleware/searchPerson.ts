import {SearchPerson} from "../models/SearchPerson";
import callApi from "./callApi";

export const searchPerson = async (person_name:string):Promise<SearchPerson> => {
    const query = person_name.replace(/\s/g,"%20").toLowerCase()
    try {
        return await callApi(`https://api.themoviedb.org/3/search/person?api_key=ac1ccaf7cc1c015abd2c2cddca72cb16&language=en-US&query=${query}&include_adult=false`,"GET")
    }catch (e) {
        return {page: 0, results: [], total_pages: 0, total_results: 0}
    }
}