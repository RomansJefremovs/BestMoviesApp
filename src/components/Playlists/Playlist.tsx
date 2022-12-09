import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Movie } from "../../models/Movie";
import { getPlaylist } from "../../middleware/PlaylistsMiddleware/getPlaylist";
import { getUserID } from "../../middleware/getUserID";
import { transformArray } from "../../middleware/transformArray";
import MoviesList from "../MoviesList";
import { Container, Divider, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";

const Playlist = () => {
  const [playlistContent, setPlaylistContent] = useState<Movie[]>([]);
  const [param] = useSearchParams();
  const listId = param.get("playlistId");
  const playlistName = param.get("playlistName");
  const userId = getUserID();

  const playlistLoad = async () => {
    if (listId !== null && userId !== "Not Found") {
      const idArray = await getPlaylist(parseInt(listId), userId);
      const playlistContent = await transformArray(idArray);
      setPlaylistContent(playlistContent);
    } else {
      setPlaylistContent([]);
    }
  };
  useEffect(() => {
    playlistLoad();
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
          {playlistName !== null ? (
            <Typography
              variant="h2"
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                marginLeft: "2.4em",
                fontSize: "1.5em",
                fontWeight: "100",
                textTransform: "none",
              }}
            >
              Playlist "<strong>{playlistName}</strong>"
            </Typography>
          ) : (
            <Typography
              color="#fff"
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                margin: "0 auto",
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              Oops! Nothing's here.
            </Typography>
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
        {playlistContent.length !== 0 ? (
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
            {listId ? (
              <MoviesList
                movies={playlistContent}
                initialLoadLists={playlistLoad}
                isListBox={true}
                list_id={parseInt(listId)}
              />
            ) : (
              <Typography
                variant="h2"
                sx={{
                  padding: "70px",
                  fontSize: "3em",
                  fontWeight: "bold",
                }}
              >
                Oops! Something went wrong. <br></br> Try again!
              </Typography>
            )}
          </Grid>
        ) : (
          <Box>
            <Typography
              color="#fff"
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
              Oops! Nothing's here. <br></br> Add some movies!
            </Typography>
          </Box>
        )}
      </Grid>
    </Container>
  );
};

export default Playlist;
