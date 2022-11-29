import { Box, Grid, IconButton, InputBase } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../images/logo.png";

function MenuDrawer() {
  // Small screens
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const handleSearchDrawerToggle = () => {
    setMobileSearchOpen(!mobileSearchOpen);
  };

  return (
    <Box onClick={handleSearchDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ display: { sm: "block" }, padding: "45px" }}>
        <img src={logo} alt="BestMovies Logo" className="logo" />
      </Box>
      <Grid>
        <InputBase
          sx={{
            display: { xs: "none", md: "block" },
            ml: 1,
            flex: 1,
            color: "#fff",
            fontSize: "0.9em",
            borderRadius: "5px",
            backgroundColor: "rgba(255, 255, 255, 0.200)",
            padding: "4px 4px 4px 14px",
          }}
          placeholder="Search..."
          inputProps={{ "aria-label": "search" }}
          // onChange={handleMessageChange}
        />

        <IconButton
          type="button"
          sx={{ p: "10px", display: { xs: "block", md: "none" } }}
          aria-label="search"
        >
          <SearchIcon sx={{ color: "#fff" }} />
        </IconButton>
      </Grid>
    </Box>
  );
}
export default MenuDrawer;
