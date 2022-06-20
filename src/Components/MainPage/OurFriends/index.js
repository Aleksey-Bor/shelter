import htmlToElement from "../../../utils/htmlToElement";
import SliderElem from "../../helpers/Slider";
import AboutFriends from "./index.html"
import "./index.scss"

const aboutFriendsElem = htmlToElement(AboutFriends);
const slider = aboutFriendsElem.getElementsByClassName("slider-container")[0];
slider.appendChild(SliderElem);

export default aboutFriendsElem;