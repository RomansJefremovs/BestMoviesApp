import { Box, Typography } from "@mui/material";
import logo from "../assets/images/logo.png";

function Footer() {
  return (
    <>
      <Box
        sx={{
          display: { xs: "flex" },
        }}
        className="footer-box"
      >
        <Box sx={{ display: { sm: "block" } }}>
          <img src={logo} alt="BestMovies Logo" className="logo" />
        </Box>
      </Box>

      <Box
        sx={{
          display: { xs: "flex" },
        }}
        className="copyright-box"
      >
        <Typography variant="h6" sx={{ fontSize: "13px", fontWeight: "500" }}>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="/">BestMovies Inc., All Rights Reserved.</a>
        </Typography>
      </Box>
    </>
  );
}
export default Footer;
