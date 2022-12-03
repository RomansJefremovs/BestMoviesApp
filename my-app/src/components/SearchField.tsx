import {
  Box,
  Grid,
  IconButton,
  InputBase,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, {ChangeEvent, useState} from "react";

interface SearchField {
    handleMessageChange: (e: ChangeEvent<HTMLInputElement>) => void,
    handleEnterPress: (e: React.KeyboardEvent<HTMLDivElement>) => void,
}
const SearchField = ({handleMessageChange,handleEnterPress}:SearchField) => {
  // Small screens
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const handleSearchDrawerToggle = () => {
    setMobileSearchOpen(!mobileSearchOpen);
  };

  return (
    <>
      <Grid container alignItems="center">
        <Grid item>
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
            onChange={handleMessageChange}
            onKeyPress={handleEnterPress}
          />

          <IconButton
            type="button"
            onClick={handleSearchDrawerToggle}
            sx={{ p: "10px", display: { xs: "block", md: "none" } }}
            aria-label="search"
          >
            <SearchIcon sx={{ color: "#fff" }} />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
};

export default SearchField;
