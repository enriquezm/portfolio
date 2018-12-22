import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { graphql, Link } from 'gatsby';

const PostsContainer = styled.main`
    display: flex;
`;

const BlogPage2 = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <main>
          {
            edges.map(edge => {
              const {frontmatter} = edge.node;
              return (
                <div key={frontmatter.path}>
                    <Link to={frontmatter.path}>
                        <h2>{frontmatter.title}</h2>
                    </Link>
                    <p>{frontmatter.date}</p>
                </div>
              )
            })
          }
      </main>
    </Layout>
  )
}

export default BlogPage2;

export const query = graphql`
  query {
    allMarkdownRemark (
      sort: {order: DESC, fields: [frontmatter___date]}
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`
