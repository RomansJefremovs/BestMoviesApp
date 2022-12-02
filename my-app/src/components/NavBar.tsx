import { Toolbar, Grid, Box, AppBar, IconButton, Button } from "@mui/material";
import NavLink from "./NavLink";
import Logo from "./Logo";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { getNavItems, getSignedInNavItems } from "./NavItems";
import NavBarProps from "../interfaces/NavBar";
import NavBarDrawer from "./NavBarDrawer";
import SearchField from "./SearchField";
import React, {ChangeEvent, useState} from "react";


const NavBar = (
  { handleDrawerToggle, mobileOpen, userID }: NavBarProps,
) => {
    const [message,setMessage] = useState<string|null>()
    const handleMessageChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
            setMessage(value)
    }

    const handleEnterPress = (e:React.KeyboardEvent<HTMLDivElement>)=>{
        if (e.key === 'Enter' && message !== undefined && message !== null && message.length >= 2 && message !==''){
            window.location.href = `/search?message=${message}`
        }
    }

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
        <Grid
          container
          flexDirection="row"
          justifyContent="space-between"
        >
          <Grid container justifyContent="flex-start" sx={{padding:"1em 0 0 1em"}}>
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
                  sx={{ display: { lg: "none" }, marginLeft:"0.5em"}}
                >
                  <ArrowDropDownIcon />
                </IconButton>
                {mobileOpen ? (
                  <NavBarDrawer
                    handleDrawerToggle={handleDrawerToggle}
                    mobileOpen={mobileOpen}
                    userID={userID}
                    // handleMessageChange={handleMessageChange}
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
                      fontWeight: "500",
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
              </Box>
            </Grid>
          </Grid>

          <Grid container justifyContent="flex-end" sx={{marginTop:"-45px"}}>
            <Grid item justifyContent="center">
              <SearchField handleMessageChange={handleMessageChange} handleEnterPress={handleEnterPress} />
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
