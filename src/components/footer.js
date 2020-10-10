import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import footerStyles from "./footer.module.css"

const Footer = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
              author
            }
        }
      }
    `
  )

  return (
    <footer className={footerStyles.siteFooter}>
      <div className={footerStyles.container}>
        <p>
          &copy;{" "}
          {new Date().getFullYear().toString()}{" "}
          {data.site.siteMetadata.author}
        </p>
      </div>
    </footer>
  )
}

export default Footer