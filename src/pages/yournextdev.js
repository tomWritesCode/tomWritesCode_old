import React from "react";
import styled from '@emotion/styled';
import Layout from "../components/Layout";
import Tech from '../components/Tech';
import MyWork from '../components/MyWork';

const BioWrapper = styled.div`
	color: ghostwhite;
	margin-bottom: 50px;
`;

const Bio = () =>  (
	<BioWrapper>
		<h1>Hi, My name is Tom.</h1>
		<h3>I am a developer in Sydney, Australia. I work on the front-end and work with Javascript and React.</h3>
	</BioWrapper>
);

const YourNextDev = () => (
	<Layout>
		<Bio />
		<MyWork />
		<Tech />
	</Layout>
);

export default YourNextDev;

