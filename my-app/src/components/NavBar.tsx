import { Toolbar, Grid, Box, AppBar, IconButton, Button } from "@mui/material";
import NavLink from "./NavLink";
import Logo from "./Logo";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { getNavItems, getSignedInNavItems } from "./NavItems";
import handleDrawerToggle from "../interfaces/handleDrawerToggle";
import NavBarDrawer from "./NavBarDrawer";

const NavBar = ({ handleDrawerToggle, mobileOpen }: handleDrawerToggle) => {
  const navItems = getNavItems();
  const signedInNavItems = getSignedInNavItems();

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "transparent",
        boxShadow: 0,
        width: "100%",
        marginTop: "1.5em",
      }}
    >
      <Toolbar>
        <Grid
          container
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Logo />
          <Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { lg: "none" }, marginLeft: "10px" }}
            >
              <ArrowDropDownIcon />
            </IconButton>
            {mobileOpen ? (
              <NavBarDrawer
                handleDrawerToggle={handleDrawerToggle}
                mobileOpen={mobileOpen}
              />
            ) : (
              ""
            )}
          </Box>

          <Box
            sx={{
              display: { xs: "none", lg: "block" },
              marginLeft: "10px",
            }}
          >
            <Button
              sx={{
                "& .MuiTypography-root": {
                  fontSize: "15px",
                  fontWeight: "500",
                },
              }}
            >
              {navItems.map((navItem: { title: string; url: string }) => (
                <NavLink title={navItem.title} url={navItem.url} />
              ))}
              {signedInNavItems.map(
                (navItem: { title: string; url: string }) => (
                  <NavLink title={navItem.title} url={navItem.url} />
                )
              )}
            </Button>
          </Box>
        </Grid>

      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
