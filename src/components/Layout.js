import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";

import Header from "./Header";
import "./Layouts/layout.css";

const BackgroundWrapper = styled.div`
	background: #16161d;
	width: 100%;
	min-height: 75vh;
	min-height: 100%;

	img{
				border-radius: 15px;
			box-shadow: 0 0 5px #00feff, 0 0 20px #00feff7a;
			transition: ease-in-out 200ms;

			&:hover{
				box-shadow: 0 0 8px #ae52d4, 0 0 30px #ae52d47a;
				transition: ease-in-out 200ms;
			}
	}
`;

const theme = {
	colors: {
		black: "#16161d",
		blue: "#00feff",
		blueTransp: "#00feff7a",
		purple: "#ae52d4",
		purpleTransp: "#ae52d47a"
	},
};

const Layout = ({ children }) => (
	<StaticQuery
		query={graphql`
			query SiteTitleQuery {
				site {
					siteMetadata {
						title
						description
					}
				}
			}
		`}
		render={data => (
			<ThemeProvider theme={theme}>
				<Helmet
					title={data.site.siteMetadata.title}
					meta={[
						{
							name: "description",
							content: data.site.siteMetadata.description
						},
						{ name: "keywords", content: "sample, something" }
					]}
				>
					<html lang="en" />
				</Helmet>
				<Header siteTitle={data.site.siteMetadata.title} />
				<BackgroundWrapper>
					<div
						style={{
							margin: "0 auto",
							maxWidth: '90vw',
							padding: "0px 1.0875rem 1.45rem",
							paddingTop: 0
						}}
					>
						{children}
					</div>
				</BackgroundWrapper>
			</ThemeProvider>
		)}
	/>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
