import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import Nav from "./Nav";

const HeaderContainer = styled.div`
	height: 250px;
	background-image: linear-gradient(40deg, #16161d 35%, #4b4b4e 100%);
	clip-path: polygon(0 0, 100% 0, 100% 70%, 0 90%);

	@media (max-width: 660px) {
		h1{
			font-size: 9.5vw;
			text-align: center; 
		}
		height: 130px;
		clip-path: unset;
		margin-bottom: 20px;
	}
`;
const Block = styled.div`
	/* background: #16161d; */
	height: 300px;
	width: 100%;
	background: #16161d;
	z-index: -10;
	position: absolute;
	top: 0;
	left: 0;
`;

const Title = styled.h1`
	margin: 0;
	color: #fff;
	text-shadow: 0 0 5px #fff, 0 0 10px #ae52d4, 0 0 20px #ae52d4, 0 0 30px #ae52d4, 0 0 40px #ae52d4, 0 0 55px #ae52d4, 0 0 70px #ae52d4;
`;
const Header = ({ siteTitle }) => (
	<>
		<HeaderContainer>
			<div
				style={{
					margin: "0 auto",
					maxWidth: 960,
					padding: "1.45rem 1.0875rem"
				}}
			>
				<Title>
					<Link
						to="/"
						style={{
							color: "white",
							textDecoration: "none"
						}}
					>
						{siteTitle}
					</Link>
				</Title>
			</div>
			<Nav />
		</HeaderContainer>
		<Block />
	</>
);

Header.propTypes = {
	siteTitle: PropTypes.string
};

Header.defaultProps = {
	siteTitle: ""
};

export default Header;
