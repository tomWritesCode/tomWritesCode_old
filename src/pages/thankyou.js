import React from 'react-helmet';
// import styled from '@emotion/styled';
import Helmet from 'react-helmet';
import Layout from "../components/Layout";
import Wrapper from "../components/PageWrapper";
import ThankYou from '../components/ThankYou';

const thankyou = () => (
  <Layout>
    <Helmet title="THANK YOU!" />
    <Wrapper>
      <ThankYou />
    </Wrapper>
  </Layout>
);

export default thankyou;