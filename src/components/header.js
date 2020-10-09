import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import headerStyles from "./header.module.css"

const Header = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )
  return (
    <header className={headerStyles.header}>
      <nav className={headerStyles.navContainer}>
        <ul className={headerStyles.navList}>
          <li className={headerStyles.link} >
            <h1 className={headerStyles.brand}>
              <Link to="/">{data.site.siteMetadata.title}</Link>
            </h1>
          </li>
          <li>
            <Link to="/" className={headerStyles.link} activeClassName={headerStyles.activeMenuItem}>
              Home
                </Link>
          </li>
          <li>
            <Link to="/blog/" className={headerStyles.link} activeClassName={headerStyles.activeMenuItem}>
              Blog
                </Link>
          </li>
          <li>
            <Link to="/contact/" className={headerStyles.link} activeClassName={headerStyles.activeMenuItem}>
              Contact
                </Link>
          </li>
          <li>
            <Link to="/about/" className={headerStyles.link} activeClassName={headerStyles.activeMenuItem}>
              About
                </Link>
          </li>

        </ul>
      </nav>
    </header>
  )
}

export default Header