import {CircularProgress, TextField, ThemeProvider} from "@mui/material";

import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Background from "./components/background";
import { theme } from "./theme/theme";
import callApi from "./middleware/callApi";
import {ChangeEvent, useEffect, useState} from "react";
import {Movie} from "./models/movies";
import HomeContent from "./components/homeContent";
import {searchMovies} from "./middleware/searchMovies";
function App() {
    const baseURL = "https://api.themoviedb.org/3/movie/popular?api_key=ac1ccaf7cc1c015abd2c2cddca72cb16&page=1"
    const [initialMovies, setInitialMovies] = useState<Movie[]>()
    const [message, setMessage] = useState<string>('')
    const [timer, setTimer] = useState(null)
    const handleMessageChange = (e:React.ChangeEvent<HTMLInputElement>):void=>{
        setMessage(e.target.value)
    }


    const initialLoad = async () => {
        const temp = await callApi(baseURL)
        if(temp != false && temp != "Error"){
            setInitialMovies(temp.results)
        }
    }
    const name = "John Wick"
    const handleSearch = async () => {
        const temp = await searchMovies(name)
        console.log(temp)
        setInitialMovies(temp.results)
    }
    useEffect(() => {
        initialLoad()
    },[])
    console.log(initialMovies)
  return (
    <ThemeProvider theme={theme}>
        {initialMovies ? (
            <>
                <Header message={message} handhandleMessageChange={handleMessageChange}/>
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
