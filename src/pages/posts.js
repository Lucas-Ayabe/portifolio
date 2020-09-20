import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Stack from "../components/Stack"

export default function Posts({ data }) {
  const totalPosts = data.allMdx.totalCount
  const posts = data.allMdx.edges

  return (
    <Layout>
      <Stack>
        <h1>Atualmente temos {totalPosts} Posts</h1>
        <ul className="unstiled-list stack">
          {posts.map(({ node: post }) => (
            <li key={post.id}>
              <div className="card">
                <Link to={post.fields.slug}>
                  <h2>{post.frontmatter.title}</h2>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </Stack>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
