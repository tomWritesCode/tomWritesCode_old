
require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
	siteMetadata: {
		title: "<tomWritesCode />",
		description:
			"Hi, my names Thomas and I write code, and drink lots of coffee.",
		url: "https://tomwritescode.com",
		image: "/public/static/screen.png",
		twitterUsername: "@tomwritescode",
	},
	plugins: [
		"gatsby-plugin-react-helmet",
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `siteDocs`,
				path: `${__dirname}/src/siteDocs`
			}
		},
		"gatsby-transformer-remark",
		// "gatsby-transformer-sharp",
		// "gatsby-plugin-sharp",
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: "gatsby-starter-default",
				short_name: "starter",
				start_url: "/",
				background_color: "#16161d",
				theme_color: "#16161d",
				display: "minimal-ui",
				icon: "./public/icons/favicon-256.png" // This path is relative to the root of the site.
			}
		},
		{ // Styled Components
			resolve: `gatsby-plugin-styled-components`,
			options: {
				displayName: false,
			}
		},
		{ // Yes I am using Emotion as well, I want to learn them. 
			resolve: `gatsby-plugin-emotion`,
			options: {
				// Accepts all options defined by `babel-plugin-emotion` plugin.
			},
		},
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: `u434ytvnd3bo`,
				// Learn about environment variables: https://gatsby.app/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
			}
		},
		// {
		// 	resolve: `gatsby-plugin-google-analytics`,
		// 	options: {
		// 		trackingId: process.env.GA_TRACKING_ID,
		// 		// Puts tracking script in the head instead of the body
		// 		head: true,
		// 	}
		// },
		{
			resolve: "gatsby-plugin-sentry",
			options: {
				dsn: "https://b70369b561bb4f74a9faf18660619b43@sentry.io/1468144",
				// Optional settings, see https://docs.sentry.io/clients/node/config/#optional-settings
				environment: process.env.NODE_ENV,
				enabled: (() => ["production", "stage"].indexOf(process.env.NODE_ENV) !== -1)()
			}
		},
		{
        resolve: `gatsby-plugin-segment-js`,
        options: {
            // your segment write key for your production environment
            // when process.env.NODE_ENV === 'production'
            // required; non-empty string
            prodKey: `ilTLS2rr94ZdBLP5IAqFfoyG3zJsHMYm`,

            // if you have a development env for your segment account, paste that key here
            // when process.env.NODE_ENV === 'development'
            // optional; non-empty string
            devKey: `ilTLS2rr94ZdBLP5IAqFfoyG3zJsHMYm`,

            // boolean (defaults to false) on whether you want
            // to include analytics.page() automatically
            // if false, see below on how to track pageviews manually
            trackPage: true
        }
    }
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
	],
};
