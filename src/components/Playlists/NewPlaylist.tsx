import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { FormEvent } from "react";
import { createPlaylist } from "../../middleware/PlaylistsMiddleware/createPlaylist";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  background:
    "linear-gradient(120deg, #e70800 0, #000000 100%) no-repeat padding-box",
  border: "none",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

interface NewPlaylistProps {
  open: boolean;
  handleClose: () => void;
  handleOpen: () => void;
  initialLoad: () => Promise<void>;
  userId: string;
  handleErrorOpen: () => void;
}
const NewPlaylist = ({
  open,
  handleClose,
  initialLoad,
  userId,
  handleErrorOpen,
}: NewPlaylistProps) => {
  const handleCreatePlaylist = async (event: FormEvent<HTMLFormElement>) => {
    const data = new FormData(event.currentTarget);
    const playlistName = data.get("playlistName");
    const privacyField = data.get("privacy");
    handleClose();
    if (
      playlistName !== null &&
      privacyField !== null &&
      playlistName !== "" &&
      privacyField !== ""
    ) {
      const privacy = () => {
        if (privacyField === "Public") {
          return true;
        } else if (privacyField === "Private") {
          return false;
        } else {
          return false;
        }
      };
      const tempPlaylistCreate = await createPlaylist(
        playlistName.toString(),
        privacy(),
        userId
      );
      if (tempPlaylistCreate === "Success") {
        handleClose();
        await initialLoad();
      } else {
        handleClose();
        handleErrorOpen();
      }
    } else {
      handleErrorOpen();
    }
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        component="form"
        noValidate
        onSubmit={handleCreatePlaylist}
        name={"form"}
        sx={style}
      >
        <TextField
          sx={{
            color: "#fff",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#fff",
              borderRadius: "10px",
              opacity: "20%",
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "#fff",
              },
            "& .MuiOutlinedInput-input:focus": {
              color: "#fff",
            },
          }}
          margin="normal"
          required
          fullWidth
          name="playlistName"
          id="playlistName"
          label="Playlist Name"
        />

        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="Private"
          name="privacy"
          color="fff"
        >
          <FormControlLabel
            sx={{ color: "#fff" }}
            value="Private"
            control={
              <Radio
                sx={{
                  color: "#fff",
                  "&.Mui-checked": {
                    color: "#fff",
                  },
                }}
              />
            }
            label="Private"
          />
          <FormControlLabel
            sx={{ color: "#fff" }}
            value="Public"
            control={
              <Radio
                sx={{
                  color: "#fff",
                  "&.Mui-checked": {
                    color: "#fff",
                  },
                }}
              />
            }
            label="Public"
          />
        </RadioGroup>

        <Button
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
          type="submit"
          fullWidth
        >
          <Typography
            className="hover-underline-animation"
            variant="h5"
            sx={{
              fontSize: "15px",
              fontWeight: "600",
              textTransform: "uppercase",
              padding: "5px",
            }}
          >
            Create
          </Typography>
        </Button>
      </Box>
    </Modal>
  );
};

export default NewPlaylist;
