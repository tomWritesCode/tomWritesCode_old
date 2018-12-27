import React, { Component } from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import Layout from "./Layout";
import styled from "@emotion/styled";
import { Spring } from "react-spring";

const BackButton = styled.button`
	font-weight: bold;
	color: white;
	padding: 5px 25px;
	border-radius: 12px;
	background: linear-gradient(
		190deg,
		rgba(149, 118, 187, 1) 22%,
		rgba(42, 199, 214, 1) 100%
	);
	transition: ease-in-out 300ms;
	margin-bottom: 10px;
	font-family: sans-serif;

	&:hover {
		transition: ease-in-out 300ms;
		transform: scale(1.15);
		box-shadow: 4px 3px 5px rgba(0, 0, 0, 0.3);
	}

	a {
		text-decoration: none;
		color: white;
	}
`;

const BlogContent = styled.div`
	font-family: sans-serif;

	h1 {
		margin-bottom: 20px;
	}
	.date {
		text-align: right;
		padding-right: 30px;
		color: rgba(0, 0, 0, 0.6);
		margin-bottom: 5px;

		@media (max-width: 660px) {
			margin-bottom: 10px;
			padding-right: 5px;
		}
	}
	hr {
		margin-bottom: 20px;
	}
	.intro {
		margin-bottom: 15px;
		font-style: italic;
	}

	h5 {
		text-align: right;
		padding-right: 40px;

		@media (max-width: 660px) {
			padding-right: 5px;
		}
	}
`;

export default class PostLayout extends Component {
	render() {
		const { contentfulTomWritesCodeBlog } = this.props.data;
		return (
			<Layout>
				<Spring
					from={{ marginLeft: "-105vw", marginTop: "-40vh", opacity: 0 }}
					to={{ marginLeft: "0", marginTop: "0", opacity: 1 }}
				>
					{styles => (
						<div style={styles}>
				<Link className="backButton" to="/blog">
					<BackButton>Back to Blog</BackButton>
				</Link>
						</div>
					)}
				</Spring>

				<BlogContent>
					<h4 className="date">{contentfulTomWritesCodeBlog.date}</h4>
					<h1>{contentfulTomWritesCodeBlog.title}</h1>
					<hr />
					<h4 className="intro">"{contentfulTomWritesCodeBlog.intro}"</h4>
					<p>{contentfulTomWritesCodeBlog.post.post}</p> 
					<h5>By Thomas Whitaker.</h5>
				</BlogContent>
			</Layout>
		);
	}
}

export const query = graphql`
	query PostQuery($slug: String!) {
		contentfulTomWritesCodeBlog(slug: { eq: $slug }) {
			title
			date(formatString: "DD-MMMM-YYYY")
			intro
			post {
				post
			}
		}
	}
`;
