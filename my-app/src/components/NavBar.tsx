import { Toolbar, Grid, Box, AppBar, IconButton, Button } from "@mui/material";
import NavLink from "./NavLink";
import Logo from "./Logo";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { getNavItems, getSignedInNavItems } from "./NavItems";
import handleDrawerToggle from "../interfaces/handleDrawerToggle";
import NavBarDrawer from "./NavBarDrawer";
import handleMessageChange from "../interfaces/handleMessageChange";
import SearchField from "./SearchField";

const NavBar = (
  { handleDrawerToggle, mobileOpen, userID }: handleDrawerToggle,
  { handleMessageChange }: handleMessageChange
) => {
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
              <SearchField handleMessageChange={handleMessageChange} />
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
