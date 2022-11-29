import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { Movie } from "../models/Movie";
import { getAllFavouriteMoviesById } from "../middleware/getAllFavouriteMoviesByID";
import MoviePosterBox from "../components/box";
import Box from "@mui/material/Box";
import {
  CircularProgress,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import Header from "../components/header";
import Footer from "../components/footer";
import { useDebounce } from "../middleware/useDebounce";

interface handleChange {
  handleMessageChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleRadioButtons: () => void;
}

function Favorites() {
  const [favourites, setFavourites] = useState<Movie[]>();
  const initialLoad = async (userId: number) => {
    const tempArr = await getAllFavouriteMoviesById(userId);
    console.log(tempArr);
    setFavourites(tempArr);
  };

  useEffect(() => {
    initialLoad(1);
  });

  return (
    <>
      <Header
      // handleMessageChange={debounceOnChange} handleRadioButtons={handleRadioButtons}
      />
      <Container
        className="content"
        sx={{
          display: { xs: "block" },
          borderRadius: "30px",
          backgroundColor: "#000",
          marginTop: "2.5em",
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
            {favourites ? (
              <Typography
                variant="h2"
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  marginLeft: "2.4em",
                  fontSize: "1.5em",
                  fontWeight: "bold",
                }}
              >
                My Favorites
              </Typography>
            ) : (
              <></>
            )}
            <Divider />
          </Box>
        </Grid>

        <Grid container justifyContent="center">
          <Divider
            sx={{
              backgroundColor: "#404040",
              width: "5em",
              height: "1px",
              marginTop: "3em",
            }}
          />
        </Grid>

        <Grid container sx={{ padding: "2em" }}>
          {favourites ? (
            favourites.map((movie) => {
              return (
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
                  <MoviePosterBox
                    id={movie.id}
                    poster_path={movie.poster_path}
                    title={movie.title}
                    vote_average={movie.vote_average}
                  />
                </Grid>
              );
            })
          ) : (
            <CircularProgress
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
                color: "#fff",
              }}
            />
          )}
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default Favorites;
