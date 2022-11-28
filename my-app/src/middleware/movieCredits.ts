import callApi from "./callApi";
import {Credits, Person, PersonByID, SearchPerson} from "../models/movies";

export const getCredits = async (movie_id:number):Promise<Credits> => {
    return await callApi(`
https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=ac1ccaf7cc1c015abd2c2cddca72cb16&language=en-US`,"GET")
}
export const getPersonByID = async (person_id:number):Promise<PersonByID> => {
    return await callApi(`https://api.themoviedb.org/3/person/${person_id}?api_key=ac1ccaf7cc1c015abd2c2cddca72cb16&language=en-US`)
}

export const searchPerson = async (person_name:string):Promise<SearchPerson> => {
    const query = person_name.replace(/\s/g,"%20").toLowerCase()
    return await callApi(`https://api.themoviedb.org/3/search/person?api_key=ac1ccaf7cc1c015abd2c2cddca72cb16&language=en-US&query=${query}&include_adult=false`,"GET")
}

export const getPerson = async(person_id:number):Promise<Person> => {
    const personById: PersonByID = await getPersonByID(person_id)
    const personBySearch: SearchPerson = await searchPerson(personById.name)
    let result
        if (personBySearch.total_results == 1) {
            result = personBySearch.results[0].known_for
        }else {
            for (let i = 0; i < personBySearch.results.length; i++) {
                if (person_id == personBySearch.results[i].id && personBySearch.results[i] != undefined) {
                    result = personBySearch.results[i].known_for
                }else result = null
            }
        }

    const knownFor = result != null ? result :  {
        profile_path: "none",
        adult: false,
        id: 1,
        known_for: [{}],
        name: "dummy",
        popularity: 0
    }
    return  { ...personById,known_for:knownFor}
}