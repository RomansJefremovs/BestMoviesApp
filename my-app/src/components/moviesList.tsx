import {Movies} from "../models/Movies";
import {Movie} from "../models/Movie";
import MoviePosterBox from "./box";
const MoviesList = ({movies}:Movies) => {

    return (<>{
        movies.map((movie: Movie) => {
            return (
                <MoviePosterBox
                    key={movie.id}
                    id={movie.id}
                    poster_path={movie.poster_path}
                    title={movie.title}
                    vote_average={movie.vote_average}
                />
            );
        })
    }</>)
}

export default MoviesList
