import React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
import { Spring } from "react-spring";
import styled from "styled-components";

const Wrapper = styled.div`
	a {
		font-family: sans-serif;
		font-weight: bold;
		color: black;
		transition: ease-in-out 300ms;

		&:hover {
			padding: 2px 15px;
			transition: ease-in-out 200ms;
			color: white;
			border-radius: 15px;
			background-image: linear-gradient(-15deg, #2ac7d6 0%, #9576bb 100%);
		}
	}
`;

const About = () => (
	<Layout>
		<Spring
			from={{ marginTop: "-20px", opacity: 0 }}
			to={{ marginTop: "0", opacity: 1 }}
		>
			{styles => (
				<Wrapper style={styles}>
					<h2>I have a crippling coffee addiction.</h2>
					<h3>I also write code.</h3>
					<h4>Usually, It's doing both of those things at the same time.</h4>

					<h3>
						Outside of being a developer my main hobby is photography, If you want to take a look at some of that take a look at my stuff <Link to="./otherHobbies">Away from the Keyboard.</Link>
					</h3>
				</Wrapper>
			)}
		</Spring>
	</Layout>
);
export default About;
