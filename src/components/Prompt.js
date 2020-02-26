import React, {useState} from 'react';
import styled from '@emotion/styled';
import MyWorkGrid from './MyWorkGrid';
import ContactPoints from './ContactPoints';

const Profile = "https://res.cloudinary.com/tomwritescode/image/upload/v1558651485/profile_shot.jpg";

const Wrapper = styled.div`
  @media(max-width: 717px) {
    margin-top: 0px;
  }
  @media(max-width: 660px){
    margin-top: 60px;
  }
`;

const BioWrapper = styled.div `
	color: ghostwhite;
	display: grid;
	grid-template-columns: 75% 25%;

	@media(max-width: 717px) {
			display: block;
			grid-template-columns:100%;
			align-content: center;

			.profileShot{
				display: block;
        max-width: 200px;
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
			max-width: 200px;
      width: 95%;
      border-radius: 30px;
		}
	}
`;

export default function Prompt() {
  let [ name ] = useState('');
  // name = prompt("Hi there, what is your name?");
  return(
    <Wrapper>
      <h2>Hi there {name}, if you're seeing this then we probably met at React Conf AU!</h2>

      <h3>I'm not sure how much we got to chat so a quick recap about me.</h3>

      <BioWrapper>
      <img src={Profile} className="profileShot" alt="Thomas Whitaker" />
        <div className="textWrap" style={{marginTop: '40px'}}>
          <h3>Hi, My name is Tom.</h3>
          <p style={{paddingRight: '15px', marginBottom: 0}}>I am currently looking for a Junior front-end developer role and to start my career in development. If you know of any positions available, or want to get in touch the best place to reach me is at my Twitter or LinkedIn below.</p>
          <br/>
          </div>
          </BioWrapper>
          <ContactPoints/>
      
      <div style={{height: '100%', backgroundColor: '#16161d'}}>
        <p style={{marginBottom: '5px', textAlign: 'center'}}>These are some of the things I have made:</p>
        <MyWorkGrid />
      </div>
    </Wrapper>
  );
};