import _ from "../../cradova/index.js";

const  menu = _("img.menu", {
  alt: "menu",
  src: "../../assets/images/menu.svg",
    onclick: () => {
    _.dispatch({ toggleclass: "show-drawer" }, "drawer");
  },
});
export default menu