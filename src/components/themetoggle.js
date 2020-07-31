import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

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
      <div>
        <input
          id="theme-toggle"
          style={inputStyle}
          type="checkbox"
          onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
          checked={theme === "dark"}
          aria-label="Toggle dark and light mode"
        />
        <label for="theme-toggle" style={toggleStyle}>
          {theme === "dark" ? (
            <span role="img" aria-label="Toggle light mode">
              ☀️
            </span>
          ) : (
            <span role="img" aria-label="Toggle dark mode">
              🌙
            </span>
          )}
        </label>
      </div>
    )}
  </ThemeToggler>
)

export default ThemeToggle
