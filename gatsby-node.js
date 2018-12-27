const path = require("path");

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions;

	return new Promise((resolve, reject) => {
		graphql(`
      {
        allContentfulTomWritesCodeBlog(
		  	  limit: 1000
			    sort: { order: DESC, fields: [updatedAt] }) {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(results => {

      if(results.errors){
        reject(results.errors)
      }

			results.data.allContentfulTomWritesCodeBlog.edges.forEach(({ node }) => {
				createPage({
					path: node.slug,
					component: path.resolve("./src/components/PostLayout.js"),
					context: {
						slug: node.slug
					}
				});
			});
			resolve();
		});
	});
};


