import React from 'react';
import { graphql, Link } from 'gatsby';
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
const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Template = ({data, pageContext}) => {
  
  const {prev, next} = pageContext; 

  const {markdownRemark} = data;
  const title = markdownRemark.frontmatter.title;
  const html = markdownRemark.html;
  return (
    <Layout>
      <PostContainer>
        <h2>{title}</h2>
        <div dangerouslySetInnerHTML={{__html: html}} />
      </PostContainer>
      <hr />
      <LinkContainer>
      {prev && 
          <Link to={prev.frontmatter.path}>
            Previous Post
          </Link>
        }
      {next && 
        <Link to={next.frontmatter.path}>
          Next Post
        </Link>
      }
      </LinkContainer>
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
