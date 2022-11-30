import { useSearchParams } from "react-router-dom";
import { Container, Grid, Typography } from "@mui/material";
import Image from "mui-image";
import { useEffect, useState } from "react";
import NotFound from "../images/search.png";
import { Movie } from "../models/Movie";
import { getMovieByID } from "../middleware/getMovieByID";
import { Credits } from "../models/Credits";
import { getCredits } from "../middleware/getCredits";
import PersonList from "../components/PersonList";
import Carousel from "react-material-ui-carousel";
import { Person } from "../models/Person";

function MoviePage() {
  const [param] = useSearchParams();
  const movieId = param.get("movieId");
  const [movie, setMovie] = useState<Movie>();
  const [person, setPerson] = useState<Person>();
  const [credits, setCredits] = useState<Credits>();

  const initLoad = async () => {
    if (movieId != null) {
      setMovie(await getMovieByID(parseInt(movieId)));
      setCredits(await getCredits(parseInt(movieId)));
    } else {
      setMovie(undefined);
      setCredits(undefined);
    }
  };

  useEffect(() => {
    initLoad();
  });

  const movieURL =
    movie?.poster_path != null
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : NotFound;

  const personURL =
    person?.profile_path != null
      ? `https://image.tmdb.org/t/p/w500${person.profile_path}`
      : NotFound;

  return (
    <Container sx={{ marginTop: "2em", minHeight: "8em" }}>
      {movie !== undefined && credits !== undefined ? (
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "auto",
          }}
        >
          <Container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: { xs: "column", md: "row" },
              height: "30rem",
            }}
          >
            <Grid
              display="flex"
              justifyContent="flex-start"
              flexDirection="row"
              alignItems="center"
            >
              <Image
                src={movieURL}
                style={{ height: "30em", width: "20em", borderRadius: "10px" }}
              />
            </Grid>

            <Container sx={{ width: { md: "35rem" } }}>
              <Grid
                display="flex"
                justifyContent="center"
                flexDirection="row"
                alignItems="center"
              >
                <Typography
                  color="#fff"
                  sx={{
                    padding: "35px 0 35px 0",
                    fontSize: "50px",
                    float: "right",
                    fontFamily: "Cooper Hewitt Semibold",
                  }}
                >
                  {movie.title}
                </Typography>
              </Grid>
              <Grid
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{
                  padding: "5px",
                }}
              >
                <Typography
                  color="#fff"
                  sx={{ fontSize: "15px", fontFamily: "Cooper Hewitt Book" }}
                >{`Release Date:`}</Typography>
                <Typography
                  color="#fff"
                  sx={{
                    float: "right",
                    fontSize: "20px",
                    fontFamily: "Cooper Hewitt Medium",
                  }}
                >{`${movie.release_date}`}</Typography>
              </Grid>
              <Grid
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{
                  padding: "5px",
                }}
              >
                <Typography
                  color="#fff"
                  sx={{ fontSize: "15px", fontFamily: "Cooper Hewitt Book" }}
                >
                  Rate:
                </Typography>
                <Typography
                  color="#fff"
                  sx={{
                    float: "right",
                    fontSize: "20px",
                    fontFamily: "Cooper Hewitt Medium",
                  }}
                >
                  {movie.vote_average} {"("}
                  {movie.vote_count} {" votes)"}
                </Typography>
              </Grid>
            </Container>
          </Container>
          <Typography
            color="#fff"
            sx={{
              margin: "auto",
              padding: "40px 20px 40px 20px",
              marginTop: { xs: "20em", sm: "15em", md: 0 },
            }}
          >
            {movie.overview}
          </Typography>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "row",
              height: "5rem",
            }}
          >
            <Typography>Cast:</Typography>
            <Carousel>
              <PersonList prop={credits.cast} />
            </Carousel>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "row",
              height: "5rem",
            }}
          >
            <Typography>Crew:</Typography>
            <Carousel>
              <PersonList prop={credits.crew} />
            </Carousel>
          </Grid>
        </Container>
      ) : (
        <Typography
          color="#fff"
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          Oops! <br></br> Nothing's here.
        </Typography>
      )}
    </Container>
  );
}
export default MoviePage;
