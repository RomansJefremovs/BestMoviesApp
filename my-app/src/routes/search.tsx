import { useSearchParams } from "react-router-dom";
import {useEffect, useState} from "react";
import {Movie} from "../models/Movie";
import {searchMovies} from "../middleware/searchMovies";
import MoviesList from "../components/MoviesList";

function Search() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchTerm] = useSearchParams();
  const searchResult = searchTerm.get("movie")

  const handleSearch = async () => {
    if (searchResult != null){
      const temp = await searchMovies(searchResult);
      if (temp != undefined) {
        setMovies(temp.results);
      }else{
        setMovies([])
      }
    }else{
      return null
    }
  };

  useEffect(()=>{
    handleSearch()
  },[])
  return (
      <>
        {movies.length !=0 ? <MoviesList movies={movies}/> : <p>Oops!</p>}
      </>

  );
}

export default Search;