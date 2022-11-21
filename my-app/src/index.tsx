import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Search from "./routes/search";
import SignIn from "./routes/signin";
import SignUp from "./routes/signup";
import Movie from "./routes/moviePage";
import Favorites from "./routes/favorites";

render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="search" element={<Search />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="favorites" element={<Favorites />} />
        
        {/* TODO This has to be updated once the connection is made with the backend */}
        <Route path="movies/:imdbID" element={<Movie />} />

        <Route
          path="*"
          element={
            <main style={{ 
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
              color: "#fff" }}>
              <p>There's nothing here yet!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);