import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Search from "./routes/search";
import SignIn from "./routes/signin";
import SignUp from "./routes/signup";
import Movie from "./routes/moviePage";
import Favorites from "./routes/favorites";
import { ChangeEvent } from "react";
import AppRouter from "./components/AppRouter";

interface handleChange {
  handleMessageChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleRadioButtons:()=>void
}

render(
  <>
    <App/>
  </>,
  document.getElementById("root")
);