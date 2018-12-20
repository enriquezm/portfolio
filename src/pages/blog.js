import React from 'react';
import styled, {keyframes} from 'styled-components';
import Layout from '../components/Layout';
import { graphql, Link } from 'gatsby';

const buzz = keyframes`
  0% {
    transform: skewX(0);
  }
  10% {
    transform: skewX(70deg);
  }
  15% {
    transform: skewX(-70deg);
  }
  25% {
    transform: skewX(25deg);
  }
  50% {
    transform: skewX(-25deg);
  }
  75% {
    transform: skewX(10deg);
  }
  90% {
    transform: skewX(-10deg);
  }
  100% {
    transform: skewX(0);
  }
`;

const ListItem = styled.div`
  margin: 20px 0;
  & > a {
    color: #FF255B;
    &:hover {
      animation: ${buzz} 0.3s;
    }

  }
  & > p {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    margin: 5px 0;
  }
`

const BlogPage = ({ data }) => {
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
                    <Link className="primary" to={frontmatter.path}>
                      <p>{frontmatter.title}</p>
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

export default BlogPage;

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
