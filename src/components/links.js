import React from "react"

import Button from "./button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faGitlab,
  faKeybase,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import { faCoffee, faEnvelope } from "@fortawesome/free-solid-svg-icons"

const Links = () => (
  <div className="links">
    <ul>
      <li>
        <Button
          to="https://github.com/dapierce"
          ariaLabel="GitHub"
          icon={faGithub}
        >
          GitHub
        </Button>
      </li>
      <li>
        <Button
          to="https://gitlab.com/dapierce"
          ariaLabel="GitLab"
          icon={faGitlab}
        >
          GitLab
        </Button>
      </li>
      <li>
        <Button
          to="https://www.linkedin.com/in/piercedavid/"
          ariaLabel="LinkedIn"
          icon={faLinkedin}
        >
          LinkedIn
        </Button>
      </li>
      <li>
        <Button
          to="https://keybase.io/dapierce"
          ariaLabel="Keybase"
          icon={faKeybase}
        >
          Keybase
        </Button>
      </li>
      <li>
        <Button
          to="https://ko-fi.com/dapierce"
          ariaLabel="Ko-fi"
          icon={faCoffee}
        >
          Buy me coffee!
        </Button>
      </li>
      <li>
        <Button
          to="mailto:davidaaronpierce@gmail.com"
          ariaLabel="Email"
          icon={faEnvelope}
        >
          Send me email!
        </Button>
      </li>
    </ul>
  </div>
)

export default Links
