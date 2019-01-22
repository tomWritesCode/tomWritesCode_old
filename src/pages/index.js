import React from "react";
import HomeLayout from "../components/Layouts/HomeLayout";
import { Spring } from "react-spring";
import styled from "@emotion/styled";
import HomeLinks from '../components/HomeLinks';
import ContactIcons from '../components/ContactIcons';
import HomeNeon from "../components/NeonLanding/HomeNeon";

const Wrapper = styled.div`
	color: white;

	h1{
		margin-bottom: 0;
	}
	h2{
		text-align: right;
	}
`;

const IndexPage = () => (
	<>
		<HomeNeon />
		<HomeLayout>
			<Spring
				from={{ marginTop: "-20px", opacity: 0 }}
				to={{ marginTop: "0", opacity: 1 }}
			>
				{styles => (
					<Wrapper style={styles}>
						<HomeLinks />
						<h1>Hi, my names Tom, as you may have guessed, I write code.</h1>
						<h2>
							I'm a developer from Sydney, Australia. 
							<br/><br/>
						</h2>
						<h3>
							I work with React.js, GraphQL, Node.js, Emotion, Styled-Components among some other technologies.
						</h3>
					
						<h3>
							Feel free to check out some of my other stuff on GitHub, Twitter and LinkedIn.
						</h3>
						<ContactIcons />
					</Wrapper>
				)}
			</Spring>
		</HomeLayout>
	</>
);

export default IndexPage;
