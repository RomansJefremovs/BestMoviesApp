import { ThemeProvider } from "@mui/material";
import "./App.css";
import Footer from "./components/Footer";
import { theme } from "./theme/theme";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { Movie } from "./models/Movie";
import { searchMovies } from "./middleware/searchMovies";
import { useDebounce } from "./middleware/useDebounce";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
// import {getTopRated} from "./middleware/getTopRated";
// import {getCredits, getPerson, getPersonByID, searchPerson} from "./middleware/movieCredits";
import {Button, TextField, ThemeProvider} from "@mui/material";
import "./App.css";
import Footer from "./components/Footer";
import { theme } from "./theme/theme";
import { ChangeEvent, useState } from "react";
import AppRouter from "./components/AppRouter";

function App() {
  const [radioButtons, setRadioButtons] = useState(["movie"]);
  const [message, setMessage] = useState<string>("");

  const handleRadioButtons = () => {
    if (radioButtons[0] == "movie") {
      setRadioButtons(["person"]);
    } else {
      setRadioButtons(["movie"]);
    }
  };

  localStorage.setItem("userID", "23");

  console.log(localStorage.getItem("userID"));

  const handleSearch = async (message: string) => {
    const temp = await searchMovies(message);
    setMovies(temp.results);
  };

  const handleMessageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setTimeout(()=>{
      window.location.href = `/search?movie=${e.target.value}`
    },1500)
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <TextField
            name={"search"}
            onChange={handleMessageChange}
          />
        <AppRouter />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
