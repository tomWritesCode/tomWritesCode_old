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
	background: linear-gradient(0deg, #16161d 30%, #4b4b4eB3 100%);
	border-radius: 20px;
	padding-top: 25px;
	display: grid;
	grid-template-columns: repeat(3, 33%);
	justify-items: center;
	img {
		max-width: 70%;
		margin-bottom: 0;
		transition: ease-in-out 200ms;
		filter: drop-shadow(2px 2px 2px #4b4b4e);

		&:hover {
			transition: ease-in-out 100ms;
			transform: scale(1.1);
			filter: drop-shadow(4px 4px 9px #4b4b4e);
		}
	}
`;

const ContactIcons = () => (
	<Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={800}>
		{styles => (
			<LinkContainer style={styles}>
				<Spring
					from={{ transform: "rotate(90deg)" }}
					to={{ transform: "rotate(0deg)" }}
					delay={50}
				>
					{styles => (
						<a
							href={GitLink}
							target="_blank"
							rel="noopener noreferrer"
							style={styles}
						>
							<img src={GithubImg} alt="GitHub Logo" />
						</a>
					)}
				</Spring>

				<Spring
					from={{ transform: "rotate(90deg)" }}
					to={{ transform: "rotate(0deg)" }}
					delay={100}
				>
					{styles => (
						<a
							href={TwitterLink}
							target="_blank"
							rel="noopener noreferrer"
							style={styles}
						>
							<img src={TwitterImg} alt="Twitter Logo" />
						</a>
					)}
				</Spring>

				<Spring
					from={{ transform: "rotate(90deg)" }}
					to={{ transform: "rotate(0deg)" }}
					delay={150}
				>
					{styles => (
						<a
							href={LinkedinLink}
							target="_blank"
							rel="noopener noreferrer"
							style={styles}
						>
							<img src={LinkedInImg} alt="LinkedIn Logo" />
						</a>
					)}
				</Spring>
			</LinkContainer>
		)}
	</Spring>
);

export default ContactIcons;
