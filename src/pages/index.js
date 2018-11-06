import React from 'react';
import Header from '../components/Header';
import styled from 'styled-components';
import posed from 'react-pose';

import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import Hero from '../components/Hero';
import '../global-styles.css';

const PostsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  a {
    text-decoration: none;
    color: #d82186;
    &:hover {
      color: white;
    }
  }
`
const PostItemMotion = posed.li({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1
  },
  hover: {
    scale: 1.05
  },
  press: {
    scale: 0.9
  }
})

const PostItem = styled(PostItemMotion)`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 3px;
  background: #39004c;
  &:hover {
    background: #00cc5d;
  }
`


export default ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <Header/>
      <Hero />
      <PostsList>
      {
        edges.map(edge => {
          const {frontmatter} = edge.node;
          return (
            <Link to={frontmatter.path}>
              <PostItem key={frontmatter.path}>
                {frontmatter.title}
              </PostItem>
            </Link>
          )
        })
      }
      </PostsList>
    </Layout>
  )
}

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
