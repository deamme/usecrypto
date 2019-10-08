import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const content = data.allSitePage.edges[0].node.context
  return (
    <Layout>
      <h1>{content.title}</h1>
      <a target="_blank" rel="noopener noreferrer" href={content.link}>Visit</a>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    allSitePage(filter: { path: { eq: $path } }) {
      edges {
        node {
          context {
            title
            category
            link
            crypto
          }
        }
      }
    }
  }
`
