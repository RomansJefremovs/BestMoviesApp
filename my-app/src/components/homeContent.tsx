import { Container, Box, Typography, Divider, Grid } from "@mui/material";
import { Movies } from "../models/movies";
import MoviesList from "./moviesList";
import notFound from "../images/search.png";

function HomeContent({ movies }: Movies) {
  return (
    <Container
      className="content"
      sx={{
        display: { xs: "block" },
        borderRadius: "30px",
        backgroundColor: "#000",
        marginTop: {
          xs: "12em",
          sm: "18em",
          md: "28em",
          lg: "38em",
        },
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
              New & Popular
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

      <Grid container sx={{ padding: "2em", marginTop: "5em" }}>
        {movies.length !== 0 ? (
          <Grid
            item
            display="grid"
            gridTemplateColumns=
            {{
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
}
export default HomeContent;
