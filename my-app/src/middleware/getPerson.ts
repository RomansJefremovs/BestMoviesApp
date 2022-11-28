import {Person} from "../models/Person";
import {PersonByID} from "../models/PersonByID";
import {SearchPerson} from "../models/SearchPerson";
import {getPersonByID} from "./getPersonByID";
import {searchPerson} from "./searchPerson";

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