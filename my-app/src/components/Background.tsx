import { Container, Box, Typography, CardMedia, Grid } from "@mui/material";
import backgroundVideo from "../videos/BestMovies.webm";

function Background() {
  return (
    <Container
      className="background"
      sx={{
        display: { xs: "block" },
      }}
    >
      <Grid container>
        <Box>
          <CardMedia
            component="video"
            className="backgroundVideo"
            src={backgroundVideo}
            autoPlay
            muted
            loop
          />
          <Typography
            variant="h1"
            sx={{
              display: { xs: "flex" },
              position: "absolute",
              alignItems: "flex-start",
              justifyContent: "center",
              width: "100%",
              fontWeight: "bold",
              height: "auto",
              typography: {
                xs: { top: "4em", fontSize: "2em" },
                sm: { top: "7em" },
                md: { top: "7em", bottom: 0, fontSize: "2.5em" },
                lg: {
                  alignItems: "center",
                  top: 0,
                  bottom: 0,
                  fontSize: "4em",
                },
              },
            }}
          >
            Best Movies. <br />
            Right at Your Fingertips.
          </Typography>
        </Box>
      </Grid>
    </Container>
  );
}
export default Background;
