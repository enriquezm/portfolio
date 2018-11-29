import React from 'react';
import styled from 'styled-components';

import { FiGithub as Github, FiCodepen as Codepen } from "react-icons/fi";

const Wrapper = styled.div`
  margin: 50px 0;
`
const H1 = styled.h1`
  margin: 0;
`
const P = styled.p`
  margin-top: 10px;
`
const Links = styled.div`
  & > a {
    margin-right: 10px;
  }
`

const Header = () => {
  return (
    <Wrapper>
    <div>
      <H1>Myles Enriquez</H1>
      <P>I make user interfaces.</P>
      <Links>
        <a href="https://github.com/enriquezm">
          <Github size={20} />
        </a>
        <a href="https://codepen.io/mylesenri/">
          <Codepen size={20} />
        </a>
      </Links>
    </div>
    </Wrapper>
  )
}

export default Header;
