import { useSearchParams } from "react-router-dom";
import {useEffect, useState} from "react";
import {multiSearch} from "../middleware/multiSearch";
import {SMovie, SPerson, Tv} from "../models/MultiSearch";
import MultiSearchList from "../components/MultiSearchList";

function Search() {
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
  useEffect(()=>{
    handleMultiSearch()
  },[])
  return (
      <>
        {result.length !=0 ? <MultiSearchList array={result}/> : <p>Oops!</p>}
      </>

  );
}

export default Search;