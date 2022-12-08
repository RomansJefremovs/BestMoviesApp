import {Playlist} from "../../models/Playlist";
import PlaylistLine from "./PlaylistLine";
import * as React from "react";
import {Button, Typography} from "@mui/material";
import NewPlaylist from "./NewPlaylist";
import {useEffect, useState} from "react";
import ErrorModal from "./ErrorModal";
import PlaylistsDropdown from "./PlaylistsDropdown";
import {getUserID} from "../../middleware/getUserID";
import {getUserLists} from "../../middleware/PlaylistsMiddleware/getUserLists";

interface MyPlaylistsProps {
    userId:string,
    open:boolean,
    error:boolean,
    handleClose:()=>void,
    handleOpen:()=>void,
    handleErrorClose:()=>void,
    handleErrorOpen:()=>void,
}
const MyPlaylists = ({userId,
                         handleErrorOpen,
                         handleErrorClose,
                         handleOpen,
                         handleClose,
                         open,
                         error}:MyPlaylistsProps) => {
    const [playlists, setPlaylists] = useState<Playlist[]>([]);
    const initialLoadLists = async () => {
        const tempArr = await getUserLists(parseInt(getUserID()));
        console.log(tempArr);
        setPlaylists(tempArr);
    };

    useEffect(() => {
        initialLoadLists();
    },[]);
  return(
      <>
          <Button onClick={handleOpen}>Create Playlist</Button>
          <NewPlaylist open={open} handleClose={handleClose} handleOpen={handleOpen} initialLoad={initialLoadLists} userId={userId} handleErrorOpen={handleErrorOpen}/>
          <ErrorModal open={error} handleClose={handleErrorClose}/>
        {playlists.length !== 0 ? playlists.map(playlist=>{
          return <PlaylistLine key={playlist.list_id} playlistName={playlist.list_name} playlistId={playlist.list_id}/>
        }):
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
        }
          <PlaylistsDropdown playlists={playlists} movieId={488}/>
      </>
  )
}
export default MyPlaylists