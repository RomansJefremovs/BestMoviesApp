import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Playlist } from "../../models/Playlist";
import { addMovieToList } from "../../middleware/PlaylistsMiddleware/addMovieToList";
import { getUserID } from "../../middleware/getUserID";
interface PlaylistsDropdownProps {
  playlists: Playlist[];
  movieId: number;
}
const PlaylistsDropdown = ({ playlists, movieId }: PlaylistsDropdownProps) => {
  const handleChange = async (event: SelectChangeEvent) => {
    const listId = event.target.value;
    if (getUserID() !== 'Not Found'){
        await addMovieToList(listId, movieId, getUserID());
    }
  };

  return (
    <Box sx={{ minWidth: 150, width: "100%", padding: "10px" }}>
      <FormControl
        fullWidth
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#fff",
            borderRadius: "10px",
            opacity: "20%",
          },
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
          label="Playlists"
          onChange={handleChange}
        >
          {playlists.length !== 0 ? playlists.map((playlist) => {
            return (
              <MenuItem
                sx={{ backgroundColor: "#yellow" }}
                value={playlist.list_id}
              >
                {playlist.list_name}
              </MenuItem>
            );
          }):''}
        </Select>
      </FormControl>
    </Box>
  );
};

export default PlaylistsDropdown;
