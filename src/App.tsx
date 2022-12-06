import "./App.css";
import { ThemeProvider } from "@mui/material";
import Footer from "./components/Footer";
import { theme } from "./theme/theme";
import { useState} from "react";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";


function App() {
  const userID = localStorage.getItem("userID");
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
          userID={userID}
        />
        <AppRouter />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
