import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import { Link as LinkRouter } from "react-router-dom";
import logo from "../images/logo.png";

function MenuDrawer() {
  // Small screens
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Navigation
  const navItems = [
    { title: "Home", url: "/" },
    { title: "New & Popular", url: "*" },
    { title: "Movies", url: "*" },
    { title: "TV Shows", url: "*" },
  ];
  const signedInNavItems = [{ title: "My Favorites", url: "/favorites" }];

  return (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ display: { sm: "block" }, padding: "45px" }}>
        <img src={logo} alt="BestMovies Logo" className="logo" />
      </Box>
      <List sx={{ color: "#fff" }}>
        {navItems.map((item) => (
          <LinkRouter to={item.url}>
            <ListItem key={item.title} disablePadding>
              <ListItemButton sx={{ textAlign: "center", color: "#fff" }}>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          </LinkRouter>
        ))}
        {signedInNavItems.map((item) => (
          <LinkRouter to={item.url}>
            <ListItem key={item.title} disablePadding>
              <ListItemButton sx={{ textAlign: "center", color: "#fff" }}>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          </LinkRouter>
        ))}
        <LinkRouter to={`/sign-in`}>
          <ListItem key="signin" disablePadding>
            <ListItemButton sx={{ textAlign: "center", color: "#fff" }}>
              <ListItemText primary="Sign In" />
            </ListItemButton>
          </ListItem>
        </LinkRouter>
      </List>
    </Box>
  );
}
export default MenuDrawer;
