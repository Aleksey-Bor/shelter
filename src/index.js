import data from "../routingData";
import StartScreen from "./Components/MainPage/StartScreen";
import HeaderTest from "./Components/OurPets/HeaderTest/index";
import "./index.scss";

function rerenderApp() {
  const root = document.getElementById("root");
  let pageNumber = data.getPageNumber();

  root.append(StartScreen);
  console.log("Rerender happened!");
  switch (pageNumber) {
    case 1:
      root.lastChild.remove();
      root.append(StartScreen);
      break;
    case 2:
      root.lastChild.remove();
      root.append(HeaderTest);
      break;
    case 3:
      root.lastChild.remove();
      root.append(HeaderTest);
      break;
    case 4:
      root.lastChild.remove();
      root.append(HeaderTest);
      break;
  }
}

rerenderApp();
data.subscribe(rerenderApp);
