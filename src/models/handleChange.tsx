import { ChangeEvent } from "react";

interface handleChange {
  handleMessageChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleRadioButtons: () => void;
}

export default handleChange;