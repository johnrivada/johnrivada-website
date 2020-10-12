import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Metadata from "../components/metadata"

import blogStyles from "../components/blog.module.css"

const Blog = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
          edges {
            node {
              frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
                tags
              }
              timeToRead
              excerpt (pruneLength: 500)
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
      <Metadata title="Blog" description="This is my home page" />
      <h1>Latest Posts</h1>
      <p> Unscripted, unfiltered, unsupervised and (probably) unread rants about myself and my happenings.</p>
      {data.allMarkdownRemark.edges.map(edge => {
        return (
          <div className={blogStyles.blogPost} key={edge.node.id}>
            <div className={blogStyles.contain + " " + blogStyles.sticky + " " + blogStyles.baseline}>
              <header className={blogStyles.blogTitleContainer}>
                <div>
                  <h2 className={blogStyles.blogTitle}> <Link to={`/blog/${edge.node.fields.slugDate}/${edge.node.fields.slug}/`}> {edge.node.frontmatter.title} </Link> </h2>
                  <time> {edge.node.frontmatter.date} </time>
                  <div class={blogStyles.tag}>
                    {edge.node.frontmatter.tags.map(tag => {
                      return (<span>/ {tag} </span>)
                    })} /
                  </div>
                </div>
              </header>
              <div className={blogStyles.blogExcerpt}>
                {edge.node.excerpt}
              </div>
            </div>
          </div >
        )
      })}
    </Layout >
  )
}

export default Blog