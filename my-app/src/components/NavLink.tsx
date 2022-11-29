import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Outlet, Link as LinkRouter } from "react-router-dom";
interface NavLink {
  url: string;
  title: string;
}

const NavLink = ({ url, title }: NavLink) => {
  return (
    <>
      <ListItem key={title} disablePadding>
        <ListItemButton sx={{ textAlign: "center", color: "#fff" }}>
          <a href={url}><ListItemText primary={title} /></a>
        </ListItemButton>
      </ListItem>
    </>
  );
};

export default NavLink;
