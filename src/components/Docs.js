import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { Spring } from "react-spring";

const DocsContainer = styled.div`
	font-family: sans-serif;

	a {
		font-weight: bold;
		color: black;
		transition: ease-in-out 300ms;

		&:hover {
			padding: 2px 5px;
			transition: ease-in-out 200ms;
			color: white;
			background-image: linear-gradient(-15deg, #2ac7d6 0%, #9576bb 100%);
		}
	}
`;

const DOCS_QUERY = graphql`
	query DocsQuery {
		allMarkdownRemark(filter: { frontmatter: { slug: { eq: "/docs" } } }) {
			edges {
				node {
					frontmatter {
						title
						slug
					}
					html
					id
				}
			}
		}
	}
`;

const Docs = () => (
	<StaticQuery
		query={DOCS_QUERY}
		render={({ allMarkdownRemark }) => (
			<>
				{allMarkdownRemark.edges.map(({ node }) => (
					<Spring
						from={{ marginTop: "-20px", opacity: 0 }}
						to={{ marginTop: "0", opacity: 1 }}
					>
						{styles => (
						<div style={styles}>
						<h1>{node.frontmatter.title}</h1>
						<DocsContainer
							dangerouslySetInnerHTML={{
								__html: node.html
							}}
						/>
					</div>
						)}
					</Spring>
				))}
			</>
		)}
	/>
);

export default Docs;
