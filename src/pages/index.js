import React from "react";
import Layout from "../components/Layout";
import Contact from '../components/Contact';
import { Spring } from "react-spring";

import HomeNeon from '../components/NeonLanding/HomeNeon';
const IndexPage = () => (
	<>
	<HomeNeon />
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
	</>
);

export default IndexPage;
