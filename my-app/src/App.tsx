import {Button, TextField, ThemeProvider} from "@mui/material";
import "./App.css";
import Footer from "./components/Footer";
import { theme } from "./theme/theme";
import { ChangeEvent, useState } from "react";

import AppRouter from "./components/AppRouter";


function App() {
  const [radioButtons, setRadioButtons] = useState(["movie"]);

  const handleRadioButtons = () => {
    if (radioButtons[0] == "movie"){
      setRadioButtons(["person"]);
    }else{
      setRadioButtons(["movie"]);
    }
  };

  const handleMessageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    console.log(e.target.value)
    setTimeout(()=>{
      window.location.href = `/search?movie=${e.target.value}`
    },1500)
  };

  return (
      <>
        <ThemeProvider theme={theme}>
          {/*<Header handleMessageChange={handleMessageChange} handleRadioButtons={handleRadioButtons}/>*/}
          <TextField
            name={"search"}
            onChange={handleMessageChange}
          />
          <AppRouter />
          <Footer/>
       </ThemeProvider>
      </>

  );
}

export default App;
