import {Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {useState} from "react";
import {Playlist} from "../../models/Playlist";
import {addMovieToList} from "../../middleware/PlaylistsMiddleware/addMovieToList";
import {getUserID} from "../../middleware/getUserID";
interface PlaylistsDropdownProps {
    playlists: Playlist[],
    movieId:number
}
const PlaylistsDropdown = ({playlists, movieId}:PlaylistsDropdownProps) => {
    const [playlist, setPlaylist] = useState('');
    const handleChange = async (event: SelectChangeEvent) => {
        const listId = event.target.value
        await addMovieToList(listId,movieId,getUserID())
    };

    return (
        <Box sx={{ minWidth: 120 , maxWidth: 250}}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Playlists</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={playlist}
                    label="Playlists"
                    onChange={handleChange}
                >
                    {playlists.map(playlist=>{
                        return <MenuItem value={playlist.list_id}>{playlist.list_name}</MenuItem>
                    })}
                </Select>
            </FormControl>
        </Box>
    );
}

export default PlaylistsDropdown