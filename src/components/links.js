import React from "react"

import Button from "./button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faGitlab,
  faTwitter,
  faKeybase,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import { faCoffee } from "@fortawesome/free-solid-svg-icons"

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
          to="https://twitter.com/da_pierce"
          ariaLabel="Twitter"
          icon={faTwitter}
        >
          Twitter
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
          ariaLabel="Buy me coffee"
          icon={faCoffee}
        >
          Buy me coffee!
        </Button>
      </li>
    </ul>
  </div>
)

export default Links
