import React from "react"

import Layout from "../components/Layout"
import EntryList from "../components/EntryList"

const data = require("../../data/data.json")

const IndexPage = () => {
  return (
    <Layout>
      <h1 className="title">Use Crypto</h1>
      <EntryList entries={data} />
    </Layout>
  )
}

export default IndexPage
