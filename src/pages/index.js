import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"
import { useStaticQuery, graphql, Link } from "gatsby"


import blogStyles from "../components/blog.module.css"

const Index = () => {

  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
          edges {
            node {
              frontmatter {
                title
                date(formatString: "DD MMMM YYYY")
                tags
              }
              timeToRead
              excerpt  (pruneLength: 500)
              id
              fields {
                slug
                slugDate
              }
            }
          }
        }
      }
    `
  )

  
  return (
    <Layout>
      <Metadata title="Home" description="This is my home page" />
      This site is will mostly be used for ranting about whatever is on my mind and hosting some of my programming projects.
      <br />
      <br />
      <h1>Latest Video</h1>
      <br />
      <br />
      <h1>Latest Blog Post</h1>
      <div key={data.allMarkdownRemark.edges[0].node.id}>
        <h2>
          <Link to={`/blog/${data.allMarkdownRemark.edges[0].node.fields.slugDate}/${data.allMarkdownRemark.edges[0].node.fields.slug}`}>
            {data.allMarkdownRemark.edges[0].node.frontmatter.title}
          </Link>
        </h2>
        <div>
          <span> {data.allMarkdownRemark.edges[0].node.frontmatter.date} </span>
          <br />
          <div class={blogStyles.tag}>
                    {data.allMarkdownRemark.edges[0].node.frontmatter.tags.map(tag => {
                      return (<span>/ {tag} </span>)
                    })} /
                  </div>
        </div>
        <p>{data.allMarkdownRemark.edges[0].node.excerpt}</p>
      </div>

    </Layout>
  )
}

export default Index