import { Box, Button, Drawer } from "@mui/material";
import NavLink from "./NavLink";
import { getDiscoverItems, getNavItems, getSignedInNavItems } from "./NavItems";
import Logo from "./Logo";
import navBar from "../models/interfaces/NavBar";
import { SignOut } from "../middleware/signOut";

const NavBarDrawer = ({ handleDrawerToggle, mobileOpen, userID }: navBar) => {
  const navItems = getNavItems();
  const signedInNavItems = getSignedInNavItems();
  const discoverItems = getDiscoverItems();

  return (
    <Drawer
      anchor="left"
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
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
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "column",
          padding: "32px",
        }}
      >
        <Logo />
        <br></br>
        {navItems.map((navItem: { title: string; url: string }) => (
          <NavLink title={navItem.title} url={navItem.url} />
        ))}

        {discoverItems.map((navItem: { title: string; url: string }) => (
          <NavLink title={navItem.title} url={navItem.url} />
        ))}

        {userID !== null ? (
          signedInNavItems.map((navItem: { title: string; url: string }) => (
            <NavLink title={navItem.title} url={navItem.url} />
          ))
        ) : (
          <></>
        )}

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
    </Drawer>
  );
};
export default NavBarDrawer;
