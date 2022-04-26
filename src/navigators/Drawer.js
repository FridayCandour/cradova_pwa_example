import _ from "../../cradova/index.js";
import { p, a, div, icon } from "../components/index.js";
export default function DrawerBar() {

  return div(
    {class: "drawer",
    stateID: "drawer",
   onblur: () => {
    _.dispatch({ removeclass: "show-drawer" }, "drawer");
   },
},  a(
      { href: "/" },
      icon({ src: "../../assets/images/Discover.png" }),
      p({ text: "home" })
    ),
    a(
      { href: "/documentation" },
      icon({ src: "../../assets/images/file-text.svg" }),
      p({ text: "learn" })
    ),
    a(
      { href: "/examples" },
      icon({ src: "../../assets/images/shoot.svg" }),
      p({ text: "examples" })
    ),
    a(
      { href: "/setting" },
      icon({ src: "../../assets/images/support.svg" }),
      p({ text: "setting" })
    )
  );
}

_.css(".drawer", {
  transform: "scaleZ(0)",
  position: "absolute",
  top: 0,
  left: "-2000px",
  display: "flex",
  "align-items": "flex-start",
  "justify-content": "center",
  "flex-direction": "column",
  height: "100%",
  width: _.metrics.drawerWidth,
  padding: "0px",
  transition: "all 3s ease",
  border: "1px",
  "max-width": "300px",
  "background-color": "white",
});

_.css(".drawer a", {
  display: "flex",
  width: "25%",
  "flex-direction": "column",
  "align-items": "center",
  "justify-content": "center",
});

_.css(".drawer a p", {
  "font-size": "13px",
  "font-weight": "600",
  color: "white",
});

_.media("min-width: 790px", [
  ".drawer",
  {
    left: "0px",
    "background-color": "#23bbff",
    padding: "0px 5px",
    "border-top-left-radius": "0px",
    "border-top-right-radius": "20px",
    "border-bottom-right-radius": "20px",
  },
]);
