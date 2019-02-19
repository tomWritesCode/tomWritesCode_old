import React from "react";
import { Link } from "gatsby";
import { Spring } from "react-spring";
import styled from "@emotion/styled";
import "./NeonLanding/navNeonFlicker.css";

const Wrapper = styled.div`
	background: linear-gradient(40deg, #16161d 15%, #4b4b4e 100%);
	padding: 15px;
	border-radius: 20px;
	margin-bottom: 1.45rem;
	@media(max-width: 660px){
		padding: 10px;
	}
`;

const NavBar = styled.div`
	font-family: sans-serif;
	display: flex;
	justify-content: center;
	font-size: 3rem;
	max-width: 1700px;

	.LinkName {
		font-size: 28px;
		transform: skew(-12deg);

		@media (max-width: 660px) {
			font-size: 18px;
		}
	}

	.NavStyles {
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
				animation: neonFlicker 1.5s infinite;
				box-shadow: 0 0 10px #00bcd4, 0 0 20px #00bcd4, 0 0 30px #00bcd4,
					0 0 40px #00bcd4;
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
	<Wrapper>
		<Spring
			from={{ paddingRight: "200%", opacity: 0 }}
			to={{ paddingRight: "0", opacity: 1 }}
			delay={1500}
		>
			{styles => (
				<NavBar style={styles}>
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
						<span className="LinkName">
							Docs
						</span>
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
						<span className="LinkName">
							Blog
						</span>
					</Link>

				</NavBar>
			)}
		</Spring>
	</Wrapper>
);

export default Nav;
