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

function App() {
  // const baseURL =
  //     "https://api.themoviedb.org/3/movie/popular?api_key=ac1ccaf7cc1c015abd2c2cddca72cb16&page=1";
  const [movies, setMovies] = useState<Movie[]>();
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
    setMessage(e.target.value);
    if (e.target.value !== "") {
      await handleSearch(e.target.value);
    }
  };

  const debounceOnChange = useCallback(
    useDebounce(handleMessageChange, 1000),
    []
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <AppRouter />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
