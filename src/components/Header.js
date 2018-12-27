import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import Nav from "./Nav";

const HeaderContainer = styled.div`
	height: 250px;
	background-image: linear-gradient(-15deg, #2ac7d6 0%, #9576bb 100%);
	clip-path: polygon(0 0, 100% 0, 100% 70%, 0 90%);

	@media (max-width: 660px) {
		height: 165px;
		clip-path: polygon(0 0, 100% 0, 100% 80%, 0 99%);
	}
`;

const Header = ({ siteTitle }) => (
	<HeaderContainer>
		<div
			style={{
				margin: "0 auto",
				maxWidth: 960,
				padding: "1.45rem 1.0875rem"
			}}
		>
			<h1
				style={{
					margin: 0
				}}
			>
				<Link
					to="/"
					style={{
						color: "white",
						textDecoration: "none"
					}}
				>
					{siteTitle}
				</Link>
			</h1>
		</div>
		<Nav />
	</HeaderContainer>
);

Header.propTypes = {
	siteTitle: PropTypes.string
};

Header.defaultProps = {
	siteTitle: ""
};

export default Header;
