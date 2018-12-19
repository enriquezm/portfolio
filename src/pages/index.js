import React from 'react';
import LandingLayout from '../components/LandingLayout';
import Anime from 'react-anime';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import Status from '../components/Status';
import { FiGithub as Github, FiFileText as File, FiLinkedin as LinkedIn } from "react-icons/fi";

const H1 = styled.h1`
  margin-bottom: 30px;
`;

const P = styled.p`
  margin: 0 0 20px 0;
`;

const LinkContainer = styled.div`
  display: flex;

  a {
    margin: 10px 20px 30px 0;
    padding: 10px 15px;
    transition: all 0.5s;
    text-decoration: none;
    color: #131212;
    border: 1px solid #131212;
    border-radius: 4px;

    &.primary {
      border: 1px solid #8E26FF;
      color: #8E26FF;
      &:hover {
        color: white;
        background: #8E26FF;
        border: 1px solid #8E26FF;
        transition: all 0.3s;
      }
    }
    &.secondary {
      color: #FF255B;
      border: 1px solid #FF255B;
      &:hover {
        color: white;
        background-color: #FF255B;
        transition: all 0.3s;
      }
    }
  }
`;

const IndexPage = () => {
  return (
    <LandingLayout>
      <Anime delay={(e, i) => i * 300} opacity={[0, 1]} translateY={'1em'}>
       <H1>Myles Enriquez</H1>
       <P>I design/build interfaces and connect them to data.</P>
       <LinkContainer>
        <Link className="primary" to="/blog/"><File /> Projects</Link> 
         <a className="secondary" href="https://github.com/enriquezm"><Github /> Github</a>
         <a className="secondary" href="https://www.linkedin.com/in/mylesenriquez/"><LinkedIn /> LinkedIn</a>
       </LinkContainer>
       <Status />
      </Anime>
    </LandingLayout>
  );
}

export default IndexPage;
