import { Box, Drawer, IconButton, List } from "@mui/material";
import { useState } from "react";
import NavLink from "./NavLink";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { getNavItems, getSignedInNavItems } from "./NavItems";
import Logo from "./Logo";

function NavBarDrawer() {
  const navItems = getNavItems();
  const signedInNavItems = getSignedInNavItems();

  // Small screens
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

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
      <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
        <Logo />
        <List sx={{ color: "#fff" }}>
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
}
export default NavBarDrawer;
