import React from 'react';
// import styled from '@emotion/styled';
import Helmet from 'react-helmet';
import Layout from "../components/Layout";
import Wrapper from "../components/PageWrapper";
import Prompt from '../components/Prompt';

const ReactConfAU = () => (
  <Layout>
    <Helmet title="Nice to meet you" />
    <Wrapper>
      <Prompt />
    </Wrapper>
  </Layout>
);

export default ReactConfAU;
