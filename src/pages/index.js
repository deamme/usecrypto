import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import EntryList from "../components/EntryList"

const data = require("../../data/data.json")

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h2>Websites</h2>
      <EntryList entries={data} />
    </Layout>
  )
}

export default IndexPage