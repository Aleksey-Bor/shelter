import StartScreen from "./Components/MainPage/StartScreen";
import HeaderTest from "./Components/OurPets/HeaderTest/index";
import Wrapper from "./Components/Wrapper";
import "./index.scss";

function renderApp() {
  const root = document.getElementById("root");
  const searchParams = new URLSearchParams(window.location.search);
  let page = searchParams.get("page");
  root.append(Wrapper);

  console.log("hi");

  switch (page) {
    case "ourpets":
      root.lastChild.remove();
      root.append(HeaderTest);
      break;
    case "help":
      root.lastChild.remove();
      root.append(HeaderTest);
      break;
    case "contacts":
      root.lastChild.remove();
      root.append(HeaderTest);
      break;
    default:
      root.lastChild.remove();
      root.append(Wrapper);
  }
}

renderApp();
