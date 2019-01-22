import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import "./NeonLanding/navNeonFlicker.css";

const NavBar = styled.div`
	padding: 0 30px;
	font-family: sans-serif;
	display: flex;
	justify-content: center;
	font-size: 3rem;
	max-width: 1700px;
	margin-bottom: 1.45rem;

	.LinkName {
		font-size: 28px;
		transform: skew(-12deg);

		@media (max-width: 660px) {
			font-size: 24px;
		}
	}
	.neonLink {
		color: #fff;
		text-shadow: 0 0 5px #fff, 0 0 10px #ae52d4, 0 0 20px #ae52d4,
			0 0 30px #ae52d4, 0 0 40px #ae52d4, 0 0 55px #ae52d4, 0 0 70px #ae52d4;
	}
	.NavStyles {
		margin-top: 20px;
		padding: 1rem 3rem;
		display: flex;
		align-items: center;
		position: relative;
		text-transform: uppercase;
		font-weight: 900;
		font-size: 1em;
		background: none;
		border: 0;
		cursor: pointer;
		font-weight: 800;
		justify-content: flex-end;
		@media (max-width: 700px) {
			font-size: 10px;
			padding: 0 10px;
			justify-content: center;
		}
		&:before {
			content: "";
			top: 0;
			bottom: 0;
		}
		&:after {
			height: 2px;
			background: white;
			content: "";
			width: 0;
			position: absolute;
			transform: translateX(-50%);
			transition: width 0.4s;
			transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
			left: 50%;
			margin-top: 20px;
		}
		&:hover,
		&:focus {
			outline: none;
			&:after {
				width: calc(100% - 60px);
			}
		}
	}
	@media (max-width: 660px) {
		justify-content: center;
	}
	@media (min-width: 661px) {
		width: 100%;
		font-size: 1.5rem;
		justify-content: center;
	}
`;

const Nav = () => (
	<NavBar>
		<Link
			className="NavStyles"
			to="/about"
			style={{
				color: "white",
				textDecoration: "none",
				padding: "10px 20px"
			}}
		>
			<span className="LinkName">About</span>
		</Link>

		<Link
			className="NavStyles"
			to="/docs"
			style={{
				color: "white",
				textDecoration: "none",
				padding: "10px 20px"
			}}
		>
			<span className="LinkName">Docs</span>
		</Link>

		<Link
			className="NavStyles"
			to="/blog"
			style={{
				color: "white",
				textDecoration: "none",
				padding: "10px 20px"
			}}
		>
			<span className="LinkName neonLink neonFlicker neonDelay">Blog</span>
		</Link>
	</NavBar>
);

export default Nav;
