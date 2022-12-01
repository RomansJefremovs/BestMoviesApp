import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "../routes/search";
import SignIn from "../routes/signin";
import SignUp from "../routes/signup";
import Favorites from "../routes/favorites";
import Movie from "../routes/moviePage";
import Home from "../routes/home";
import PersonPage from "./PersonPage";
import TopRated from "../routes/TopRated";
import Top80s from "../routes/Top80s";
import Top70s from "../routes/Top70s";
import Top90s from "../routes/Top90s";
import Top10s from "../routes/Top10s";
import Top00s from "../routes/Top00s";
import ScrollToTop from "./ScrollToTop";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="movie" element={<Movie />} />
          <Route path="person" element={<PersonPage />} />
          <Route path="toprated" element={<TopRated />} />
          <Route path="70s" element={<Top70s />} />
          <Route path="80s" element={<Top80s />} />
          <Route path="90s" element={<Top90s />} />
          <Route path="00s" element={<Top00s />} />
          <Route path="10s" element={<Top10s />} />
          <Route
            path="*"
            element={
              <main
                style={{
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
                  color: "#fff",
                }}
              ></main>
            }
          />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default AppRouter;
