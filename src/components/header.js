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
          <h1 className={headerStyles.title}>
            {data.site.siteMetadata.title}
          </h1>
          <li>
            <Link to="/" activeClassName={headerStyles.activeMenuItem}>
              Home
                </Link>
          </li>
          <li>
            <Link to="/blog/" activeClassName={headerStyles.activeMenuItem}>
              Blog
                </Link>
          </li>
          <li>
            <Link to="/WAI/" activeClassName={headerStyles.activeMenuItem}>
              WAI_?
                </Link>
          </li>
          <li>
            <Link to="/about/" activeClassName={headerStyles.activeMenuItem}>
              Gaming
                </Link>
          </li>
          <li>
            <Link to="/about/" activeClassName={headerStyles.activeMenuItem}>
              Programming
                </Link>
          </li>
          <li>
            <Link to="/about/" activeClassName={headerStyles.activeMenuItem}>
              About
                </Link>
          </li>


        </ul>
      </nav>
    </header>
  )
}

export default Header