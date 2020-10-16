import { createTaskElement } from "./tasklist";
import desktopSrc from "../../assets/desktop.svg";
import barbellSrc from "../../assets/barbell.svg";
import codeSrc from "../../assets/code.svg";
import bookSrc from "../../assets/book-outline.svg";

export default {
  title: "Components/Task List",
  parameters: { layout: "centered" },
};

const taskInfos = [
  {
    title: "UI Design",
    label: "Work",
    iconSrc: desktopSrc,
    time: "00:32:10",
  },
];

export const task = () => createTaskElement(taskInfos[0]);
