import {ThemeProvider } from "@mui/material";

import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Background from "./components/background";
import HomeContent from "./components/homeContent";
import { theme } from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />

      <Background />

      <HomeContent />

      <Footer />
    </ThemeProvider>
  );
}

export default App;
