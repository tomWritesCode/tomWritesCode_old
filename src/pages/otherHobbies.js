import React from "react";
import Layout from "../components/Layout";
import styled from "@emotion/styled";

const Wrapper = styled.div`
	min-height: 65.5vh;
	color: white;
	/* background: linear-gradient(-20deg, #16161d 35%, #4b4b4e 100%); */
	padding: 15px 20px;
	border-radius: 20px;
`;

const OtherHobbies = () => (
	<Layout>
		<Wrapper>
			<h1>Framelines.Photo</h1>
			<h3>Outside of being a web developer I am a keen photographer, My work is split about 80/20 of shooting Film over digital.</h3>
		</Wrapper>
	</Layout>
);

export default OtherHobbies;
