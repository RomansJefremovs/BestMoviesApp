import { CircularProgress, ThemeProvider } from "@mui/material";

import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Background from "./components/Background";
import { theme } from "./theme/theme";
import callApi from "./middleware/callApi";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { Movie } from "./models/Movie";
// import HomeContent from "./components/homeContent";
import { searchMovies } from "./middleware/searchMovies";
import { useDebounce } from "./middleware/useDebounce";
import {getUserID} from "./middleware/getUserID";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
// import {getTopRated} from "./middleware/getTopRated";
// import {getCredits, getPerson, getPersonByID, searchPerson} from "./middleware/movieCredits";


function App() {
  // const baseURL =
  //     "https://api.themoviedb.org/3/movie/popular?api_key=ac1ccaf7cc1c015abd2c2cddca72cb16&page=1";
  const [movies, setMovies] = useState<Movie[]>();
  const [radioButtons, setRadioButtons] = useState(["movie"]);
  const [message,setMessage] = useState<string>('')
  const handleRadioButtons = () => {
    if (radioButtons[0] == "movie"){
      setRadioButtons(["person"]);
    }else{
      setRadioButtons(["movie"]);
    }
  };
localStorage.setItem("userID", "23")
  console.log(localStorage.getItem("userID"))
  const handleSearch = async (message: string) => {
    const temp = await searchMovies(message);
    setMovies(temp.results);
  };
  const handleMessageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value)
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
          {/*<Header handleMessageChange={handleMessageChange} handleRadioButtons={handleRadioButtons}/>*/}

          <AppRouter />
          <Footer/>
       </ThemeProvider>
      </>

  );
}

export default App;
