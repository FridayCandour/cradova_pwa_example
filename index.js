import _ from "./cradova/index.js";
import microlight from "./microlight.js";
/**
 * import screens
 */

import home from "./src/Screens/Home/index.js";
import doc from "./src/Screens/doc/index.js";
import setting from "./src/Screens/settings/index.js";
import examples from "./src/Screens/examples/index.js";
import TabBar from "./src/navigators/Tabs.js";
import DrawerBar from "./src/navigators/Drawer.js";
/**
 * adding navigators
 */

home.addChild(TabBar, DrawerBar);
setting.addChild(TabBar, DrawerBar);
examples.addChild(TabBar, DrawerBar);
doc.addChild(TabBar, DrawerBar);

// hidding the drawer if it was open
// appling style behaviour to tha bottom tabs
home.onActivate((html) => {
  _.dispatch({ removeclass: "show-drawer" }, "drawer");
  _.dispatch(
    {
      style: {
        backgroundColor: "#1796ff",
        color: "#1796ff",
        paddingTop: "5px",
      },
    },
    "tab1"
  );
});
doc.onActivate((html) => {
  _.dispatch({ removeclass: "show-drawer" }, "drawer");
  _.dispatch(
    {
      style: {
        backgroundColor: "#1796ff",
        color: "#1796ff",
        paddingTop: "5px",
      },
    },
    "tab2"
  );
  microlight();
});
examples.onActivate((html) => {
  _.dispatch({ removeclass: "show-drawer" }, "drawer");
  _.dispatch(
    {
      style: {
        backgroundColor: "#1796ff",
        color: "#1796ff",
        paddingTop: "5px",
      },
    },
    "tab3"
  );
});
setting.onActivate((html) => {
  _.dispatch({ removeclass: "show-drawer" }, "drawer");
  _.dispatch(
    {
      style: {
        backgroundColor: "#1796ff",
        color: "#1796ff",
        paddingTop: "5px",
      },
    },
    "tab4"
  );
});

// show and hide bottom tab here

_.swipe({
  up: () => {
    _.dispatch({ style: { display: "none" } }, "downTab");
  },
  down: () => {
    _.dispatch({ style: { display: "flex" } }, "downTab");
  },
});

/**
 * Router setup.
 */

_.Router.route("/", () => home.Activate());
_.Router.route("/setting", () => setting.Activate());
_.Router.route("/examples", () => examples.Activate());
_.Router.route("/documentation", () => doc.Activate());

// _.Router.navigate("/documentation");
