import { Box } from "@mui/material";
import logo from "../images/logo.png";

const Logo = () => {
  return (
      <Box>
        <img src={logo} alt="BestMovies Logo" className="logo" />
      </Box>
  );
};

export default Logo;
