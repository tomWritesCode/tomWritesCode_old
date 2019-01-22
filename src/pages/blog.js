import React from "react";

import BlogList from "../components/BlogList";

import Layout from "../components/Layout";
import styled from "styled-components";

const H2 = styled.h2`
	text-align: center;
	color: white;
`;

const BlogPage = () => (
	<Layout>
		<H2>Tom Writing about Writing Code.</H2>
      <BlogList />
	</Layout>
);

export default BlogPage;
