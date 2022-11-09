import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";
import {
  Container,
  Box,
  Typography,
  Button,
  CardMedia,
  Divider,
  Grid,
} from "@mui/material";
import { getMovies } from "../dummydata/data";
import { Link as LinkRouter } from "react-router-dom";
import { useState } from "react";

function HomeContent() {
  // Importing dummy data
  // (!) this will be changed to being fetched from API once connection made to DB
  const movies = getMovies();

  // Rating with stars
  const Star = (star: boolean) => {
    if (star == false) {
      return <StarIcon sx={{ color: "#FFE600" }} />;
    } else {
      return <StarOutlineIcon sx={{ color: "#fff" }} />;
    }
  };

  const [star, setStar] = useState(true);

  const handleClick = () => {
    setStar(!star);
  };

  return (
    <Container
      className="content"
      sx={{
        display: { xs: "block" },
        borderRadius: "30px 30px 0 0",
        backgroundColor: "#000",
        marginTop: {
          xs: "12em",
          sm: "18em",
          md: "28em",
          lg: "38em",
        },
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
          <Typography
            variant="h2"
            sx={{
              padding: "30px",
              fontSize: "1.5em",
              fontWeight: "bold",
            }}
          >
            New & Popular
          </Typography>
          <Divider />
        </Box>
      </Grid>

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
          {movies.map((movie: any) => {
            return (
              <Box gridColumn="span 3" sx={{ width: "100%" }}>
                <LinkRouter to={`/movies/${movie.imdbID}`} key={movie.imdbID}>
                  <CardMedia
                    component="img"
                    className="poster"
                    src={movie.Poster}
                    sx={{
                      display: { xs: "block" },
                    }}
                  />
                </LinkRouter>
                <Box sx={{ display: { xs: "block" } }}>
                  <Typography
                    variant="h5"
                    sx={{
                      padding: "20px 0 0 5px",
                      fontSize: "1.1em",
                      fontWeight: "bold",
                    }}
                  >
                    {movie.Title}
                  </Typography>
                </Box>

                <Grid
                  container
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="center"
                >
                  <Box
                    className="ratings"
                    sx={{ marginTop: "-33px", marginBottom: "0.8em" }}
                  >
                    <Button
                      sx={{ marginRight: "-1em", padding: "7px" }}
                      onClick={() => {
                        handleClick();
                      }}
                    >
                      {Star(star)}
                    </Button>

                    <Typography
                      variant="h5"
                      sx={{ fontSize: "16px", marginTop: "11px" }}
                    >
                      {movie.imdbRating}
                    </Typography>
                  </Box>
                </Grid>

                <Box
                  className="buttons"
                  sx={{ gap: 1, display: { xs: "block" } }}
                >
                  <LinkRouter to={`/movies/${movie.imdbID}`} key={movie.imdbID}>
                    <Button id="watch-now-button">
                      <Typography
                        variant="h5"
                        sx={{
                          fontSize: "15px",
                          fontWeight: "600",
                          padding: "5px 10px 5px 10px",
                        }}
                      >
                        Watch Now
                      </Typography>
                    </Button>
                  </LinkRouter>

                  <Button id="favorites-button">
                    <Typography
                      variant="h5"
                      sx={{
                        fontSize: "15px",
                        fontWeight: "600",
                        padding: "5px 10px 5px 10px",
                      }}
                    >
                      + Favorites
                    </Typography>
                  </Button>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Container>
  );
}
export default HomeContent;
