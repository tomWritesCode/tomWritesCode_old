import React from "react";
import styled from "@emotion/styled";
import { Spring } from "react-spring";
import "./navNeonFlicker.css";

const Open = `<`;
const TWC = `TWC `;
const Close = `/>`;
const TomWritesCode = `<tomWritesCode />`;

const PageWrapper = styled.div`
	overflow: hidden;
	display: grid;
	grid-template-columns: 100%;
	grid-template-rows: 85% 15%;
	align-items: center;
	text-align: center;
	z-index: 10;
	height: 100vh;
	width: 100%;
	background: #16161d;
	.TextWrap {
	}
	h2 {
		font-size: 22.5vw;
		display: inline-block;
		margin-bottom: 0;

		@media (max-width: 500px) {
			font-size: 22.5vw;
		}
	}
	h3 {
		margin-bottom: 0;

		@media (max-width: 500px) {
			font-size: 10vw;
			padding-bottom: 130px;
		}
	}
`;

const HomeNeon = () => (
	<PageWrapper className="page">
		<Spring
			from={{ opacity: 0, transform: "rotate(45deg)" }}
			to={{ opacity: 1, transform: "rotate(0)" }}
			delay={400}
		>
			{styles => (
				<div className="TextWrap" style={styles}>
					<h2 className="neon1">{Open}</h2>
					<h2 className="neon2 neonFlicker">{TWC}</h2>
					<h2 className="neon1">{Close}</h2>
				</div>
			)}
		</Spring>

		<h3 className="neon1">Welcome to {TomWritesCode}</h3>
	</PageWrapper>
);

export default HomeNeon;
