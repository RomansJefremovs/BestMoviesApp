import { CircularProgress, ThemeProvider } from "@mui/material";

import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Background from "./components/background";
import { theme } from "./theme/theme";
import callApi from "./middleware/callApi";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { Movie } from "./models/movies";
import HomeContent from "./components/homeContent";
import { searchMovies } from "./middleware/searchMovies";
import { useDebounce } from "./middleware/useDebounce";

function App() {
  const baseURL =
    "https://api.themoviedb.org/3/movie/popular?api_key=ac1ccaf7cc1c015abd2c2cddca72cb16&page=1";
  const [movies, setMovies] = useState<Movie[]>();
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
  };

  useEffect(() => {
    initialLoad();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      {movies ? (
        <>
          <Header handleMessageChange={debounceOnChange} />
          <Background />
          <HomeContent movies={movies} />
          <Footer />
        </>
      ) : (
        <CircularProgress sx={{ alignSelf: "center" }} />
      )}
    </ThemeProvider>
  );
}

export default App;
