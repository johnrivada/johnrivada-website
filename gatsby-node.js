const path = require("path")

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {

    var pathName = path.basename(node.fileAbsolutePath, ".md");
    var slug = pathName.substring(11, pathName.length)
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })

    var text = path.basename(node.fileAbsolutePath, ".md");
    var text2 = text.substring(0,10);
    var text3= text2.replace(/-/g,"/")
    createNodeField({
      node,
      name: "slugDate",
      value: text3,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const response = await graphql(`
      query {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
                slugDate
              }
            }
          }
        }
      }
    `)
  response.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.fields.slugDate}/${edge.node.fields.slug}`,
      component: path.resolve("./src/templates/blog-post.js"),
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
}