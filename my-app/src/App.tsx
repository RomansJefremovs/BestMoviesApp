import {CircularProgress, ThemeProvider} from "@mui/material";

import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Background from "./components/background";
import { theme } from "./theme/theme";
import callApi from "./middleware/callApi";
import {useEffect, useState} from "react";
import {Movie} from "./models/movies";
import HomeContent from "./components/homeContent";
function App() {
    const baseURL = "https://api.themoviedb.org/3/movie/popular?api_key=ac1ccaf7cc1c015abd2c2cddca72cb16&page=1"
    const [initialMovies, setInitialMovies] = useState<Movie[]>()
    const initialLoad = async () => {
        const temp = await callApi(baseURL)
        if(temp != false && temp != "Error"){
            setInitialMovies(temp.results)
        }
    }

    // initialLoad()
    useEffect(() => {
        initialLoad()
    },[])
    console.log(initialMovies)
  return (
    <ThemeProvider theme={theme}>
        {initialMovies ? (
            <>
                <Header />
                <Background />
                <HomeContent movies={initialMovies}/>
                <Footer />
            </>
        )
            :
                <CircularProgress sx={{alignSelf:"center"}}/>

        }
    </ThemeProvider>
  );
}

export default App;
