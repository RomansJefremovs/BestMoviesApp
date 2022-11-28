import { CircularProgress, ThemeProvider } from "@mui/material";

import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Background from "./components/background";
import { theme } from "./theme/theme";
import callApi from "./middleware/callApi";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { Movie } from "./models/Movie";
import HomeContent from "./components/homeContent";
import { searchMovies } from "./middleware/searchMovies";
import { useDebounce } from "./middleware/useDebounce";
import {getUserID} from "./middleware/getUserID";
// import {getTopRated} from "./middleware/getTopRated";
// import {getCredits, getPerson, getPersonByID, searchPerson} from "./middleware/movieCredits";


function App() {
  const baseURL =
    "https://api.themoviedb.org/3/movie/popular?api_key=ac1ccaf7cc1c015abd2c2cddca72cb16&page=1";
  const [movies, setMovies] = useState<Movie[]>();
  const [radioButtons, setRadioButtons] = useState(["movie"]);
  const handleRadioButtons = () => {
    if (radioButtons[0] == "movie"){
      setRadioButtons(["person"]);
    }else{
      setRadioButtons(["movie"]);
    }
  };
  const userId = getUserID()
  const handleSearch = async (message: string) => {

    const temp = await searchMovies(message);
    setMovies(temp.results);
  };
  const handleMessageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== "") {
      await handleSearch(e.target.value);
    } else {
      await initialLoad();
    }
  };

  const debounceOnChange = useCallback(
    useDebounce(handleMessageChange, 1000),
    []
  );

  const initialLoad = async () => {
    const temp = await callApi(baseURL);
    if (temp !== false && temp !== "Error") {
      setMovies(temp.results);
    }
    // localStorage.setItem("userID","23")
    // console.log(await getCredits(436270))
    // console.log(await getPersonByID(250))
    // console.log(await searchPerson("Bradley Cooper"))
    // console.log(await getPerson(250))
    // console.log(await getTopRated())
  };

    useEffect(() => {
        initialLoad()
    },[])
    // console.log(movies)

  return (
    <ThemeProvider theme={theme}>
      {movies ? (
        <>
          <Header handleMessageChange={debounceOnChange} handleRadioButtons={handleRadioButtons} />
          <Background />
          <HomeContent movies={movies} />
          <Footer />
        </>
      ) : (
        <CircularProgress sx={{
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
          color: "#fff" }} />
      )}
    </ThemeProvider>
  );
}

export default App;
