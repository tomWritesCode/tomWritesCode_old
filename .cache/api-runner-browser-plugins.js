module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"gatsby-starter-default","short_name":"starter","start_url":"/","background_color":"#16161d","theme_color":"#16161d","display":"minimal-ui","icon":"./public/icons/favicon-256.png"},
    },{
      plugin: require('../node_modules/gatsby-plugin-emotion/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-segment-js/gatsby-browser.js'),
      options: {"plugins":[],"prodKey":"ilTLS2rr94ZdBLP5IAqFfoyG3zJsHMYm","devKey":"ilTLS2rr94ZdBLP5IAqFfoyG3zJsHMYm","trackPage":true},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
