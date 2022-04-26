import _ from "../../../cradova/index.js";
import {header} from "../../components/index.js";

const home = new _.Screen(
  "Cradova App",
  header({
    title: "Build apps that feels native",
    logo: "../assets/cradova.png",
  })
);

export default home;
