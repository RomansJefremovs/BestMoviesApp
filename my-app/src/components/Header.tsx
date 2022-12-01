import { Container } from "@mui/material";
import { useState } from "react";
import NavBar from "./NavBar";


const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const userID = localStorage.getItem('userID')
  return (
    <Container
      className="header"
      sx={{
        display: { xs: "block" },
      }}
    >
      <NavBar handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} userID={userID}/>
      {/* <SearchField handleMessageChange={handleMessageChange} /> */}
      {/* <RadioButtons handleRadioButtons={handleRadioButtons} /> */}
    </Container>
  );
};
export default Header;
