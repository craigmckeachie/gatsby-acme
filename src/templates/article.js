import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { PageTitle } from "../components/page-title"

export default function Article({ data }) {
  const article = data.markdownRemark
  return (
    <Layout>
      <PageTitle>{article.frontmatter.title}</PageTitle>
      <div dangerouslySetInnerHTML={{ __html: article.html }} />
    </Layout>
  )
}

export const query = graphql`
  query($path: String!) {
    markdownRemark(fields: { path: { eq: $path } }) {
      html
      frontmatter {
        id
        title
      }
      fields {
        path
      }
    }
  }
`
