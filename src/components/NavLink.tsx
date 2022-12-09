import { ListItem, ListItemButton, ListItemText } from "@mui/material";

interface NavLinkProps {
  url: string;
  title: string;
}

const NavLink = ({ url, title }: NavLinkProps) => {
  return (
    <>
      <ListItem key={title} disablePadding sx={{ width: "auto" }}>
        <ListItemButton>
          <a href={url} style={{ color: "#fff" }}>
            <ListItemText
              className="hover-underline-animation"
              primary={title}
              sx={{ marginTop: 0, paddingBottom: "5px" }}
            />
          </a>
        </ListItemButton>
      </ListItem>
    </>
  );
};

export default NavLink;
