import { Box, Grid } from "@mui/material";
import { useState } from "react";
import handleMessageChange from "../interfaces/handleMessageChange";
import SearchField from "./SearchField";

function SearchDrawer({ handleMessageChange }: handleMessageChange) {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const handleSearchDrawerToggle = () => {
    setMobileSearchOpen(!mobileSearchOpen);
  };

  return (
    <Box onClick={handleSearchDrawerToggle} sx={{ textAlign: "center" }}>
      <Grid>
        <SearchField handleMessageChange={handleMessageChange} />
      </Grid>
    </Box>
  );
}
export default SearchDrawer;
