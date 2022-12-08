import { useSearchParams } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Image from "mui-image";
import { useEffect, useState } from "react";
import NotFound from "../assets/images/search.png";
import { Movie } from "../models/Movie";
import { getMovieByID } from "../middleware/getMovieByID";
import { Credits } from "../models/Credits";
import { getCredits } from "../middleware/getCredits";
import PersonList from "../components/PersonList";
import Loading from "../components/Loading";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { getUserID } from "../middleware/getUserID";
import PlaylistDropwdown from "../components/PlaylistDropdown";
import PlaylistsDropdown from "../components/Playlists/PlaylistsDropdown";
import {Playlist} from "../models/Playlist";
import {getUserLists} from "../middleware/PlaylistsMiddleware/getUserLists";

function MoviePage() {
  const [param] = useSearchParams();
  const movieId = param.get("movieId") !== null ? param.get("movieId") : '';
  const [movie, setMovie] = useState<Movie>();
  const [crew, setCrew] = useState<Credits>();
  const [cast, setCast] = useState<Credits>();
  const [loading, setLoading] = useState(false);
  const [playlistsM,setPlaylistsM] = useState<Playlist[]>([])
  const userID = getUserID();

  const initLoad = async () => {
    setLoading(true);
    if (movieId != null) {
      setLoading(false);
      setMovie(await getMovieByID(parseInt(movieId)));
      setCrew(await getCredits(parseInt(movieId)));
      setCast(await getCredits(parseInt(movieId)));
      const tempArr = await getUserLists(parseInt(getUserID()));
      setPlaylistsM(tempArr);
    } else {
      setMovie(undefined);
      setCrew(undefined);
      setCast(undefined);
    }
  };

  useEffect(() => {
    initLoad();
  }, []);

  const movieBackdrop =
    movie?.backdrop_path != null
      ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
      : NotFound;

  const movieURL =
    movie?.poster_path != null
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : NotFound;

  return (
    <>
      {loading ? (
        <Loading />
      ) : movie !== undefined ? (
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
                      {Math.floor(movie.vote_average * 10) / 10} {"("}
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
              <Box
                sx={{
                  width: "auto",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                {movieId !==null && playlistsM.length !==0 ?
                   <>
                     <PlaylistAddIcon sx={{ color: "#fff" }} />
                     <PlaylistsDropdown playlists={playlistsM} movieId={parseInt(movieId)}/>
                   </>
                    :''
                }
              </Box>
              <Grid
                container
                className="reveal"
                justifyContent="center"
                alignItems="center"
                flexDirection="row"
                sx={{
                  margin: "auto",
                  padding: "20px 20px 40px 20px",
                }}
              >
                {cast === undefined ? (
                  " "
                ) : (
                  <>
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
                      className="reveal"
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
                      <PersonList prop={cast.cast} />
                      {/* </Carousel> */}
                    </Grid>
                  </>
                )}
                {crew === undefined ? (
                  " "
                ) : (
                  <>
                    <Grid
                      item
                      className="reveal"
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
                      className="reveal"
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
                      <PersonList prop={crew.crew} />
                      {/* </Carousel> */}
                    </Grid>
                  </>
                )}{" "}
              </Grid>
            </Container>
          </Container>{" "}
        </>
      ) : (
        <Typography
          color="#fff"
          className="reveal"
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
    </>
  );
}
export default MoviePage;
