
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
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: process.env.GA_TRACKING_ID,
				// Puts tracking script in the head instead of the body
				head: true,
			}
		},
		
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
	],
};
