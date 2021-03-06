import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { graphql, Link } from 'gatsby';

const PostsContainer = styled.main`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    a {
        width: 33%;
        padding: 10px;
        margin-bottom: 15px;
        border: 3px solid #131212;
        text-decoration: none;
        transition: all 0.3s;
        &:hover {
            color: red;
            border: 3px solid #8E26FF;
            transition: all 0.3s;
        }
        h2 {
            font-size: 18px;
            color: #131212;
        }
        p {
            color: #65636f;
        }
    }
`;

const BlogPage2 = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <PostsContainer>
          {
            edges.map(edge => {
              const {frontmatter} = edge.node;
              
              return (
                <Link to={frontmatter.path} key={frontmatter.path}>
                    <h2>{frontmatter.title}</h2>
                    <p>{frontmatter.excerpt}</p>
                    
                </Link>
              )
            })
          }
      </PostsContainer>
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
            excerpt
            tags
          }
        }
      }
    }
  }
`
