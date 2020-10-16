import { createElement } from "../../utils/element.js";
import "./tasklist.css";
import playActionSrc from "../../assets/play.svg";
import pauseActionSrc from "../../assets/pause.svg";

export const createTaskElement = (task) => {
  const actionIcon = createElement("img", {
    src: playActionSrc,
    alt: "Play Icon",
  });

  const showPauseIcon = (pauseactionicon) => {
    pauseactionicon.src = pauseActionSrc;
    pauseactionicon.alt = "Pause Icon";
  };

  const showPlayIcon = (playactionicon) => {
    playactionicon.src = playActionSrc;
    playactionicon.alt = "Play Icon";
  };

  let isRunning = false;

  const taskElement = createElement("div", {
    className: "task-card",
    children: [
      createElement("div", {
        className: `task-card__icon task-card__icon--${task.labelColor}`,
        children: [
          createElement("img", {
            src: task.iconSrc,
            alt: task.iconAlt,
          }),
        ],
      }),
      createElement("div", {
        className: "task-card__description",
        children: [
          createElement("h3", {
            innerText: task.title,
          }),
          createElement("span", {
            innerText: task.label,
          }),
        ],
      }),
      createElement("div", {
        className: "task-card__timer",
        children: [
          createElement("p", {
            innerText: task.time,
          }),
          createElement("button", {
            children: [actionIcon],
            onclick: () => {
              if (isRunning) {
                showPauseIcon(actionIcon);
              } else {
                showPlayIcon(actionIcon);
              }
              isRunning = !isRunning;
            },
          }),
        ],
      }),
    ],
  });
  return taskElement;
};
