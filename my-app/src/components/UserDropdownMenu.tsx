import {
  Select,
  MenuItem,
  ListItemText,
  Button,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import { SignOut } from "../middleware/signOut";
import NavLink from "./NavLink";

const UserDropdownMenu = () => {
  const [menuTitle, setMenuTitle] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof menuTitle>) => {
    const {
      target: { value },
    } = event;
    setMenuTitle(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <>
      <Select
        onChange={handleChange}
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "48px",
          paddingTop: "8px",
          width: "40px",
          border: "none",
          color: "#fff",
          "& .MuiSvgIcon-root": {
            color: "#fff",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "& .MuiListItemButton-root:hover": {
            backgroundColor: "#000",
          },
          "& .MuiPopover-paper": {
            backgroundColor: "#000",
          },
        }}
      >
        <NavLink title={"My Favorites"} url={"/favorites"} />
        <NavLink title={"My Playlists"} url={"/playlists"} />
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
      </Select>
    </>
  );
};

export default UserDropdownMenu;
