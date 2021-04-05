import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import { PageTitle } from "../components/page-title"

export default function Home({ data }) {
  return (
    <Layout>
      <PageTitle>Home</PageTitle>
      <img src="https://source.unsplash.com/600x300/?house" alt="house" />
      <blockquote className="py-6 text-xl text-gray-800  bg-gray-300 text-center my-6">
        "We here at Acme Inc. understand that it is better to leverage
        efficiently than to benchmark extensibly."
      </blockquote>
      <p>
        What does the commonly-used commonly-used commonly-accepted industry
        jargon "holistic" really mean? What does the term "re-sizing" really
        mean? Imagine a combination of WAP and Apache. The ability to integrate
        compellingly leads to the power to grow seamlessly. Your budget for
        iterating should be at least one-tenth of your budget for harnessing. If
        all of this comes off as fabulous to you, that's because it is! The
        power to repurpose strategically leads to the aptitude to productize
        mega-compellingly. If you redefine proactively, you may have to maximize
        dynamically. Do you have a game plan to become subscriber-defined? Think
        micro-intra-clicks-and-mortar, open-source, C2B2B. If all of this seems
        confused to you, that's because it is!
      </p>
      <div className="py-12">
        <h2 className="text-xl">Featured Articles</h2>
        <hr className="border-gray-400 pb-4" />
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div className="py-2">
            <Link
              className="hover:underline "
              to={`articles${node.frontmatter.slug}`}
            >
              <h3 className="text-sm text-gray-800 font-semibold tracking-wide uppercase">
                {node.frontmatter.title}
              </h3>
              <p className="">{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          frontmatter {
            id
            slug
            title
          }
          timeToRead
          excerpt
        }
      }
    }
  }
`
