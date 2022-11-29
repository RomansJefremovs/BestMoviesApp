import {
  Toolbar,
  Grid,
  Box,
  List,
  AppBar,
  Container,
  IconButton,
} from "@mui/material";
import NavLink from "./NavLink";
import Logo from "./Logo";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { getNavItems, getSignedInNavItems } from "./NavItems";
import { useState } from "react";

const NavBar = () => {
  const navItems = getNavItems();
  const signedInNavItems = getSignedInNavItems();

  // Small screens
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "transparent",
        boxShadow: 0,
        width: "100%",
      }}
    >
      <Toolbar>
        <Logo />
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { lg: "none" }, marginLeft: "10px" }}
        >
          <ArrowDropDownIcon />
        </IconButton>
        <Grid container flexDirection="row">
          <Box
            sx={{
              display: { xs: "none", lg: "block" },
            }}
          >
            <List sx={{ color: "#fff" }}>
              {navItems.map((navItem: { title: string; url: string }) => (
                <NavLink title={navItem.title} url={navItem.url} />
              ))}
              {signedInNavItems.map(
                (navItem: { title: string; url: string }) => (
                  <NavLink title={navItem.title} url={navItem.url} />
                )
              )}
            </List>
          </Box>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
