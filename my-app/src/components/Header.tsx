import { Container, AppBar } from "@mui/material";
import handleChange from "../interfaces/handleChange";
import NavBar from "./NavBar";
import RadioButtons from "./RadioButtons";
import SearchField from "./SearchField";

const Header = () => {
  return (
    <Container
      className="header"
      sx={{
        display: { xs: "block" },
      }}
    >
      <NavBar />
      {/* <SearchField handleMessageChange={handleMessageChange} /> */}
      {/* <RadioButtons handleRadioButtons={handleRadioButtons} /> */}
    </Container>
  );
};
export default Header;
