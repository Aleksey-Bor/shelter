import htmlToElement from "../../../utils/htmlToElement";
import Header from "../Header/index";
import StartScreen from "./index.html";
import "./index.scss";

const startScreen = htmlToElement(StartScreen);
const startScreenWrapperElem = startScreen.getElementsByClassName(
  "start-screen__wrapper"
)[0];

startScreenWrapperElem.prepend(Header);


export default startScreen;
