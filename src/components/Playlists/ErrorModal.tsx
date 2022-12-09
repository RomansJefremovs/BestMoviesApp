import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 250,
  height: 60,
  bgcolor: "black",
  border: "none",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};
interface ErrorModalProps {
  open: boolean;
  handleClose: () => void;
}
const ErrorModal = ({ open, handleClose }: ErrorModalProps) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          component="h2"
          sx={{ fontSize: "18px", textTransform: "none" }}
        >
          Oops! Something's not right... <br></br>Try Again!
        </Typography>
      </Box>
    </Modal>
  );
};

export default ErrorModal;
