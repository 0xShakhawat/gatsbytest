import React from "react"

import {
  Intro,
  LoveToDo,
  Portfolio,
  About,
  Skill,
  Contact,
} from "../components"
import { Layout, SEO } from "../components/common"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi! I'm Shakhawat Hossain</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />

  </Layout>
)

export default IndexPage
