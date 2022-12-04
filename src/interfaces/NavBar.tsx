import {ChangeEvent} from "react";
import NavBarDrawer from "../components/NavBarDrawer";

interface NavBarProps {
  handleDrawerToggle: () => void,
  mobileOpen: boolean,
  userID:string|null,
  // handleMessageChange: (e: ChangeEvent<HTMLInputElement>) => void
}
export interface NavBarDrawerProps {
  handleDrawerToggle: () => void,
  mobileOpen: boolean,
  userID:string|null,
  handleMessageChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export default NavBarProps;
