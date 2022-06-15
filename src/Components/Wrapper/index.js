import htmlToElement from "../../utils/htmlToElement";
import StartScreen from "../MainPage/StartScreen";
import Wrapper from "./index.html";
import "./index.scss";

const wrapper = htmlToElement(Wrapper);
wrapper.appendChild(StartScreen)

export default wrapper;

