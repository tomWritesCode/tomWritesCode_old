import React from 'react'
import { Link } from 'gatsby'
import styled from "@emotion/styled";
import Helmet from 'react-helmet';

import Layout from '../components/Layout'

const Container = styled.div`
  height: 37vw;
  color: ghostwhite;
  font-family: sans-serif;

  a{
    font-size: 1.7rem;
    margin-bottom: 10px;
    display: block;
    text-decoration: none;
    color: ghostwhite;
    font-weight: bold;
		transition: ease-in-out 300ms;

		&:hover {
			padding: 2px 5px;
			transition: ease-in-out 200ms;
			color: white;
			text-shadow: 0 0 5px #fff, 0 0 10px #00bcd4, 0 0 20px #00bcd4,
				0 0 30px #00bcd4;
		}
  }
`;

const NotFoundPage = () => (
  <Layout>
    <Helmet 
      title="<tomWritesABooBoo />"
    />
    <Container>
    <h1>Ohhhh...... ummmm ok.</h1>
    <p>Well this sucks........ I mean it works on my machine....</p>

      <h2>Can I suggest one of these pages instead</h2>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/docs'>Docs</Link>
      <Link to='/gear'>Gear</Link>
      <Link to='/blog'>Blog</Link>
    </Container>
  </Layout>
)

export default NotFoundPage
