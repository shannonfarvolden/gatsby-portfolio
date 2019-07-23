import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="About me" />
    <div>Full Stack Software Developer</div>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default SecondPage
