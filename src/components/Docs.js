import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { Spring } from "react-spring";

const Wrapper = styled.div`
	color: white;

	pre {
		background-image: linear-gradient(-40deg, #16161d 25%, #4b4b4e 100%);
		border-radius: 35px 15px 0 35px;
		font-weight: bold;
	}

	hr {
		background: #00bcd4;
		box-shadow: 0 0 10px #00bcd4, 0 0 20px #00bcd4,
			0 0 30px #00bcd4;
	}

	img {
		display: block;
		margin: 0 auto;
		max-width: 90%;
		border-radius: 8px;
	}
`;
const DocsContainer = styled.div`
	font-family: sans-serif;
	a {
		color: white;
		font-weight: bold;
		transition: ease-in-out 300ms;

		&:hover {
			padding: 2px 5px;
			transition: ease-in-out 200ms;
			color: white;
			text-shadow: 0 0 5px #fff, 0 0 10px #00bcd4, 0 0 20px #00bcd4,
				0 0 30px #00bcd4;
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
							<Wrapper style={styles}>
								<h1>{node.frontmatter.title}</h1>
								<DocsContainer
									dangerouslySetInnerHTML={{
										__html: node.html
									}}
								/>
							</Wrapper>
						)}
					</Spring>
				))}
			</>
		)}
	/>
);

export default Docs;
