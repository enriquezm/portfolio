import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { FiGithub as Github, FiUser as Linkedin } from "react-icons/fi";


const Header = () => {
  return (
      <div>
        <h1>Myles Enriquez</h1>
        <p>I make user interfaces.</p>
        <div>
          <Link to="/">Home</Link>
        </div>
      </div>
  )
}

export default Header;
