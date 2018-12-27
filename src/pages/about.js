import React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
import { Spring } from "react-spring";

const About = () => (
	<Layout>
		<Spring
			from={{ marginTop: "-20px", opacity: 0 }}
			to={{ marginTop: "0", opacity: 1 }}
		>
			{styles => (
				<div style={styles}>
		<h2>I have a crippling coffee addiction.</h2>
		<h3>I also write code.</h3>
		<h4>Usually, It's doing both of those things at the same time.</h4>

		<Link to="./otherHobbies">Away from the Keyboard</Link>
				</div>
			)}
		</Spring>
	</Layout>
);
export default About;
