import { createElement } from "../../utils/element.js";
import "./bottom-nav.css";
import timeBtnSrc from "../../assets/time.svg";
import addBtnSrc from "../../assets/add.svg";
import pieChartBtnSrc from "../../assets/pie-chart.svg";

export const createBottomNavElement = () => {
  const bottomNav = createElement("nav", {
    className: "nav-bottom",
    children: [
      createElement("a", {
        href: "#",
        children: [
          createElement("img", {
            className: "nav-bottom__img",
            src: timeBtnSrc,
            alt: "Overview timetracker",
          }),
        ],
      }),
      createElement("a", {
        href: "#",
        children: [
          createElement("img", {
            className: "nav-bottom__img",
            src: addBtnSrc,
            alt: "Add timetracker",
          }),
        ],
      }),
      createElement("a", {
        href: "#",
        children: [
          createElement("img", {
            className: "nav-bottom__img",
            src: pieChartBtnSrc,
            alt: "Timetracker statistics",
          }),
        ],
      }),
    ],
  });
  return bottomNav;
};
