import {Crew} from "../models/Crew";
import {Cast} from "../models/Cast";
import PersonPosterBox from "./PersonPosterBox";
interface PersonListProps{
    prop: Cast[]|Crew[]
}
const PersonList = ({prop}:PersonListProps) => {
    return(
        <>
            {
                prop.map(item=>{
                    return <PersonPosterBox
                        id={item.id}
                        profile_path={item.profile_path}
                        name={item.name}
                        known_for_department={item.known_for_department} />
                })
            }
        </>
    )
}
export default PersonList