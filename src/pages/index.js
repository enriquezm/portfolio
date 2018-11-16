import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { graphql, Link } from 'gatsby';

const ListItem = styled.div`
  margin: 20px 0;
  transition: all 0.5s;
  &:hover {
    transition: all 0.5s;
    background:#FCFCFC;
  }
  & > a > h2 {
    margin: 0;
  }
  & > p {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    margin: 5px 0;
  }
`


const Index = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <main>
        <ul>
          {
            edges.map(edge => {
              const {frontmatter} = edge.node;
              return (
                <li key={frontmatter.path}>
                  <ListItem>
                    <Link to={frontmatter.path}>
                      <h2>{frontmatter.title}</h2>
                    </Link>
                    <p>{frontmatter.date}</p>
                  </ListItem>
                </li>
              )
            })
          }
        </ul>
      </main>
    </Layout>
  )
}

export default Index;

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
