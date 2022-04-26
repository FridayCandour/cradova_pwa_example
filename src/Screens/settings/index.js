import _ from "../../../cradova/index.js";
import { menu } from "../../components/index.js"

const imgsty = { width: "100px", borderRadius: "20%" };
const img = _("img.domimg", {
  src: "../assets/cradova.png",
  onclick: () => {
    _.dispatch({ style: { width: "120px" } }, "ddd");
  },
  style: imgsty,
});

const h2 = _("h2|  Settings page");
const header = _.w(
  _.w(
    menu,
    h2,
    _`hr`,
    _("a| here is the link home", {
      href: "/",
    }),
    img
  )
);
const setting = new _.Screen("settings", header);

export default setting;
