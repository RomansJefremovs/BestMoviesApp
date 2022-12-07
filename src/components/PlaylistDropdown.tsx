import {
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  InputBase,
  MenuItem,
  Checkbox,
  ListItemText,
  SelectChangeEvent,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getUserID } from "../middleware/getUserID";
import { addMovieToList } from "../middleware/PlaylistsMiddleware/addMovieToList";
import { createPlaylist } from "../middleware/PlaylistsMiddleware/createPlaylist";
import { getUserLists } from "../middleware/PlaylistsMiddleware/getUserLists";
import { removeMovieFromList } from "../middleware/PlaylistsMiddleware/removeMovieFromList";
import { Playlist, Playlists } from "../models/Playlist";
import {getPlaylist} from '../middleware/PlaylistsMiddleware/getPlaylist'

interface DropdownProps{
    userId:string,
    movieId:number
}

const PlaylistDropwdown = ({userId, movieId}:DropdownProps) => {
const [playlists,setPlaylists] = useState<Playlist[]>([])
const [publicPlaylist, setPublicPlaylist] = useState(false);
const [playlistTitle, setPlaylistTitle] = useState<string>("");
const handlePlaylistsLoad= async ()=>{
    const responsePlaylists = await getUserLists(parseInt(userId))
    // createPlaylist("Some",true,userId)
    console.log(responsePlaylists);
    setPlaylists(responsePlaylists)
}

// const handlePlaylists = async (event: SelectChangeEvent<typeof playlistTitle>) => {
//     const {
//       target: { value },
//     } = event;
//     // if (playlists === null && userId !== "Not Found") {
//     //   setPlaylistTitle(value);
//     //   await createPlaylist(playlistTitle, publicPlaylist, userId);
//     //   setPlaylists(typeof value === "string" ? value.split(",") : value);
//     // }
//     if (playlistTitle !== null && userId !== "Not Found") {
//       await addMovieToList(userListId,movieId,userId);
//     //   setPlaylists(typeof value === "string" ? value.split(",") : value);
//     } else if (userId == "Not Found") {
//       window.location.href = "/sign-in";
//     } else {
//       await removeMovieFromList(playlistTitle,parseInt(movieId),userId);
//       setPlaylists([]);
//       movie?.initialLoad
//         ? await movie?.initialLoad(parseInt(userId))
//         : getUserID();
//     }
//   };

const handleAddRemovePlaylist = async (event: SelectChangeEvent<typeof playlistTitle>)=>{
    const {target: { value },} = event;

         const playlistContent = await getPlaylist(parseInt(value), userId)
       for (let index = 0; index < playlistContent.length; index++) {
        if (playlistContent[index] === movieId) {
            addMovieToList(value,movieId, userId)
        }else{
            removeMovieFromList(value,movieId, userId)
        }
        
       }
}
useEffect(()=>{
    handlePlaylistsLoad()
},[])
  return (
    <>
     {playlists.length !== 0 ?
         <FormControl
         sx={{
           color: "#fff",
           backgroundColor: "#202020",
           borderRadius: "5px",
           m: 1,
           width: 250,
         }}
       >
         <InputLabel
           sx={{
             color: "#fff",
             "&.MuiInputLabel-root.Mui-focused": {
               color: "#fff",
             },
           }}
         >
           Save to Playlist
         </InputLabel>
 
         <Select
           multiple
           value={playlistTitle}
           onChange={handleAddRemovePlaylist}
           input={<OutlinedInput label="Save to Playlist" />}
         //   renderValue={(selected) => selected.join(", ")}
           sx={{
             height: "48px",
             paddingTop: "8px",
             width: "250px",
             border: "none",
             color: "#fff",
             "& .MuiSvgIcon-root": {
               color: "#fff",
             },
             "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
               border: "1px solid",
               borderColor: "#fff",
             },
           }}
         >
           <InputBase
             placeholder=" + New Playlist"
             sx={{
               fontSize: "0.9em",
               color: "#fff",
               width: "100%",
               borderRadius: "5px 5px 0 0",
               padding: "4px 4px 4px 14px",
               backgroundColor: "#202020",
             }}
           />
           {playlists.length !== 0 ? playlists.map((playlist) => (
             <MenuItem
               sx={{
                 backgroundColor: "#303030",
                 "&.MuiList-root.MuiMenu-list": {
                   paddingTop: 0,
                   paddingBottom: 0,
                 },
                 "&:hover": {
                   backgroundColor: "#404040",
                 },
                 "&.MuiMenuItem-root.Mui-selected": {
                   backgroundColor: "#404040",
                 },
               }}
               key={playlist.list_id}
               value={playlist.list_id}
             >
               <Checkbox
                 sx={{
                   color: "#e70800",
                   "&.Mui-checked": {
                     color: "#e70800",
                   },
                 }}
                 checked={true}
               />
               <ListItemText sx={{ color: "#fff" }} primary={playlist.list_name} />
             </MenuItem>
           )):<p>Hey</p>}
         </Select>
       </FormControl>
       : <p>Lol</p> 
    }
    </>
  );
};

export default PlaylistDropwdown