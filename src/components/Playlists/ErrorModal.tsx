import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'black',
    border: '2px solid white',
    boxShadow: 24,
    p: 4,
};
interface ErrorModalProps {
    open:boolean,
    handleClose:()=>void,
}
const ErrorModal = ({open,handleClose}:ErrorModalProps) => {
  return(
      <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
      >
          <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                  Try Again!
              </Typography>
          </Box>
      </Modal>
  )
}

export default ErrorModal