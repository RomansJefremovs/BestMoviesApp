import { Box, Drawer, Grid, List } from "@mui/material";
import { SearchProps } from "../interfaces/Search";
import SearchField from "./SearchField";

const SearchDrawer = ({
  handleMessageChange,
  handleEnterPress,
  mobilerOpen,
  handleSearchDrawerToggle,
}: SearchProps) => {
  return (
    <Drawer
      anchor="right"
      variant="temporary"
      open={mobilerOpen}
      onClose={handleSearchDrawerToggle}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        display: { xs: "block", lg: "none" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: "240px",
          backgroundColor: "#1e1e1e",
        },
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "column",
          padding: "32px",
        }}
      >
        <SearchField
          handleMessageChange={handleMessageChange}
          handleEnterPress={handleEnterPress}
        />
      </Box>
    </Drawer>
  );
};
export default SearchDrawer;
