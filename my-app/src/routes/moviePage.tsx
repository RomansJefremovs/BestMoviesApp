import { useSearchParams } from "react-router-dom";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "mui-image";
import { useEffect, useState } from "react";
import NotFound from "../assets/images/search.png";
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

  const movieBackdrop =
    movie?.backdrop_path != null
      ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
      : NotFound;

  const movieURL =
    movie?.poster_path != null
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : NotFound;

  const personURL =
    person?.profile_path != null
      ? `https://image.tmdb.org/t/p/w500${person.profile_path}`
      : NotFound;

  return (
    <>
      <Container className="background">
        <Box>
          <Image
            src={movie?.backdrop_path != null ? movieBackdrop : movieURL}
            style={{
              position: "absolute",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginLeft: "auto",
              marginRight: "auto",
              height: "33em",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              opacity: "40%",
              objectPosition: "75%",
              zIndex: 1,
            }}
          />
        </Box>
      </Container>
      <Container
        className="content"
        sx={{ marginTop: "2em", minHeight: "8em" }}
      >
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
                  style={{
                    transitionDuration: "500ms",
                    animation:
                      "1500ms cubic-bezier(0.7, 0, 0.6, 1) 0s 1 normal none running materialize",
                    height: "30em",
                    width: "20em",
                    borderRadius: "10px",
                  }}
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
                    sx={{
                      fontSize: "17px",
                      fontFamily: "Cooper Hewitt Semibold",
                    }}
                  >{`Release Date:`}</Typography>
                  <Typography
                    color="#fff"
                    sx={{
                      float: "right",
                      fontSize: "15px",
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
                    sx={{
                      fontSize: "17px",
                      fontFamily: "Cooper Hewitt Semibold",
                    }}
                  >
                    Rate:
                  </Typography>
                  <Typography
                    color="#fff"
                    sx={{
                      float: "right",
                      fontSize: "15px",
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
                padding: "20px",
                marginTop: { xs: "20em", sm: "17em", md: 0 },
              }}
            >
              {movie.overview}
            </Typography>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              flexDirection="row"
              sx={{
                margin: "auto",
                padding: "20px 20px 40px 20px",
              }}
            >
              <Grid
                item
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                }}
              >
                <Typography
                  color="#fff"
                  sx={{
                    fontSize: "50px",
                    padding: "30px 30px 30px 0",
                    fontFamily: "Cooper Hewitt Bold",
                  }}
                >
                  Cast
                </Typography>
              </Grid>
              <Grid
                display="grid"
                gridTemplateColumns={{
                  xs: "repeat(8, 1fr)",
                  sm: "repeat(10, 1fr)",
                  md: "repeat(12, 1fr)",
                  lg: "repeat(12, 1fr)",
                }}
                gap={3}
              >
                {/* <Carousel> */}
                <PersonList prop={credits.cast} />
                {/* </Carousel> */}
              </Grid>

              <Grid
                item
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                }}
              >
                <Typography
                  color="#fff"
                  sx={{
                    fontSize: "50px",
                    padding: "30px 30px 30px 0",
                    fontFamily: "Cooper Hewitt Bold",
                  }}
                >
                  Crew
                </Typography>
              </Grid>
              <Grid
                display="grid"
                gridTemplateColumns={{
                  xs: "repeat(8, 1fr)",
                  sm: "repeat(10, 1fr)",
                  md: "repeat(12, 1fr)",
                  lg: "repeat(12, 1fr)",
                }}
                gap={3}
              >
                {/* <Carousel> */}
                <PersonList prop={credits.crew} />
                {/* </Carousel> */}
              </Grid>
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
    </>
  );
}
export default MoviePage;
