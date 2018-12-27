import React from "react";
import { Spring } from "react-spring";
import styled from "@emotion/styled";

import "./Styling/IconAnnimation.css";
import GithubImg from "../images/github.png";
import TwitterImg from "../images/twitter.png";
import LinkedInImg from "../images/linkedin.png";

const GitLink = "https://github.com/tomWritesCode";
const TwitterLink = "https://twitter.com/tomWritesCode";
const LinkedinLink = "https://www.linkedin.com/in/thomas-whitaker-b961b9112/";

const LinkContainer = styled.div`
	padding-top: 20px;
	display: grid;
	grid-template-columns: repeat(3, 33%);
	justify-items: center;

	img {
		margin-bottom: 0;

		&:hover {
			animation: hoverAnimation 1s 0 1;
		}
	}
`;

const ContactIcons = () => (
	<Spring
		from={{ marginTop: "-40px", opacity: 0 }}
		to={{ marginTop: "0", opacity: 1 }}
		delay={300}
	>
		{styles => (
			<LinkContainer style={styles}>
				<a href={GitLink} target="_blank">
					<img src={GithubImg} />
				</a>
				<a href={TwitterLink} target="_blank">
					<img src={TwitterImg} />
				</a>
				<a href={LinkedinLink} target="_blank">
					<img src={LinkedInImg} />
				</a>
			</LinkContainer>
		)}
	</Spring>
);

export default ContactIcons;

export const LinkIcons = graphql`
	fragment LinkIcons on File {
		childImageSharp {
			fluid(maxWidth: 300) {
				...GatsbyImageSharpFluid
			}
		}
	}
`;
