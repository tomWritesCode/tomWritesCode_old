import React from "react";
import Helmet from 'react-helmet';
import Layout from "../components/Layout";
import { Link } from "gatsby";
import { Spring } from "react-spring";
import Wrapper from "../components/PageWrapper";

const VSC_Link = "https://marketplace.visualstudio.com/items?itemName=tomWritesCode.raspberryCandy";

const BLOG_LINK = "https://tomwritescode.com/raspberrycandy-i-made-a-vs-code-theme";

const About = () => (
	<Layout>
	<Helmet
	title="<tomWritesAboutHimself />"
	/>
	<Spring
	from={{ marginTop: "-20px", opacity: 0 }}
	to={{ marginTop: "0", opacity: 1 }}
	>
	{styles => (
		<Wrapper style={styles}>
		<h2>I have a crippling coffee addiction.</h2>
					<h3>I also write code.</h3>
					<h4>Usually, It's doing both of those things at the same time.</h4>

					<p>I work the majority of the time with React, Gatsby, GraphQL, Emotion, Styled Components, Nodejs just to name a few. I work primarily on the front end but would love to be able to build full-stack applications.</p>

				<hr/><br/>

				<p>Other than web development I am a keen photographer, I also am working on some videos revolving around photography and videography. You can see more on this where I talk about myself <Link to="/awayfromthekeyboard">away from the keyboard.</Link></p>

				<hr/><br/>

					<p>
						I made a VS Code theme which is published on the VS Code Marketplace. My theme, raspberryCandy is a Neon/Pastel theme runs heavy on a neon electric aqua and a pastel pink/purple.There is also a light version of this theme called raspberryCandy sugarFree, You can <a href={VSC_Link} target="_blank" rel="noopener noreferrer">check both of those out raspberryCandy on the VS Code Marketplace.</a>

						<br /> <br />

						I have also done a write up about making the them and the resources I used to build it. <a href={BLOG_LINK} target="_blank" rel=" noopener noreferrer">You can read about that here.</a>
					</p>

					<img src="https://res.cloudinary.com/tomwritescode/image/upload/v1559729838/Screen_Shot_2019-06-04_at_9.35.44_pm.png" alt="raspberryCandy & raspberryCandy sugarFree Screenshot"/>

				<hr/><br/>

				</Wrapper>
			)}
		</Spring>
	</Layout>
);
export default About;
