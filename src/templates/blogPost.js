import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import styled from 'styled-components';
import posed from 'react-pose';
import '../global-styles.css';

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
  pre {
    padding: 10px;
    border-radius: 3px;
    background-color: #F2F2F4;
    color: #4A4A4A;
    font-size: 14px;
  }
`

const Template = ({data}) => {
  const {markdownRemark} = data;
  const title = markdownRemark.frontmatter.title;
  const html = markdownRemark.html;
  return (
    <Layout>
      <Link to="/">Back</Link>
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
