import * as React from "react";
import { useEffect, useState } from "react";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import { getUserID } from "../middleware/getUserID";
import { Playlist } from "../models/Playlist";
import PlaylistLine from "../components/Playlists/PlaylistLine";
import { getAllPublicPlaylists } from "../middleware/PlaylistsMiddleware/getAllPublicPlaylists";

const GlobalPlaylists = () => {
  const [global, setGlobal] = useState<Playlist[]>([]);
  const initialLoadGlobal = async () => {
    const globalTemp = await getAllPublicPlaylists(parseInt(getUserID()));
    setGlobal(globalTemp);
  };

  useEffect(() => {
    initialLoadGlobal();
  }, []);
  return (
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
            Public Playlists
          </Typography>
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
          sx={{ display: "flex", flexDirection: "column" }}
        >
          {global.length !== 0 ? (
            global.map((playlist) => {
              return (
                <PlaylistLine
                  key={playlist.list_id}
                  playlistName={playlist.list_name}
                  playlistId={playlist.list_id}
                />
              );
            })
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
      </Grid>
    </Container>
  );
};
export default GlobalPlaylists;
