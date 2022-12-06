import {Movies} from "../models/Movies";
import {Movie} from "../models/Movie";
import MoviePosterBox from "./MoviePosterBox";
import {handleFavouritesProps} from "../models/handleFavourtiesProps";

interface MoviesListProps{
    movies:Movie[],
    initialLoad?: (userId: number) => Promise<void>
}
const MoviesList = ({movies,initialLoad}:MoviesListProps) => {

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
                />
            );
        })
    }</>)
}

export default MoviesList
