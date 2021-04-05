const { createFilePath } = require("gatsby-source-filesystem")
const path = require(`path`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === "MarkdownRemark") {
    const { createNodeField } = actions

    const path = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({ node, name: "path", value: path })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              path
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.path,
      component: path.resolve(`./src/templates/article.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.path,
      },
    })
  })
}
