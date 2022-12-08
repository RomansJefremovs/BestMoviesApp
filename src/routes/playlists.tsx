import {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import {Button, Container, Divider, Grid, Typography} from "@mui/material";
import { getUserID } from "../middleware/getUserID";
import MyPlaylists from "../components/Playlists/MyPlaylists";
import {Playlist} from "../models/Playlist";
import {getUserLists} from "../middleware/PlaylistsMiddleware/getUserLists";
import * as React from "react";

function Playlists() {

    const [open, setOpen] = React.useState(false);
    const [error, setError] = useState<boolean>(false)
    const handleErrorOpen = ()=>setError(true)
    const handleErrorClose = ()=>setError(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


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
                My Playlists
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
              sx={{display:"flex", flexDirection:"column"}}
            >
              <MyPlaylists
                  userId={getUserID()}
                  open={open}
                  error={error}
                  handleClose={handleClose}
                  handleOpen={handleOpen}
                  handleErrorClose={handleErrorClose}
                  handleErrorOpen={handleErrorOpen}
              />
            </Grid>
        </Grid>
      </Container>
  );
}

export default Playlists;