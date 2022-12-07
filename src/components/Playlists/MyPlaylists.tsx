import {Playlist} from "../../models/Playlist";
import PlaylistLine from "./PlaylistLine";
import * as React from "react";
import {Button} from "@mui/material";
import NewPlaylist from "./NewPlaylist";
import {useState} from "react";
import ErrorModal from "./ErrorModal";

interface MyPlaylistsProps {
  playlists: Playlist[]
    initialLoad:()=> Promise<void>
    userId:string
}
const MyPlaylists = ({playlists,initialLoad, userId}:MyPlaylistsProps) => {
    const [open, setOpen] = React.useState(false);
    const [error, setError] = useState<boolean>(false)
    const handleErrorOpen = ()=>setError(true)
    const handleErrorClose = ()=>setError(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return(
      <>
          <Button onClick={handleOpen}>Create Playlist</Button>
          <NewPlaylist open={open} handleClose={handleClose} handleOpen={handleOpen} initialLoad={initialLoad} userId={userId} handleErrorOpen={handleErrorOpen}/>
          <ErrorModal open={error} handleClose={handleErrorClose}/>
        {playlists.map(playlist=>{
          return <PlaylistLine key={playlist.list_id} playlistName={playlist.list_name} playlistId={playlist.list_id}/>
        })}
      </>
  )
}
export default MyPlaylists