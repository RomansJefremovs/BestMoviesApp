import "./App.css";
import Header from "./components/Header";
import {TextField, ThemeProvider} from "@mui/material";
import "./App.css";
import Footer from "./components/Footer";
import { theme } from "./theme/theme";
import {ChangeEvent, useEffect, useState} from "react";
import AppRouter from "./components/AppRouter";
import {getPerson} from "./middleware/getPerson";
import ActorPage from "./components/PersonPage";
import {login} from "./middleware/login";

function App() {
  const [radioButtons, setRadioButtons] = useState(["movie"]);
  // const handleRadioButtons = () => {
  //   if (radioButtons[0] == "movie") {
  //     setRadioButtons(["person"]);
  //   } else {
  //     setRadioButtons(["movie"]);
  //   }
  // };
  const handleMessageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setTimeout(()=>{
      window.location.href = `/search?movie=${e.target.value}`
    },1500)
  };
  // localStorage.clear()
  // console.log(localStorage.getItem("userID"))

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <AppRouter />
        <Footer />
        <TextField
            name={"search"}
            onChange={handleMessageChange}
        />
        {/*<ActorPage/>*/}
      </ThemeProvider>
    </>
  );
}

export default App;
