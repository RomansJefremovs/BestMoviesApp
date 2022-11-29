import {
  Container,
  Box,
  AppBar,
  Button,
  Drawer,
  Grid,
  IconButton,
  Toolbar,
  InputBase,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";
// import MenuDrawer from "./MenuDrawer";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link as LinkRouter } from "react-router-dom";
import { ChangeEvent, useState } from "react";
import logo from "../images/logo.png";
// import MenuDrawer from "./MenuDrawer";
import MenuDrawer from "./SearchDrawer";
import RadioButtons from "./RadioButtons";
import SearchField from "./SearchField";
import Logo from "./Logo";

interface handleChange {
  handleMessageChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleRadioButtons: () => void;
}

const Header = ({handleMessageChange,handleRadioButtons} : handleChange) => {
  // Navigation
  const navItems = [
    { title: "Home", url: "/" },
    { title: "New & Popular", url: "*" },
    { title: "Movies", url: "*" },
    { title: "TV Shows", url: "*" },
  ];
  const signedInNavItems = [{ title: "My Favorites", url: "/favorites" }];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const handleMenuDrawerToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleSearchDrawerToggle = () => {
    setMobileSearchOpen(!mobileSearchOpen);
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
          boxShadow: 0,
          width: "100%",
        }}
      >
        <Toolbar className="toolbar">
          <Logo/>
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
              onClick={handleMenuDrawerToggle}
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
              {/*{navItems.map((navItem) => (*/}
              {/*  <LinkRouter to={navItem.url}>*/}
              {/*    <Button*/}
              {/*      key={navItem.title}*/}
              {/*      sx={{ color: "#fff" }}*/}
              {/*    >*/}
              {/*      {navItem.title}*/}
              {/*    </Button>*/}
              {/*  </LinkRouter>*/}
              {/*))}*/}

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
          {/*<Grid*/}
          {/*  container*/}
          {/*  direction="row"*/}
          {/*  justifyContent="flex-end"*/}
          {/*  alignItems="flex-end"*/}
          {/*  sx={{ marginTop: "40px" }}*/}
          {/*>*/}
          {/*  /!*<SearchField *!/*/}
          {/*  /!*    handleMessageChange={handleMessageChange} *!/*/}
          {/*  /!*    handleSearchDrawerToggle={handleMenuDrawerToggle}/>*!/*/}
          {/*  /!*<RadioButtons handleRadioButtons={handleRadioButtons}/>*!/*/}
          {/*</Grid>*/}
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileMenuOpen}
          onClose={handleMenuDrawerToggle}
          ModalProps={{
            keepMounted: true, 
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
          <MenuDrawer />
        </Drawer>
      </Box>
      <Box component="nav">
        <Drawer
          anchor="right"
          variant="temporary"
          open={mobileSearchOpen}
          onClose={handleSearchDrawerToggle}
          ModalProps={{
            keepMounted: true, 
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
          <MenuDrawer />
        </Drawer>
      </Box>
    </Container>
  );
};
export default Header;
