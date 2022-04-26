import _ from "../../../cradova/index.js";
import { menu } from "../../components/index.js"
// reusable  elements
const logo = _("img.domimg", {
  src: "../assets/cradova.png",
  style: { width: "100px", borderRadius: "20%", margin: "0px auto" },
});



const h3 = _("h3|Build apps that feels native", {
  style: { margin: "auto" },
});

const h2 = _("h2| Cradova Documentation page", {
  style: { margin: "30px auto" },
});

const p = _("p.paragraph");

const code = _("div.microlight");

const a = _("a");

const div = _("div", {
  style: {
    margin: "8px",
  },
});
const bodyDiv = _("div.section", {
  style: {
    margin: "8px",
  },
});
_.media("min-width: 790px", [
  ".section",
  {
    padding: "10px 80px",
  },
]);

/**
 * header
 */

const head = _.w(menu, h2, _`br`, _`hr`, _`br`, logo, _`br`, h3, _`hr`);
/**
 *
 * document body
 *
 */

const body = bodyDiv(
  h2({
    text: "version 0.1.0 docs",
    style: { margin: "auto" },
  }),
  //
  p(
    " With Cradova building mobile targeted PWAs is easy comes with most of the tooling you will need."
  ),
  p("Some features in this version", {
    style: {
      borderBottom: "2px black solid",
      width: "fit-content",
    },
  }),
  _(
    "ul",
    { style: { margin: "20px" } },
    _`li| Easy to use template engine syntax`,
    _`li| State management`,
    _`li| pre-configured online first service worker cache system`,
    _`li| inbuilt functions for screens, Routes, database and lots more.`
  ),

  //

  p("Content Index", {
    style: {
      borderBottom: "2px black solid",
      width: "fit-content",
    },
  }),

  _(
    "ul",
    { style: { margin: "20px" } },
    a(_`li| creating a Cradova project`, { href: "#create" }),
    a(_`li| creating static and dynamic html elements`, { href: "#elements" }),
    a(_`li| usingfunctional components and props`, { href: "#functional" }),
    a(_`li| using widgets or document fragments`, { href: "#widgets" }),
    a(_`li| setting service worker file`, { href: "#sw" }),
    a(_`li| managing state in your app`, { href: "#state" }),
    a(_`li| using the data base`, { href: "#db" }),
    a(_`li| using local storage`, { href: "#ls" }),
    a(_`li| using file system`, { href: "#fs" }),
    a(_`li| using full screen`, { href: "#full" }),
    a(_`li| using the router`, { href: "#router" }),
    a(_`li| creating screens`, { href: "#screens" }),
    a(_`li| using the store`, { href: "#store" }),
    a(_`li| using metrics`, { href: "#metrics" }),
    a(_`li| using animate`, { href: "#animate" }),
    a(_`li| using themes`, { href: "#themes" }),
    a(_`li| using swiper`, { href: "#swipe" }),
    a(_`li| using media`, { href: "#media" }),
    a(_`li| using css `, { href: "#css" }),
    a(_`li| creating your own cradova plugin`, { href: "#plugin" })
  ),

  // creating a cradova project

  div(
    {
      id: "create",
    },
    h2({ text: "Creating a Cradova project" }),
    p(
      `To create a Cradova project you have 2 options at your finger tips, 
      \n
      and you can do this by either installing Cradova from npm or using the CLI tool.`
    ),

    code(`    $ npm install cradova --save    `),
    code(`    $ npx create-cradova-app myappname    `),
    p(`With that you have a clean Cradova app project to start building.`),
    p(`use npx if you a beginner or don't want to set things up yourself.`)
  ),

  // elements

  div(
    {
      id: "elements",
    },
    h2({ text: "Creating elements in Cradova" }),
    p(`There two types of  elements in Cradova, which are dynamic and static `),
    p(
      `Static elements don't require any state update in the way they are constructed, they have an unchanged life cycle in the app, examples are .`
    ),
    code("_`p`   // creates a p tag only"),
    code("_`p.paragraph` // with class"),
    code("_`p#paragraph` // with id"),
    code("_`p.paragraph#paragraph` // with both"),
    code("_`p.paragraph| hello world` // with text"),
    p("where every given above optional"),
    p(
      `Dynamic elements can be given props at call time and also undergo state update, examples are.`
    ),
    code(`_("p")   // creates a p tag only`),
    code(`_("p.paragraph") // with class `),
    code(`_("p#paragraph") // with id `),
    code(`_("p.paragraph#paragraph") // both`),
    code(`_("p| hello world") // adding text`),
    code(`_("p.para", {class:"pa", id: "pa}) //props`),
    code(`_("p.pa",{style: {color: "aqua"}}) //styles`),
    p(
      `Dynamic element declaration like these return funtions not html, and by so you can add and overwrite props and add more children later on`
    ),
    p(`When creating elements with _ both dynamic or static be sure to follow the follow the order selector, properties, children, 
      it's not important when calling dynamic components`)
  ),
  // functional componenets
  div(
    {
      id: "functional",
    },
    h2({ text: "Creating functional components in Cradova" }),
    p(`These functions returns an element or an element tree, 
    these componenets also accept props that can get passed to it returned children(s)
    `),
    p(`here's an example`),
    code(`
    
// in header.js

import _ from "cradova";

const div = _("div.flex");
const img = _("img.logo", { alt: "logo" });
const h2 = _("h3");
const menu = _("img.menu", {
  alt: "menu",
  src: "../../assets/images/menu.svg",
  onclick: () => {
    _.dispatch({ toggleclass: "show-drawer" },
     "drawer");
  },
});
export default function header({ title, logo }) {
  return div(
    menu,
    img({ src: logo }),
    _("h1.cradova|Cradova"),
    h2({ text: title })
  );
}


// in home.js
import _ from "cradova";
import header from "./components/header.js";

const home = new _.Screen(
  "Cradova App",
  header({ // passing in props
    title: "build apps that feels native",
    logo: "../assets/cradova.png",
  })
);

export default home;

    `),
    p("having props destructured and handling element like so.")
  ),

  // widgets
  div(
    {
      id: "widgets",
    },
    h2({ text: "Using widgets or document fragments" }),
    p(`This a function call that accepts many children and returns a document fragment, 
    these componenets also accept props that can get passed to it returned children(s)
    `),
    p(`here's an example`),
    code(`
    
// in examples.js

import _ from "cradova";

// syntax - _.w(...children) 
// @returns a document fragment

const img = _("img.domimg", {
  src: "../assets/cradova.png",
});

const menu = _("img.menu", {
  alt: "menu",
  src: "../../assets/images/menu.svg",
});
const h2 = _("h2| Examples page");
const header = _.w(

  // if you want send down props to all children 
  // then make it the first thing in 
  // the _.w or it will be skipped.

  _.w( // and you can wrap a ton of them
    h2,
    menu,
    _("a| here is the link home", {
      href: "/",
    }),
    img
  )
);

const examples = new _.Screen("examples", header);

export default examples;

    `),
    p("with widgets you can wrap elements without a parent element.")
  ),

  // Service worker configuration

  div(
    {
      id: "sw",
    },
    h2({ text: "Service worker configuration" }),
    p(`PWAs need service workers in order to be installable, handle caching and able to handle background processes outside of the main tread,
    this gives your app flexibility and speed.
    `),
    p(
      `Cradova provides a pre-configured service worker file, the configuration is an online first caching system before using cached versoins if available.`
    ),
    p(
      `This is best if the resources changes often. this is the service worker file that comes with cradova.
      
      place this file at the root of your project folder to avoid out of scope  service worker registration.`
    ),
    code(`
    
// in your service-worker.js

const store = "sample_store";

const assets = [
  // put all the files you want 
  // cached here for the first load
  "/",
];

self.addEventListener("install", function (e) {
  e.waitUntil(
    assets.forEach((asset) => {
      fetch(asset)
        .then((res) => {
          const response = res.clone();
          caches.open(store).then((cache) => {
            cache.put(e.request, response);
          });
          return res;
        })
        .catch((err) => console.log(err));
    })
  );
  self["skipWaiting"]();
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then((cach) => {
      if (cach !== store) {
        return caches.delete(cach);
      }
    })
  );
  return self.clients.claim();
});

self.addEventListener("fetch", function (e) {
  e.waitUntil(
    e.respondWith(
      fetch(e.request)
        .then((res) => {
          const response = res.clone();
          caches.open(store).then((cache) => {
            cache.put(e.request, response);
          });
          return res;
        })
        .catch((err) => caches.
        match(e.request).then((res) => res))
    )
  );
  self["skipWaiting"]();
});
    `)
  )
);

const Documentation = _.w(head, body);
const doc = new _.Screen("learn cradova", Documentation);
export default doc;

// managing state in your app
