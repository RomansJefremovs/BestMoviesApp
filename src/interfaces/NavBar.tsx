import {ChangeEvent} from "react";

interface NavBarProps {
  handleDrawerToggle: () => void,
  mobileOpen: boolean,
  userID:string|null,
}
export interface NavBarDrawerProps {
  handleDrawerToggle: () => void,
  mobileOpen: boolean,
  userID:string|null,
  handleMessageChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export default NavBarProps;
