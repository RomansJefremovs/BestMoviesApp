import {Movies} from "../models/Movies";
import {Movie} from "../models/Movie";
import MoviePosterBox from "./MoviePosterBox";
import {handleFavouritesProps} from "../interfaces/handleFavourtiesProps";

interface MoviesListProps{
    movies:Movie[],
    initialLoad?: (userId: number) => Promise<void>
    initialLoadLists?:() => Promise<void>
    isListBox?:boolean
    list_id?:number
}
const MoviesList = ({movies,initialLoad,initialLoadLists,isListBox,list_id}:MoviesListProps) => {

    return (<>{
        movies.map((movie: Movie) => {
            return (
                <MoviePosterBox
                    key={movie.id}
                    id={movie.id}
                    poster_path={movie.poster_path}
                    title={movie.title}
                    vote_average={movie.vote_average}
                    initialLoad={initialLoad}
                    initialLoadLists={initialLoadLists}
                    isListBox={isListBox}
                    list_id={list_id}
                />
            );
        })
    }</>)
}

export default MoviesList
