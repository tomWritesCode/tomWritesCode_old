import styled from '@emotion/styled';

const Wrapper = styled.div`
	font-family: sans-serif;
  color: ${props => props.theme.colors.white};
  height: 100%;
  min-height: 72vh;
  background: ${props => props.theme.colors.black};

  hr {
		height: 2px;
		margin-bottom: 0;
    background: ${props => props.theme.colors.blue};
    box-shadow: 
      0 0 10px ${props => props.theme.colors.blue}, 
      0 0 20px ${props => props.theme.colors.blue},
			0 0 30px ${props => props.theme.colors.blue};
  }
  a {
		color: ${props => props.theme.colors.white};
		font-weight: bold;
		transition: ease-in-out 300ms;
		text-decoration-color: ${props => props.theme.colors.blue};

		&:hover {
			transition: ease-in-out 200ms;
			color: ${props => props.theme.colors.white};
			text-decoration-color: ${props => props.theme.colors.purple};
			border-radius: 15px;
			/* background-image: linear-gradient(-15deg, #2ac7d6 0%, #9576bb 100%); */
			text-shadow:
        0 0 10px ${props => props.theme.colors.purple},
        0 0 20px ${props => props.theme.colors.purple},
				0 0 30px ${props => props.theme.colors.purple},
        5px 5px 40px ${props => props.theme.colors.purple};
		}
	}

	.alignRight{
		text-align: right;
	}

	img{
		display: block;
		width: 80vw;
		max-width: 700px;
		margin: 0 auto 1.45rem auto;
	}

`;


export default Wrapper;