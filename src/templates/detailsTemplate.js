import React from "react"
import { graphql } from "gatsby"
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const content = data.allSitePage.edges[0].node.context
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{content.title}</h1>
      </div>
    </div>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    allSitePage(filter: { path: { eq: $path } }) {
      edges {
        node {
          context {
            title
          }
        }
      }
    }
  }
`
