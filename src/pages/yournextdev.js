import React from "react";
import styled from '@emotion/styled';
import Helmet from 'react-helmet';
import Layout from "../components/Layout";
import MyWork from '../components/MyWork';
// import ContactForm from '../components/ContactForm';
// import Terminal from '../components/Terminal';

const Profile = "https://res.cloudinary.com/tomwritescode/image/upload/v1558651485/profile_shot.jpg";
const VSC_Link = "https://marketplace.visualstudio.com/items?itemName=tomWritesCode.raspberryCandy";
const BLOG_LINK = "https://tomwritescode.com/raspberrycandy-i-made-a-vs-code-theme";

const BioWrapper = styled.div`
	color: ghostwhite;
	display: grid;
	grid-template-columns: 75% 25%;

	@media(max-width: 717px) {
			display: block;
			grid-template-columns:100%;
			align-content: center;

			.profileShot{
				display: block;
				max-width: 300px
			}
		}

	.textWrap{
		grid-column-start: 1;
		grid-row-start: 1;
		grid-row-end: 2;

		h3{
			padding-right: 20px;
			line-height: 2rem;
		}
	}
	
	.profileShot{
		grid-row-start: 1;
		grid-row-end: 2;
		grid-column-start: 2;
		max-width: 200px;
		border-radius: 50% 50% 45% 8px;
		margin: 0 auto;
		box-shadow: 0 0 5px #00feff, 0 0 20px #00feff7a;
		transition: ease-in-out 200ms;

		&:hover{
			box-shadow: 0 0 8px #ae52d4, 0 0 30px #ae52d47a;
			transition: ease-in-out 200ms;
		}
		@media(max-width: 717px) {
			max-width: 300px;
			width: 95%;
		}
	}
`;

const RaspberryWrap = styled.div`
	margin-top: 50px;
	color: ghostwhite;

	a {
		color: white;
		font-family: sans-serif;
		font-weight: bold;
		transition: ease-in-out 300ms;

		&:hover {
			padding: 2px 2px;
			transition: ease-in-out 200ms;
			color: white;
			border-radius: 15px;
			/* background-image: linear-gradient(-15deg, #2ac7d6 0%, #9576bb 100%); */
			text-shadow:0 0 10px #ae52d4, 0 0 20px #ae52d4,
				0 0 30px #ae52d4, 5px 5px 40px #ae52d4;
		}
	}
	hr {
		background: #00bcd4;
		box-shadow: 0 0 10px #00bcd4, 0 0 20px #00bcd4,
			0 0 30px #00bcd4;
	}

	img{
		display: block;
		max-width: 600px;
		margin: 40px auto;

		@media(max-width: 679px){
			max-width: 95%;
			margin: 40px auto;
		}
	
	}
	@media(max-width: 805px) {
		margin-top: 95px;
	}
`;

const Bio = () =>  (
	<BioWrapper>
		<div className="textWrap">
			<h1>Hi, My name is Tom.</h1>
			<h3>I am a dedicated and passionate Front End Developer from Sydney, Australia. I work with Javascript and React. My background in design, hospitality and sales has helped me to develop strong communication skills and an ability to critically consider problems at a high level before diving into a solution.</h3>
		</div>
			<img src={Profile} className="profileShot" alt="Thomas Whitaker" />
	</BioWrapper>
);

const RaspberryBio = () => (
	<RaspberryWrap>
		<br/><hr/>
		
		<h3>
		I made a VS Code theme which is published on the VS Code Marketplace. My theme, raspberryCandy is a Neon/Pastel theme runs heavy on a neon electric aqua and a pastel pink/purple. You can <a href={VSC_Link} target="_blank" rel="noopener noreferrer">check out raspberryCandy on the VS Code Marketplace.</a>
		
		<br /> <br />
		
		I have also done a write up about making the them and the resources I used to build it. <a href={BLOG_LINK} target="_blank" rel=" noopener noreferrer">You can read about that here.</a>
		</h3>
		
		<img src="https://res.cloudinary.com/tomwritescode/image/upload/v1559729838/Screen_Shot_2019-06-04_at_9.35.44_pm.png" alt="raspberryCandy & raspberryCandy sugarFree Screenshot"/>
		
		
		<h3 style={{textAlign: "center"}}>I also made a web scraper using NodeJS to show me how many downloads I have.</h3>

		<img src= "https://res.cloudinary.com/tomwritescode/image/upload/v1560744477/404.gif" alt="raspberryScraper" />
		
		<hr/>
	</RaspberryWrap>
);

const YourNextDev = () => (
	<Layout>
		<Helmet title="<tomWritesCode /> === Your Next Dev" />
		<Bio />

		<MyWork />
		<RaspberryBio />

	</Layout>
);

export default YourNextDev;

