import { Button, Menu, List, Typography } from "@mui/material";
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
          marginTop: "-2px",
          transition: "none",
          "&:hover": {
            backgroundColor: "transparent",
          },
          "& .MuiTypography-root": {
            paddingBottom: "5px",
            fontSize: "13.5px",
            textTransform: "uppercase",
            fontWeight: "600",
          },
        }}
        id="positioned-button"
        aria-controls={open ? "positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Typography
          className="hover-underline-animation"
          sx={{ color: "#fff" }}
        >
          Discover
        </Typography>
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
            <NavLink key={navItem.title} title={navItem.title} url={navItem.url} />
          ))}
        </List>
      </Menu>
    </>
  );
};

export default DiscoverDropdownMenu;
