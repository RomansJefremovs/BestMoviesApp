import { ChangeEvent } from "react";

export interface SearchProps {
  handleMessageChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleEnterPress: (e: React.KeyboardEvent<HTMLDivElement>) => void;
  mobilerOpen:boolean;
  handleSearchDrawerToggle:() => void
}

interface SearchFieldProps {
  handleMessageChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleEnterPress: (e: React.KeyboardEvent<HTMLDivElement>) => void;

}

export default SearchFieldProps;
