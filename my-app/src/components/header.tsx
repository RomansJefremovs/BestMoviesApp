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
import CustomDrawer from "./drawer";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link as LinkRouter } from "react-router-dom";
import { ChangeEvent, useState } from "react";
import logo from "../images/logo.png";

interface handleChange {
  handleMessageChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Header = ({ handleMessageChange }: handleChange) => {
  // Navigation
  const navItems = [
    { title: "Home", url: "/", onClickHandler: () => {} },
    { title: "New & Popular", url: "*", onClickHandler: () => {} },
    { title: "Movies", url: "*", onClickHandler: () => {} },
    { title: "TV Shows", url: "*", onClickHandler: () => {} },
  ];
  const signedInNavItems = [{ title: "My Favorites", url: "/favorites" }];

  // Radio buttons for search
  const [radioButtons, setRadioButtons] = useState(["movie"]);

  const handleRadioButtons = () => {
    setRadioButtons(["person"]);
  }

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
            alignItems="center"
          >
            <Grid item>
              <InputBase
                sx={{
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
                onChange={handleMessageChange}
              />
            </Grid>

            <Grid item>
              <RadioGroup
              onChange={handleRadioButtons}
                row
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="movie"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="movie"
                  control={
                    <Radio
                      sx={{
                        color: "#fff",
                        "&.Mui-checked": {
                          color: "#e70800",
                        },
                      }}
                    />
                  }
                  label="Movie"
                />
                <FormControlLabel
                  value="person"
                  control={
                    <Radio
                      sx={{
                        color: "#fff",
                        "&.Mui-checked": {
                          color: "#e70800",
                        },
                      }}
                    />
                  }
                  label="Person"
                />
              </RadioGroup>
            </Grid>
            <Grid item>
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon sx={{ color: "#fff" }} />
              </IconButton>
            </Grid>

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
};
export default Header;
