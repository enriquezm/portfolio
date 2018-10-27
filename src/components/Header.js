import React from 'react';
import styled from 'styled-components';

import AInternal from './atoms/AInternal';
import SocialLinks from './molecules/SocialLinks';


const NavBar = styled.header`
  color: white;
  padding-top: 20px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0C0D1B;
`
const Logo = styled.div`
  font-size: 2em;
`

const Header = () => {
  return (
    <NavBar>
      <div>
        <Logo>
          <AInternal to="/">Super meS</AInternal>
        </Logo>
      </div>
      <div>
        <AInternal to="/">Home</AInternal>
        <AInternal to="/about/">About</AInternal>
      </div>
      <div>
        <SocialLinks />
      </div>
    </NavBar>
  )
}

export default Header;
