import { createElement } from "../../utils/element.js";
import "./bottom-nav.css";
import timeBtnSrc from "../../assets/time.svg";
import addBtnSrc from "../../assets/add.svg";
import pieChartBtnSrc from "../../assets/pie-chart.svg";

export const createBottomNavElement = () => {
  const bottomNav = createElement("img", {
    src: timeBtnSrc,
  });

  return bottomNav;
};
