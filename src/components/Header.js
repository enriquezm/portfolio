import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { FiHome as Home, FiGithub as Github, FiLinkedin as LinkedIn } from "react-icons/fi";

const H1 = styled.h1`
  margin-bottom: 10px;
`;

const P = styled.p`
  margin: 0 0 20px 0;
  color: #65636f;
`;

const LinkContainer = styled.div`
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
    }
  }
  &.secondary {
    color: #131212;
    &:hover {
      color: #FF255B;
      transition: all 0.3s;
    }
  }
}
`;

const Header = () => {
  return (
      <div>
        <H1>Myles Enriquez</H1>
        <P>I design/build interfaces and connect them to data.</P>
        <LinkContainer>
          <Link className="primary" to="/"><Home size={20} /></Link>
          <a className="secondary" href="https://github.com/enriquezm"><Github size={20} /></a>
          <a className="secondary" href="https://www.linkedin.com/in/mylesenriquez/"><LinkedIn size={20} /></a>
        </LinkContainer>
        <hr />
      </div>
      
  )
}

export default Header;
