import { useSearchParams } from "react-router-dom";
import {useEffect, useState} from "react";
import {Movie} from "../models/Movie";
import {searchMovies} from "../middleware/searchMovies";
import MoviesList from "../components/MoviesList";
import {multiSearch} from "../middleware/multiSearch";
import {Person} from "../models/Person";
import {SMovie, SPerson, Tv} from "../models/MultiSearch";
import MultiSearchList from "../components/MultiSearchList";

function Search() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [result, setResult] = useState<(SMovie|SPerson|Tv)[]>([]);
  const [searchTerm] = useSearchParams();
  const searchResult = searchTerm.get("message")

  const handleMultiSearch = async () => {
    if (searchResult != null){
      const temp = await multiSearch(searchResult);
      if (temp != undefined) {
        setResult(temp.results.filter((obj)=>{
          return obj.media_type !== 'tv'
        }));
      }else{
        setResult([])
      }
    }else{
      return null
    }
  };
  // const handleSearch = async () => {
  //   if (searchResult != null){
  //     const temp = await searchMovies(searchResult);
  //     if (temp != undefined) {
  //       setMovies(temp.results);
  //     }else{
  //       setMovies([])
  //     }
  //   }else{
  //     return null
  //   }
  // };

  useEffect(()=>{
    // handleSearch()
    handleMultiSearch()
  },[])
  return (
      <>
        {result.length !=0 ? <MultiSearchList array={result}/> : <p>Oops!</p>}
      </>

  );
}

export default Search;