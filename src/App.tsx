import "./App.css";
import { ThemeProvider } from "@mui/material";
import Footer from "./components/Footer";
import { theme } from "./theme/theme";
import {useEffect, useState} from "react";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {createPlaylist} from "./middleware/PlaylistsMiddleware/createPlaylist";
import {addMovieToList} from "./middleware/PlaylistsMiddleware/addMovieToList";


function App() {
  const userID = localStorage.getItem("userID");
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  // const createSome = async()=>{
  //   const temp = await addMovieToList("17",460, "45")
  //   console.log(temp)
  // }
  // useEffect(()=>{
  //   createSome()
  // })
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
