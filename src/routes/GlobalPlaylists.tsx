import * as React from "react";
import {useEffect, useState} from "react";
import {Typography} from "@mui/material";
import {getUserID} from "../middleware/getUserID";
import {Playlist} from "../models/Playlist";
import PlaylistLine from "../components/Playlists/PlaylistLine";
import {getAllPublicPlaylists} from "../middleware/PlaylistsMiddleware/getAllPublicPlaylists";

const GlobalPlaylists = () =>{
    const [global, setGlobal] = useState<Playlist[]>([]);
    const initialLoadGlobal = async () => {
        const global = await getAllPublicPlaylists(parseInt(getUserID()));
        console.log(global);
        setGlobal(global);
    };

    useEffect(() => {
        initialLoadGlobal();
    },[]);
    return(
        <>
            {global.length !== 0 ? global.map(playlist=>{
                    return <PlaylistLine key={playlist.list_id} playlistName={playlist.list_name} playlistId={playlist.list_id}/>
                }):
                <Typography
                    color="#fff"
                    className="reveal"
                    sx={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        margin: "auto",
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        alignItems: "center",
                    }}
                >
                    Oops! <br></br> Nothing's here.
                </Typography>
            }
        </>
    )
}
export default GlobalPlaylists