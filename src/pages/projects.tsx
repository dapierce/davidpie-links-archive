// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Projects = (props: PageProps) => (
  <Layout>
    <SEO title="Projects" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2 ({props.path})</p>
    <p>
      <Link to="/">Go back to the homepage</Link>
    </p>
  </Layout>
)

export default Projects
