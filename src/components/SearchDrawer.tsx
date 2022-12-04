import { Box, Grid } from "@mui/material";
import React, {ChangeEvent, useState} from "react";
import SearchField from "./SearchField";
interface SearchFieldProps {
    handleMessageChange: (e: ChangeEvent<HTMLInputElement>) => void,
    handleEnterPress: (e: React.KeyboardEvent<HTMLDivElement>) => void
}
function SearchDrawer({ handleMessageChange,handleEnterPress }: SearchFieldProps) {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const handleSearchDrawerToggle = () => {
    setMobileSearchOpen(!mobileSearchOpen);
  };


  return (
    <Box onClick={handleSearchDrawerToggle} sx={{ textAlign: "center" }}>
      <Grid>
        <SearchField handleMessageChange={handleMessageChange} handleEnterPress={handleEnterPress}/>
      </Grid>
    </Box>
  );
}
export default SearchDrawer;
