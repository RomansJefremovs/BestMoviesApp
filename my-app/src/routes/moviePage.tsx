import {useSearchParams} from "react-router-dom";
import {Container, Typography} from "@mui/material";
import Image from "mui-image";
import {useEffect, useState} from "react";
import NotFound from "../assets/error-404.png";
import {Movie} from "../models/Movie";
import {getMovieByID} from "../middleware/getMovieByID";
import {Credits} from "../models/Credits";
import {getCredits} from "../middleware/getCredits";
import PersonList from "../components/PersonList";

function MoviePage() {
  const [param] = useSearchParams()
  const movieId = param.get("movieId")
  const [movie, setMovie] = useState<Movie>()
  const [credits, setCredits] = useState<Credits>()
  const initLoad = async() => {
    if (movieId != null){
      setMovie(await getMovieByID(parseInt(movieId)))
      setCredits(await getCredits(parseInt(movieId)))
    }else {
      setMovie(undefined)
      setCredits(undefined)
    }
  }
  useEffect(()=>{
    initLoad()
  })
  const url = movie?.poster_path !=null ?  `https://image.tmdb.org/t/p/w500${movie.poster_path}`:NotFound

  return (
      <>
        {
          movie != undefined && credits != undefined
              ?
              <Container sx={{
                display: "flex",
                flexDirection: "column"
              }}>
                <Container sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  height: '30rem',
                  width:'50rem'
                }}>
                  <Container sx={{

                  }}>
                    <Image src={url}/>
                  </Container>
                  <Container>
                    <Typography>{movie.title}</Typography>
                    <Container>
                      <Typography>Released: </Typography>
                      <Typography>{movie.release_date}</Typography>
                    </Container>
                    <Container>
                      <Typography>Popularity:</Typography>
                      <Typography>{movie.popularity}</Typography>
                    </Container>
                    <Container>
                      <Typography>Rating:</Typography>
                      <Typography>{movie.vote_average}</Typography>
                    </Container>
                  </Container>
                </Container>
                <Typography>
                  {movie.overview}
                </Typography>
                <Container sx={{
                  display: "flex",
                  flexDirection: "row",
                  height:"5rem"
                }}>
                  <Typography>Cast:</Typography>
                  <PersonList  prop={credits.cast}/>
                </Container>
                <Container sx={{
                  display: "flex",
                  flexDirection: "row",
                  height:"5rem"
                }}>
                  <Typography>Crew:</Typography>
                  <PersonList  prop={credits.crew}/>
                </Container>
              </Container>
              :
              <Typography>Oops!</Typography>
        }
      </>
  )

}
export default MoviePage;
