import { Box, Drawer, List } from "@mui/material";
import NavLink from "./NavLink";
import { getDiscoverItems, getNavItems, getSignedInNavItems } from "./NavItems";
import Logo from "./Logo";
import navBar from "../interfaces/NavBar";

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
        <List sx={{ color: "#fff", paddingTop: "20px" }}>
          {navItems.map((navItem: { title: string; url: string }) => (
            <NavLink title={navItem.title} url={navItem.url} />
          ))}
          {discoverItems.map((navItem: { title: string; url: string }) => (
            <NavLink title={navItem.title} url={navItem.url} />
          ))}
        </List>
      </Box>

      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          justifyContent: "flex-end",
          flexDirection: "column",
          padding: "32px",
        }}
      >
        <List sx={{ color: "#fff" }}>
          {userID !== null ? (
            signedInNavItems.map((navItem: { title: string; url: string }) => (
              <NavLink title={navItem.title} url={navItem.url} />
            ))
          ) : (
            <></>
          )}
        </List>
      </Box>
    </Drawer>
  );
};
export default NavBarDrawer;
