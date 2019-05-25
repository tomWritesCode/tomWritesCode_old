import React from "react";
import styled from '@emotion/styled';
import Helmet from 'react-helmet';
import Layout from "../components/Layout";
import MyWork from '../components/MyWork';

const Profile = "https://res.cloudinary.com/tomwritescode/image/upload/v1558651485/profile_shot.jpg";

const BioWrapper = styled.div`
	color: ghostwhite;
	margin-bottom: 50px;
	display: grid;
	grid-template-columns: 75% 25%;

	.textWrap{
		grid-column-start: 1;
		grid-row-start: 1;
		grid-row-end: 2;

		h3{
			padding-right: 20px;
		}
	}

	.profileShot{
		grid-row-start: 1;
		grid-row-end: 2;
		grid-column-start: 2;
		min-width: 200px;
		border-radius: 50% 50% 45% 8px;
		margin: 0 auto;
		box-shadow: 0 0 5px #00feff, 0 0 20px #00feff7a;
		transition: ease-in-out 200ms;

		&:hover{
			box-shadow: 0 0 8px #ae52d4, 0 0 30px #ae52d47a;
			transition: ease-in-out 200ms;
		}
	}
`;

const Bio = () =>  (
	<BioWrapper>
		<div className="textWrap">
			<h1>Hi, My name is Tom.</h1>
			<h3>I am a developer in Sydney, Australia. I work on the front-end and work with Javascript and React.</h3>
		</div>
			<img src={Profile} className="profileShot" alt="Thomas Whitaker" />
	</BioWrapper>
);

const YourNextDev = () => (
	<Layout>
		<Helmet title="tomWritesCode || Your Next Dev" />
		<Bio />
		<MyWork />
	</Layout>
);

export default YourNextDev;

