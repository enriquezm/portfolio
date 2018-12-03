import React from 'react';
import styled from 'styled-components';

import { FiGithub as Github, FiCodepen as Codepen, FiUser as Linkedin } from "react-icons/fi";

const Wrapper = styled.div`
  margin: 50px 0;
  display: flex;
  justify-content: space-between;
`
const H1 = styled.h1`
  margin: 0;
`
const P = styled.p`
  margin-top: 10px;
`
const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0 60px 0;
`;

const Button = styled.a`
  width: 33%;
  margin-bottom: 20px;
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
  &.secondary2 {
    &:hover {
      color: #FF255B;
      box-shadow: 10px 10px #FF255B;
      border: 1px solid #FF255B;
      transition: all 0.3s;
    }
    &:active {
      box-shadow: 4px 4px #FF255B;
    }
  }
`;

const Header = () => {
  return (
    <Wrapper>
    <div>
      <H1>Myles Enriquez</H1>
      <P>I make user interfaces.</P>
      <ButtonContainer>
        <Button className="primary" href="https://github.com/enriquezm"><Github /> Github</Button>
        <Button className="secondary" href="https://www.linkedin.com/in/mylesenriquez/"><Linkedin /> LinkedIn</Button>
        <Button className="secondary2" href="/">Home</Button>
      </ButtonContainer>
    </div>
    </Wrapper>
  )
}

export default Header;
