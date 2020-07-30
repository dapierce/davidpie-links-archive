import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

const toggleStyle = {
  cursor: `pointer`,
  fontSize: `1.6rem`,
  margin: `.6rem 0 0 1rem`,
  padding: `2px`,
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
        {theme === "dark" ? `☀️` : `🌙`}
      </label>
    )}
  </ThemeToggler>
)

export default ThemeToggle
