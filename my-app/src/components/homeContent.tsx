import { Container, Box, Typography, Divider, Grid } from "@mui/material";
import { Movies } from "../models/Movies";
import MoviesList from "./moviesList";

function HomeContent({ movies }: Movies) {
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
          {movies.length !== 0 ? (
            <MoviesList movies={movies} />
          ) : (
            <Typography
              variant="h2"
              sx={{
                padding: "30px",
                fontSize: "1.5em",
                fontWeight: "bold",
              }}
            >
              OOPS! No such movie! Try again!
            </Typography>
          )}
        </Box>
      </Box>
    </Container>
  );
}
export default HomeContent;
