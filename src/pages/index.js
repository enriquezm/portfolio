import React from 'react';
import LandingLayout from '../components/LandingLayout';
import Anime from 'react-anime';
import styled, {keyframes} from 'styled-components';
import { Link } from 'gatsby';
import Status from '../components/Status';
import { FiGithub as Github, FiFileText as File, FiLinkedin as LinkedIn } from "react-icons/fi";

const H1 = styled.h1`
  margin-bottom: 30px;
`;

const P = styled.p`
  margin: 0 0 20px 0;
  color: #65636f;
`;

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

const LinkContainer = styled.div`
  display: flex;
  margin-bottom: 50px;
  a {
    margin-right: 20px;
    transition: all 0.5s;
    text-decoration: none;
  
    &.primary {
      color: #131212;
      &:hover {
        color: #8E26FF;
        transition: all 0.3s;
        animation: ${buzz} 0.3s;
      }
    }
    &.secondary {
      color: #131212;
      &:hover {
        color: #FF255B;
        transition: all 0.3s;
        animation: ${buzz} 0.3s;
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
        <Link className="primary" to="/blog/" title="Blog posts."><File size={20} /></Link> 
        <a className="secondary" href="https://github.com/enriquezm" title="Github"><Github size={20} /></a>
        <a className="secondary" href="https://www.linkedin.com/in/mylesenriquez/" title="LinkedIn"><LinkedIn size={20} /></a>
       </LinkContainer>
       <Status />
      </Anime>
    </LandingLayout>
  );
}

export default IndexPage;
