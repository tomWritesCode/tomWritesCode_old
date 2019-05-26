/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

 // gatsby-browser.js
 exports.onRouteUpdate = () => {
   window.analytics && window.analytics.page();
 };

// You can delete this file if you're not using it
