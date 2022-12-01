import "./App.css";
import { TextField, ThemeProvider } from "@mui/material";
import "./App.css";
import Footer from "./components/Footer";
import { theme } from "./theme/theme";
import { ChangeEvent, useState } from "react";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";

function App() {
  // const [radioButtons, setRadioButtons] = useState(["movie"]);
  const userID = localStorage.getItem("userID");
  // const handleRadioButtons = () => {
  //   if (radioButtons[0] == "movie") {
  //     setRadioButtons(["person"]);
  //   } else {
  //     setRadioButtons(["movie"]);
  //   }
  // };

  const handleMessageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setTimeout(() => {
      window.location.href = `/search?movie=${e.target.value}`;
    }, 1500);
  };

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // localStorage.clear()
  // console.log(localStorage.getItem("userID"))

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
          userID={userID}
          // handleMessageChange={handleMessageChange}
        />
        <AppRouter />
        <Footer />
        {/* <TextField name={"search"} onChange={handleMessageChange} /> */}
        {/*<ActorPage/>*/}
      </ThemeProvider>
    </>
  );
}

export default App;
