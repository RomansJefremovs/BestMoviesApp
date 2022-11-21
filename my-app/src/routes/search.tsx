import { useSearchParams } from "react-router-dom";

function Search() {
  const [searchTerm] = useSearchParams();

  return (
    <div className="search"/>
  );
}

export default Search;