import {
  Select,
  Button,
  SelectChangeEvent,
  Menu,
  MenuItem,
  List,
} from "@mui/material";
import { useState } from "react";
import NavLink from "./NavLink";
import { getDiscoverItems } from "./NavItems";

const DiscoverDropdownMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const discoverItems = getDiscoverItems();

  return (
    <>
      <Button
        sx={{
          transition: "none",
          color: "#fff",
          fontSize: "13.5px",
          textTransform: "uppercase",
          fontWeight: "600",
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
        id="positioned-button"
        aria-controls={open ? "positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Discover
      </Button>
      <Menu
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          width: "100%",
          "& .MuiMenu-list": {
            paddingTop: 0,
            paddingBottom: 0,
          },
        }}
        id="positioned-menu"
        aria-labelledby="positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <List sx={{ backgroundColor: "#000" }} onClick={handleClose}>
          {discoverItems.map((navItem: { title: string; url: string }) => (
            <NavLink title={navItem.title} url={navItem.url} />
          ))}
        </List>
      </Menu>
    </>
  );
};

export default DiscoverDropdownMenu;
