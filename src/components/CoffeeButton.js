import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
// import { Spring } from "react-spring";

const Wrapper = styled.div`
  margin-bottom: 20px;
  transition: 200ms ease-in-out;
  width: auto;
  &:hover{
    transform: scale(1.1);
    transition: 200ms ease-in-out;
  }

  span{
    font-family: sans-serif;
  }

	.bmc-button img {
		width: 27px;
		margin-bottom: 1px;
		box-shadow: none;
		border: none;
		vertical-align: middle;
	}
	.bmc-button {
		line-height: 36px;
		height: 37px;
		text-decoration: none;
		display: inline-flex;
		color: #ffffff;
		background-color: #bb5794;
		border-radius: 3px;
		border: 1px solid transparent;
		padding: 1px 9px;
		font-size: 22px;
		letter-spacing: 0.6px;
		box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5);
		-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5);
		margin: 0 auto;
		font-family: "Cookie", cursive;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		-o-transition: 0.3s all linear;
		-webkit-transition: 0.3s all linear;
		-moz-transition: 0.3s all linear;
		-ms-transition: 0.3s all linear;
		transition: 0.3s all linear;
	}
	.bmc-button:hover,
	.bmc-button:active,
	.bmc-button:focus {
		-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5);
		text-decoration: none;
		box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5);
		opacity: 0.85;
		color: #ffffff;
	}
`;

const BuyMeCoffee = () => (
	<Wrapper>
		<Link
			rel="stylesheet"
		>
			<a
				class="bmc-button"
				target="_blank"
				href="https://www.buymeacoffee.com/c5uTpV8m1"
				rel="noopener noreferrer"
			>
				<img
					src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg"
					alt="Help fund my coffee addiction"
				/>
				<span>Help fund my coffee addiction</span>
			</a>
		</Link>
	</Wrapper>
);

export default BuyMeCoffee;
