import React from "react";
import styled from "@emotion/styled";
import { Link, graphql, StaticQuery } from "gatsby";
import { Spring } from "react-spring";

const BLOG_LISTING_QUERY = graphql`
	query BLOG_POST_QUERY {
		allContentfulTomWritesCodeBlog(sort: { order: DESC, fields: [updatedAt] }) {
			edges {
				node {
					intro
					slug
					title
					updatedAt(formatString: "DD-MMMM-YYYY")
					intro
					post {
						post
					}
				}
			}
		}
	}
`;

const Wrapper = styled.div`
	height: 100%;
	min-height: 66vh;
	background: #16161d;
		a {
			color: white;
			text-decoration: none;
		}
`;

const Post = styled.article`
	margin: 0 auto;
	font-family: sans-serif;
	background: linear-gradient(-40deg, #16161d 40%, #00feff7a 100%);
	box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.1);
	transition: ease-in-out 300ms;
	padding: 1rem;
	border-radius: 15px;
	margin-bottom: 1rem;
	max-width: 900px;

	&:hover {
		background: linear-gradient(-40deg, #16161d 5%, #00feff7a 100%);
		box-shadow: 0 0 5px #fff, 0 0 10px #00bcd4, 0 0 20px #00bcd4, 0 0 30px #00bcd47a;
		transition: ease-in-out 300ms;
		transform: scale(1.01);
	}
	h2 {
		margin-bottom: 12px;
		text-decoration: underline;
	}
	p {
		font-size: 1rem;
		margin-bottom: 5px;
	}
	.date {
		font-size: 0.9rem;
		text-decoration: underline;
		margin-bottom: 0;
		text-align: right;
		padding-right: 30px;
		color: ghostwhite;
	}
`;

const BlogPage = () => (
	<Wrapper>
		<Spring
			from={{ paddingTop: "100px", opacity: 0 }}
			to={{ paddingTop: "0", opacity: 1 }}
		>
			{styles => (
				<div style={styles}>
					<StaticQuery
						query={BLOG_LISTING_QUERY}
						render={({ allContentfulTomWritesCodeBlog }) =>
							allContentfulTomWritesCodeBlog.edges.map(({ node }) => (
								<Link to={`/${node.slug}`}>
									<Post key={node.slug}>
										<div>
											<h2>{node.title}</h2>
											<p>{node.intro}</p>
											<p className="date">{node.updatedAt}</p>
										</div>
									</Post>
								</Link>
							))
						}
					/>
				</div>
			)}
		</Spring>
	</Wrapper>
);

export default BlogPage;
