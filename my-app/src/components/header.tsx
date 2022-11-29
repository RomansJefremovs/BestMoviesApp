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
import MenuDrawer from "./menuDrawer";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link as LinkRouter } from "react-router-dom";
import { ChangeEvent, useState } from "react";
import logo from "../images/logo.png";
import SearchDrawer from "./searchDrawer";

interface handleChange {
  handleMessageChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleRadioButtons: () => void;
}
// {handleMessageChange,handleRadioButtons} : handleChange
const Header = () => {
  // Navigation
  const navItems = [
    { title: "Home", url: "/", onClickHandler: () => {} },
    { title: "New & Popular", url: "*", onClickHandler: () => {} },
    { title: "Movies", url: "*", onClickHandler: () => {} },
    { title: "TV Shows", url: "*", onClickHandler: () => {} },
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
          <LinkRouter to={"/"}>
            <Box>
              <img src={logo} alt="BestMovies Logo" className="logo" />
            </Box>
          </LinkRouter>
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
              {navItems.map((navItem) => (
                <LinkRouter to={navItem.url}>
                  <Button
                    key={navItem.title}
                    sx={{ color: "#fff" }}
                    onClick={navItem.onClickHandler}
                  >
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
            alignItems="flex-end"
            sx={{ marginTop: "40px" }}
          >
            <Grid container justifyContent="flex-end" alignItems="center">
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
                  // onChange={handleMessageChange}
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
              <Box sx={{ display: { xs: "none", lg: "block" } }}>
                <LinkRouter to={`/sign-in`}>
                  <Button sx={{ color: "#fff" }}>Sign In</Button>
                </LinkRouter>
              </Box>
            </Grid>
            <Grid sx={{ display: { xs: "none", md: "block" } }}>
              <RadioGroup
                // onChange={handleRadioButtons}
                row
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="movie"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="movie"
                  control={
                    <Radio
                      size="small"
                      sx={{
                        color: "#fff",
                        "&.Mui-checked": {
                          color: "#e70800",
                        },
                        "& .MuiSvgIcon-root": {
                          fontSize: 18,
                        },
                      }}
                    />
                  }
                  label="Movie"
                  sx={{
                    opacity: "80%",
                    "& .MuiFormControlLabel-label": {
                      fontSize: "14px",
                    },
                  }}
                />
                <FormControlLabel
                  value="person"
                  control={
                    <Radio
                      size="small"
                      sx={{
                        color: "#fff",
                        "&.Mui-checked": {
                          color: "#e70800",
                        },
                        "& .MuiSvgIcon-root": {
                          fontSize: 18,
                        },
                      }}
                    />
                  }
                  label="Person"
                  sx={{
                    opacity: "80%",
                    "& .MuiFormControlLabel-label": {
                      fontSize: "14px",
                    },
                  }}
                />
              </RadioGroup>
            </Grid>
          </Grid>
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
          <SearchDrawer />
        </Drawer>
      </Box>
    </Container>
  );
};
export default Header;
