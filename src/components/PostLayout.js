import React, { Component } from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { Spring } from "react-spring";
import Layout from "./Layout";

const twc = `<tomWritesCode />`;

const BackButton = styled.button`
	font-weight: bold;
	color: white;
	padding: 5px 25px;
	border-radius: 16px;
	border: none;
	background: linear-gradient(-40deg, #16161d 20%, #4b4b4e 100%);
	transition: ease-in-out 300ms;
	margin-bottom: 10px;
	font-family: sans-serif;

	&:hover {
		transition: ease-in-out 300ms;
		transform: scale(1.15);
		background: rgba(42, 199, 214, 0.2);
		box-shadow: 0 0 5px #fff, 0 0 10px #00bcd4, 0 0 20px #00bcd4;
		transition: ease-in-out 300ms;
	}

	a {
		text-decoration: none;
		color: white;
	}
`;

const BlogContent = styled.div`
	font-family: sans-serif;
	color: white;
	min-height: 65vh;

	h1 {
		margin-bottom: 20px;
	}
	.date {
		text-align: right;
		padding-right: 30px;
		color: white;
		margin-bottom: 5px;

		@media (max-width: 660px) {
			margin-bottom: 10px;
			padding-right: 5px;
		}
	}
	hr {
		background: #00bcd4;
		box-shadow: 0 0 10px #00bcd4, 0 0 20px #00bcd4, 0 0 30px #00bcd4;
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
					<p>{contentfulTomWritesCodeBlog.post.post}</p> <h5>{twc}</h5>
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
