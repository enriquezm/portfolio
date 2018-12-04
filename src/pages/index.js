import React from 'react';
import Layout from '../components/Layout';
import Anime from 'react-anime';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import Status from '../components/Status';
import { FiGithub as Github, FiUser as Linkedin } from "react-icons/fi";

const H1 = styled.h1`
  margin-bottom: 30px;
`;

const P = styled.p`
  margin: 0 0 20px 0;
`;

const ButtonContainer = styled.div`
  /* border: 1px solid blue; */

  display: flex;
  justify-content: space-between;
  margin: 20px 0 60px 0;
`;

const Button = styled.a`
  /* border: 1px solid purple; */
  width: 45%;
  padding: 8px 15px;
  text-align: center;
  transition: all 0.5s;
  text-decoration: none;
  border: 1px solid #fff;
  color: #fff;

  &.primary {
    &:hover {
      color: #2aff82;
      box-shadow: 10px 10px #2aff82;
      border: 1px solid #2aff82;
      transition: all 0.3s;
    }
    &:active {
      box-shadow: 4px 4px #2aff82;
    }
  }
  &.secondary {
    &:hover {
      color: #8E26FF;
      box-shadow: 10px 10px #8E26FF;
      border: 1px solid #8E26FF;
      transition: all 0.3s;
    }
    &:active {
      box-shadow: 4px 4px #5772ff;
    }
  }
`;

const PostList = styled.div`

`;
const Post = styled.li`
  a {
    color: #FF255B;
    transition: all 0.3s;
    &:hover {
      color: #ff668c;
      transition: all 0.3s;
    }
  }
`;

const IndexPage = ({data}) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <Anime delay={(e, i) => i * 300} opacity={[0, 1]} translateY={'1em'}>
       <H1>Myles Enriquez</H1>
       <P>I design/build interfaces and connect them to data.</P>
       <ButtonContainer>
         <Button className="primary" href="https://github.com/enriquezm"><Github /> Github</Button>
         <Button className="secondary" href="https://www.linkedin.com/in/mylesenriquez/"><Linkedin /> LinkedIn</Button>
       </ButtonContainer>
       <Status />
      </Anime>
        <PostList>
        <Anime delay={(e, i) => i * 300} opacity={[0, 1]}>
          <ul>
            {
              edges.map(edge => {
                const {frontmatter} = edge.node;
                return (
                  <Post key={frontmatter.path}>
                    <div>
                      <Link to={frontmatter.path}>
                        <h2>{frontmatter.title}</h2>
                      </Link>
                      <p>{frontmatter.date}</p>
                    </div>
                  </Post>
                )
              })
            }
          </ul>
          </Anime>
        </PostList>
    </Layout>
  );
}

export default IndexPage;

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
`;
