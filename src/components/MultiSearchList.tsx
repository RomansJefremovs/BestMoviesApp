import {SMovie, SPerson, Tv} from "../models/MultiSearch";
import MoviePosterBox from "./MoviePosterBox";
import PersonPosterBox from "./PersonPosterBox";
interface MultiSearchListProps {
    array:(SMovie|SPerson|Tv)[]
}
const MultiSearchList = ({array}:MultiSearchListProps) => {

    return(
        <>
            {array.map(item=>{
                if (item.media_type === 'movie'){
                    return <MoviePosterBox
                        key={item.id}
                        id={item.id}
                        poster_path={"poster_path" in item ? item.poster_path : null}
                        title={"title" in item ? item.title : ''}
                        vote_average={"vote_average" in item ? item.vote_average : 0}
                    />
                }else{
                    return <PersonPosterBox
                        key={item.id}
                        id={item.id}
                        profile_path={"profile_path" in item ? item.profile_path :''}
                        name={"name" in item ? item.name :''}
                        known_for_department={''}/>
                }
            })}
        </>
    )
}
export default MultiSearchList