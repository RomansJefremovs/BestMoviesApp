import { ListItem, ListItemButton, ListItemText } from "@mui/material";

interface NavLink {
  url: string;
  title: string;
}

const NavLink = ({ url, title }: NavLink) => {
  return (
    <>
      <ListItem key={title} disablePadding sx={{ width: "auto" }}>
        <ListItemButton>
          <a href={url} style={{ color: "#fff" }}>
            <ListItemText primary={title} sx={{ marginTop: 0 }} />
          </a>
        </ListItemButton>
      </ListItem>
    </>
  );
};

export default NavLink;
