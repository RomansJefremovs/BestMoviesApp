import { useEffect, useState } from "react";
import { Movie } from "../models/Movie";
import Box from "@mui/material/Box";
import { Container, Divider, Grid, Typography } from "@mui/material";
import { getUserID } from "../middleware/getUserID";
import MoviesList from "../components/MoviesList";
import { getAllPublicPlaylists } from "../middleware/PlaylistsMiddleware/getAllPublicPlaylists";

function Playlists() {
  const [playlists, setPlaylists] = useState<Movie[]>([]);
  const userId = getUserID();

  const initialLoad = async (userId: number) => {
    // const tempArr = await getAllPublicPlaylists(userId);
    // console.log(tempArr);
    // setPlaylists(tempArr);
  };

  useEffect(() => {
    initialLoad(parseInt(userId));
  },[]);

  return (
    <>
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
            {playlists ? (
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
                My Playlists
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
          {playlists.length !== 0 ? (
            <Grid
              container
              display="grid"
              gridTemplateColumns={{
                xs: "repeat(3, 1fr)",
                sm: "repeat(6, 1fr)",
                md: "repeat(9, 1fr)",
                lg: "repeat(12, 1fr)",
              }}
              gap={3}
            >
              <MoviesList movies={playlists} />
            </Grid>
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
        </Grid>
      </Container>
    </>
  );
}

export default Playlists;