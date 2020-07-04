import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styles from "./styles/nav.module.css"

// const activeNavlinkStyle = {
//   color: `var(--text-color)`,
//   padding: `3px 3px`,
//   margin: `0 -3px`,
//   background: `white`,
//   backgroundPosition: `0 calc(100% + 1px)`,
//   borderRadius: `6px`,
// }

const Nav = ({ location }) => (
  <nav className={styles.nav}>
    <div className={styles.navbar}>
      <ul className={styles.title}>
        <li>
          <Link
            to="/"
            activeStyle={{ backgroundColor: `white`, color: `#444444` }}
          >
            david
            <span role="img" aria-label="pie">
              🥧
            </span>
          </Link>
        </li>
      </ul>
      {/* <ul className={styles.navlinks}>
        <li>
          <Link to="/about" activeStyle={activeNavlinkStyle}>
            About
          </Link>
        </li>
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
      </ul> */}
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
