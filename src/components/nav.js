import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import ThemeToggle from "./themetoggle"
import styles from "./styles/nav.module.css"

const activeNavlinkStyle = {
  color: `var(--text-color)`,
  padding: `4px 4px`,
  margin: `-4px -4px`,
  background: `white`,
  borderRadius: `6px`,
}

const Nav = ({ location }) => (
  <nav className={styles.nav}>
    <div className={styles.navbar}>
      <header className={styles.title}>
        <Link
          to="/"
          activeStyle={{ backgroundColor: `white`, color: `#444444` }}
        >
          <span role="img" aria-label="pie">
            🥧
          </span>
          <span className={styles.title__text}> David Pierce</span>
        </Link>
      </header>
      <ul className={styles.navlinks}>
        <li>
          <Link to="/projects" activeStyle={activeNavlinkStyle}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/blog" activeStyle={activeNavlinkStyle}>
            Blog
          </Link>
        </li>
        <li>
          <Link to="/resume" activeStyle={activeNavlinkStyle}>
            Resume
          </Link>
        </li>
      </ul>
      <ul className={styles.toggle}>
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </div>
  </nav>
)

Nav.propTypes = {
  location: PropTypes.string,
}

Nav.defaultProps = {
  location: ``,
}

export default Nav
