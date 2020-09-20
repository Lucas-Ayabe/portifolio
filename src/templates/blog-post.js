import React from "react"
import Highlight from "react-highlight"
import "../styles/highlightjs-themes/atom-one-dark.css"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import "../styles/blog-post.css"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Stack from "../components/Stack"

const shortcodes = {
  Link,
  pre: props => props.children,
  code: Highlight,
} // Provide common components here

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <article className="post">
        <Stack isRecursive>
          <h1>{mdx.frontmatter.title}</h1>
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </Stack>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`
