import { Toolbar, Grid, Box, AppBar, IconButton, Button } from "@mui/material";
import NavLink from "./NavLink";
import Logo from "./Logo";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { getNavItems, getSignedInNavItems } from "./NavItems";
import NavBarProps from "../models/interfaces/NavBar";
import NavBarDrawer from "./NavBarDrawer";
import SearchField from "./SearchField";
import React, { ChangeEvent, useState } from "react";
import { SignOut } from "../middleware/signOut";
import DiscoverDropDownMenu from "./DiscoverDropDownMenu";
import SearchIcon from "@mui/icons-material/Search";
import SearchDrawer from "./SearchDrawer";

const NavBar = ({ handleDrawerToggle, mobileOpen, userID }: NavBarProps) => {
  const [message, setMessage] = useState<string | null>();
  const handleMessageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMessage(value);
  };

  const [mobilerOpen, setMobilerOpen] = useState(false);

  const handleSearchDrawerToggle = () => {
    setMobilerOpen(!mobilerOpen);
  };
  const handleEnterPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (
      e.key === "Enter" &&
      message !== undefined &&
      message !== null &&
      message.length >= 2 &&
      message !== ""
    ) {
      window.location.href = `/search?message=${message}&page=${1}`;
    }
  };

  const navItems = getNavItems();
  const signedInNavItems = getSignedInNavItems();
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "transparent",
        boxShadow: 0,
        marginTop: "1.5em",
      }}
    >
      <Toolbar>
        <Grid container flexDirection="row" justifyContent="space-between">
          <Grid
            container
            justifyContent="flex-start"
            sx={{ padding: "1em 0 0 1em" }}
          >
            <Grid item>
              <Logo />
            </Grid>

            <Grid item>
              <Box>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ display: { lg: "none" }, marginLeft: "0.5em" }}
                >
                  <ArrowDropDownIcon />
                </IconButton>
                {mobileOpen ? (
                  <NavBarDrawer
                    handleDrawerToggle={handleDrawerToggle}
                    mobileOpen={mobileOpen}
                    userID={userID}
                  />
                ) : (
                  ""
                )}
              </Box>
            </Grid>

            <Grid item>
              <Box
                sx={{
                  display: { xs: "none", lg: "flex" },
                  marginLeft: "10px",
                  width: "auto",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  sx={{
                    transition: "none",
                    color: "transparent",
                    "& .MuiTypography-root": {
                      fontSize: "13.5px",
                      textTransform: "uppercase",
                      fontWeight: "600",
                    },
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  {navItems.map((navItem: { title: string; url: string }) => (
                    <NavLink title={navItem.title} url={navItem.url} />
                  ))}

                  {userID !== null ? (
                    signedInNavItems.map(
                      (navItem: { title: string; url: string }) => (
                        <NavLink title={navItem.title} url={navItem.url} />
                      )
                    )
                  ) : (
                    <></>
                  )}
                </Button>
                <DiscoverDropDownMenu />
              </Box>
            </Grid>
          </Grid>

          <Grid
            container
            justifyContent="flex-end"
            alignItems="center"
            sx={{ marginTop: "-48px" }}
          >
            <Grid
              item
              justifyContent="center"
              sx={{ display: { xs: "none", md: "block" } }}
            >
              <SearchField
                handleMessageChange={handleMessageChange}
                handleEnterPress={handleEnterPress}
              />
            </Grid>

            <Grid item justifyContent="center">
              <IconButton
                type="button"
                onClick={handleSearchDrawerToggle}
                sx={{ p: "10px", display: { xs: "block", md: "none" } }}
                aria-label="search"
              >
                <SearchIcon sx={{ color: "#fff" }} />
              </IconButton>
              {mobilerOpen ? (
                <SearchDrawer
                  handleMessageChange={handleMessageChange}
                  handleEnterPress={handleEnterPress}
                  handleSearchDrawerToggle={handleSearchDrawerToggle}
                  mobilerOpen={mobilerOpen}
                />
              ) : (
                ""
              )}
            </Grid>

            <Grid item justifyContent="center">
              <Box sx={{ display: { xs: "none", lg: "block" } }}>
                {userID == null ? (
                  <NavLink title={"Sign In"} url={"sign-in"} />
                ) : (
                  <Button
                    sx={{
                      padding: 0,
                      transition: "none",
                      color: "#fff",
                      textTransform: "capitalize",
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    }}
                    onClick={SignOut}
                  >
                    <NavLink title={"Sign Out"} url={"/"} />
                  </Button>
                )}
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
