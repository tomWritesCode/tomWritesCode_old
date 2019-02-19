import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import { ThemeProvider } from "emotion-theming";
import styled from "@emotion/styled";

import Header from "./Header";
import "./Layouts/layout.css";

const BackgroundWrapper = styled.div`
	background: #16161d;
	width: 100%;
	min-height: 75vh;
	min-height: 100%;
`;

const theme = {
	colors: {
		prime1: "#035388",
		prime2: "#0B69A3",
		prime3: "#127FBF",
		prime4: "#1992D4",
		prime5: "#2BB0ED",
		prime6: "#40C3F7",
		prime7: "#5ed0fa",
		prime8: "#81DEFD",
		prime9: "#b3ecff",
		prime10: "#e3f8ff",

		neut1: "#1f2933",
		neut2: "#323f4b",
		neut3: "#3e4c59",
		neut4: "#52606d",
		neut5: "#616e7c",
		neut6: "#7b8794",
		neut7: "#9aa5b1",
		neut8: "#CBD2D9",
		neut9: "#E4E7EB",
		neut10: "#F5F7FA",

		pink1: "#44056E", // Change to the pink it is meant to be
		pink2: "#580A94",
		pink3: "#690CB0",
		pink4: "#7A0ECC",
		pink5: "#8719E0",
		pink6: "#9446ED",
		pink7: "#A368FC",
		pink8: "#B990FF",
		pink9: "#DAC4FF",
		pink10: "#F2EBFE",

		red1: "#610316",
		red2: "#8A041A",
		red3: "#AB091E",
		red4: "#CF1124",
		red5: "#E12D39",
		red6: "#EF4E4E",
		red7: "#F86A6A",
		red8: "#FF9B9B",
		red9: "#FFBDBD",
		red10: "#FFE3E3",

		yell1: "#8D2B0B",
		yell2: "#B44D12",
		yell3: "#CB6E17",
		yell4: "#DE911D",
		yell5: "#F0B429",
		yell6: "#F7C948",
		yell7: "#FADB5F",
		yell8: "#FCE588",
		yell9: "#FFF3C4",
		yell10: "#FFFBEA",

		green1: "#014D40",
		green2: "#0C6B58",
		green3: "#147D64",
		green4: "#199473",
		green5: "#27AB83",
		green6: "#3EBD93",
		green7: "#65D6AD",
		green8: "#8EEDC7",
		green9: "#C6F7E2",
		green10: "#EFFCF6"
	}
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
							maxWidth: 1060,
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
