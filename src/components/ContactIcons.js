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
		transition: ease-in-out 200ms;
		filter: drop-shadow(2px 2px 2px #4b4b4e);

		&:hover {
			transition: ease-in-out 100ms;
			animation: hoverAnimation 1s 1;
			filter: drop-shadow(4px 4px 9px #4b4b4e);
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
				<a href={GitLink} target="_blank" rel="noopener noreferrer">
					<img src={GithubImg} alt="GitHub Logo" />
				</a>
				<a href={TwitterLink} target="_blank" rel="noopener noreferrer">
					<img src={TwitterImg} alt="Twitter Logo" />
				</a>
				<a href={LinkedinLink} target="_blank" rel="noopener noreferrer">
					<img src={LinkedInImg} alt="LinkedIn Logo" />
				</a>
			</LinkContainer>
		)}
	</Spring>
);

export default ContactIcons;
