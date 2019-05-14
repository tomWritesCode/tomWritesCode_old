import React, { Component } from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { Spring } from "react-spring";
import Layout from "./Layout";

const twc = `<tomWritesCode />`;

const Wrapper = styled.div`
	background: #16161d;
	min-height: 72vh;
	height: 100%;
	width: 100%;
`;

const BackButton = styled.button`
	font-weight: bold;
	color: white;
	padding: 5px 25px;
	border-radius: 10px;
	border: none;
	background: linear-gradient(-40deg, #16161d 15%, #4b4b4e 100%);
	transition: ease-in-out 300ms;
	margin-bottom: 10px;
	font-family: sans-serif;

	&:hover {
		transition: ease-in-out 300ms;
		transform: scale(1.15);
		background: linear-gradient(40deg, rgba(42, 199, 214, 0.2) 15%, #16161d 100%);
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

	img{
		display: block;
		margin: 0 auto;
	}

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

	pre {
		background-image: linear-gradient(-40deg, #16161d 25%, #4b4b4e 100%);
		border-radius: 35px 15px 0 35px;
		font-weight: bold;
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
				<Wrapper>
					<Spring
						from={{ marginLeft: "-50px", opacity: 0 }}
						to={{ marginLeft: "0", opacity: 1 }}
						delay={ 600 }
					>
						{styles => (
							<div style={styles}>
								<Link className="backButton" to="/blog">
									<BackButton>Back to Blog</BackButton>
								</Link>
							</div>
						)}
					</Spring>

					<Spring
						from={{ paddingTop: "100px", opacity: 0 }}
						to={{ paddingTop: "0", opacity: 1 }}
					>
						{styles => (		
							<BlogContent style={styles}>
								<h4 className="date">{contentfulTomWritesCodeBlog.date}</h4>
								<h1>{contentfulTomWritesCodeBlog.title}</h1>
								<hr />
								<h4 className="intro">"{contentfulTomWritesCodeBlog.intro}"</h4>
								<div
									dangerouslySetInnerHTML={{
										__html: contentfulTomWritesCodeBlog.post.childMarkdownRemark.html
									}}
								/>
								 <h5>{twc}</h5>
							</BlogContent>
						)}
					</Spring>
				</Wrapper>
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
				childMarkdownRemark {
					html
				}
			}
		}
	}
`;
