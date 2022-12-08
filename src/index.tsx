import { render } from "react-dom";
import './index.css';
import App from './App';
import { ChangeEvent } from "react";

interface handleChange {
  handleMessageChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleRadioButtons:()=>void
}
render(
  <>
    <App/>
  </>,
  document.getElementById("root")
);