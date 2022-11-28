import {useEffect, useState} from "react";
import {Movie} from "../models/Movie";
import {getAllFavouriteMoviesById} from "../middleware/getAllFavouriteMoviesByID";
import MoviePosterBox from "../components/box";
import Box from "@mui/material/Box";

function Favorites() {
  const [favourites,setFavourites] = useState<Movie[]>()
  const initialLoad = async (userId:number) => {
    const tempArr = await getAllFavouriteMoviesById(userId)
    console.log(tempArr)
    setFavourites(tempArr)
  }

  useEffect(()=>{
    initialLoad(1)
  })
  return <>
    <Box sx={{ width: 1, padding: "6em 0 2em 0" }}>
      <Box
          display="grid"
          gridTemplateColumns={{
            xs: "repeat(6, 1fr)",
            sm: "repeat(8, 1fr)",
            md: "repeat(10, 1fr)",
            lg: "repeat(12, 1fr)",
          }}
          gap={3}
      >
        {favourites?favourites.map(movie => {
          return <MoviePosterBox id={movie.id} poster_path={movie.poster_path} title={movie.title} vote_average={movie.vote_average}/>
        }): <p>Loading</p>}
      </Box>
    </Box>

  </>;
}

export default Favorites;
