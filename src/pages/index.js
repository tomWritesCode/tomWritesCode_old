import React from "react";
import HomeLayout from "../components/Layouts/HomeLayout";
import { Spring } from "react-spring";
import HomeLinks from "../components/HomeLinks";
import ContactIcons from "../components/ContactIcons";
import HomeNeon from "../components/NeonLanding/HomeNeon";
import SEO from '../components/SEO';
import Wrapper from "../components/PageWrapper";

const IndexPage = () => (
	<>
		<HomeNeon />
		<HomeLayout>
			<SEO/>
			<Spring
				from={{ marginTop: "-20px", opacity: 0 }}
				to={{ marginTop: "0", opacity: 1 }}
			>
				{styles => (
					<Wrapper style={styles}>
						<HomeLinks />
						<h1>Hi, my names Tom, I write code.</h1>
						<h2 className="alignRight">
							I'm a developer from Sydney, Australia.
							<br />
							<br />
						<hr />
						</h2>
						<h3>
							I work with React.js, Gatsby, GraphQL, Node.js, Emotion, Styled-Components
							among some other technologies. I am mainly a front-end developer but am always looking to expand my skill-set and abilities.
						</h3>

						<h3>
							Feel free to check out some of my other stuff on GitHub, Twitter
							and LinkedIn, drop me a line on Twitter to get in touch.
						</h3>
						<ContactIcons />
					</Wrapper>
				)}
			</Spring>
		</HomeLayout>
	</>
);

export default IndexPage;
