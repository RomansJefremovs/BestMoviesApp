import "./App.css";
import { ThemeProvider } from "@mui/material";
import Footer from "./components/Footer";
import { theme } from "./theme/theme";
import { useEffect, useState} from "react";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {createPlaylist} from "./middleware/PlaylistsMiddleware/createPlaylist";
import {addMovieToList} from "./middleware/PlaylistsMiddleware/addMovieToList";
import {removeMovieFromList} from "./middleware/PlaylistsMiddleware/removeMovieFromList";
import {getUserLists} from "./middleware/PlaylistsMiddleware/getUserLists";
import {getFavouritesIds} from "./middleware/getFavouritesIds";
import {getPlaylist} from "./middleware/PlaylistsMiddleware/getPlaylist";
import {editPlaylist} from "./middleware/PlaylistsMiddleware/editPlaylist";
import {getAllPublicPlaylists} from "./middleware/PlaylistsMiddleware/getAllPublicPlaylists";
import {checkIfMovieIsFavourite} from "./middleware/checkIfMovieIsFavourite";

function App() {
  const userID = localStorage.getItem("userID");
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const tryout = async()=>{
    // const temp = await getAllPublicPlaylists(2)
    const temp = await checkIfMovieIsFavourite(1013860)
    console.log(temp)
  }
  // localStorage.clear()
  useEffect(()=>{
    tryout()
  },[])
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
          userID={userID}
        />
        <AppRouter />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
