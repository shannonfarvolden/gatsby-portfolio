import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Introduction from "../components/introduction"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Introduction />
  </Layout>
)

export default IndexPage
