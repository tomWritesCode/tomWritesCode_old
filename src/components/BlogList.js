import React from "react";
import styled from "styled-components";
import { Link, graphql, StaticQuery } from "gatsby";
import { Spring } from "react-spring";

const BLOG_LISTING_QUERY = graphql`
	query BLOG_POST_QUERY {
		allContentfulTomWritesCodeBlog(
			sort: { order: DESC, fields: [updatedAt] }
		) {
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

const Post = styled.article`
	font-family: sans-serif;
	background: rgba(42, 199, 214, 0.15);
	box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.1);
	transition: ease-in-out 300ms;
	padding: 1rem;
	border-radius: 15px;
	margin-bottom: 1rem;
	max-width: 900px;

	&:hover {
		background: rgba(42, 199, 214, 0.2);
		box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.3);
		transition: ease-in-out 300ms;
		transform: scale(1.01);
	}
	a {
		color: #000;
		text-decoration: none;
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
		color: rgba(0, 0, 0, 0.6);
	}
`;

const BlogPage = () => (
	<div>
		<Spring
			from={{ marginLeft: "-50px", marginTop: "-60px", opacity: 0 }}
			to={{ marginLeft: "0", marginTop: "0", opacity: 1 }}
		>
			{styles => (
				<div style={styles}>
					<StaticQuery
						query={BLOG_LISTING_QUERY}
						render={({ allContentfulTomWritesCodeBlog }) =>
							allContentfulTomWritesCodeBlog.edges.map(({ node }) => (
								<Post key={node.slug}>
									<Link to={`/${node.slug}`}>
										<div>
											<h2>{node.title}</h2>
											<p>{node.intro}</p>
											<p className="date">{node.updatedAt}</p>
										</div>
									</Link>
								</Post>
							))
						}
					/>
				</div>
			)}
		</Spring>
	</div>
);

export default BlogPage;
