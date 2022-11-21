import { Container, Box, AppBar, Button, Drawer, Grid, IconButton, Toolbar } from "@mui/material";
import CustomDrawer from "./drawer";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link as LinkRouter } from "react-router-dom";
import { useState } from "react";
import CustomSearch from "./search";

function Header() {
  const logo = require("../images/logo.png");

  // Navigation
  const navItems = [
    { title: "Home", url: "/" },
    { title: "New & Popular", url: "*" },
    { title: "Movies", url: "*" },
    { title: "TV Shows", url: "*" },
  ];
  const signedInNavItems = [{ title: "My Favorites", url: "/favorites" }];

  // Small screens
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Container
        className="header"
        sx={{
          display: { xs: "block" },
        }}
      >
        <AppBar
          position="sticky"
          sx={{
            backgroundColor: "transparent",
            marginTop: "20px",
            boxShadow: 0,
          }}
        >
          <Toolbar className="toolbar">
            <Box>
              <img src={logo} alt="BestMovies Logo" className="logo" />
            </Box>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { lg: "none" }, marginLeft: "10px" }}
              >
                <ArrowDropDownIcon />
              </IconButton>
              <Box
                sx={{
                  display: { xs: "none", lg: "block" },
                  marginLeft: "0.8em",
                }}
              >
                {navItems.map((navItem) => (
                  <LinkRouter to={navItem.url}>
                    <Button key={navItem.title} sx={{ color: "#fff" }}>
                      {navItem.title}
                    </Button>
                  </LinkRouter>
                ))}

                {/* TODO signedInNavItems should be only visible when user is logged in */}
                {signedInNavItems.map((navItem) => (
                  <LinkRouter to={navItem.url}>
                    <Button key={navItem.title} sx={{ color: "#fff" }}>
                      {navItem.title}
                    </Button>
                  </LinkRouter>
                ))}
              </Box>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
            >
              <Box sx={{ display: { sm: "block" } }}>
                <Button sx={{ color: "#fff" }}>
                    <CustomSearch />
                </Button>
              </Box>

              <Box sx={{ display: { xs: "none", lg: "block" } }}>
                <LinkRouter to={`/sign-in`}>
                  <Button sx={{ color: "#fff" }}>Sign In</Button>
                </LinkRouter>
              </Box>
            </Grid>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", lg: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
                backgroundColor: "#E70800",
              },
            }}
          >
            <CustomDrawer />
          </Drawer>
        </Box>
      </Container>
  );
}
export default Header;
