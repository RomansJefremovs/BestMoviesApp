import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import { Playlist } from "../../models/Playlist";
import { addMovieToList } from "../../middleware/PlaylistsMiddleware/addMovieToList";
import { getUserID } from "../../middleware/getUserID";
interface PlaylistsDropdownProps {
  playlists: Playlist[];
  movieId: number;
}
const PlaylistsDropdown = ({ playlists, movieId }: PlaylistsDropdownProps) => {
  const [playlist, setPlaylist] = useState("");
  const handleChange = async (event: SelectChangeEvent) => {
    const listId = event.target.value;
    await addMovieToList(listId, movieId, getUserID());
  };

  return (
    <Box sx={{ minWidth: 150, width: "100%", padding: "10px" }}>
      <FormControl
        fullWidth
        sx={{
          // "& .MuiInputBase-root": {
          //   color: "#fff",
          // },
          // "& .MuiInputLabel-root": {
          //   color: "#fff",
          // },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#fff",
            borderRadius: "10px",
            opacity: "20%",
          },
          // "& .Mui:focused": {
          //   borderColor: "#fff",
          //   color: "#fff",
          // },
          // "& .Mui:hover": {
          //   borderColor: "#fff",
          //   color: "#fff",
          // },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "#fff",
            },
          "& .MuiSvgIcon-root" : {
            color:"#fff"
          }
        }}
      >
        <InputLabel
          id="demo-simple-select-label"
          sx={{
            borderColor: "#fff",
            color: "#fff",
          }}
        >
          Add to Playlist
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={playlist}
          label="Playlists"
          onChange={handleChange}
        >
          {playlists.map((playlist) => {
            return (
              <MenuItem
                sx={{ backgroundColor: "#yellow" }}
                value={playlist.list_id}
              >
                {playlist.list_name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default PlaylistsDropdown;
