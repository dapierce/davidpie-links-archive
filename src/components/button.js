import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Link from "./link"
import style from "./styles/button.module.css"

const Button = ({ children, to, ariaLabel, icon }) => (
  <Link className={style.button} to={to} aria-label={ariaLabel}>
    <FontAwesomeIcon icon={icon} />
    <span className={style.label}>{children}</span>
  </Link>
)

export default Button
