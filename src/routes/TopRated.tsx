import { useEffect, useState } from "react";
import { Movie } from "../models/Movie";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import MoviesList from "../components/MoviesList";
import notFound from "../assets/images/search.png";
import { getTopRated } from "../middleware/getTopRated";
import Loading from "../components/Loading";

const TopRated = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  const initialLoad = async () => {
    setLoading(true);
    const temp = await getTopRated();
    setLoading(false);
    setMovies(temp.results);
  };

  useEffect(() => {
    initialLoad();
  }, []);

  return (
    <Container
      className="content"
      sx={{
        display: { xs: "block" },
        borderRadius: "30px",
        backgroundColor: "#000",
        minHeight: "40em",
      }}
    >
      <Grid container>
        <Box
          sx={{
            display: { xs: "flex" },
            width: "100%",
            height: "auto",
          }}
        >
          {movies.length !== 0 ? (
            <Typography
              variant="h2"
              sx={{
                padding: "40px",
                fontSize: "1.5em",
                fontWeight: "bold",
              }}
            >
              Top 20 rated movies
            </Typography>
          ) : (
            <Typography
              variant="h2"
              sx={{
                padding: "70px",
                fontSize: "3em",
                fontWeight: "bold",
              }}
            >
              Oops!
            </Typography>
          )}
          <Divider />
        </Box>
      </Grid>

      <Grid
        container
        sx={{ padding: "2em", marginTop: "5em" }}
      >
        {
        loading ? (
          <Loading />
        ) : 
        movies.length !== 0 ? (
          <Grid
            item
            display="grid"
            gridTemplateColumns={{
              xs: "repeat(3, 1fr)",
              sm: "repeat(6, 1fr)",
              md: "repeat(9, 1fr)",
              lg: "repeat(12, 1fr)",
            }}
            gap={3}
          >
            <MoviesList movies={movies} />
          </Grid>
        ) : (
          <>
            <Box
              className="reveal"
              sx={{
                color: "#fff",
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                marginLeft: "30px",
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <img
                width="200em"
                height="200em"
                src={notFound}
                alt="Not Found Image"
                className="not-found-image"
              />
            </Box>

            <Typography
              variant="h2"
              sx={{
                top: "20em",
                fontSize: "1.5em",
                textTransform: "none",
              }}
            >
              No such movie. Try again!
            </Typography>
          </>
        )}
      </Grid>
    </Container>
  );
};
export default TopRated;
