import { Box, Drawer, List } from "@mui/material";
import NavLink from "./NavLink";
import { getNavItems, getSignedInNavItems } from "./NavItems";
import Logo from "./Logo";
import handleDrawerToggle from "../interfaces/handleDrawerToggle";

const NavBarDrawer = ({
  handleDrawerToggle,
  mobileOpen,
}: handleDrawerToggle) => {
  const navItems = getNavItems();
  const signedInNavItems = getSignedInNavItems();

  return (
    <Drawer
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
          justifyContent: "center",
          flexDirection: "column",
          padding: "32px",
        }}
      >
        <Logo />
        <List sx={{ color: "#fff", paddingTop: "20px" }}>
          {navItems.map((navItem: { title: string; url: string }) => (
            <NavLink title={navItem.title} url={navItem.url} />
          ))}
          {signedInNavItems.map((navItem: { title: string; url: string }) => (
            <NavLink title={navItem.title} url={navItem.url} />
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
export default NavBarDrawer;
