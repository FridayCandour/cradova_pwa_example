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
const h2 = _("h2| Examples page");
const header = _.w(
  _.w(
    h2,
    menu,
    _`hr`,
    _("a| here is the link home", {
      href: "/",
    }),
    img
  )
);
const examples = new _.Screen("examples", header);

export default examples;
