import React from "react";
import Layout from "../components/Layout";
import Docs from '../components/Docs';
import Helmet from 'react-helmet';

const DocsPage = () => (
	<Layout>
		<Helmet 
			title="<tomWritesDocs />"
		/>
    	<Docs />
	</Layout>
);

export default DocsPage;
