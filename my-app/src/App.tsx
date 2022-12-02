import "./App.css";
import { TextField, ThemeProvider } from "@mui/material";
import "./App.css";
import Footer from "./components/Footer";
import { theme } from "./theme/theme";
import {ChangeEvent, useEffect, useState} from "react";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {createPlaylist} from "./middleware/PlaylistsMiddleware/createPlaylist";
import {addMovieToList} from "./middleware/PlaylistsMiddleware/addMovieToList";
import {removeMovieFromList} from "./middleware/PlaylistsMiddleware/removeMovieFromList";

function App() {
  const userID = localStorage.getItem("userID");
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const tryout = async()=>{
    return await removeMovieFromList('5',65300,"2")
  }
  useEffect(()=>{
    console.log(tryout())
  })
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
