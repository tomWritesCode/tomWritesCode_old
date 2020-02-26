const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-components-post-layout-js": hot(preferDefault(require("/Users/thomaswhitaker/Desktop/tomWritesCode/tomWritesCode/src/components/PostLayout.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/thomaswhitaker/Desktop/tomWritesCode/tomWritesCode/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/thomaswhitaker/Desktop/tomWritesCode/tomWritesCode/src/pages/about.js"))),
  "component---src-pages-awayfromthekeyboard-js": hot(preferDefault(require("/Users/thomaswhitaker/Desktop/tomWritesCode/tomWritesCode/src/pages/awayfromthekeyboard.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/thomaswhitaker/Desktop/tomWritesCode/tomWritesCode/src/pages/blog.js"))),
  "component---src-pages-docs-js": hot(preferDefault(require("/Users/thomaswhitaker/Desktop/tomWritesCode/tomWritesCode/src/pages/docs.js"))),
  "component---src-pages-gear-js": hot(preferDefault(require("/Users/thomaswhitaker/Desktop/tomWritesCode/tomWritesCode/src/pages/gear.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/thomaswhitaker/Desktop/tomWritesCode/tomWritesCode/src/pages/index.js"))),
  "component---src-pages-react-conf-au-js": hot(preferDefault(require("/Users/thomaswhitaker/Desktop/tomWritesCode/tomWritesCode/src/pages/reactConfAU.js"))),
  "component---src-pages-thankyou-js": hot(preferDefault(require("/Users/thomaswhitaker/Desktop/tomWritesCode/tomWritesCode/src/pages/thankyou.js"))),
  "component---src-pages-yournextdev-js": hot(preferDefault(require("/Users/thomaswhitaker/Desktop/tomWritesCode/tomWritesCode/src/pages/yournextdev.js")))
}

