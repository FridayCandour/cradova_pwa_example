import _ from "../../cradova/index.js";
import { menu } from "./index.js"

const div = _("div.flex");
const img = _("img.logo", { alt: "logo" });
const h2 = _("h2");

export default function header({ title, logo }) {
  return div(
    menu,
    img({ src: logo }),
    _`h1.cradova|Cradova`,
    h2({ text: title })
  );
}

_.css(".menu", {
  width: "24px",
  position: "absolute",
  left: "10px",
  top: "10px",
});

_.media("min-width: 790px", [
  ".menu",
  {
    position: "absolute",
    left: window.innerWidth - 35 + "px",
  },
]);

