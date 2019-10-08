import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  var pages = data.allSitePage.edges
  return (
    <Layout>
      <SEO title="Home" />
      <p>Websites</p>
      {pages.map(d => (
        <div>
          <Link to={d.node.path}>{d.node.context.title}</Link>
        </div>
      ))}
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  {
    allSitePage(filter: { context: { title: { ne: null } } }) {
      edges {
        node {
          path
          context {
            title
          }
        }
      }
    }
  }
`
