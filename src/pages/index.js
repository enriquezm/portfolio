import React from 'react';
import Layout from '../components/Layout';
import Anime from 'react-anime';
import styled from 'styled-components';
import Status from '../components/Status';
import { FiGithub as Github, FiUser as Linkedin } from "react-icons/fi";

const H1 = styled.h1`
  margin-bottom: 10px;
`;

const P = styled.p`
  margin: 0 0 10px 0;
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
      color: #5772FF;
      box-shadow: 10px 10px #5772FF;
      border: 1px solid #5772FF;
      transition: all 0.3s;
    }
    &:active {
      box-shadow: 4px 4px #5772ff;
    }
  }
`;


const IndexPage = () => {
  return (
    <Layout>
      <Anime
        delay={(e, i) => i * 100}
        scale={[0, .9]}
      >
       <H1>Myles Enriquez</H1>
       <P>I design/build interfaces and wire them to data.</P>
       <ButtonContainer>
         <Button className="primary" href="https://github.com/enriquezm"><Github /> Github</Button>
         <Button className="secondary" href="https://www.linkedin.com/in/mylesenriquez/"><Linkedin /> LinkedIn</Button>
       </ButtonContainer>
       <Status />
      </Anime>
    </Layout>
  );
}

export default IndexPage;
