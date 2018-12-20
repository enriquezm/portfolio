import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import styled from 'styled-components';
import '../global-styles.css';


const PostContainer = styled.div`
  line-height: 1.5;
  pre {
    padding: 10px;
    border-radius: 3px;
    background-color: #F2F2F4;
    color: #4A4A4A;
    font-size: 14px;
  }
  strong {
    color: #7F00FF;
  }
`

const Template = ({data}) => {
  const {markdownRemark} = data;
  const title = markdownRemark.frontmatter.title;
  const html = markdownRemark.html;
  return (
    <Layout>
      <PostContainer>
        <h2>{title}</h2>
        <div dangerouslySetInnerHTML={{__html: html}} />
      </PostContainer>
    </Layout>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: {eq: $pathSlug} }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default Template;
