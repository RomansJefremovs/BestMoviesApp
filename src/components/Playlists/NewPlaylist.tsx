import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {Button, FormControlLabel, Radio, RadioGroup, TextField} from "@mui/material";
import {FormEvent} from "react";
import {createPlaylist} from "../../middleware/PlaylistsMiddleware/createPlaylist";
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'grey',
    border: '2px solid #fff ',
    borderRadius:'10px',
    boxShadow: 24,
    p: 4,
};

interface NewPlaylistProps {
    open:boolean,
    handleClose:()=>void,
    handleOpen:()=>void,
    initialLoad:()=> Promise<void>
    userId:string
    handleErrorOpen:()=>void,
}
const NewPlaylist = ({open,handleClose,initialLoad,userId,handleErrorOpen}:NewPlaylistProps) => {
    const handleCreatePlaylist = async (event: FormEvent<HTMLFormElement>)=>{
        const data = new FormData(event.currentTarget);
        const playlistName = data.get("playlistName");
        const privacyField = data.get("privacy");
        handleClose()
        if (playlistName !==null && privacyField !==null && playlistName !== '' && privacyField !== ''){
            const privacy = () => {
                if(privacyField === 'Public'){
                    return true
                }else if (privacyField === 'Private'){
                    return false
                }else{
                    return false
                }
            }
            const tempPlaylistCreate = await createPlaylist(playlistName.toString(),privacy(),userId)
            if (tempPlaylistCreate === 'Success'){
                handleClose()
                await initialLoad()
            }else{
                handleClose()
                handleErrorOpen()
            }
        }else{
            handleErrorOpen()
        }

    }
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
                                "& .MuiInputBase-root": {
                                    color: "#fff",
                                },
                                "& .MuiInputLabel-root": {
                                    color: "#fff",
                                },
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "#fff",
                                    borderRadius: "10px",
                                    opacity: "20%",
                                },
                                "& .Mui:focused": {
                                    borderColor: "#fff",
                                },
                                "& .Mui:hover": {
                                    borderColor: "#fff",
                                },
                                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                                    {
                                        borderColor: "#fff",
                                    },
                            }}
                            margin="normal"
                            required
                            fullWidth
                            name={"playlistName"}
                            id="playlistName"
                            label="Playlist Name"
                            // autoFocus
                        />
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="Private"
                            name="privacy"
                            color={'white'}
                        >
                            <FormControlLabel sx={{color:"white"}} value="Private" control={<Radio/>} label="Private" />
                            <FormControlLabel sx={{color:"white"}} color={'white'} value="Public" control={<Radio />} label="Public" />
                        </RadioGroup>
                        <Button
                            // id="lol"
                            type="submit"
                            // fullWidth
                            // variant="contained"
                            // sx={{ mt: 3, mb: 2 }}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    fontSize: "15px",
                                    fontWeight: "600",
                                    textTransform: "uppercase",
                                    padding: "5px 10px 5px 10px",
                                }}
                            >
                                Create
                            </Typography>
                        </Button>
                    </Box>
                </Modal>
        );
}

export default NewPlaylist