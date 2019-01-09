import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import styled from 'styled-components';
import '../global-styles.css';


const PostContainer = styled.div`
  line-height: 1.5;
  h2 {
    margin-bottom: 5px;
  }
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
const Meta = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
const Tags = styled.div`
  display: flex;
  div {
    margin: 0 2.5px 0 2.5px;
    padding: 1px 5px;
    border-radius: 4px;
    font-size: 12px;
    background: #8E26FF;
    color: white;
  }
`;
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
        <Meta>
          <Tags>
            Involves:
            <div>React</div>
            <div>MySQL</div>
            <div>Nodejs</div>
          </Tags>
        </Meta>
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
    markdownRemark(frontmatter: {
      path: {eq: $pathSlug
    } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default Template;
