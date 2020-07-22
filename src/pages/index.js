import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Greeting from "../components/greeting"
import Links from "../components/links"

const IndexPage = () => (
  <Layout>
    <SEO />
    <div style={{ maxWidth: `300px`, margin: `1.45rem auto` }}>
      <Image />
    </div>
    <h1>
      <Greeting />
    </h1>
    <p>
      I'm <strong>David Aaron Pierce</strong>, a student software dev{" "}
      <span className="emoji">
        <span role="img" aria-label="fire computer fire">
          🔥💻🔥
        </span>
      </span>{" "}
      and this is my home on the web!
      <br />
      ...right now it's a collection of links!
    </p>
    <Links />
  </Layout>
)

export default IndexPage
