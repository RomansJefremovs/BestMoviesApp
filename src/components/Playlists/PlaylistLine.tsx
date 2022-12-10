import { Box, Button, Typography } from "@mui/material";
import PlaylistPlay from "@mui/icons-material/PlaylistPlay";

interface PlaylistLineProps {
  playlistName: string;
  playlistId: number;
}
const PlaylistLine = ({ playlistName, playlistId }: PlaylistLineProps) => {
  const onPlaylistClick = () => {
    window.location.href = `/playlist?playlistId=${playlistId}&playlistName=${playlistName}`;
  };
  return (
    <Box sx={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"flex-start"}}>
      <PlaylistPlay sx={{ color: "#fff" }} />
      <Button
        sx={{
          fontSize: "15px",
          fontFamily: "Cooper Hewitt Semibold",
          textTransform: "none",
          color: "#fff",
          backgroundColor: "2e2e2e",
          display:"flex", 
          justifyContent:"flex-start"
        }}
        onClick={onPlaylistClick}
      >
        <Typography className="hover-underline-animation">
          {playlistName}
        </Typography>
      </Button>
    </Box>
  );
};
export default PlaylistLine;
