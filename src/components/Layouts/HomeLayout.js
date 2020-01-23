import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import { ThemeProvider } from "emotion-theming";
import styled from "@emotion/styled";
import "./layout.css";
import theme from "../Themes/theme";

const BackgroundWrapper = styled.div`
	background: #16161d;
	width: 100%;
	height: 100%;
`;

const Content = styled.div`
	
`;

const HomeLayout = ({ children }) => (
	<StaticQuery
		query={graphql`
			query HomeTitleQuery {
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
				<BackgroundWrapper>
					<Content
						style={{
							margin: "0 auto",
							maxWidth: 960,
							padding: "0px 1.0875rem 1.45rem",
							paddingTop: 0
						}}
					>
						{children}
					</Content>
				</BackgroundWrapper>
			</ThemeProvider>
		)}
	/>
);

HomeLayout.propTypes = {
	children: PropTypes.node.isRequired
};

export default HomeLayout;
