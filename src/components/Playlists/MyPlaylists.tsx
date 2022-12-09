import { Playlist } from "../../models/Playlist";
import PlaylistLine from "./PlaylistLine";
import "../../App.css";
import { Box, Button, Typography } from "@mui/material";
import NewPlaylist from "./NewPlaylist";
import { useEffect, useState } from "react";
import ErrorModal from "./ErrorModal";
import { getUserID } from "../../middleware/getUserID";
import { getUserLists } from "../../middleware/PlaylistsMiddleware/getUserLists";

interface MyPlaylistsProps {
  userId: string;
  open: boolean;
  error: boolean;
  handleClose: () => void;
  handleOpen: () => void;
  handleErrorClose: () => void;
  handleErrorOpen: () => void;
}
const MyPlaylists = ({
  userId,
  handleErrorOpen,
  handleErrorClose,
  handleOpen,
  handleClose,
  open,
  error,
}: MyPlaylistsProps) => {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const initialLoadLists = async () => {
    const tempArr = await getUserLists(parseInt(getUserID()));
    console.log(tempArr);
    setPlaylists(tempArr);
  };

  useEffect(() => {
    initialLoadLists();
  }, []);
  return (
    <>
      <Button
        className="hover-underline-animation"
        sx={{
          transition:" all 0.5s",
          fontSize: "15px",
          margin: "0 auto",
          fontFamily: "Cooper Hewitt Semibold",
          color: "#fff",
          opacity:"50%",
          backgroundColor: "2e2e2e",
          "&:hover" :{
            opacity: 1,
            transition:" all 0.5s"
          }
        }}
        onClick={handleOpen}
      >
        Create Playlist
      </Button>
      <NewPlaylist
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
        initialLoad={initialLoadLists}
        userId={userId}
        handleErrorOpen={handleErrorOpen}
      />
      <ErrorModal open={error} handleClose={handleErrorClose} />
      {playlists.length !== 0 ? (
        playlists.map((playlist) => {
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
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          Oops! <br></br> Nothing's here.
        </Typography>
      )}
    </>
  );
};
export default MyPlaylists;
