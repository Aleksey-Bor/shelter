import htmlToElement from "../../utils/htmlToElement";
import AboutShelterElem from "../MainPage/AboutShelter";
import StartScreen from "../MainPage/StartScreen";
import Wrapper from "./index.html";
import "./index.scss";

const wrapper = htmlToElement(Wrapper);
wrapper.appendChild(StartScreen);
wrapper.appendChild(AboutShelterElem);

export default wrapper;
