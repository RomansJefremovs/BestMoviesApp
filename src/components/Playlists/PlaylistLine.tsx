import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
interface PlaylistLineProps {
    playlistName:string,
    playlistId: number
}
const PlaylistLine = ({playlistName,playlistId}:PlaylistLineProps) => {
    const  onPlaylistClick = ()=>{
        window.location.href = `/playlist?playlistId=${playlistId}&playlistName=${playlistName}`
    }
  return(
        <Box onClick={onPlaylistClick}>
            <Typography sx={{color:"white"}}>{playlistName}</Typography>
        </Box>
  )
}
export default PlaylistLine