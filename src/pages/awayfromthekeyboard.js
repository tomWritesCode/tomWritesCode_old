import React from "react";
import Helmet from 'react-helmet';
import Layout from "../components/Layout";
import Wrapper from "../components/PageWrapper";

const OtherHobbies = () => (
	<Layout>
	<Helmet title="<tomDoesOtherThings />" />
		<Wrapper>
			<h1>Inside Framelines</h1>
			<h3>Outside of being a web developer I am a keen photographer. I decided that 2020 was the year that I start giving back to the community as well as help share my knowledge with anybody who wants to take better photos or start creating video content.</h3>

			<hr/><br/>

			My new project that I am starting is Inside Framelines, a YouTube channel to help people starting out in photography to learn and grow as photographers. I also want to have a guide to help make it easier for people to make their own content.

		</Wrapper>
	</Layout>
);

export default OtherHobbies;
