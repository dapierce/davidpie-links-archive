import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"

const toggleStyle = {
  cursor: `pointer`,
  fontSize: `1.2rem`,
}
const inputStyle = {
  position: `absolute`,
  opacity: `0`,
  height: `0`,
  width: `0`,
}

const ThemeToggle = () => (
  <ThemeToggler>
    {({ theme, toggleTheme }) => (
      <label for="theme-toggle" style={toggleStyle}>
        <input
          id="theme-toggle"
          style={inputStyle}
          type="checkbox"
          onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
          checked={theme === "dark"}
        />
        {theme === "dark" ? (
          <FontAwesomeIcon icon={faSun} />
        ) : (
          <FontAwesomeIcon icon={faMoon} />
        )}
      </label>
    )}
  </ThemeToggler>
)

export default ThemeToggle
