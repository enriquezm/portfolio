import React from 'react';
import { graphql } from 'gatsby';
import Header from '../components/Header';
import Layout from '../components/Layout';
import styled from 'styled-components';
import posed from 'react-pose';

const PostContainerMotion = posed.div({
  exit: {
    y: 100,
    opacity: 0
  },
  enter: {
    y: 0,
    opacity: 1,
    delay: 100,
    transition : {
      duration: 500
    },
    beforeChildren: true,
    staggerChildren: 5000
  }
})

const PostContainer = styled(PostContainerMotion)`
  line-height: 1.5;
  color: #e5e5e5;
  pre {
    padding: 10px;
    border-radius: 3px;
    background-color: #39004c;
    color: #f5c25b;
    font-size: 14px;
  }
`

const Template = ({data}) => {
  const {markdownRemark} = data;
  const title = markdownRemark.frontmatter.title;
  const html = markdownRemark.html;
  return (
    <Layout>
      <Header />
      <PostContainer initialPose="exit" pose="enter">
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
