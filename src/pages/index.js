import React from "react";
import Layout from "../components/layout";
import Contact from '../components/Contact';
import { Spring } from "react-spring";

const IndexPage = () => (
	<Layout>
		<Spring
			from={{ marginTop: "-20px", opacity: 0 }}
			to={{ marginTop: "0", opacity: 1 }}
		>
			{styles => (
				<div style={styles}>
					<h1>Hi, my names Tom, as you may have guessed, I write code.</h1>
					<Contact />
				</div>
			)}
		</Spring>
	</Layout>
);

export default IndexPage;
