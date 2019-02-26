import React from "react";

import BlogList from "../components/BlogList";

import Layout from "../components/Layout";
import styled from "styled-components";
import Helmet from 'react-helmet';

const H2 = styled.h2`
	text-align: center;
	color: white;
`;

const BlogPage = () => (
	<Layout>
		<Helmet
			title="<tomWritesABlog />"
		/>
		<H2>Tom Writing about Writing Code.</H2>
      <BlogList />
	</Layout>
);

export default BlogPage;
