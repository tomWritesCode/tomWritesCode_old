import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import "./NeonLanding/navNeonFlicker.css";

const Wrapper = styled.div`
	background: linear-gradient(40deg, #16161d 15%, #4b4b4eB3 100%);
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
		&:hover{
				animation: neonFlicker 1.5s infinite;
				.LinkName{
					transition: 300ms ease-in-out;
					text-shadow: 0 0 5px #fff, 0 0 10px #ae52d4, 0 0 20px #ae52d4, 0 0 30px #ae52d4, 0 0 40px #ae52d4, 0 0 55px #ae52d4, 0 0 70px #ae52d4;
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
						<span className="LinkName">
							Docs
						</span>
					</Link>

					<Link
						className="NavStyles"
						to="/gear"
						style={{
							color: "white",
							textDecoration: "none",
							padding: "10px 20px"
						}}
					>
						<span className="LinkName">Gear</span>
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
	</Wrapper>
);

export default Nav;
