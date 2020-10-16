import { createElement } from "../../utils/element";
import { createBottomNavElement } from "./bottom-nav";

export default {
  title: "Components/Bottom Nav",
  parameters: { layout: "centered" },
};

export const Bottom = () => createBottomNavElement();
